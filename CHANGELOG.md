# Changelog

All notable changes to SEPC will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [2.0.0] - 2025-01-14

### 🎉 Complete Rewrite with TypeScript and Modern Tooling

SEPC v2.0 is a ground-up rewrite focusing on developer experience, type safety, and production readiness.

### Added

#### Core Features (with TDD)
- **TypeScript Support**: Full TypeScript rewrite with comprehensive type definitions
- **Modern Build Pipeline**: ESM + CJS bundles via tsup
- **Test Coverage**: 164 tests with >80% coverage using Vitest + happy-dom
- **API Documentation**: Complete TypeDoc documentation

#### Styling Functions
- `backgroundColor()` - Set background colors with full color format support
- `color()` - Set text colors
- `dimension()` - Set width and height with flexible units
- `margin()` - Set margins (all sides or specific)
- `padding()` - Set padding (all sides or specific)
- `border()` - Set borders with size, color, and style
- `outline()` - Set outlines (same API as border)
- `borderRadius()` - Set border radius with convenient presets
- `textAlign()` - Set text alignment
- `backgroundImage()` - Set background images (auto-wraps URLs)
- `backgroundRepeat()` - Control background image repetition
- `backgroundAttachment()` - Control background scrolling behavior
- `backgroundPosition()` - Set background image position

#### Developer Experience
- **TypeScript Autocomplete**: Full IntelliSense support in modern editors
- **Strict Type Checking**: Prevents runtime errors with compile-time checks
- **Source Maps**: Included for debugging
- **Development Playground**: Live testing environment with HMR
- **Comprehensive Documentation**: Use-case focused README with examples

#### Build & Quality
- **Modern Build Tools**: tsup (esbuild-based) for fast builds
- **Testing Framework**: Vitest with happy-dom for DOM testing
- **Code Coverage**: Configured with v8 provider, 80% threshold
- **TypeScript Strict Mode**: Maximum type safety
- **ESM + CJS**: Dual package support for compatibility

### Changed

- **Breaking**: Complete API redesign - v1.x code will not work with v2.0
- **Breaking**: Removed class-based approach - now function-only API
- **Breaking**: Node.js 18+ required (up from any version)
- **Improved**: Better error messages with context
- **Improved**: Consistent API across all functions
- **Improved**: Performance optimizations in DOM manipulation

### Removed

- **Breaking**: Removed old class-based API (e.g., `new backgroundColorClass()`)
- **Breaking**: Removed JSDoc-based documentation (now uses TypeDoc)
- **Breaking**: Dropped support for Node.js <18

### Migration from v1.x

V2.0 is a complete rewrite. Migration requires updating all usage:

```typescript
// v1.x (OLD - Don't use)
new backgroundColorClass('my-element', 'red')

// v2.0 (NEW)
backgroundColor('my-element', 'red')
```

See README.md for complete API documentation.

### Technical Details

- **Package Size**: ~5KB minified (ESM/CJS)
- **Dependencies**: Zero runtime dependencies
- **TypeScript**: Compiled to ES2020
- **Browser Support**: Modern browsers (ES2020+)
- **Node.js**: 18.0.0+

### Links

- [GitHub Repository](https://github.com/PxPerfectMike/SEPC)
- [npm Package](https://www.npmjs.com/package/sepc)
- [Documentation](https://github.com/PxPerfectMike/SEPC#readme)

---

## [1.0.0] - 2022

### Initial Release

- Class-based API for programmatic CSS manipulation
- Basic JSDoc documentation
- Support for core CSS properties

[2.0.0]: https://github.com/PxPerfectMike/SEPC/releases/tag/v2.0.0
[1.0.0]: https://github.com/PxPerfectMike/SEPC/releases/tag/v1.0.0
