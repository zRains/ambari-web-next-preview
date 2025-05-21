import react from '@vitejs/plugin-react';
import { extname, relative, resolve } from 'node:path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import { fileURLToPath } from 'node:url';
import { glob } from 'glob';

export default defineConfig({
  plugins: [react(), dts()],
  resolve: {
    alias: {
      '@': resolve('./src'),
    },
  },
  build: {
    copyPublicDir: false,
    lib: {
      entry: Object.fromEntries(
        glob
          .sync('src/**/*.{ts,tsx}', {
            ignore: ['src/**/*.d.ts'],
          })
          .map((file) => [
            relative('src', file.slice(0, file.length - extname(file).length)),
            fileURLToPath(new URL(file, import.meta.url)),
          ]),
      ),
      name: '@ambari-web-next/ui-shared',
      formats: ['es'],
    },
    rollupOptions: {
      external: ['react', 'react/jsx-runtime', 'react-dom', 'tailwindcss'],
      output: {
        assetFileNames: 'assets/[name][extname]',
        entryFileNames: '[name].[format].js',
        globals: {
          react: 'React',
          'react/jsx-runtime': 'react/jsx-runtime',
          'react-dom': 'ReactDOM',
          tailwindcss: 'tailwindcss',
        },
      },
    },
  },
});
