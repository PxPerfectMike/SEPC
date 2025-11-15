/**
 * SEPC v2.0 - Super Easy Programmed CSS
 *
 * A pragmatic JavaScript library for programmatic CSS manipulation.
 * Ideal for plugin systems, legacy applications, and rapid prototyping.
 *
 * @author Michael Baker
 * @version 2.0.0
 * @license ISC
 */

// Export all functions
export * from './functions'

// Export types for TypeScript users
export type {
  CSSColor,
  CSSLength,
  CSSSize,
  BorderStyle,
  TextAlign,
  BackgroundRepeat,
  BackgroundAttachment,
  BackgroundPosition,
  BorderRadiusPreset,
  SpacingSide,
  SizeConstraint,
  DimensionType,
  ElementSelector,
  SEPCOptions,
  ErrorLevel,
  SEPCError,
} from './types'
