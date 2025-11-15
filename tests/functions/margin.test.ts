/**
 * Tests for margin function
 * Following TDD approach - tests written FIRST
 */

import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest'
import { margin } from '../../src/functions/margin'

describe('margin', () => {
  beforeEach(() => {
    document.body.innerHTML = ''
  })

  afterEach(() => {
    document.body.innerHTML = ''
  })

  describe('Basic Functionality', () => {
    it('should set margin on all sides', () => {
      const element = document.createElement('div')
      element.className = 'test-margin'
      document.body.appendChild(element)

      margin('test-margin', '20px')

      expect(element.style.margin).toBe('20px')
    })

    it('should set margin using different units', () => {
      const element = document.createElement('div')
      element.className = 'test-units'
      document.body.appendChild(element)

      margin('test-units', '2rem')

      expect(element.style.margin).toBe('2rem')
    })

    it('should set margin using percentage', () => {
      const element = document.createElement('div')
      element.className = 'test-percent'
      document.body.appendChild(element)

      margin('test-percent', '10%')

      expect(element.style.margin).toBe('10%')
    })
  })

  describe('Side-specific Margins', () => {
    it('should set margin-top when side is "top"', () => {
      const element = document.createElement('div')
      element.className = 'test-top'
      document.body.appendChild(element)

      margin('test-top', '15px', 'top')

      expect(element.style.marginTop).toBe('15px')
    })

    it('should set margin-bottom when side is "bottom"', () => {
      const element = document.createElement('div')
      element.className = 'test-bottom'
      document.body.appendChild(element)

      margin('test-bottom', '25px', 'bottom')

      expect(element.style.marginBottom).toBe('25px')
    })

    it('should set margin-left when side is "left"', () => {
      const element = document.createElement('div')
      element.className = 'test-left'
      document.body.appendChild(element)

      margin('test-left', '30px', 'left')

      expect(element.style.marginLeft).toBe('30px')
    })

    it('should set margin-right when side is "right"', () => {
      const element = document.createElement('div')
      element.className = 'test-right'
      document.body.appendChild(element)

      margin('test-right', '35px', 'right')

      expect(element.style.marginRight).toBe('35px')
    })

    it('should set all margins when side is "all"', () => {
      const element = document.createElement('div')
      element.className = 'test-all'
      document.body.appendChild(element)

      margin('test-all', '40px', 'all')

      expect(element.style.margin).toBe('40px')
    })

    it('should default to all sides when side parameter is not provided', () => {
      const element = document.createElement('div')
      element.className = 'test-default'
      document.body.appendChild(element)

      margin('test-default', '50px')

      expect(element.style.margin).toBe('50px')
    })
  })

  describe('Multiple Elements', () => {
    it('should set margin for multiple elements with same class', () => {
      const element1 = document.createElement('div')
      const element2 = document.createElement('div')
      const element3 = document.createElement('div')

      element1.className = 'multi-margin'
      element2.className = 'multi-margin'
      element3.className = 'multi-margin'

      document.body.appendChild(element1)
      document.body.appendChild(element2)
      document.body.appendChild(element3)

      margin('multi-margin', '10px')

      expect(element1.style.margin).toBe('10px')
      expect(element2.style.margin).toBe('10px')
      expect(element3.style.margin).toBe('10px')
    })
  })

  describe('Body Element Support', () => {
    it('should set margin for body element', () => {
      margin('body', '0')

      expect(document.body.style.margin).toBe('0px')
    })

    it('should set specific side margin for body', () => {
      margin('body', '20px', 'top')

      expect(document.body.style.marginTop).toBe('20px')
    })
  })

  describe('Error Handling', () => {
    it('should log error when size is undefined', () => {
      const element = document.createElement('div')
      element.className = 'test-undefined'
      document.body.appendChild(element)

      const consoleSpy = vi.spyOn(console, 'error').mockImplementation(() => {})

      // @ts-expect-error - Testing invalid input
      margin('test-undefined', undefined)

      expect(consoleSpy).toHaveBeenCalled()

      consoleSpy.mockRestore()
    })

    it('should log error when size is empty string', () => {
      const element = document.createElement('div')
      element.className = 'test-empty'
      document.body.appendChild(element)

      const consoleSpy = vi.spyOn(console, 'error').mockImplementation(() => {})

      margin('test-empty', '')

      expect(consoleSpy).toHaveBeenCalled()

      consoleSpy.mockRestore()
    })

    it('should warn when no elements found', () => {
      const consoleSpy = vi.spyOn(console, 'warn').mockImplementation(() => {})

      margin('non-existent', '10px')

      expect(consoleSpy).toHaveBeenCalled()

      consoleSpy.mockRestore()
    })
  })

  describe('Edge Cases', () => {
    it('should handle auto value', () => {
      const element = document.createElement('div')
      element.className = 'test-auto'
      document.body.appendChild(element)

      margin('test-auto', 'auto')

      expect(element.style.margin).toBe('auto')
    })

    it('should handle zero value', () => {
      const element = document.createElement('div')
      element.className = 'test-zero'
      document.body.appendChild(element)

      margin('test-zero', '0')

      expect(element.style.margin).toBe('0px')
    })

    it('should handle negative margins', () => {
      const element = document.createElement('div')
      element.className = 'test-negative'
      document.body.appendChild(element)

      margin('test-negative', '-10px')

      expect(element.style.margin).toBe('-10px')
    })

    it('should overwrite existing margin', () => {
      const element = document.createElement('div')
      element.className = 'test-overwrite'
      element.style.margin = '100px'
      document.body.appendChild(element)

      margin('test-overwrite', '20px')

      expect(element.style.margin).toBe('20px')
    })
  })

  describe('Return Value', () => {
    it('should return void', () => {
      const element = document.createElement('div')
      element.className = 'test-return'
      document.body.appendChild(element)

      const result = margin('test-return', '10px')

      expect(result).toBeUndefined()
    })
  })
})
