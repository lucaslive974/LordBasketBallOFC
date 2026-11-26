import type { ReactNode } from 'react';
import { cn } from '@lib/cn';
import { Container } from './Container';

export type SectionSurface = 'dark' | 'navy' | 'light' | 'muted' | 'brand';

interface SectionProps {
  id?: string;
  ariaLabel?: string;
  surface?: SectionSurface;
  pattern?: boolean;
  compact?: boolean;
  className?: string;
  containerClassName?: string;
  children: ReactNode;
}

const SURFACE_CLASSES: Record<SectionSurface, string> = {
  dark: 'bg-[#070B14] text-white',
  navy: 'bg-[#0B1222] text-white',
  light: 'bg-white text-slate-900',
  muted: 'bg-slate-50 text-slate-900',
  brand: 'bg-[#1B4FD8] text-white',
};

export function Section({
  id,
  ariaLabel,
  surface = 'light',
  pattern = false,
  compact = false,
  className,
  containerClassName,
  children,
}: SectionProps) {
  return (
    <section
      id={id}
      aria-label={ariaLabel}
      className={cn(
        'relative',
        SURFACE_CLASSES[surface],
        pattern && 'court-grid',
        compact ? 'py-10' : 'py-20 sm:py-24',
        className,
      )}
    >
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
}
