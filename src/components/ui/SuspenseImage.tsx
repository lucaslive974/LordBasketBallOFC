import { Suspense, use, type ImgHTMLAttributes } from 'react';
import { motion } from 'motion/react';
import { cn } from '@lib/cn';
import { loadAndDecodeImage } from '@lib/imageCache';

interface ImageSkeletonProps {
  className?: string;
  tone?: 'dark' | 'light';
}

export function ImageSkeleton({ className, tone = 'dark' }: ImageSkeletonProps) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        'animate-pulse',
        tone === 'dark' ? 'bg-slate-800/80' : 'bg-slate-200',
        className,
      )}
    />
  );
}

interface DecodedImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
}

function DecodedImage({ src, alt, className, fetchPriority, ...rest }: DecodedImageProps) {
  use(loadAndDecodeImage(src));

  return (
    <motion.img
      src={src}
      alt={alt}
      decoding="async"
      fetchPriority={fetchPriority}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      className={className}
      {...(rest as Record<string, unknown>)}
    />
  );
}

interface SuspenseImageProps extends DecodedImageProps {
  skeletonClassName?: string;
  skeletonTone?: 'dark' | 'light';
}

export function SuspenseImage({
  skeletonClassName,
  skeletonTone = 'dark',
  className,
  ...props
}: SuspenseImageProps) {
  return (
    <Suspense
      fallback={<ImageSkeleton tone={skeletonTone} className={cn(className, skeletonClassName)} />}
    >
      <DecodedImage className={className} {...props} />
    </Suspense>
  );
}
