import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/home/', // your repo name
  plugins: [react()],
  build: {
    outDir: 'docs' // GitHub Pages will serve from this folder
  },
  optimizeDeps: {
    esbuildOptions: {
      loader: {
        '.js': 'jsx'
      }
    }
  }
})
