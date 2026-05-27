import { defineConfig } from 'vite'
import { tanstackStart } from '@tanstack/react-start/plugin/vite'
import viteReact from '@vitejs/plugin-react'
import viteTsConfigPaths from 'vite-tsconfig-paths'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    viteTsConfigPaths({ projects: ['./tsconfig.json'] }),
    tailwindcss(),
    tanstackStart(),
    viteReact(),
  ],
  build: {
    chunkSizeWarningLimit: 600,
    minify: 'esbuild',
    sourcemap: false,
    cssMinify: true,
    target: 'es2020',
  },
  optimizeDeps: {
    include: ['lucide-react'],
  },
})
