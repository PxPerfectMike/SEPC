/**
 * Tests for outline function
 */

import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest'
import { outline } from '../../src/functions/outline'

describe('outline', () => {
  beforeEach(() => {
    document.body.innerHTML = ''
  })

  afterEach(() => {
    document.body.innerHTML = ''
  })

  describe('Basic Functionality', () => {
    it('should set outline with size, color, and style', () => {
      const element = document.createElement('div')
      element.className = 'test-outline'
      document.body.appendChild(element)

      outline('test-outline', '2px', 'red', 'solid')

      // happy-dom reorders to color-style-width
      expect(element.style.outline).toBe('red solid 2px')
    })

    it('should set outline with only size', () => {
      const element = document.createElement('div')
      element.className = 'test-size-only'
      document.body.appendChild(element)

      const consoleSpy = vi.spyOn(console, 'warn').mockImplementation(() => {})

      outline('test-size-only', '3px')

      expect(element.style.outlineWidth).toBe('3px')

      consoleSpy.mockRestore()
    })
  })

  describe('Outline Styles', () => {
    it('should set solid outline', () => {
      const element = document.createElement('div')
      element.className = 'test-solid'
      document.body.appendChild(element)

      outline('test-solid', '1px', 'black', 'solid')

      expect(element.style.outline).toBe('black solid 1px')
    })

    it('should set dashed outline', () => {
      const element = document.createElement('div')
      element.className = 'test-dashed'
      document.body.appendChild(element)

      outline('test-dashed', '2px', 'blue', 'dashed')

      expect(element.style.outline).toBe('blue dashed 2px')
    })

    it('should set dotted outline', () => {
      const element = document.createElement('div')
      element.className = 'test-dotted'
      document.body.appendChild(element)

      outline('test-dotted', '1px', 'green', 'dotted')

      expect(element.style.outline).toBe('green dotted 1px')
    })
  })

  describe('Multiple Elements', () => {
    it('should set outline for multiple elements', () => {
      const el1 = document.createElement('div')
      const el2 = document.createElement('div')

      el1.className = 'multi-outline'
      el2.className = 'multi-outline'

      document.body.appendChild(el1)
      document.body.appendChild(el2)

      outline('multi-outline', '2px', 'purple', 'solid')

      expect(el1.style.outline).toBe('purple solid 2px')
      expect(el2.style.outline).toBe('purple solid 2px')
    })
  })

  describe('Body Element Support', () => {
    it('should set outline for body', () => {
      outline('body', '3px', 'orange', 'dashed')

      expect(document.body.style.outline).toBe('orange dashed 3px')
    })
  })

  describe('Error Handling', () => {
    it('should log error when size is undefined', () => {
      const element = document.createElement('div')
      element.className = 'test-no-size'
      document.body.appendChild(element)

      const consoleSpy = vi.spyOn(console, 'error').mockImplementation(() => {})

      // @ts-expect-error - Testing invalid input
      outline('test-no-size', undefined)

      expect(consoleSpy).toHaveBeenCalled()

      consoleSpy.mockRestore()
    })

    it('should warn when no elements found', () => {
      const consoleSpy = vi.spyOn(console, 'warn').mockImplementation(() => {})

      outline('non-existent', '1px', 'black', 'solid')

      expect(consoleSpy).toHaveBeenCalled()

      consoleSpy.mockRestore()
    })
  })

  describe('Return Value', () => {
    it('should return void', () => {
      const element = document.createElement('div')
      element.className = 'test-return'
      document.body.appendChild(element)

      const result = outline('test-return', '1px', 'black', 'solid')

      expect(result).toBeUndefined()
    })
  })
})
