import type { ReactNode } from 'react';
import { cn } from '../../lib/cn';

export type ButtonVariant =
  | 'primary'
  | 'brand'
  | 'dark'
  | 'outline-light'
  | 'outline-dark'
  | 'whatsapp';

export type ButtonSize = 'sm' | 'md' | 'lg';

interface BaseProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  className?: string;
  children: ReactNode;
}

interface AnchorButtonProps extends BaseProps {
  href: string;
  external?: boolean;
  ariaLabel?: string;
  onClick?: () => void;
}

interface NativeButtonProps extends BaseProps {
  href?: undefined;
  type?: 'button' | 'submit' | 'reset';
  ariaLabel?: string;
  onClick?: () => void;
}

export type ButtonProps = AnchorButtonProps | NativeButtonProps;

const VARIANT_CLASSES: Record<ButtonVariant, string> = {
  primary:
    'bg-[#F5821F] text-slate-950 font-bold shadow-lg shadow-[#F5821F]/25 hover:bg-[#fb923c]',
  brand:
    'bg-[#1B4FD8] text-white font-semibold shadow-md shadow-[#1B4FD8]/25 hover:bg-[#103294]',
  dark: 'bg-slate-950 text-white font-semibold border border-slate-200 hover:bg-[#1B4FD8]',
  'outline-light':
    'border border-white/20 bg-white/5 text-white font-semibold backdrop-blur hover:border-[#F5821F] hover:text-[#F5821F]',
  'outline-dark':
    'border border-slate-300 bg-white text-slate-800 font-semibold hover:border-slate-900',
  whatsapp:
    'bg-emerald-500 text-slate-950 font-bold shadow-xl shadow-emerald-500/30 hover:bg-emerald-400',
};

const SIZE_CLASSES: Record<ButtonSize, string> = {
  sm: 'px-4 py-2 text-sm gap-1.5',
  md: 'px-6 py-3 text-sm gap-2',
  lg: 'px-7 py-3.5 text-base gap-2.5',
};

export function Button({
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  className,
  children,
  ...rest
}: ButtonProps) {
  const classes = cn(
    'inline-flex items-center justify-center rounded-full transition focus:outline-none focus:ring-2 focus:ring-[#F5821F]/70',
    VARIANT_CLASSES[variant],
    SIZE_CLASSES[size],
    fullWidth && 'w-full',
    className,
  );

  if ('href' in rest && rest.href !== undefined) {
    const { href, external = false, ariaLabel, onClick } = rest;
    return (
      <a
        href={href}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
        aria-label={ariaLabel}
        onClick={onClick}
        className={classes}
      >
        {children}
      </a>
    );
  }

  const { type = 'button', ariaLabel, onClick } = rest as NativeButtonProps;
  return (
    <button type={type} aria-label={ariaLabel} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
