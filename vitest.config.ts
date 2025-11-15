import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    // Use happy-dom for DOM testing environment
    environment: 'happy-dom',

    // Global test setup
    globals: true,

    // Coverage configuration
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html', 'lcov'],
      include: ['src/**/*.ts'],
      exclude: [
        'src/**/*.test.ts',
        'src/**/*.spec.ts',
        'src/types/**',
        'src/**/index.ts', // Usually just re-exports
      ],
      all: true,

      // Coverage thresholds - enforcing quality
      thresholds: {
        lines: 80,
        functions: 80,
        branches: 80,
        statements: 80,
      },
    },

    // Test file patterns
    include: ['tests/**/*.{test,spec}.ts'],

    // Watch mode exclusions
    exclude: ['node_modules', 'dist', '.git'],

    // Test timeout
    testTimeout: 10000,

    // Hooks timeout
    hookTimeout: 10000,
  },
})
