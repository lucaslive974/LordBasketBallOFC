import type { ReactNode } from 'react';
import { cn } from '@lib/cn';

export type CardVariant = 'light' | 'muted' | 'glass' | 'highlight-blue';

interface CardProps {
  variant?: CardVariant;
  interactive?: boolean;
  padding?: 'sm' | 'md' | 'lg';
  className?: string;
  children: ReactNode;
}

const VARIANT_CLASSES: Record<CardVariant, string> = {
  light: 'border border-slate-200 bg-white shadow-sm',
  muted: 'border border-slate-200 bg-slate-50',
  glass: 'border border-white/10 bg-white/[0.04] backdrop-blur-sm',
  'highlight-blue': 'border border-blue-100 bg-blue-50/70',
};

const HOVER_CLASSES: Record<CardVariant, string> = {
  light: 'transition hover:border-[#1B4FD8]/40 hover:shadow-lg',
  muted: 'transition hover:-translate-y-0.5 hover:border-[#1B4FD8]/40 hover:shadow-md',
  glass: 'transition hover:border-[#F5821F]/60 hover:bg-white/[0.07]',
  'highlight-blue': 'transition hover:border-[#1B4FD8]/30',
};

const PADDING_CLASSES = {
  sm: 'p-4 rounded-2xl',
  md: 'p-6 rounded-2xl',
  lg: 'p-7 rounded-3xl',
};

export function Card({
  variant = 'light',
  interactive = false,
  padding = 'md',
  className,
  children,
}: CardProps) {
  return (
    <div
      className={cn(
        VARIANT_CLASSES[variant],
        PADDING_CLASSES[padding],
        interactive && HOVER_CLASSES[variant],
        className,
      )}
    >
      {children}
    </div>
  );
}
