import { defineConfig } from 'vitest/config';
import path from 'path';

export default defineConfig({
  test: {
    environment: 'jsdom',
  },
  resolve: {
    alias: {
      '@assets': path.resolve(__dirname, 'src/assets'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@store': path.resolve(__dirname, 'src/store'),
      '@features': path.resolve(__dirname, 'src/features'),
      '@services': path.resolve(__dirname, 'src/services'),
    },
  },
});