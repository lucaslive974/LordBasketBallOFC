import type { ReactNode } from 'react';
import { cn } from '@lib/cn';

export type BadgeTone =
  | 'orange'
  | 'blue'
  | 'emerald'
  | 'gold-dark'
  | 'blue-dark'
  | 'glass'
  | 'solid-orange'
  | 'neutral';

interface BadgeProps {
  tone?: BadgeTone;
  className?: string;
  children: ReactNode;
}

const TONE_CLASSES: Record<BadgeTone, string> = {
  orange: 'bg-orange-100 text-orange-800 border border-orange-200',
  blue: 'bg-blue-100 text-blue-800 border border-blue-200',
  emerald: 'bg-emerald-100 text-emerald-800 border border-emerald-200',
  'gold-dark': 'border border-[#F5821F]/40 bg-[#F5821F]/10 text-[#FBBF24]',
  'blue-dark': 'bg-[#1B4FD8]/20 text-[#60A5FA] ring-1 ring-[#1B4FD8]/40',
  glass: 'bg-white/10 text-slate-200',
  'solid-orange': 'bg-[#F5821F]/90 text-slate-950',
  neutral: 'border border-slate-200 bg-slate-50 text-slate-700',
};

export function Badge({ tone = 'neutral', className, children }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-bold',
        TONE_CLASSES[tone],
        className,
      )}
    >
      {children}
    </span>
  );
}
