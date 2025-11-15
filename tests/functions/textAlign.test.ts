/**
 * Tests for textAlign function
 */

import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest'
import { textAlign } from '../../src/functions/textAlign'

describe('textAlign', () => {
  beforeEach(() => {
    document.body.innerHTML = ''
  })

  afterEach(() => {
    document.body.innerHTML = ''
  })

  describe('Basic Functionality', () => {
    it('should set text-align to left', () => {
      const element = document.createElement('div')
      element.className = 'test-left'
      document.body.appendChild(element)

      textAlign('test-left', 'left')

      expect(element.style.textAlign).toBe('left')
    })

    it('should set text-align to right', () => {
      const element = document.createElement('div')
      element.className = 'test-right'
      document.body.appendChild(element)

      textAlign('test-right', 'right')

      expect(element.style.textAlign).toBe('right')
    })

    it('should set text-align to center', () => {
      const element = document.createElement('div')
      element.className = 'test-center'
      document.body.appendChild(element)

      textAlign('test-center', 'center')

      expect(element.style.textAlign).toBe('center')
    })

    it('should set text-align to justify', () => {
      const element = document.createElement('div')
      element.className = 'test-justify'
      document.body.appendChild(element)

      textAlign('test-justify', 'justify')

      expect(element.style.textAlign).toBe('justify')
    })
  })

  describe('Additional Values', () => {
    it('should set text-align to start', () => {
      const element = document.createElement('div')
      element.className = 'test-start'
      document.body.appendChild(element)

      textAlign('test-start', 'start')

      expect(element.style.textAlign).toBe('start')
    })

    it('should set text-align to end', () => {
      const element = document.createElement('div')
      element.className = 'test-end'
      document.body.appendChild(element)

      textAlign('test-end', 'end')

      expect(element.style.textAlign).toBe('end')
    })

    it('should set text-align to inherit', () => {
      const element = document.createElement('div')
      element.className = 'test-inherit'
      document.body.appendChild(element)

      textAlign('test-inherit', 'inherit')

      expect(element.style.textAlign).toBe('inherit')
    })

    it('should set text-align to initial', () => {
      const element = document.createElement('div')
      element.className = 'test-initial'
      document.body.appendChild(element)

      textAlign('test-initial', 'initial')

      expect(element.style.textAlign).toBe('initial')
    })
  })

  describe('Multiple Elements', () => {
    it('should set text-align for multiple elements', () => {
      const el1 = document.createElement('div')
      const el2 = document.createElement('p')

      el1.className = 'multi-align'
      el2.className = 'multi-align'

      document.body.appendChild(el1)
      document.body.appendChild(el2)

      textAlign('multi-align', 'center')

      expect(el1.style.textAlign).toBe('center')
      expect(el2.style.textAlign).toBe('center')
    })
  })

  describe('Body Element Support', () => {
    it('should set text-align for body', () => {
      textAlign('body', 'center')

      expect(document.body.style.textAlign).toBe('center')
    })
  })

  describe('Error Handling', () => {
    it('should log error when alignment is undefined', () => {
      const element = document.createElement('div')
      element.className = 'test-undefined'
      document.body.appendChild(element)

      const consoleSpy = vi.spyOn(console, 'warn').mockImplementation(() => {})

      // @ts-expect-error - Testing invalid input
      textAlign('test-undefined', undefined)

      expect(consoleSpy).toHaveBeenCalled()

      consoleSpy.mockRestore()
    })

    it('should warn when no elements found', () => {
      const consoleSpy = vi.spyOn(console, 'warn').mockImplementation(() => {})

      textAlign('non-existent', 'center')

      expect(consoleSpy).toHaveBeenCalled()

      consoleSpy.mockRestore()
    })
  })

  describe('Edge Cases', () => {
    it('should overwrite existing text-align', () => {
      const element = document.createElement('div')
      element.className = 'test-overwrite'
      element.style.textAlign = 'left'
      document.body.appendChild(element)

      textAlign('test-overwrite', 'right')

      expect(element.style.textAlign).toBe('right')
    })
  })

  describe('Return Value', () => {
    it('should return void', () => {
      const element = document.createElement('div')
      element.className = 'test-return'
      document.body.appendChild(element)

      const result = textAlign('test-return', 'center')

      expect(result).toBeUndefined()
    })
  })
})
