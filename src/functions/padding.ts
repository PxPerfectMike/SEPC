/**
 * Padding Function
 *
 * Sets padding for all elements matching the specified selector.
 */

import type { ElementSelector, CSSSize, SpacingSide } from '../types'
import { applyStyle, isDefined, isValidString } from '../utils/dom'
import { logError, ERROR_MESSAGES } from '../utils/errorMessages'

/**
 * Sets the padding for all elements with the specified class name.
 * Can set padding for all sides or specific sides (top, right, bottom, left).
 *
 * @param selector - The element selector (class name without dot, or 'body')
 * @param size - The padding size value (with units like 'px', 'rem', '%', etc.)
 * @param side - Optional side to apply padding to ('top', 'right', 'bottom', 'left', or 'all'). Defaults to 'all'.
 *
 * @example
 * ```typescript
 * // Set padding on all sides
 * padding('my-class', '20px')
 *
 * // Set padding on specific side
 * padding('my-class', '10px', 'top')
 * padding('my-class', '15px', 'bottom')
 *
 * // Use different units
 * padding('my-class', '1.5rem')
 * padding('my-class', '5%')
 *
 * // Set to zero
 * padding('my-class', '0')
 * ```
 *
 * @public
 */
export function padding(
  selector: ElementSelector,
  size: CSSSize,
  side: SpacingSide = 'all'
): void {
  // Validate size parameter
  if (!isDefined(size) || !isValidString(size)) {
    logError('padding', ERROR_MESSAGES.padding.noSize, 'error')
    return
  }

  // Determine which CSS property to apply
  let property: string

  switch (side) {
    case 'top':
      property = 'paddingTop'
      break
    case 'right':
      property = 'paddingRight'
      break
    case 'bottom':
      property = 'paddingBottom'
      break
    case 'left':
      property = 'paddingLeft'
      break
    case 'all':
    default:
      property = 'padding'
      break
  }

  // Apply the padding
  applyStyle(selector, property, size)
}
