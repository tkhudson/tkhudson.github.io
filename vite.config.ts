import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/tkhudson.github.io/',
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          router: ['react-router-dom'],
          motion: ['framer-motion'],
          markdown: ['react-markdown', 'remark-gfm'],
          theme: ['react-helmet-async'],
        },
      },
    },
    cssCodeSplit: true,
    minify: 'esbuild',
    sourcemap: false,
  },
  server: {
    hmr: {
      overlay: true,
    },
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'framer-motion', 'react-router-dom'],
  },
})
