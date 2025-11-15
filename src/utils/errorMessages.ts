/**
 * Error message definitions for SEPC v2.0
 */

import type { ErrorLevel } from '../types'

export const ERROR_PREFIX = 'SEPC v2.0'

/**
 * Error messages organized by feature
 */
export const ERROR_MESSAGES = {
  backgroundColor: {
    noColor: 'No background color defined, defaulting to transparent',
    invalidColor: 'Invalid background color value',
  },
  color: {
    noColor: 'No color defined',
    invalidColor: 'Invalid color value',
  },
  dimension: {
    noWidth: 'No width defined',
    noHeight: 'No height defined',
    noDimensions: 'No width or height defined',
    invalidWidth: 'Invalid width value',
    invalidHeight: 'Invalid height value',
  },
  margin: {
    noSize: 'No margin size defined',
    invalidSize: 'Invalid margin size',
  },
  padding: {
    noSize: 'No padding size defined',
    invalidSize: 'Invalid padding size',
  },
  border: {
    noSize: 'No border size defined, defaulting to 1px',
    invalidSize: 'Invalid border size: cannot be less than 0',
    noType: 'No border type defined, defaulting to solid',
    noColor: 'No border color defined, defaulting to currentColor',
  },
  outline: {
    noSize: 'No outline size defined, defaulting to 1px',
    invalidSize: 'Invalid outline size',
    noType: 'No outline type defined, defaulting to solid',
  },
  borderRadius: {
    noRadius: 'Radius is set to 0px or is not defined',
    radiusLessThan0: 'Radius is less than 0px',
    invalidPreset: 'Invalid border radius preset',
  },
  textAlign: {
    noPlacement: "No text align placement defined, defaulting to 'left'",
    invalidPlacement: 'Invalid text align placement',
  },
  backgroundImage: {
    noImage: 'No background image URL defined',
    invalidURL: 'Invalid background image URL',
  },
  backgroundRepeat: {
    noRepeat: "No repeat value defined, defaulting to 'no-repeat'",
    invalidRepeat: 'Invalid background repeat value',
  },
  backgroundAttachment: {
    noAttachment: "No attachment value defined, defaulting to 'scroll'",
    invalidAttachment: 'Invalid background attachment value',
  },
  backgroundPosition: {
    noPosition: 'No position value defined, defaulting to center',
    invalidPosition: 'Invalid position value, defaulting to center',
  },
  minMaxSize: {
    noSize: 'No size value defined for min/max size',
    invalidSize: 'Invalid size value for min/max size',
  },
  element: {
    noElements: 'No elements found with the specified selector',
    invalidSelector: 'Invalid element selector',
  },
} as const

/**
 * Log an error message to the console
 */
export function logError(
  feature: string,
  message: string,
  level: ErrorLevel = 'error'
): void {
  const formattedMessage = `${ERROR_PREFIX} - ${feature}: ${message}`

  switch (level) {
    case 'error':
      console.error(formattedMessage)
      break
    case 'warning':
      console.warn(formattedMessage)
      break
    case 'info':
      console.log(formattedMessage)
      break
  }
}

/**
 * Create a formatted error message
 */
export function createErrorMessage(feature: string, message: string): string {
  return `${ERROR_PREFIX} - ${feature}: ${message}`
}
