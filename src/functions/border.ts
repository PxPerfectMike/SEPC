/**
 * Border Function
 *
 * Sets border for all elements matching the specified selector.
 */

import type { ElementSelector, CSSSize, CSSColor, BorderStyle } from '../types'
import { applyStyle, isDefined, isValidString } from '../utils/dom'
import { logError, ERROR_MESSAGES } from '../utils/errorMessages'

/**
 * Sets the border for all elements with the specified class name.
 *
 * @param selector - The element selector (class name without dot, or 'body')
 * @param size - The border width (with units like 'px', 'rem', etc.)
 * @param borderColor - Optional border color. Defaults to currentColor if not provided.
 * @param style - Optional border style ('solid', 'dashed', 'dotted', etc.). Defaults to 'solid' if not provided.
 *
 * @example
 * ```typescript
 * // Full border specification
 * border('my-class', '2px', 'black', 'solid')
 *
 * // Border with size and color (defaults to solid)
 * border('my-class', '1px', 'red')
 *
 * // Border with size only (defaults to solid and currentColor)
 * border('my-class', '3px')
 *
 * // Different border styles
 * border('my-class', '2px', 'blue', 'dashed')
 * border('my-class', '1px', 'green', 'dotted')
 * border('my-class', '3px', 'red', 'double')
 * ```
 *
 * @public
 */
export function border(
  selector: ElementSelector,
  size: CSSSize,
  borderColor?: CSSColor,
  style?: BorderStyle
): void {
  // Validate size parameter
  if (!isDefined(size) || !isValidString(size)) {
    logError('border', ERROR_MESSAGES.border.noSize, 'error')
    return
  }

  // Set defaults
  const finalColor = borderColor && isValidString(borderColor) ? borderColor : 'currentColor'
  const finalStyle = style && isValidString(style) ? style : 'solid'

  // Log warnings for missing parameters
  if (!isDefined(borderColor) || !isValidString(borderColor)) {
    logError('border', ERROR_MESSAGES.border.noColor, 'warning')
  }

  if (!isDefined(style) || !isValidString(style)) {
    logError('border', ERROR_MESSAGES.border.noType, 'warning')
  }

  // Apply the border as a shorthand
  const borderValue = `${size} ${finalStyle} ${finalColor}`
  applyStyle(selector, 'border', borderValue)
}
