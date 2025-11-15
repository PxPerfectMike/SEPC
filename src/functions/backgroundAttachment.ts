/**
 * Background Attachment Function
 */

import type { ElementSelector, BackgroundAttachment } from '../types'
import { applyStyle, isDefined, isValidString } from '../utils/dom'
import { logError, ERROR_MESSAGES } from '../utils/errorMessages'

/**
 * Sets the background-attachment property for all elements with the specified class name.
 *
 * @param selector - The element selector
 * @param attachment - The background attachment value ('scroll', 'fixed', or 'local')
 *
 * @example
 * ```typescript
 * backgroundAttachment('my-class', 'fixed')
 * backgroundAttachment('my-class', 'scroll')
 * backgroundAttachment('my-class', 'local')
 * ```
 *
 * @public
 */
export function backgroundAttachment(
  selector: ElementSelector,
  attachment: BackgroundAttachment = 'scroll'
): void {
  if (!isDefined(attachment) || !isValidString(attachment)) {
    logError(
      'backgroundAttachment',
      ERROR_MESSAGES.backgroundAttachment.noAttachment,
      'warning'
    )
    applyStyle(selector, 'backgroundAttachment', 'scroll')
    return
  }

  applyStyle(selector, 'backgroundAttachment', attachment)
}
