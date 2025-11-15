import { defineConfig } from 'tsup'

export default defineConfig({
  // Entry point
  entry: ['src/index.ts'],

  // Output formats
  format: ['esm', 'cjs'],

  // Generate TypeScript declaration files
  dts: true,

  // Code splitting (disabled for simpler output)
  splitting: false,

  // Generate sourcemaps for debugging
  sourcemap: true,

  // Clean output directory before build
  clean: true,

  // Minify for production
  minify: true,

  // Target modern browsers
  target: 'es2020',

  // Tree-shaking
  treeshake: true,

  // Output configuration
  outDir: 'dist',

  // External dependencies (none for now since we have no runtime deps)
  external: [],
})
