/**
 * Tests for dimension function
 * Following TDD approach - tests written FIRST
 */

import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest'
import { dimension } from '../../src/functions/dimension'

describe('dimension', () => {
  beforeEach(() => {
    document.body.innerHTML = ''
  })

  afterEach(() => {
    document.body.innerHTML = ''
  })

  describe('Basic Functionality', () => {
    it('should set both width and height', () => {
      const element = document.createElement('div')
      element.className = 'test-dimensions'
      document.body.appendChild(element)

      dimension('test-dimensions', '200px', '100px')

      expect(element.style.width).toBe('200px')
      expect(element.style.height).toBe('100px')
    })

    it('should set width only when height is not provided', () => {
      const element = document.createElement('div')
      element.className = 'test-width-only'
      document.body.appendChild(element)

      dimension('test-width-only', '300px')

      expect(element.style.width).toBe('300px')
      expect(element.style.height).toBe('')
    })

    it('should set dimensions using different units', () => {
      const element = document.createElement('div')
      element.className = 'test-units'
      document.body.appendChild(element)

      dimension('test-units', '50%', '10rem')

      expect(element.style.width).toBe('50%')
      expect(element.style.height).toBe('10rem')
    })

    it('should set dimensions using viewport units', () => {
      const element = document.createElement('div')
      element.className = 'test-viewport'
      document.body.appendChild(element)

      dimension('test-viewport', '100vw', '50vh')

      expect(element.style.width).toBe('100vw')
      expect(element.style.height).toBe('50vh')
    })
  })

  describe('Multiple Elements', () => {
    it('should set dimensions for multiple elements with same class', () => {
      const element1 = document.createElement('div')
      const element2 = document.createElement('div')
      const element3 = document.createElement('div')

      element1.className = 'multi-dim'
      element2.className = 'multi-dim'
      element3.className = 'multi-dim'

      document.body.appendChild(element1)
      document.body.appendChild(element2)
      document.body.appendChild(element3)

      dimension('multi-dim', '150px', '150px')

      expect(element1.style.width).toBe('150px')
      expect(element1.style.height).toBe('150px')
      expect(element2.style.width).toBe('150px')
      expect(element2.style.height).toBe('150px')
      expect(element3.style.width).toBe('150px')
      expect(element3.style.height).toBe('150px')
    })
  })

  describe('Body Element Support', () => {
    it('should set dimensions for body element', () => {
      dimension('body', '100%', '100%')

      expect(document.body.style.width).toBe('100%')
      expect(document.body.style.height).toBe('100%')
    })
  })

  describe('Error Handling', () => {
    it('should warn when width is undefined', () => {
      const element = document.createElement('div')
      element.className = 'test-no-width'
      document.body.appendChild(element)

      const consoleSpy = vi.spyOn(console, 'warn').mockImplementation(() => {})

      // @ts-expect-error - Testing invalid input
      dimension('test-no-width', undefined, '100px')

      expect(consoleSpy).toHaveBeenCalledWith(
        expect.stringContaining('No width defined')
      )

      consoleSpy.mockRestore()
    })

    it('should warn when both width and height are undefined', () => {
      const element = document.createElement('div')
      element.className = 'test-no-dims'
      document.body.appendChild(element)

      const consoleSpy = vi.spyOn(console, 'warn').mockImplementation(() => {})

      // @ts-expect-error - Testing invalid input
      dimension('test-no-dims', undefined, undefined)

      expect(consoleSpy).toHaveBeenCalled()

      consoleSpy.mockRestore()
    })

    it('should allow width without height', () => {
      const element = document.createElement('div')
      element.className = 'test-width-only'
      document.body.appendChild(element)

      const consoleSpy = vi.spyOn(console, 'warn').mockImplementation(() => {})

      dimension('test-width-only', '200px')

      // Should not warn when only width is provided
      expect(consoleSpy).not.toHaveBeenCalled()
      expect(element.style.width).toBe('200px')

      consoleSpy.mockRestore()
    })

    it('should warn when no elements found', () => {
      const consoleSpy = vi.spyOn(console, 'warn').mockImplementation(() => {})

      dimension('non-existent', '100px', '100px')

      expect(consoleSpy).toHaveBeenCalled()

      consoleSpy.mockRestore()
    })
  })

  describe('Edge Cases', () => {
    it('should handle auto value', () => {
      const element = document.createElement('div')
      element.className = 'test-auto'
      document.body.appendChild(element)

      dimension('test-auto', 'auto', 'auto')

      expect(element.style.width).toBe('auto')
      expect(element.style.height).toBe('auto')
    })

    it('should handle zero values', () => {
      const element = document.createElement('div')
      element.className = 'test-zero'
      document.body.appendChild(element)

      dimension('test-zero', '0', '0')

      expect(element.style.width).toBe('0px')
      expect(element.style.height).toBe('0px')
    })

    it('should overwrite existing dimensions', () => {
      const element = document.createElement('div')
      element.className = 'test-overwrite'
      element.style.width = '100px'
      element.style.height = '100px'
      document.body.appendChild(element)

      dimension('test-overwrite', '200px', '300px')

      expect(element.style.width).toBe('200px')
      expect(element.style.height).toBe('300px')
    })

    it('should handle calc() values', () => {
      const element = document.createElement('div')
      element.className = 'test-calc'
      document.body.appendChild(element)

      dimension('test-calc', 'calc(100% - 20px)', 'calc(50vh - 10px)')

      expect(element.style.width).toBe('calc(100% - 20px)')
      expect(element.style.height).toBe('calc(50vh - 10px)')
    })

    it('should handle mixed units', () => {
      const element = document.createElement('div')
      element.className = 'test-mixed'
      document.body.appendChild(element)

      dimension('test-mixed', '100px', '5em')

      expect(element.style.width).toBe('100px')
      expect(element.style.height).toBe('5em')
    })
  })

  describe('Return Value', () => {
    it('should return void', () => {
      const element = document.createElement('div')
      element.className = 'test-return'
      document.body.appendChild(element)

      const result = dimension('test-return', '100px', '100px')

      expect(result).toBeUndefined()
    })
  })
})
