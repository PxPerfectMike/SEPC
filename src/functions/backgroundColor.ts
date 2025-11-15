/**
 * Background Color Function
 *
 * Sets the background color for all elements matching the specified selector.
 */

import type { ElementSelector, CSSColor } from '../types'
import { applyStyle, isDefined, isValidString } from '../utils/dom'
import { logError, ERROR_MESSAGES } from '../utils/errorMessages'

/**
 * Sets the background color for all elements with the specified class name.
 *
 * @param selector - The element selector (class name without dot, or 'body')
 * @param color - The background color value (named color, hex, rgb, rgba, hsl, etc.)
 *
 * @example
 * ```typescript
 * // Named color
 * backgroundColor('my-class', 'red')
 *
 * // Hex color
 * backgroundColor('my-class', '#ff0000')
 *
 * // RGB color
 * backgroundColor('my-class', 'rgb(255, 0, 0)')
 *
 * // RGBA color with transparency
 * backgroundColor('my-class', 'rgba(255, 0, 0, 0.5)')
 *
 * // Target body element
 * backgroundColor('body', '#f5f5f5')
 * ```
 *
 * @public
 */
export function backgroundColor(
  selector: ElementSelector,
  color: CSSColor
): void {
  // Validate color parameter
  if (!isDefined(color) || !isValidString(color)) {
    logError(
      'backgroundColor',
      ERROR_MESSAGES.backgroundColor.noColor,
      'error'
    )
    // Default to transparent when color is invalid
    applyStyle(selector, 'backgroundColor', 'transparent')
    return
  }

  // Apply the background color to all matching elements
  applyStyle(selector, 'backgroundColor', color)
}
