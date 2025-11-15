/**
 * Tests for border function
 */

import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest'
import { border } from '../../src/functions/border'

describe('border', () => {
  beforeEach(() => {
    document.body.innerHTML = ''
  })

  afterEach(() => {
    document.body.innerHTML = ''
  })

  describe('Basic Functionality', () => {
    it('should set border with size, color, and style', () => {
      const element = document.createElement('div')
      element.className = 'test-border'
      document.body.appendChild(element)

      border('test-border', '2px', 'black', 'solid')

      expect(element.style.border).toBe('2px solid black')
    })

    it('should set border with only size (defaults)', () => {
      const element = document.createElement('div')
      element.className = 'test-size-only'
      document.body.appendChild(element)

      const consoleSpy = vi.spyOn(console, 'warn').mockImplementation(() => {})

      border('test-size-only', '3px')

      // Should apply size with defaults
      expect(element.style.borderWidth).toBe('3px')

      consoleSpy.mockRestore()
    })

    it('should set border with size and color', () => {
      const element = document.createElement('div')
      element.className = 'test-size-color'
      document.body.appendChild(element)

      const consoleSpy = vi.spyOn(console, 'warn').mockImplementation(() => {})

      border('test-size-color', '1px', 'red')

      expect(element.style.borderWidth).toBe('1px')
      expect(element.style.borderColor).toBe('red')

      consoleSpy.mockRestore()
    })
  })

  describe('Border Styles', () => {
    it('should set solid border', () => {
      const element = document.createElement('div')
      element.className = 'test-solid'
      document.body.appendChild(element)

      border('test-solid', '1px', 'black', 'solid')

      expect(element.style.border).toBe('1px solid black')
    })

    it('should set dashed border', () => {
      const element = document.createElement('div')
      element.className = 'test-dashed'
      document.body.appendChild(element)

      border('test-dashed', '2px', 'blue', 'dashed')

      expect(element.style.border).toBe('2px dashed blue')
    })

    it('should set dotted border', () => {
      const element = document.createElement('div')
      element.className = 'test-dotted'
      document.body.appendChild(element)

      border('test-dotted', '1px', 'green', 'dotted')

      expect(element.style.border).toBe('1px dotted green')
    })

    it('should set double border', () => {
      const element = document.createElement('div')
      element.className = 'test-double'
      document.body.appendChild(element)

      border('test-double', '3px', 'red', 'double')

      expect(element.style.border).toBe('3px double red')
    })
  })

  describe('Multiple Elements', () => {
    it('should set border for multiple elements', () => {
      const el1 = document.createElement('div')
      const el2 = document.createElement('div')

      el1.className = 'multi-border'
      el2.className = 'multi-border'

      document.body.appendChild(el1)
      document.body.appendChild(el2)

      border('multi-border', '2px', 'purple', 'solid')

      expect(el1.style.border).toBe('2px solid purple')
      expect(el2.style.border).toBe('2px solid purple')
    })
  })

  describe('Body Element Support', () => {
    it('should set border for body', () => {
      border('body', '5px', 'orange', 'solid')

      expect(document.body.style.border).toBe('5px solid orange')
    })
  })

  describe('Error Handling', () => {
    it('should log error when size is undefined', () => {
      const element = document.createElement('div')
      element.className = 'test-no-size'
      document.body.appendChild(element)

      const consoleSpy = vi.spyOn(console, 'error').mockImplementation(() => {})

      // @ts-expect-error - Testing invalid input
      border('test-no-size', undefined)

      expect(consoleSpy).toHaveBeenCalled()

      consoleSpy.mockRestore()
    })

    it('should warn when no elements found', () => {
      const consoleSpy = vi.spyOn(console, 'warn').mockImplementation(() => {})

      border('non-existent', '1px', 'black', 'solid')

      expect(consoleSpy).toHaveBeenCalled()

      consoleSpy.mockRestore()
    })
  })

  describe('Edge Cases', () => {
    it('should handle zero border', () => {
      const element = document.createElement('div')
      element.className = 'test-zero'
      document.body.appendChild(element)

      border('test-zero', '0', 'black', 'solid')

      expect(element.style.borderWidth).toBe('0px')
    })

    it('should overwrite existing border', () => {
      const element = document.createElement('div')
      element.className = 'test-overwrite'
      element.style.border = '10px solid black'
      document.body.appendChild(element)

      border('test-overwrite', '1px', 'red', 'dashed')

      expect(element.style.border).toBe('1px dashed red')
    })
  })

  describe('Return Value', () => {
    it('should return void', () => {
      const element = document.createElement('div')
      element.className = 'test-return'
      document.body.appendChild(element)

      const result = border('test-return', '1px', 'black', 'solid')

      expect(result).toBeUndefined()
    })
  })
})
