/**
 * Background Repeat Function
 */

import type { ElementSelector, BackgroundRepeat } from '../types'
import { applyStyle, isDefined, isValidString } from '../utils/dom'
import { logError, ERROR_MESSAGES } from '../utils/errorMessages'

/**
 * Sets the background-repeat property for all elements with the specified class name.
 *
 * @param selector - The element selector
 * @param repeat - The background repeat value
 *
 * @example
 * ```typescript
 * backgroundRepeat('my-class', 'no-repeat')
 * backgroundRepeat('my-class', 'repeat')
 * backgroundRepeat('my-class', 'repeat-x')
 * backgroundRepeat('my-class', 'repeat-y')
 * ```
 *
 * @public
 */
export function backgroundRepeat(
  selector: ElementSelector,
  repeat: BackgroundRepeat = 'no-repeat'
): void {
  if (!isDefined(repeat) || !isValidString(repeat)) {
    logError('backgroundRepeat', ERROR_MESSAGES.backgroundRepeat.noRepeat, 'info')
    applyStyle(selector, 'backgroundRepeat', 'no-repeat')
    return
  }

  applyStyle(selector, 'backgroundRepeat', repeat)
}
