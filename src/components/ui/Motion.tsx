import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from 'react';
import {
  animate,
  motion,
  useInView,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from 'motion/react';
import { cn } from '../../lib/cn';

const EASE_OUT = [0.22, 1, 0.36, 1] as const;

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 180,
    damping: 28,
    restDelta: 0.001,
  });

  return (
    <motion.div
      aria-hidden="true"
      style={{ scaleX }}
      className="fixed inset-x-0 top-0 z-[60] h-[3px] origin-left bg-gradient-to-r from-[#F5821F] via-[#FBBF24] to-[#1B4FD8]"
    />
  );
}

interface RevealProps {
  children: ReactNode;
  direction?: 'up' | 'left' | 'right' | 'none';
  delay?: number;
  duration?: number;
  className?: string;
}

export function Reveal({
  children,
  direction = 'up',
  delay = 0,
  duration = 0.6,
  className,
}: RevealProps) {
  const prefersReduced = useReducedMotion();

  const offset = prefersReduced
    ? { x: 0, y: 0 }
    : direction === 'up'
      ? { x: 0, y: 28 }
      : direction === 'left'
        ? { x: -28, y: 0 }
        : direction === 'right'
          ? { x: 28, y: 0 }
          : { x: 0, y: 0 };

  return (
    <motion.div
      initial={{ opacity: 0, ...offset }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration, delay, ease: EASE_OUT }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

interface StaggerGroupProps {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
}

export function StaggerGroup({
  children,
  className,
  staggerDelay = 0.09,
}: StaggerGroupProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.12 }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: staggerDelay,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const prefersReduced = useReducedMotion();

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: prefersReduced ? 0 : 24 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.55, ease: EASE_OUT },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

interface ParallaxImageProps {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  speed?: number;
}

export function ParallaxImage({
  src,
  alt,
  className,
  imgClassName,
  speed = 42,
}: ParallaxImageProps) {
  const ref = useRef<HTMLDivElement>(null);
  const prefersReduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 1], prefersReduced ? [0, 0] : [-speed, speed]);

  return (
    <div ref={ref} className={cn('overflow-hidden', className)}>
      <motion.img
        src={src}
        alt={alt}
        style={{ y }}
        className={cn('h-full w-full scale-110 object-cover will-change-transform', imgClassName)}
      />
    </div>
  );
}

interface AnimatedCounterProps {
  to: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
}

export function AnimatedCounter({
  to,
  prefix = '',
  suffix = '',
  duration = 1.3,
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.4 });
  const prefersReduced = useReducedMotion();
  const [display, setDisplay] = useState(prefersReduced ? to : 0);

  useEffect(() => {
    if (!isInView) return;
    if (prefersReduced) {
      setDisplay(to);
      return;
    }

    const controls = animate(0, to, {
      duration,
      ease: EASE_OUT,
      onUpdate: (latest) => setDisplay(Math.round(latest)),
    });

    return () => controls.stop();
  }, [isInView, to, duration, prefersReduced]);

  return (
    <span ref={ref}>
      {prefix}
      {display}
      {suffix}
    </span>
  );
}

interface MarqueeProps {
  children: ReactNode;
  durationSeconds?: number;
  className?: string;
  trackClassName?: string;
  fadeEdges?: boolean;
}

export function Marquee({
  children,
  durationSeconds = 32,
  className,
  trackClassName,
  fadeEdges = true,
}: MarqueeProps) {
  return (
    <div
      className={cn(
        'marquee-group relative overflow-hidden',
        fadeEdges &&
          '[mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]',
        className,
      )}
    >
      <div
        style={{ '--marquee-duration': `${durationSeconds}s` } as CSSProperties}
        className={cn('animate-marquee flex w-max shrink-0 items-center', trackClassName)}
      >
        <div className="flex shrink-0 items-center gap-3 pr-3">{children}</div>
        <div aria-hidden="true" className="flex shrink-0 items-center gap-3 pr-3">
          {children}
        </div>
      </div>
    </div>
  );
}
