/**
 * Outline Function
 *
 * Sets outline for all elements matching the specified selector.
 */

import type { ElementSelector, CSSSize, CSSColor, BorderStyle } from '../types'
import { applyStyle, isDefined, isValidString } from '../utils/dom'
import { logError, ERROR_MESSAGES } from '../utils/errorMessages'

/**
 * Sets the outline for all elements with the specified class name.
 *
 * @param selector - The element selector (class name without dot, or 'body')
 * @param size - The outline width (with units like 'px', 'rem', etc.)
 * @param outlineColor - Optional outline color. Defaults to currentColor if not provided.
 * @param style - Optional outline style ('solid', 'dashed', 'dotted', etc.). Defaults to 'solid' if not provided.
 *
 * @example
 * ```typescript
 * // Full outline specification
 * outline('my-class', '2px', 'red', 'solid')
 *
 * // Outline with size and color
 * outline('my-class', '1px', 'blue')
 *
 * // Outline with size only
 * outline('my-class', '3px')
 *
 * // Different outline styles
 * outline('my-class', '2px', 'green', 'dashed')
 * outline('my-class', '1px', 'orange', 'dotted')
 * ```
 *
 * @public
 */
export function outline(
  selector: ElementSelector,
  size: CSSSize,
  outlineColor?: CSSColor,
  style?: BorderStyle
): void {
  // Validate size parameter
  if (!isDefined(size) || !isValidString(size)) {
    logError('outline', ERROR_MESSAGES.outline.noSize, 'error')
    return
  }

  // Set defaults
  const finalColor = outlineColor && isValidString(outlineColor) ? outlineColor : 'currentColor'
  const finalStyle = style && isValidString(style) ? style : 'solid'

  // Log warnings for missing parameters
  if (!isDefined(outlineColor) || !isValidString(outlineColor)) {
    logError('outline', ERROR_MESSAGES.border.noColor, 'warning')
  }

  if (!isDefined(style) || !isValidString(style)) {
    logError('outline', ERROR_MESSAGES.outline.noType, 'warning')
  }

  // Apply the outline as a shorthand
  const outlineValue = `${size} ${finalStyle} ${finalColor}`
  applyStyle(selector, 'outline', outlineValue)
}
