/**
 * Tests for borderRadius function
 */

import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest'
import { borderRadius } from '../../src/functions/borderRadius'

describe('borderRadius', () => {
  beforeEach(() => {
    document.body.innerHTML = ''
  })

  afterEach(() => {
    document.body.innerHTML = ''
  })

  describe('Basic Functionality', () => {
    it('should set border radius with pixel value', () => {
      const element = document.createElement('div')
      element.className = 'test-radius'
      document.body.appendChild(element)

      borderRadius('test-radius', '10px')

      expect(element.style.borderRadius).toBe('10px')
    })

    it('should set border radius with percentage', () => {
      const element = document.createElement('div')
      element.className = 'test-percent'
      document.body.appendChild(element)

      borderRadius('test-percent', '50%')

      expect(element.style.borderRadius).toBe('50%')
    })

    it('should set border radius with rem units', () => {
      const element = document.createElement('div')
      element.className = 'test-rem'
      document.body.appendChild(element)

      borderRadius('test-rem', '1.5rem')

      expect(element.style.borderRadius).toBe('1.5rem')
    })
  })

  describe('Presets', () => {
    it('should apply "circle" preset (50%)', () => {
      const element = document.createElement('div')
      element.className = 'test-circle'
      document.body.appendChild(element)

      borderRadius('test-circle', 'circle')

      expect(element.style.borderRadius).toBe('50%')
    })

    it('should apply "pill" preset (9999px)', () => {
      const element = document.createElement('div')
      element.className = 'test-pill'
      document.body.appendChild(element)

      borderRadius('test-pill', 'pill')

      expect(element.style.borderRadius).toBe('9999px')
    })

    it('should apply "rounded" preset (0.25rem)', () => {
      const element = document.createElement('div')
      element.className = 'test-rounded'
      document.body.appendChild(element)

      borderRadius('test-rounded', 'rounded')

      expect(element.style.borderRadius).toBe('0.25rem')
    })

    it('should apply "rounded-sm" preset (0.125rem)', () => {
      const element = document.createElement('div')
      element.className = 'test-rounded-sm'
      document.body.appendChild(element)

      borderRadius('test-rounded-sm', 'rounded-sm')

      expect(element.style.borderRadius).toBe('0.125rem')
    })

    it('should apply "rounded-md" preset (0.375rem)', () => {
      const element = document.createElement('div')
      element.className = 'test-rounded-md'
      document.body.appendChild(element)

      borderRadius('test-rounded-md', 'rounded-md')

      expect(element.style.borderRadius).toBe('0.375rem')
    })

    it('should apply "rounded-lg" preset (0.5rem)', () => {
      const element = document.createElement('div')
      element.className = 'test-rounded-lg'
      document.body.appendChild(element)

      borderRadius('test-rounded-lg', 'rounded-lg')

      expect(element.style.borderRadius).toBe('0.5rem')
    })

    it('should apply "rounded-xl" preset (0.75rem)', () => {
      const element = document.createElement('div')
      element.className = 'test-rounded-xl'
      document.body.appendChild(element)

      borderRadius('test-rounded-xl', 'rounded-xl')

      expect(element.style.borderRadius).toBe('0.75rem')
    })

    it('should apply "rounded-2xl" preset (1rem)', () => {
      const element = document.createElement('div')
      element.className = 'test-rounded-2xl'
      document.body.appendChild(element)

      borderRadius('test-rounded-2xl', 'rounded-2xl')

      expect(element.style.borderRadius).toBe('1rem')
    })
  })

  describe('Multiple Elements', () => {
    it('should set border radius for multiple elements', () => {
      const el1 = document.createElement('div')
      const el2 = document.createElement('div')

      el1.className = 'multi-radius'
      el2.className = 'multi-radius'

      document.body.appendChild(el1)
      document.body.appendChild(el2)

      borderRadius('multi-radius', '15px')

      expect(el1.style.borderRadius).toBe('15px')
      expect(el2.style.borderRadius).toBe('15px')
    })
  })

  describe('Body Element Support', () => {
    it('should set border radius for body', () => {
      borderRadius('body', '20px')

      expect(document.body.style.borderRadius).toBe('20px')
    })
  })

  describe('Error Handling', () => {
    it('should log error when radius is undefined', () => {
      const element = document.createElement('div')
      element.className = 'test-undefined'
      document.body.appendChild(element)

      const consoleSpy = vi.spyOn(console, 'warn').mockImplementation(() => {})

      // @ts-expect-error - Testing invalid input
      borderRadius('test-undefined', undefined)

      expect(consoleSpy).toHaveBeenCalled()

      consoleSpy.mockRestore()
    })

    it('should warn when no elements found', () => {
      const consoleSpy = vi.spyOn(console, 'warn').mockImplementation(() => {})

      borderRadius('non-existent', '10px')

      expect(consoleSpy).toHaveBeenCalled()

      consoleSpy.mockRestore()
    })
  })

  describe('Edge Cases', () => {
    it('should handle zero radius', () => {
      const element = document.createElement('div')
      element.className = 'test-zero'
      document.body.appendChild(element)

      borderRadius('test-zero', '0')

      expect(element.style.borderRadius).toBe('0px')
    })

    it('should overwrite existing border radius', () => {
      const element = document.createElement('div')
      element.className = 'test-overwrite'
      element.style.borderRadius = '100px'
      document.body.appendChild(element)

      borderRadius('test-overwrite', '5px')

      expect(element.style.borderRadius).toBe('5px')
    })
  })

  describe('Return Value', () => {
    it('should return void', () => {
      const element = document.createElement('div')
      element.className = 'test-return'
      document.body.appendChild(element)

      const result = borderRadius('test-return', '10px')

      expect(result).toBeUndefined()
    })
  })
})
