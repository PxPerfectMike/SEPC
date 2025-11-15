/**
 * Tests for backgroundColor function
 * Following TDD approach - tests written FIRST
 */

import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest'
import { backgroundColor } from '../../src/functions/backgroundColor'

describe('backgroundColor', () => {
  // Setup: Create test elements before each test
  beforeEach(() => {
    document.body.innerHTML = ''
  })

  // Cleanup: Remove test elements after each test
  afterEach(() => {
    document.body.innerHTML = ''
  })

  describe('Basic Functionality', () => {
    it('should set background color for a single element', () => {
      // Arrange
      const element = document.createElement('div')
      element.className = 'test-class'
      document.body.appendChild(element)

      // Act
      backgroundColor('test-class', 'red')

      // Assert
      expect(element.style.backgroundColor).toBe('red')
    })

    it('should set background color using hex value', () => {
      const element = document.createElement('div')
      element.className = 'test-hex'
      document.body.appendChild(element)

      backgroundColor('test-hex', '#ff0000')

      // happy-dom doesn't convert to rgb, which is fine
      expect(element.style.backgroundColor).toBe('#ff0000')
    })

    it('should set background color using rgb value', () => {
      const element = document.createElement('div')
      element.className = 'test-rgb'
      document.body.appendChild(element)

      backgroundColor('test-rgb', 'rgb(255, 0, 0)')

      expect(element.style.backgroundColor).toBe('rgb(255, 0, 0)')
    })

    it('should set background color using rgba value', () => {
      const element = document.createElement('div')
      element.className = 'test-rgba'
      document.body.appendChild(element)

      backgroundColor('test-rgba', 'rgba(255, 0, 0, 0.5)')

      expect(element.style.backgroundColor).toBe('rgba(255, 0, 0, 0.5)')
    })
  })

  describe('Multiple Elements', () => {
    it('should set background color for multiple elements with same class', () => {
      // Arrange
      const element1 = document.createElement('div')
      const element2 = document.createElement('div')
      const element3 = document.createElement('div')

      element1.className = 'multi-test'
      element2.className = 'multi-test'
      element3.className = 'multi-test'

      document.body.appendChild(element1)
      document.body.appendChild(element2)
      document.body.appendChild(element3)

      // Act
      backgroundColor('multi-test', 'blue')

      // Assert
      expect(element1.style.backgroundColor).toBe('blue')
      expect(element2.style.backgroundColor).toBe('blue')
      expect(element3.style.backgroundColor).toBe('blue')
    })

    it('should not affect elements without the specified class', () => {
      const targetElement = document.createElement('div')
      const otherElement = document.createElement('div')

      targetElement.className = 'target'
      otherElement.className = 'other'

      document.body.appendChild(targetElement)
      document.body.appendChild(otherElement)

      backgroundColor('target', 'green')

      expect(targetElement.style.backgroundColor).toBe('green')
      expect(otherElement.style.backgroundColor).toBe('')
    })
  })

  describe('Body Element Support', () => {
    it('should set background color for body element when selector is "body"', () => {
      backgroundColor('body', 'yellow')

      expect(document.body.style.backgroundColor).toBe('yellow')
    })

    it('should handle "BODY" (uppercase) selector', () => {
      backgroundColor('BODY', 'purple')

      expect(document.body.style.backgroundColor).toBe('purple')
    })

    it('should handle "Body" (mixed case) selector', () => {
      backgroundColor('Body', 'orange')

      expect(document.body.style.backgroundColor).toBe('orange')
    })
  })

  describe('Error Handling', () => {
    it('should handle undefined color gracefully', () => {
      const element = document.createElement('div')
      element.className = 'test-undefined'
      document.body.appendChild(element)

      const consoleSpy = vi.spyOn(console, 'error').mockImplementation(() => {})

      // @ts-expect-error - Testing invalid input
      backgroundColor('test-undefined', undefined)

      expect(consoleSpy).toHaveBeenCalled()
      expect(element.style.backgroundColor).toBe('transparent')

      consoleSpy.mockRestore()
    })

    it('should handle empty string color', () => {
      const element = document.createElement('div')
      element.className = 'test-empty'
      document.body.appendChild(element)

      const consoleSpy = vi.spyOn(console, 'error').mockImplementation(() => {})

      backgroundColor('test-empty', '')

      expect(consoleSpy).toHaveBeenCalled()
      expect(element.style.backgroundColor).toBe('transparent')

      consoleSpy.mockRestore()
    })

    it('should warn when no elements found with selector', () => {
      const consoleSpy = vi.spyOn(console, 'warn').mockImplementation(() => {})

      backgroundColor('non-existent-class', 'red')

      expect(consoleSpy).toHaveBeenCalled()

      consoleSpy.mockRestore()
    })

    it('should handle null selector gracefully', () => {
      const consoleSpy = vi.spyOn(console, 'error').mockImplementation(() => {})

      // @ts-expect-error - Testing invalid input
      backgroundColor(null, 'red')

      expect(consoleSpy).toHaveBeenCalled()

      consoleSpy.mockRestore()
    })

    it('should handle empty selector gracefully', () => {
      const consoleSpy = vi.spyOn(console, 'error').mockImplementation(() => {})

      backgroundColor('', 'red')

      expect(consoleSpy).toHaveBeenCalled()

      consoleSpy.mockRestore()
    })
  })

  describe('Edge Cases', () => {
    it('should handle transparent color', () => {
      const element = document.createElement('div')
      element.className = 'test-transparent'
      document.body.appendChild(element)

      backgroundColor('test-transparent', 'transparent')

      expect(element.style.backgroundColor).toBe('transparent')
    })

    it('should handle currentColor keyword', () => {
      const element = document.createElement('div')
      element.className = 'test-current'
      document.body.appendChild(element)

      backgroundColor('test-current', 'currentColor')

      expect(element.style.backgroundColor).toBe('currentcolor')
    })

    it('should overwrite existing background color', () => {
      const element = document.createElement('div')
      element.className = 'test-overwrite'
      element.style.backgroundColor = 'blue'
      document.body.appendChild(element)

      backgroundColor('test-overwrite', 'red')

      expect(element.style.backgroundColor).toBe('red')
    })

    it('should handle HSL colors', () => {
      const element = document.createElement('div')
      element.className = 'test-hsl'
      document.body.appendChild(element)

      backgroundColor('test-hsl', 'hsl(120, 100%, 50%)')

      // happy-dom doesn't convert to rgb, which is fine
      expect(element.style.backgroundColor).toBe('hsl(120, 100%, 50%)')
    })
  })

  describe('Return Value', () => {
    it('should return void', () => {
      const element = document.createElement('div')
      element.className = 'test-return'
      document.body.appendChild(element)

      const result = backgroundColor('test-return', 'red')

      expect(result).toBeUndefined()
    })
  })
})
