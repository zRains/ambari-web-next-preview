import path from 'node:path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

export default defineConfig({
  plugins: [dts()],
  resolve: {
    alias: {
      '@': path.resolve('./lib'),
    },
  },
  build: {
    sourcemap: true,
    lib: {
      entry: path.resolve('lib', 'index.js'),
      name: 'utils-shared',
      formats: ['es', 'cjs'],
    },
    rollupOptions: {
      output: {
        entryFileNames: '[name].[format].js',
      },
    },
  },
});
