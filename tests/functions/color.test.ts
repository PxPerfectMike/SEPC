/**
 * Tests for color function
 * Following TDD approach - tests written FIRST
 */

import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest'
import { color } from '../../src/functions/color'

describe('color', () => {
  beforeEach(() => {
    document.body.innerHTML = ''
  })

  afterEach(() => {
    document.body.innerHTML = ''
  })

  describe('Basic Functionality', () => {
    it('should set text color for a single element', () => {
      const element = document.createElement('div')
      element.className = 'test-class'
      element.textContent = 'Test text'
      document.body.appendChild(element)

      color('test-class', 'red')

      expect(element.style.color).toBe('red')
    })

    it('should set text color using hex value', () => {
      const element = document.createElement('div')
      element.className = 'test-hex'
      document.body.appendChild(element)

      color('test-hex', '#0000ff')

      expect(element.style.color).toBe('#0000ff')
    })

    it('should set text color using rgb value', () => {
      const element = document.createElement('div')
      element.className = 'test-rgb'
      document.body.appendChild(element)

      color('test-rgb', 'rgb(0, 128, 255)')

      expect(element.style.color).toBe('rgb(0, 128, 255)')
    })

    it('should set text color using rgba value with transparency', () => {
      const element = document.createElement('div')
      element.className = 'test-rgba'
      document.body.appendChild(element)

      color('test-rgba', 'rgba(0, 128, 255, 0.7)')

      expect(element.style.color).toBe('rgba(0, 128, 255, 0.7)')
    })
  })

  describe('Multiple Elements', () => {
    it('should set color for multiple elements with same class', () => {
      const element1 = document.createElement('p')
      const element2 = document.createElement('span')
      const element3 = document.createElement('div')

      element1.className = 'multi-color'
      element2.className = 'multi-color'
      element3.className = 'multi-color'

      document.body.appendChild(element1)
      document.body.appendChild(element2)
      document.body.appendChild(element3)

      color('multi-color', 'green')

      expect(element1.style.color).toBe('green')
      expect(element2.style.color).toBe('green')
      expect(element3.style.color).toBe('green')
    })

    it('should not affect elements without the specified class', () => {
      const targetElement = document.createElement('div')
      const otherElement = document.createElement('div')

      targetElement.className = 'target'
      otherElement.className = 'other'

      document.body.appendChild(targetElement)
      document.body.appendChild(otherElement)

      color('target', 'purple')

      expect(targetElement.style.color).toBe('purple')
      expect(otherElement.style.color).toBe('')
    })
  })

  describe('Body Element Support', () => {
    it('should set text color for body element when selector is "body"', () => {
      color('body', '#333333')

      expect(document.body.style.color).toBe('#333333')
    })

    it('should handle "BODY" (uppercase) selector', () => {
      color('BODY', 'black')

      expect(document.body.style.color).toBe('black')
    })
  })

  describe('Error Handling', () => {
    it('should log error when color is undefined', () => {
      const element = document.createElement('div')
      element.className = 'test-undefined'
      document.body.appendChild(element)

      const consoleSpy = vi.spyOn(console, 'error').mockImplementation(() => {})

      // @ts-expect-error - Testing invalid input
      color('test-undefined', undefined)

      expect(consoleSpy).toHaveBeenCalled()
      expect(consoleSpy).toHaveBeenCalledWith(
        expect.stringContaining('No color defined')
      )

      consoleSpy.mockRestore()
    })

    it('should log error when color is empty string', () => {
      const element = document.createElement('div')
      element.className = 'test-empty'
      document.body.appendChild(element)

      const consoleSpy = vi.spyOn(console, 'error').mockImplementation(() => {})

      color('test-empty', '')

      expect(consoleSpy).toHaveBeenCalled()

      consoleSpy.mockRestore()
    })

    it('should warn when no elements found with selector', () => {
      const consoleSpy = vi.spyOn(console, 'warn').mockImplementation(() => {})

      color('non-existent-class', 'red')

      expect(consoleSpy).toHaveBeenCalled()

      consoleSpy.mockRestore()
    })

    it('should handle empty selector gracefully', () => {
      const consoleSpy = vi.spyOn(console, 'error').mockImplementation(() => {})

      color('', 'red')

      expect(consoleSpy).toHaveBeenCalled()

      consoleSpy.mockRestore()
    })
  })

  describe('Edge Cases', () => {
    it('should handle inherit keyword', () => {
      const element = document.createElement('div')
      element.className = 'test-inherit'
      document.body.appendChild(element)

      color('test-inherit', 'inherit')

      expect(element.style.color).toBe('inherit')
    })

    it('should handle currentColor keyword', () => {
      const element = document.createElement('div')
      element.className = 'test-current'
      document.body.appendChild(element)

      color('test-current', 'currentColor')

      expect(element.style.color).toBe('currentcolor')
    })

    it('should overwrite existing color', () => {
      const element = document.createElement('div')
      element.className = 'test-overwrite'
      element.style.color = 'blue'
      document.body.appendChild(element)

      color('test-overwrite', 'red')

      expect(element.style.color).toBe('red')
    })

    it('should handle named colors', () => {
      const element = document.createElement('div')
      element.className = 'test-named'
      document.body.appendChild(element)

      color('test-named', 'cornflowerblue')

      expect(element.style.color).toBe('cornflowerblue')
    })
  })

  describe('Return Value', () => {
    it('should return void', () => {
      const element = document.createElement('div')
      element.className = 'test-return'
      document.body.appendChild(element)

      const result = color('test-return', 'red')

      expect(result).toBeUndefined()
    })
  })
})
