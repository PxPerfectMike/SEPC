/**
 * Margin Function
 *
 * Sets margin for all elements matching the specified selector.
 */

import type { ElementSelector, CSSSize, SpacingSide } from '../types'
import { applyStyle, isDefined, isValidString } from '../utils/dom'
import { logError, ERROR_MESSAGES } from '../utils/errorMessages'

/**
 * Sets the margin for all elements with the specified class name.
 * Can set margin for all sides or specific sides (top, right, bottom, left).
 *
 * @param selector - The element selector (class name without dot, or 'body')
 * @param size - The margin size value (with units like 'px', 'rem', '%', etc.)
 * @param side - Optional side to apply margin to ('top', 'right', 'bottom', 'left', or 'all'). Defaults to 'all'.
 *
 * @example
 * ```typescript
 * // Set margin on all sides
 * margin('my-class', '20px')
 *
 * // Set margin on specific side
 * margin('my-class', '10px', 'top')
 * margin('my-class', '15px', 'bottom')
 *
 * // Use different units
 * margin('my-class', '2rem')
 * margin('my-class', '5%')
 *
 * // Use auto for centering
 * margin('my-class', 'auto')
 *
 * // Negative margins
 * margin('my-class', '-10px', 'left')
 * ```
 *
 * @public
 */
export function margin(
  selector: ElementSelector,
  size: CSSSize,
  side: SpacingSide = 'all'
): void {
  // Validate size parameter
  if (!isDefined(size) || !isValidString(size)) {
    logError('margin', ERROR_MESSAGES.margin.noSize, 'error')
    return
  }

  // Determine which CSS property to apply
  let property: string

  switch (side) {
    case 'top':
      property = 'marginTop'
      break
    case 'right':
      property = 'marginRight'
      break
    case 'bottom':
      property = 'marginBottom'
      break
    case 'left':
      property = 'marginLeft'
      break
    case 'all':
    default:
      property = 'margin'
      break
  }

  // Apply the margin
  applyStyle(selector, property, size)
}
