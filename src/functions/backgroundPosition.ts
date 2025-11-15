/**
 * Background Position Function
 */

import type { ElementSelector, BackgroundPosition } from '../types'
import { applyStyle, isDefined, isValidString } from '../utils/dom'
import { logError, ERROR_MESSAGES } from '../utils/errorMessages'

/**
 * Sets the background-position property for all elements with the specified class name.
 *
 * @param selector - The element selector
 * @param position - The background position value
 *
 * @example
 * ```typescript
 * backgroundPosition('my-class', 'center')
 * backgroundPosition('my-class', 'top')
 * backgroundPosition('my-class', 'bottom')
 * backgroundPosition('my-class', 'left')
 * backgroundPosition('my-class', 'right')
 * backgroundPosition('my-class', '50% 50%')
 * ```
 *
 * @public
 */
export function backgroundPosition(
  selector: ElementSelector,
  position: BackgroundPosition = 'center'
): void {
  if (!isDefined(position) || !isValidString(position)) {
    logError(
      'backgroundPosition',
      ERROR_MESSAGES.backgroundPosition.noPosition,
      'warning'
    )
    applyStyle(selector, 'backgroundPosition', 'center')
    return
  }

  applyStyle(selector, 'backgroundPosition', position)
}
