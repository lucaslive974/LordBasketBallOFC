import type { ReactNode } from 'react';
import { cn } from '@lib/cn';

interface SectionHeaderProps {
  eyebrow: string;
  title: ReactNode;
  description?: string;
  tone?: 'light' | 'dark';
  align?: 'left' | 'center';
  action?: ReactNode;
  className?: string;
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  tone = 'light',
  align = 'left',
  action,
  className,
}: SectionHeaderProps) {
  const isDark = tone === 'dark';
  const isCentered = align === 'center';

  return (
    <div
      className={cn(
        'flex flex-col gap-4',
        isCentered
          ? 'mx-auto max-w-2xl items-center text-center'
          : 'justify-between md:flex-row md:items-end',
        className,
      )}
    >
      <div className={cn(!isCentered && 'max-w-2xl')}>
        <span
          className={cn(
            'text-xs font-bold tracking-widest uppercase',
            isDark ? 'text-[#F5821F]' : 'text-[#1B4FD8]',
          )}
        >
          {eyebrow}
        </span>
        <h2
          className={cn(
            'font-display mt-2 text-4xl font-extrabold tracking-tight uppercase sm:text-5xl',
            isDark ? 'text-white' : 'text-slate-950',
          )}
        >
          {title}
        </h2>
        {description && (
          <p
            className={cn(
              'mt-3 text-base leading-relaxed',
              isDark ? 'text-slate-300' : 'text-slate-600',
            )}
          >
            {description}
          </p>
        )}
      </div>

      {action && !isCentered && <div className="shrink-0">{action}</div>}
    </div>
  );
}
