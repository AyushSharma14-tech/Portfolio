import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath, URL } from 'node:url';

// Single source of truth for the GitHub Pages base path.
// For `https://<user>.github.io/<repo>/` this MUST equal `/<repo>/`.
// For a user/org site or custom domain, set to `/`.
const BASE_PATH = process.env.VITE_BASE_PATH ?? '/PortFolio/';

export default defineConfig({
  base: BASE_PATH,
  plugins: [react()],
  resolve: {
    // Mirror of the `paths` alias in tsconfig.app.json — Vite does NOT
    // read tsconfig paths automatically, so the alias must be repeated here
    // for the bundler to resolve `@/...` imports at dev/build time.
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  build: {
    target: 'es2020',
    sourcemap: false,
    cssCodeSplit: true,
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor-react': ['react', 'react-dom'],
          'vendor-motion': ['framer-motion'],
          'vendor-icons': ['lucide-react'],
        },
      },
    },
  },
});
