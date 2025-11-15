/**
 * Tests for padding function
 * Following TDD approach - tests written FIRST
 */

import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest'
import { padding } from '../../src/functions/padding'

describe('padding', () => {
  beforeEach(() => {
    document.body.innerHTML = ''
  })

  afterEach(() => {
    document.body.innerHTML = ''
  })

  describe('Basic Functionality', () => {
    it('should set padding on all sides', () => {
      const element = document.createElement('div')
      element.className = 'test-padding'
      document.body.appendChild(element)

      padding('test-padding', '20px')

      expect(element.style.padding).toBe('20px')
    })

    it('should set padding using different units', () => {
      const element = document.createElement('div')
      element.className = 'test-units'
      document.body.appendChild(element)

      padding('test-units', '1.5rem')

      expect(element.style.padding).toBe('1.5rem')
    })

    it('should set padding using percentage', () => {
      const element = document.createElement('div')
      element.className = 'test-percent'
      document.body.appendChild(element)

      padding('test-percent', '5%')

      expect(element.style.padding).toBe('5%')
    })
  })

  describe('Side-specific Padding', () => {
    it('should set padding-top when side is "top"', () => {
      const element = document.createElement('div')
      element.className = 'test-top'
      document.body.appendChild(element)

      padding('test-top', '10px', 'top')

      expect(element.style.paddingTop).toBe('10px')
    })

    it('should set padding-bottom when side is "bottom"', () => {
      const element = document.createElement('div')
      element.className = 'test-bottom'
      document.body.appendChild(element)

      padding('test-bottom', '20px', 'bottom')

      expect(element.style.paddingBottom).toBe('20px')
    })

    it('should set padding-left when side is "left"', () => {
      const element = document.createElement('div')
      element.className = 'test-left'
      document.body.appendChild(element)

      padding('test-left', '30px', 'left')

      expect(element.style.paddingLeft).toBe('30px')
    })

    it('should set padding-right when side is "right"', () => {
      const element = document.createElement('div')
      element.className = 'test-right'
      document.body.appendChild(element)

      padding('test-right', '40px', 'right')

      expect(element.style.paddingRight).toBe('40px')
    })

    it('should set all padding when side is "all"', () => {
      const element = document.createElement('div')
      element.className = 'test-all'
      document.body.appendChild(element)

      padding('test-all', '50px', 'all')

      expect(element.style.padding).toBe('50px')
    })

    it('should default to all sides when side parameter is not provided', () => {
      const element = document.createElement('div')
      element.className = 'test-default'
      document.body.appendChild(element)

      padding('test-default', '60px')

      expect(element.style.padding).toBe('60px')
    })
  })

  describe('Multiple Elements', () => {
    it('should set padding for multiple elements with same class', () => {
      const element1 = document.createElement('div')
      const element2 = document.createElement('div')
      const element3 = document.createElement('div')

      element1.className = 'multi-padding'
      element2.className = 'multi-padding'
      element3.className = 'multi-padding'

      document.body.appendChild(element1)
      document.body.appendChild(element2)
      document.body.appendChild(element3)

      padding('multi-padding', '15px')

      expect(element1.style.padding).toBe('15px')
      expect(element2.style.padding).toBe('15px')
      expect(element3.style.padding).toBe('15px')
    })
  })

  describe('Body Element Support', () => {
    it('should set padding for body element', () => {
      padding('body', '0')

      expect(document.body.style.padding).toBe('0px')
    })

    it('should set specific side padding for body', () => {
      padding('body', '25px', 'left')

      expect(document.body.style.paddingLeft).toBe('25px')
    })
  })

  describe('Error Handling', () => {
    it('should log error when size is undefined', () => {
      const element = document.createElement('div')
      element.className = 'test-undefined'
      document.body.appendChild(element)

      const consoleSpy = vi.spyOn(console, 'error').mockImplementation(() => {})

      // @ts-expect-error - Testing invalid input
      padding('test-undefined', undefined)

      expect(consoleSpy).toHaveBeenCalled()

      consoleSpy.mockRestore()
    })

    it('should log error when size is empty string', () => {
      const element = document.createElement('div')
      element.className = 'test-empty'
      document.body.appendChild(element)

      const consoleSpy = vi.spyOn(console, 'error').mockImplementation(() => {})

      padding('test-empty', '')

      expect(consoleSpy).toHaveBeenCalled()

      consoleSpy.mockRestore()
    })

    it('should warn when no elements found', () => {
      const consoleSpy = vi.spyOn(console, 'warn').mockImplementation(() => {})

      padding('non-existent', '10px')

      expect(consoleSpy).toHaveBeenCalled()

      consoleSpy.mockRestore()
    })
  })

  describe('Edge Cases', () => {
    it('should handle zero value', () => {
      const element = document.createElement('div')
      element.className = 'test-zero'
      document.body.appendChild(element)

      padding('test-zero', '0')

      expect(element.style.padding).toBe('0px')
    })

    it('should overwrite existing padding', () => {
      const element = document.createElement('div')
      element.className = 'test-overwrite'
      element.style.padding = '100px'
      document.body.appendChild(element)

      padding('test-overwrite', '20px')

      expect(element.style.padding).toBe('20px')
    })

    it('should handle em units', () => {
      const element = document.createElement('div')
      element.className = 'test-em'
      document.body.appendChild(element)

      padding('test-em', '2em')

      expect(element.style.padding).toBe('2em')
    })
  })

  describe('Return Value', () => {
    it('should return void', () => {
      const element = document.createElement('div')
      element.className = 'test-return'
      document.body.appendChild(element)

      const result = padding('test-return', '10px')

      expect(result).toBeUndefined()
    })
  })
})
