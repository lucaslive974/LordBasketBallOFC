import { ArrowUpRight, Instagram } from 'lucide-react';
import { cn } from '../../lib/cn';
import { BrandAvatar } from './BrandAvatar';

interface SocialProfileCardProps {
  brand: 'lord' | 'instituto';
  handle: string;
  description: string;
  href: string;
  accent?: 'orange' | 'gold';
}

export function SocialProfileCard({
  brand,
  handle,
  description,
  href,
  accent = 'orange',
}: SocialProfileCardProps) {
  const isOrange = accent === 'orange';

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        'group flex items-center justify-between gap-4 rounded-2xl border border-white/15 bg-gradient-to-r p-5 transition hover:border-[#F5821F]',
        isOrange ? 'from-[#1B4FD8]/25 to-slate-900' : 'from-white/10 to-slate-900',
      )}
    >
      <div className="flex items-center gap-4">
        <BrandAvatar brand={brand} size="md" />
        <div>
          <p className="flex items-center gap-1.5 text-sm font-bold text-white">
            <Instagram className={cn('h-4 w-4', isOrange ? 'text-[#F5821F]' : 'text-[#FBBF24]')} />
            {handle}
          </p>
          <p className="mt-0.5 text-xs text-slate-300">{description}</p>
        </div>
      </div>
      <ArrowUpRight
        className={cn(
          'h-5 w-5 shrink-0 text-slate-300 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5',
          isOrange ? 'group-hover:text-[#F5821F]' : 'group-hover:text-[#FBBF24]',
        )}
      />
    </a>
  );
}
