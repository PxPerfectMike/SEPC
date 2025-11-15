/**
 * Dimension Function
 *
 * Sets width and height for all elements matching the specified selector.
 */

import type { ElementSelector, CSSSize } from '../types'
import { applyStyle, isDefined, isValidString } from '../utils/dom'
import { logError, ERROR_MESSAGES } from '../utils/errorMessages'

/**
 * Sets the width and height for all elements with the specified class name.
 *
 * @param selector - The element selector (class name without dot, or 'body')
 * @param width - The width value (with units like 'px', '%', 'rem', etc.)
 * @param height - Optional height value (with units). If not provided, only width is set.
 *
 * @example
 * ```typescript
 * // Set both width and height
 * dimension('my-class', '300px', '200px')
 *
 * // Set width only
 * dimension('my-class', '100%')
 *
 * // Use different units
 * dimension('my-class', '50vw', '80vh')
 *
 * // Use auto
 * dimension('my-class', 'auto', 'auto')
 *
 * // Use calc()
 * dimension('my-class', 'calc(100% - 20px)', '300px')
 * ```
 *
 * @public
 */
export function dimension(
  selector: ElementSelector,
  width?: CSSSize,
  height?: CSSSize
): void {
  // Check if both width and height are undefined
  if (!isDefined(width) && !isDefined(height)) {
    logError('dimension', ERROR_MESSAGES.dimension.noDimensions, 'warning')
    return
  }

  // Handle width
  if (!isDefined(width) || !isValidString(width)) {
    logError('dimension', ERROR_MESSAGES.dimension.noWidth, 'warning')
  } else {
    applyStyle(selector, 'width', width)
  }

  // Handle height (optional)
  if (isDefined(height)) {
    if (!isValidString(height)) {
      logError('dimension', ERROR_MESSAGES.dimension.noHeight, 'warning')
    } else {
      applyStyle(selector, 'height', height)
    }
  }
}
