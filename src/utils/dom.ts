/**
 * DOM manipulation utilities for SEPC v2.0
 */

import type { ElementSelector } from '../types'
import { logError, ERROR_MESSAGES } from './errorMessages'

/**
 * Get elements by selector.
 * Supports both class names and 'body' as special case.
 *
 * @param selector - Element selector (class name without dot, or 'body')
 * @returns Array of HTML elements
 *
 * @example
 * getElements('my-class') // Returns all elements with class 'my-class'
 * getElements('body') // Returns [document.body]
 */
export function getElements(selector: ElementSelector): HTMLElement[] {
  if (!selector || selector.trim() === '') {
    logError('element', ERROR_MESSAGES.element.invalidSelector)
    return []
  }

  // Special case: 'body' selector
  if (selector.toLowerCase() === 'body') {
    return document.body ? [document.body] : []
  }

  // Get elements by class name
  const elements = document.getElementsByClassName(selector)

  if (elements.length === 0) {
    logError(
      'element',
      `${ERROR_MESSAGES.element.noElements}: "${selector}"`,
      'warning'
    )
    return []
  }

  // Convert HTMLCollection to Array of HTMLElements
  return Array.from(elements) as HTMLElement[]
}

/**
 * Apply a style property to all selected elements
 *
 * @param selector - Element selector
 * @param property - CSS property name
 * @param value - CSS property value
 *
 * @example
 * applyStyle('my-class', 'backgroundColor', 'red')
 * applyStyle('body', 'color', '#333')
 */
export function applyStyle(
  selector: ElementSelector,
  property: string,
  value: string
): void {
  const elements = getElements(selector)

  elements.forEach((element) => {
    // Use any here because CSSStyleDeclaration properties are not strictly typed
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ;(element.style as any)[property] = value
  })
}

/**
 * Check if a value is defined and not empty
 *
 * @param value - Value to check
 * @returns True if value is defined and not empty
 */
export function isDefined(value: unknown): boolean {
  return value !== undefined && value !== null && value !== ''
}

/**
 * Validate that a value is a non-empty string
 *
 * @param value - Value to validate
 * @returns True if value is a valid string
 */
export function isValidString(value: unknown): value is string {
  return typeof value === 'string' && value.trim() !== ''
}

/**
 * Validate CSS length value (must include a unit)
 *
 * @param value - Value to validate
 * @returns True if value appears to be a valid CSS length
 */
export function isValidCSSLength(value: string): boolean {
  if (!isValidString(value)) return false

  // Allow common CSS length units and special values
  const validPattern =
    /^(auto|inherit|initial|unset|0|(-?\d*\.?\d+)(px|em|rem|%|vh|vw|vmin|vmax|ch|ex|cm|mm|in|pt|pc))$/
  return validPattern.test(value.trim())
}

/**
 * Validate CSS color value
 * Supports: named colors, hex, rgb, rgba, hsl, hsla, etc.
 *
 * @param value - Value to validate
 * @returns True if value appears to be a valid CSS color
 */
export function isValidCSSColor(value: string): boolean {
  if (!isValidString(value)) return false

  const trimmed = value.trim()

  // Allow CSS color keywords, hex, rgb, rgba, hsl, hsla, etc.
  const patterns = [
    /^#([0-9a-f]{3}|[0-9a-f]{6}|[0-9a-f]{8})$/i, // Hex colors
    /^rgb\(\s*\d+\s*,\s*\d+\s*,\s*\d+\s*\)$/i, // RGB
    /^rgba\(\s*\d+\s*,\s*\d+\s*,\s*\d+\s*,\s*[\d.]+\s*\)$/i, // RGBA
    /^hsl\(\s*\d+\s*,\s*\d+%\s*,\s*\d+%\s*\)$/i, // HSL
    /^hsla\(\s*\d+\s*,\s*\d+%\s*,\s*\d+%\s*,\s*[\d.]+\s*\)$/i, // HSLA
    /^(transparent|currentColor)$/i, // Special keywords
    /^[a-z]+$/i, // Named colors (simplified check)
  ]

  return patterns.some((pattern) => pattern.test(trimmed))
}
