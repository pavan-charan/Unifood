import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,  // listen on all addresses (0.0.0.0)
    port: 5173,  // optional
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
