/**
 * Text Align Function
 *
 * Sets text alignment for all elements matching the specified selector.
 */

import type { ElementSelector, TextAlign } from '../types'
import { applyStyle, isDefined, isValidString } from '../utils/dom'
import { logError, ERROR_MESSAGES } from '../utils/errorMessages'

/**
 * Sets the text alignment for all elements with the specified class name.
 *
 * @param selector - The element selector (class name without dot, or 'body')
 * @param alignment - The text alignment value
 *
 * @example
 * ```typescript
 * // Basic alignments
 * textAlign('my-class', 'left')
 * textAlign('my-class', 'right')
 * textAlign('my-class', 'center')
 * textAlign('my-class', 'justify')
 *
 * // Directional alignments
 * textAlign('my-class', 'start')
 * textAlign('my-class', 'end')
 *
 * // Inherited values
 * textAlign('my-class', 'inherit')
 * textAlign('my-class', 'initial')
 * ```
 *
 * @public
 */
export function textAlign(
  selector: ElementSelector,
  alignment: TextAlign
): void {
  // Validate alignment parameter
  if (!isDefined(alignment) || !isValidString(alignment)) {
    logError('textAlign', ERROR_MESSAGES.textAlign.noPlacement, 'warning')
    return
  }

  // Apply the text alignment
  applyStyle(selector, 'textAlign', alignment)
}
