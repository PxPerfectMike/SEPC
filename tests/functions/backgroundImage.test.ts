/**
 * Tests for backgroundImage function
 */

import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest'
import { backgroundImage } from '../../src/functions/backgroundImage'

describe('backgroundImage', () => {
  beforeEach(() => {
    document.body.innerHTML = ''
  })

  afterEach(() => {
    document.body.innerHTML = ''
  })

  describe('Basic Functionality', () => {
    it('should set background image with URL', () => {
      const element = document.createElement('div')
      element.className = 'test-bg-img'
      document.body.appendChild(element)

      backgroundImage('test-bg-img', 'https://example.com/image.jpg')

      // happy-dom adds quotes around URLs
      expect(element.style.backgroundImage).toBe('url("https://example.com/image.jpg")')
    })

    it('should set background image with relative path', () => {
      const element = document.createElement('div')
      element.className = 'test-relative'
      document.body.appendChild(element)

      backgroundImage('test-relative', '/images/bg.png')

      expect(element.style.backgroundImage).toBe('url("/images/bg.png")')
    })

    it('should handle URL already wrapped in url()', () => {
      const element = document.createElement('div')
      element.className = 'test-wrapped'
      document.body.appendChild(element)

      backgroundImage('test-wrapped', 'url(https://example.com/bg.jpg)')

      expect(element.style.backgroundImage).toBe('url("https://example.com/bg.jpg")')
    })
  })

  describe('Multiple Elements', () => {
    it('should set background image for multiple elements', () => {
      const el1 = document.createElement('div')
      const el2 = document.createElement('div')

      el1.className = 'multi-bg'
      el2.className = 'multi-bg'

      document.body.appendChild(el1)
      document.body.appendChild(el2)

      backgroundImage('multi-bg', 'https://example.com/image.jpg')

      expect(el1.style.backgroundImage).toBe('url("https://example.com/image.jpg")')
      expect(el2.style.backgroundImage).toBe('url("https://example.com/image.jpg")')
    })
  })

  describe('Body Element Support', () => {
    it('should set background image for body', () => {
      backgroundImage('body', 'https://example.com/bg.jpg')

      expect(document.body.style.backgroundImage).toBe('url("https://example.com/bg.jpg")')
    })
  })

  describe('Error Handling', () => {
    it('should log error when url is undefined', () => {
      const element = document.createElement('div')
      element.className = 'test-undefined'
      document.body.appendChild(element)

      const consoleSpy = vi.spyOn(console, 'error').mockImplementation(() => {})

      // @ts-expect-error - Testing invalid input
      backgroundImage('test-undefined', undefined)

      expect(consoleSpy).toHaveBeenCalled()

      consoleSpy.mockRestore()
    })

    it('should log error when url is empty string', () => {
      const element = document.createElement('div')
      element.className = 'test-empty'
      document.body.appendChild(element)

      const consoleSpy = vi.spyOn(console, 'error').mockImplementation(() => {})

      backgroundImage('test-empty', '')

      expect(consoleSpy).toHaveBeenCalled()

      consoleSpy.mockRestore()
    })

    it('should warn when no elements found', () => {
      const consoleSpy = vi.spyOn(console, 'warn').mockImplementation(() => {})

      backgroundImage('non-existent', 'https://example.com/bg.jpg')

      expect(consoleSpy).toHaveBeenCalled()

      consoleSpy.mockRestore()
    })
  })

  describe('Edge Cases', () => {
    it('should handle none value', () => {
      const element = document.createElement('div')
      element.className = 'test-none'
      document.body.appendChild(element)

      backgroundImage('test-none', 'none')

      expect(element.style.backgroundImage).toBe('none')
    })

    it('should overwrite existing background image', () => {
      const element = document.createElement('div')
      element.className = 'test-overwrite'
      element.style.backgroundImage = 'url(old.jpg)'
      document.body.appendChild(element)

      backgroundImage('test-overwrite', 'new.jpg')

      expect(element.style.backgroundImage).toBe('url("new.jpg")')
    })
  })

  describe('Return Value', () => {
    it('should return void', () => {
      const element = document.createElement('div')
      element.className = 'test-return'
      document.body.appendChild(element)

      const result = backgroundImage('test-return', 'https://example.com/bg.jpg')

      expect(result).toBeUndefined()
    })
  })
})
