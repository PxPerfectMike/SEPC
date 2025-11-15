/**
 * Background Image Function
 *
 * Sets background image for all elements matching the specified selector.
 */

import type { ElementSelector } from '../types'
import { applyStyle, isDefined, isValidString } from '../utils/dom'
import { logError, ERROR_MESSAGES } from '../utils/errorMessages'

/**
 * Sets the background image for all elements with the specified class name.
 *
 * @param selector - The element selector (class name without dot, or 'body')
 * @param url - The image URL or path. Automatically wraps in url() if not already wrapped.
 *
 * @example
 * ```typescript
 * // Absolute URL
 * backgroundImage('my-class', 'https://example.com/image.jpg')
 *
 * // Relative path
 * backgroundImage('my-class', '/images/bg.png')
 *
 * // Already wrapped (will not double-wrap)
 * backgroundImage('my-class', 'url(https://example.com/bg.jpg)')
 *
 * // Remove background image
 * backgroundImage('my-class', 'none')
 * ```
 *
 * @public
 */
export function backgroundImage(selector: ElementSelector, url: string): void {
  // Validate url parameter
  if (!isDefined(url) || !isValidString(url)) {
    logError('backgroundImage', ERROR_MESSAGES.backgroundImage.noImage, 'error')
    return
  }

  // Handle 'none' special case
  if (url === 'none') {
    applyStyle(selector, 'backgroundImage', 'none')
    return
  }

  // Wrap in url() if not already wrapped
  const finalUrl = url.startsWith('url(') ? url : `url(${url})`

  // Apply the background image
  applyStyle(selector, 'backgroundImage', finalUrl)
}
