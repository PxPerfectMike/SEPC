import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  root: './playground',
  server: {
    port: 3000,
    open: true,
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
  build: {
    outDir: '../dist-playground',
    emptyOutDir: true,
  },
})
