# SEPC v2.0 - Super Easy Programmed CSS

[![npm version](https://img.shields.io/npm/v/@pxperfectmike/sepc.svg)](https://www.npmjs.com/package/@pxperfectmike/sepc)
[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)
[![TypeScript](https://img.shields.io/badge/TypeScript-Ready-blue.svg)](https://www.typescriptlang.org/)

**A pragmatic JavaScript library for programmatic CSS manipulation.** Built for plugin systems, legacy applications, and rapid prototyping—not as a replacement for modern CSS frameworks.

## 🎯 When to Use SEPC

SEPC is designed for **specific use cases** where programmatic CSS manipulation makes sense:

### ✅ Perfect For

- **Plugin Systems**: When you can't control the CSS pipeline but need to style dynamically
- **Legacy Applications**: Adding features to apps where modifying CSS infrastructure isn't feasible
- **Widget Libraries**: Building embeddable components that need self-contained styling
- **Rapid Prototyping**: Quick styling iterations without build setup
- **Browser Extensions**: Injecting styles into pages you don't control

### ❌ Not Recommended For

- **New Applications**: Use Tailwind, CSS Modules, or styled-components instead
- **Component Libraries**: Modern frameworks have better CSS-in-JS solutions
- **Production Apps**: Unless you're in one of the above use cases

## 📊 Comparison with Alternatives

| Use Case | SEPC | Tailwind | styled-components |
|----------|------|----------|-------------------|
| Plugin development | ✅ Perfect | ❌ Requires build | ❌ Requires React |
| Legacy app enhancement | ✅ Perfect | ⚠️ Migration needed | ⚠️ Framework lock-in |
| New modern apps | ❌ | ✅ Best choice | ✅ Best choice |
| No build process | ✅ Works | ❌ | ❌ |
| TypeScript support | ✅ Full | ✅ Full | ✅ Full |

## 🚀 Quick Start

### Installation

```bash
npm install @pxperfectmike/sepc
```

### Basic Usage

```typescript
import { backgroundColor, color, margin, padding } from '@pxperfectmike/sepc'

// Style elements by class name
backgroundColor('my-element', '#4a90e2')
color('my-element', 'white')
padding('my-element', '20px')
margin('my-element', '10px', 'top')
```

## 📚 API Reference

### Color & Background

#### `backgroundColor(selector, color)`
Sets background color for all matching elements.

```typescript
backgroundColor('card', 'blue')
backgroundColor('card', '#4a90e2')
backgroundColor('card', 'rgb(74, 144, 226)')
backgroundColor('body', '#f5f5f5')  // Special: targets body element
```

#### `color(selector, textColor)`
Sets text color for all matching elements.

```typescript
color('heading', '#333')
color('link', 'rgb(74, 144, 226)')
```

#### `backgroundImage(selector, url)`
Sets background image (auto-wraps URLs).

```typescript
backgroundImage('hero', 'https://example.com/bg.jpg')
backgroundImage('hero', '/images/background.png')
backgroundImage('hero', 'none')  // Remove background
```

#### `backgroundRepeat(selector, repeat)`
Controls background image repetition.

```typescript
backgroundRepeat('pattern', 'repeat')
backgroundRepeat('hero', 'no-repeat')
backgroundRepeat('texture', 'repeat-x')
```

#### `backgroundAttachment(selector, attachment)`
Controls background scrolling behavior.

```typescript
backgroundAttachment('parallax', 'fixed')
backgroundAttachment('normal', 'scroll')
```

#### `backgroundPosition(selector, position)`
Sets background image position.

```typescript
backgroundPosition('hero', 'center')
backgroundPosition('banner', 'top')
backgroundPosition('custom', '50% 25%')
```

### Layout & Sizing

#### `dimension(selector, width, height?)`
Sets width and height.

```typescript
dimension('box', '300px', '200px')
dimension('container', '100%')  // Width only
dimension('square', 'auto', 'auto')
dimension('responsive', '50vw', '50vh')
```

#### `margin(selector, size, side?)`
Sets margin on all sides or specific side.

```typescript
margin('card', '20px')  // All sides
margin('card', '10px', 'top')  // Specific side
margin('card', '2rem', 'bottom')
margin('centered', 'auto')  // Center element
```

#### `padding(selector, size, side?)`
Sets padding on all sides or specific side.

```typescript
padding('content', '20px')  // All sides
padding('content', '1.5rem', 'left')  // Specific side
padding('button', '10px', 'top')
```

### Borders

#### `border(selector, size, color?, style?)`
Sets border with size, color, and style.

```typescript
border('card', '1px', 'black', 'solid')
border('card', '2px', '#ccc')  // Defaults to solid
border('card', '1px')  // Defaults to solid + currentColor
```

Supported styles: `'solid'`, `'dashed'`, `'dotted'`, `'double'`, `'groove'`, `'ridge'`, `'inset'`, `'outset'`

#### `outline(selector, size, color?, style?)`
Sets outline (same API as border).

```typescript
outline('focused', '2px', 'blue', 'solid')
outline('highlight', '3px', '#f00', 'dashed')
```

#### `borderRadius(selector, radius)`
Sets border radius with support for convenient presets.

```typescript
// Custom values
borderRadius('card', '10px')
borderRadius('card', '1rem')
borderRadius('card', '50%')

// Presets (inspired by Tailwind)
borderRadius('avatar', 'circle')       // 50%
borderRadius('button', 'pill')         // 9999px
borderRadius('card', 'rounded')        // 0.25rem
borderRadius('card', 'rounded-sm')     // 0.125rem
borderRadius('card', 'rounded-md')     // 0.375rem
borderRadius('card', 'rounded-lg')     // 0.5rem
borderRadius('card', 'rounded-xl')     // 0.75rem
borderRadius('card', 'rounded-2xl')    // 1rem
```

### Typography

#### `textAlign(selector, alignment)`
Sets text alignment.

```typescript
textAlign('heading', 'center')
textAlign('paragraph', 'justify')
textAlign('label', 'right')
```

Supported alignments: `'left'`, `'right'`, `'center'`, `'justify'`, `'start'`, `'end'`, `'inherit'`, `'initial'`

## 🎨 Real-World Examples

### Plugin Development

```typescript
// WordPress plugin that styles dynamically inserted elements
import { backgroundColor, padding, borderRadius } from '@pxperfectmike/sepc'

function initializePlugin() {
  // Can't modify theme CSS, but can style our plugin elements
  backgroundColor('wp-my-plugin-widget', '#f8f9fa')
  padding('wp-my-plugin-widget', '20px')
  borderRadius('wp-my-plugin-widget', 'rounded-lg')
}
```

### Legacy App Enhancement

```typescript
// Adding dark mode to a legacy app without touching CSS files
import { backgroundColor, color } from '@pxperfectmike/sepc'

function enableDarkMode() {
  backgroundColor('body', '#1a1a1a')
  color('body', '#e0e0e0')
  backgroundColor('card', '#2d2d2d')
  backgroundColor('sidebar', '#252525')
}
```

### Embeddable Widget

```typescript
// Chat widget that injects into any website
import { dimension, backgroundColor, borderRadius, padding } from '@pxperfectmike/sepc'

function initChatWidget() {
  const widgetClass = 'my-chat-widget-container'

  dimension(widgetClass, '350px', '500px')
  backgroundColor(widgetClass, 'white')
  borderRadius(widgetClass, 'rounded-lg')
  padding(widgetClass, '16px')
}
```

## 💡 TypeScript Support

SEPC is written in TypeScript and provides full type definitions:

```typescript
import type { CSSColor, BorderRadiusPreset, TextAlign } from '@pxperfectmike/sepc'

// TypeScript will provide autocomplete and type checking
const myColor: CSSColor = '#4a90e2'
const myRadius: BorderRadiusPreset = 'circle'
const myAlign: TextAlign = 'center'
```

## 🧪 Testing

```bash
npm test              # Run all tests
npm run test:ui       # Run tests with UI
npm run test:coverage # Generate coverage report
```

Coverage: **164 tests** with **>80% coverage**

## 🏗️ Building

```bash
npm run build         # Build ESM + CJS bundles
npm run dev           # Start development server
npm run type-check    # Run TypeScript checks
```

## 📦 Package Contents

- **ESM build**: `dist/index.js` (5KB minified)
- **CJS build**: `dist/index.cjs` (5KB minified)
- **TypeScript definitions**: `dist/index.d.ts`
- **Source maps**: Included for debugging

## 🤝 Contributing

Contributions are welcome! This library is intentionally focused on its specific use cases. Before adding features, please consider:

1. Does this fit the core use cases (plugins, legacy apps, widgets)?
2. Would this be better solved by modern CSS frameworks?
3. Does it maintain the simple, pragmatic API?

## 📄 License

ISC © Michael Baker

## 🔗 Links

- [GitHub Repository](https://github.com/PxPerfectMike/SEPC)
- [npm Package](https://www.npmjs.com/package/@pxperfectmike/sepc)
- [Issues & Bug Reports](https://github.com/PxPerfectMike/SEPC/issues)

---

**Remember**: SEPC is a tool for specific situations. For new projects, use Tailwind CSS, CSS Modules, or styled-components. Use SEPC when you need pragmatic, programmatic CSS manipulation in constrained environments.
