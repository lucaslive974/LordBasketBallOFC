import { useEffect } from 'react';

interface SmoothScrollOptions {
  /** Interpolation factor per 60fps frame (0.06 = floaty, 0.12 = snappy). */
  lerp?: number;
  /** Multiplier applied to mouse wheel delta. */
  wheelMultiplier?: number;
  /** Enable/disable the hook dynamically. */
  enabled?: boolean;
}

const MAX_DELTA_MS = 50;

function hasOpenModal(): boolean {
  return document.querySelector('[role="dialog"][aria-modal="true"]') !== null;
}

function getMaxScroll(): number {
  return Math.max(0, document.documentElement.scrollHeight - window.innerHeight);
}

function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max);
}

/**
 * Intercepts wheel events and hash-link clicks to provide inertial smooth
 * scrolling synchronized with requestAnimationFrame and Motion's useScroll.
 * Automatically yields to scrollbar dragging, keyboard navigation, open modals,
 * touch devices, and prefers-reduced-motion.
 */
export function useSmoothScroll({
  lerp = 0.09,
  wheelMultiplier = 1,
  enabled = true,
}: SmoothScrollOptions = {}) {
  useEffect(() => {
    if (!enabled) return;

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reducedMotion) return;

    let current = window.scrollY;
    let target = window.scrollY;
    let rafId: number | null = null;
    let isAnimating = false;
    let lastTime = performance.now();

    const stop = () => {
      if (rafId !== null) {
        cancelAnimationFrame(rafId);
        rafId = null;
      }
      isAnimating = false;
    };

    const tick = (now: number) => {
      const dt = Math.min(now - lastTime, MAX_DELTA_MS);
      lastTime = now;

      // Frame-rate independent exponential smoothing
      const factor = 1 - Math.pow(1 - lerp, dt / 16.6667);
      current += (target - current) * factor;

      if (Math.abs(target - current) < 0.5) {
        current = target;
        window.scrollTo(0, current);
        stop();
        return;
      }

      window.scrollTo(0, current);
      rafId = requestAnimationFrame(tick);
    };

    const start = () => {
      if (isAnimating) return;
      isAnimating = true;
      lastTime = performance.now();
      rafId = requestAnimationFrame(tick);
    };

    const handleWheel = (event: WheelEvent) => {
      // Allow browser zoom (Ctrl/Meta + wheel) and modal scrolling
      if (event.ctrlKey || event.metaKey || hasOpenModal()) return;

      event.preventDefault();

      // Normalize deltaMode (pixels, lines, pages)
      let deltaY = event.deltaY;
      if (event.deltaMode === 1) deltaY *= 32;
      else if (event.deltaMode === 2) deltaY *= window.innerHeight;

      if (!isAnimating) {
        current = window.scrollY;
        target = window.scrollY;
      }

      target = clamp(target + deltaY * wheelMultiplier, 0, getMaxScroll());
      start();
    };

    const handleAnchorClick = (event: MouseEvent) => {
      const anchor = (event.target as HTMLElement | null)?.closest('a[href^="#"]');
      if (!anchor) return;

      const href = anchor.getAttribute('href');
      if (!href || href === '#') return;

      const destination = document.querySelector(href);
      if (!destination) return;

      event.preventDefault();

      if (!isAnimating) {
        current = window.scrollY;
      }

      const headerOffset = 72;
      const top = destination.getBoundingClientRect().top + window.scrollY - headerOffset;
      target = clamp(top, 0, getMaxScroll());
      window.history.pushState(null, '', href);
      start();
    };

    const syncExternalScroll = () => {
      if (!isAnimating) {
        current = window.scrollY;
        target = window.scrollY;
      }
    };

    const handleUserInterrupt = () => {
      if (isAnimating) {
        stop();
        current = window.scrollY;
        target = window.scrollY;
      }
    };

    const handleResize = () => {
      const maxScroll = getMaxScroll();
      target = clamp(target, 0, maxScroll);
      current = clamp(current, 0, maxScroll);
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    document.addEventListener('click', handleAnchorClick);
    window.addEventListener('scroll', syncExternalScroll, { passive: true });
    window.addEventListener('mousedown', handleUserInterrupt, { passive: true });
    window.addEventListener('touchstart', handleUserInterrupt, { passive: true });
    window.addEventListener('keydown', handleUserInterrupt, { passive: true });
    window.addEventListener('resize', handleResize, { passive: true });

    return () => {
      stop();
      window.removeEventListener('wheel', handleWheel);
      document.removeEventListener('click', handleAnchorClick);
      window.removeEventListener('scroll', syncExternalScroll);
      window.removeEventListener('mousedown', handleUserInterrupt);
      window.removeEventListener('touchstart', handleUserInterrupt);
      window.removeEventListener('keydown', handleUserInterrupt);
      window.removeEventListener('resize', handleResize);
    };
  }, [lerp, wheelMultiplier, enabled]);
}
