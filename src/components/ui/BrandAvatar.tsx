import { assetUrl } from '../../data/siteContent';
import { cn } from '../../lib/cn';

interface BrandAvatarProps {
  brand: 'lord' | 'instituto';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const BRAND_CONFIG = {
  lord: {
    src: 'images/logo-lord.jpg',
    alt: 'Escudo Lord Basketball',
    ring: 'border-2 border-[#F5821F]',
  },
  instituto: {
    src: 'images/logo-instituto.jpg',
    alt: 'Logo Instituto Lord',
    ring: 'border border-slate-300 bg-white',
  },
} as const;

const SIZE_CLASSES = {
  sm: 'h-11 w-11',
  md: 'h-14 w-14',
  lg: 'h-16 w-16',
} as const;

export function BrandAvatar({ brand, size = 'sm', className }: BrandAvatarProps) {
  const { src, alt, ring } = BRAND_CONFIG[brand];

  return (
    <img
      src={assetUrl(src)}
      alt={alt}
      className={cn('shrink-0 rounded-full object-cover shadow-sm', ring, SIZE_CLASSES[size], className)}
    />
  );
}
