import type { ReactNode } from 'react';
import { cn } from '../../lib/cn';

export type IconBoxTone = 'blue' | 'solid-blue' | 'orange-dark' | 'muted';

interface IconBoxProps {
  tone?: IconBoxTone;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  children: ReactNode;
}

const TONE_CLASSES: Record<IconBoxTone, string> = {
  blue: 'bg-[#1B4FD8]/10 text-[#1B4FD8]',
  'solid-blue': 'bg-[#1B4FD8] text-white',
  'orange-dark': 'bg-[#F5821F]/15 text-[#F5821F]',
  muted: 'bg-slate-100 text-[#1B4FD8]',
};

const SIZE_CLASSES = {
  sm: 'h-10 w-10 rounded-xl',
  md: 'h-11 w-11 rounded-xl',
  lg: 'h-12 w-12 rounded-2xl',
};

export function IconBox({ tone = 'blue', size = 'md', className, children }: IconBoxProps) {
  return (
    <div
      className={cn(
        'inline-flex shrink-0 items-center justify-center',
        TONE_CLASSES[tone],
        SIZE_CLASSES[size],
        className,
      )}
    >
      {children}
    </div>
  );
}
