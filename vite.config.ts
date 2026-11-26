import { fileURLToPath, URL } from 'node:url';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

const fromRoot = (relativePath: string) => fileURLToPath(new URL(relativePath, import.meta.url));

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, '.', '');
  return {
    plugins: [react(), tailwindcss()],
    base: env.VITE_BASE_PATH || '/',
    resolve: {
      alias: {
        '@ui': fromRoot('./src/components/ui'),
        '@sections': fromRoot('./src/components/sections'),
        '@hooks': fromRoot('./src/hooks'),
        '@lib': fromRoot('./src/lib'),
        '@data': fromRoot('./src/data'),
      },
    },
  };
});
