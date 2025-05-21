import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'node:path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve('./src'),
      '@ambari-web-next/utils-shared': path.resolve(__dirname, '../utils-shared/lib/index.ts'),
      '@tabler/icons-react': '@tabler/icons-react/dist/esm/icons/index.mjs',
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler',
      },
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id: string) {
          if (id.includes('es-toolkit')) return 'es-toolkit';
          if (id.includes('en.json') || id.includes('zh.json')) return 'langs';
        },
      },
    },
  },
  server: {
    port: 8888,
    proxy: {
      '/api': {
        target: 'http://121.37.30.227:8081',
        changeOrigin: true,
      },
    },
  },
});
