/**
 * Core type definitions for SEPC v2.0
 */

/**
 * CSS color value - can be named colors, hex, rgb, rgba, hsl, etc.
 * @example 'red', '#ff0000', 'rgb(255, 0, 0)', 'rgba(255, 0, 0, 0.5)'
 */
export type CSSColor = string

/**
 * CSS length value with unit
 * @example '10px', '2rem', '50%', '5em'
 */
export type CSSLength = string

/**
 * CSS size value (width or height)
 */
export type CSSSize = CSSLength

/**
 * Border style types
 */
export type BorderStyle =
  | 'none'
  | 'hidden'
  | 'dotted'
  | 'dashed'
  | 'solid'
  | 'double'
  | 'groove'
  | 'ridge'
  | 'inset'
  | 'outset'

/**
 * Text alignment options
 */
export type TextAlign =
  | 'left'
  | 'right'
  | 'center'
  | 'justify'
  | 'start'
  | 'end'
  | 'initial'
  | 'inherit'

/**
 * Background repeat options
 */
export type BackgroundRepeat =
  | 'repeat'
  | 'repeat-x'
  | 'repeat-y'
  | 'no-repeat'
  | 'space'
  | 'round'

/**
 * Background attachment options
 */
export type BackgroundAttachment = 'scroll' | 'fixed' | 'local'

/**
 * Background position options
 */
export type BackgroundPosition =
  | 'left'
  | 'right'
  | 'center'
  | 'top'
  | 'bottom'
  | `${number}% ${number}%`
  | `${string} ${string}`

/**
 * Border radius presets
 */
export type BorderRadiusPreset =
  | 'circle'
  | 'pill'
  | 'rounded'
  | 'rounded-sm'
  | 'rounded-md'
  | 'rounded-lg'
  | 'rounded-xl'
  | 'rounded-2xl'

/**
 * Spacing sides for margin and padding
 */
export type SpacingSide = 'top' | 'right' | 'bottom' | 'left' | 'all'

/**
 * Size constraint types
 */
export type SizeConstraint = 'min' | 'max'

/**
 * Dimension type (width or height)
 */
export type DimensionType = 'width' | 'height'

/**
 * Element selector - either a class name (without the dot) or 'body'
 * @example 'my-class', 'test-divs', 'body'
 */
export type ElementSelector = string

/**
 * SEPC Options - future extensibility
 */
export interface SEPCOptions {
  /** Whether to suppress warnings */
  suppressWarnings?: boolean
  /** Whether to throw errors instead of logging them */
  throwErrors?: boolean
}

/**
 * Error severity levels
 */
export type ErrorLevel = 'error' | 'warning' | 'info'

/**
 * SEPC Error information
 */
export interface SEPCError {
  level: ErrorLevel
  message: string
  context?: string
}
