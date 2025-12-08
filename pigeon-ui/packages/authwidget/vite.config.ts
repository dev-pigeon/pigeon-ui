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
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'AuthWidget',
      formats: ['es'],
      fileName: () => 'index.js',
    },
    rollupOptions: {
      // Externalize dependencies that shouldn't be bundled
      external: [
        'react',
        'react-dom',
        'react/jsx-runtime',
        'styled-components',
        'lucide-react'
      ],
      output: {
        // Provide global variables for UMD build (if needed later)
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          'styled-components': 'styled',
          'lucide-react': 'LucideReact'
        },
        // Preserve module structure for better tree-shaking
        preserveModules: false,
        // Use named exports
        exports: 'named',
      },
    },
    // Generate sourcemaps for better debugging
    sourcemap: true,
    // Target modern browsers
    target: 'es2022',
    // Output to dist directory
    outDir: 'dist',
    // Clean dist before build
    emptyOutDir: true,
  },
  // Optimize deps for development
  optimizeDeps: {
    include: ['react', 'react-dom', 'styled-components', 'lucide-react'],
  },
})
