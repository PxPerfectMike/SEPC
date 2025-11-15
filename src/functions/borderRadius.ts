/**
 * Border Radius Function
 *
 * Sets border radius for all elements matching the specified selector.
 */

import type { ElementSelector, CSSSize, BorderRadiusPreset } from '../types'
import { applyStyle, isDefined, isValidString } from '../utils/dom'
import { logError, ERROR_MESSAGES } from '../utils/errorMessages'

/**
 * Preset values for common border radius styles
 */
const BORDER_RADIUS_PRESETS: Record<BorderRadiusPreset, string> = {
  circle: '50%',
  pill: '9999px',
  rounded: '0.25rem',
  'rounded-sm': '0.125rem',
  'rounded-md': '0.375rem',
  'rounded-lg': '0.5rem',
  'rounded-xl': '0.75rem',
  'rounded-2xl': '1rem',
}

/**
 * Sets the border radius for all elements with the specified class name.
 * Supports both custom values and convenient presets.
 *
 * @param selector - The element selector (class name without dot, or 'body')
 * @param radius - Border radius value (with units) or preset name
 *
 * @example
 * ```typescript
 * // Custom values
 * borderRadius('my-class', '10px')
 * borderRadius('my-class', '50%')
 * borderRadius('my-class', '1rem')
 *
 * // Presets
 * borderRadius('my-class', 'circle')      // 50%
 * borderRadius('my-class', 'pill')        // 9999px
 * borderRadius('my-class', 'rounded')     // 0.25rem
 * borderRadius('my-class', 'rounded-sm')  // 0.125rem
 * borderRadius('my-class', 'rounded-md')  // 0.375rem
 * borderRadius('my-class', 'rounded-lg')  // 0.5rem
 * borderRadius('my-class', 'rounded-xl')  // 0.75rem
 * borderRadius('my-class', 'rounded-2xl') // 1rem
 * ```
 *
 * @public
 */
export function borderRadius(
  selector: ElementSelector,
  radius: CSSSize | BorderRadiusPreset
): void {
  // Validate radius parameter
  if (!isDefined(radius) || !isValidString(radius)) {
    logError('borderRadius', ERROR_MESSAGES.borderRadius.noRadius, 'warning')
    return
  }

  // Check if radius is a preset
  const finalRadius = BORDER_RADIUS_PRESETS[radius as BorderRadiusPreset] || radius

  // Apply the border radius
  applyStyle(selector, 'borderRadius', finalRadius)
}
