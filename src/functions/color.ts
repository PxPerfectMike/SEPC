/**
 * Text Color Function
 *
 * Sets the text color for all elements matching the specified selector.
 */

import type { ElementSelector, CSSColor } from '../types'
import { applyStyle, isDefined, isValidString } from '../utils/dom'
import { logError, ERROR_MESSAGES } from '../utils/errorMessages'

/**
 * Sets the text color for all elements with the specified class name.
 *
 * @param selector - The element selector (class name without dot, or 'body')
 * @param textColor - The text color value (named color, hex, rgb, rgba, hsl, etc.)
 *
 * @example
 * ```typescript
 * // Named color
 * color('my-class', 'red')
 *
 * // Hex color
 * color('my-class', '#333333')
 *
 * // RGB color
 * color('my-class', 'rgb(51, 51, 51)')
 *
 * // RGBA color with transparency
 * color('my-class', 'rgba(51, 51, 51, 0.8)')
 *
 * // Target body element
 * color('body', '#222')
 * ```
 *
 * @throws Logs error when color is undefined or invalid
 *
 * @public
 */
export function color(selector: ElementSelector, textColor: CSSColor): void {
  // Validate color parameter
  if (!isDefined(textColor) || !isValidString(textColor)) {
    logError('color', ERROR_MESSAGES.color.noColor, 'error')
    return
  }

  // Apply the text color to all matching elements
  applyStyle(selector, 'color', textColor)
}
