const imageCache = new Map<string, Promise<void>>();

/**
 * Downloads and decodes an image off the main thread, caching the resulting
 * Promise so React 19's `use()` hook can suspend safely until pixels are ready.
 * Never rejects so a broken image will never lock a Suspense boundary.
 */
export function loadAndDecodeImage(src: string): Promise<void> {
  const cached = imageCache.get(src);
  if (cached) return cached;

  const promise = new Promise<void>((resolve) => {
    const img = new Image();
    img.decoding = 'async';
    img.src = src;

    if (typeof img.decode === 'function') {
      img
        .decode()
        .then(resolve)
        .catch(() => {
          if (img.complete) {
            resolve();
            return;
          }
          img.onload = () => resolve();
          img.onerror = () => resolve();
        });
      return;
    }

    if (img.complete) {
      resolve();
      return;
    }
    img.onload = () => resolve();
    img.onerror = () => resolve();
  });

  imageCache.set(src, promise);
  return promise;
}
