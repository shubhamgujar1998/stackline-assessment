import path from 'path';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
    base: '/stackline-assessment/',
    plugins: [dts(), react(), tailwindcss()],
    resolve: {
      alias: {
        '@store': path.resolve(__dirname, 'src/store'),
        '@assets': path.resolve(__dirname, 'src/assets'),
        '@components': path.resolve(__dirname, 'src/components'),
        '@features': path.resolve(__dirname, 'src/features'),
        '@services': path.resolve(__dirname, 'src/services'),
      }
    },
});
