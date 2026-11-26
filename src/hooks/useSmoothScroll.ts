import { useEffect } from 'react';
import {
  animationFrames,
  filter,
  fromEvent,
  map,
  merge,
  share,
  Subject,
  Subscription,
  switchMap,
  takeUntil,
  takeWhile,
  tap,
} from 'rxjs';

interface SmoothScrollOptions {
  /** Interpolation factor per 60fps frame (0.06 = floaty, 0.12 = snappy). */
  lerp?: number;
  /** Multiplier applied to mouse wheel delta. */
  wheelMultiplier?: number;
  /** Enable/disable the hook dynamically. */
  enabled?: boolean;
}

const MAX_DELTA_MS = 50;
const HEADER_OFFSET = 72;

function hasOpenModal(): boolean {
  return document.querySelector('[role="dialog"][aria-modal="true"]') !== null;
}

function getMaxScroll(): number {
  return Math.max(0, document.documentElement.scrollHeight - window.innerHeight);
}

function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max);
}

function normalizeWheelDelta(event: WheelEvent): number {
  if (event.deltaMode === 1) return event.deltaY * 32;
  if (event.deltaMode === 2) return event.deltaY * window.innerHeight;
  return event.deltaY;
}

/**
 * RxJS-driven inertial smooth scroll synchronized with animationFrames()
 * and Motion's useScroll. Automatically yields to scrollbar dragging,
 * keyboard navigation, touch devices, open modals, and prefers-reduced-motion.
 */
export function useSmoothScroll({
  lerp = 0.095,
  wheelMultiplier = 1,
  enabled = true,
}: SmoothScrollOptions = {}) {
  useEffect(() => {
    if (!enabled) return;

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reducedMotion) return;

    let current = window.scrollY;
    let target = window.scrollY;
    let isAnimating = false;

    const trigger$ = new Subject<void>();
    const interrupt$ = merge(
      fromEvent(window, 'mousedown', { passive: true }),
      fromEvent(window, 'touchstart', { passive: true }),
      fromEvent(window, 'keydown', { passive: true }),
    ).pipe(
      tap(() => {
        isAnimating = false;
        current = window.scrollY;
        target = window.scrollY;
      }),
      share(),
    );

    const wheel$ = fromEvent<WheelEvent>(window, 'wheel', { passive: false }).pipe(
      filter((event) => !event.ctrlKey && !event.metaKey && !hasOpenModal()),
      tap((event) => event.preventDefault()),
      map((event) => normalizeWheelDelta(event) * wheelMultiplier),
      tap((delta) => {
        if (!isAnimating) {
          current = window.scrollY;
          target = window.scrollY;
        }
        target = clamp(target + delta, 0, getMaxScroll());
        trigger$.next();
      }),
    );

    const anchorClick$ = fromEvent<MouseEvent>(document, 'click').pipe(
      map((event) => {
        const anchor = (event.target as HTMLElement | null)?.closest('a[href^="#"]');
        const href = anchor?.getAttribute('href');
        if (!anchor || !href || href === '#') return null;
        const destination = document.querySelector(href);
        if (!destination) return null;
        return { event, href, destination };
      }),
      filter((item): item is NonNullable<typeof item> => item !== null),
      tap(({ event, href, destination }) => {
        event.preventDefault();
        if (!isAnimating) current = window.scrollY;
        const top = destination.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET;
        target = clamp(top, 0, getMaxScroll());
        window.history.pushState(null, '', href);
        trigger$.next();
      }),
    );

    const externalScrollSync$ = fromEvent(window, 'scroll', { passive: true }).pipe(
      filter(() => !isAnimating),
      tap(() => {
        current = window.scrollY;
        target = window.scrollY;
      }),
    );

    const resizeClamp$ = fromEvent(window, 'resize', { passive: true }).pipe(
      tap(() => {
        const maxScroll = getMaxScroll();
        target = clamp(target, 0, maxScroll);
        current = clamp(current, 0, maxScroll);
      }),
    );

    const animationLoop$ = trigger$.pipe(
      filter(() => !isAnimating),
      switchMap(() => {
        isAnimating = true;
        let lastTime = performance.now();

        return animationFrames().pipe(
          takeUntil(interrupt$),
          map(({ timestamp }) => {
            const dt = Math.min(timestamp - lastTime, MAX_DELTA_MS);
            lastTime = timestamp;
            const factor = 1 - Math.pow(1 - lerp, dt / 16.6667);
            current += (target - current) * factor;
            return Math.abs(target - current);
          }),
          takeWhile((remaining) => remaining >= 0.5, true),
          tap((remaining) => {
            if (remaining < 0.5) {
              current = target;
              isAnimating = false;
            }
            window.scrollTo(0, current);
          }),
        );
      }),
    );

    const subscription = new Subscription();
    subscription.add(wheel$.subscribe());
    subscription.add(anchorClick$.subscribe());
    subscription.add(externalScrollSync$.subscribe());
    subscription.add(resizeClamp$.subscribe());
    subscription.add(interrupt$.subscribe());
    subscription.add(animationLoop$.subscribe());

    return () => subscription.unsubscribe();
  }, [lerp, wheelMultiplier, enabled]);
}
