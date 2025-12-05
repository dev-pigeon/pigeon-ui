import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [['babel-plugin-react-compiler']],
      },
    }),
  ],
  resolve: {
    alias: {
      '@pigeon-ui/auth-widget': resolve(__dirname, '../../packages/authwidget/src'),
    },
  },
  optimizeDeps: {
    exclude: ['@pigeon-ui/auth-widget'],
  },
  server: {
    watch: {
      ignored: ['!**/packages/authwidget/src/**'],
    },
  },
  build: {
    outDir: 'dist',
    sourcemap: true,
    target: 'es2022',
  },
})
