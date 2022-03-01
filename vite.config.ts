import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  optimizeDeps: {
    exclude: [
      'nap-portal',
    ],
    include: [
      'nap-portal > lodash',
      'nap-portal > uuid',
    ],
  },
});
