import { describe, it, expect, beforeEach, afterEach } from 'vitest'
import { backgroundAttachment } from '../../src/functions/backgroundAttachment'

describe('backgroundAttachment', () => {
  beforeEach(() => {
    document.body.innerHTML = ''
  })

  afterEach(() => {
    document.body.innerHTML = ''
  })

  it('should set background-attachment to fixed', () => {
    const element = document.createElement('div')
    element.className = 'test'
    document.body.appendChild(element)

    backgroundAttachment('test', 'fixed')

    expect(element.style.backgroundAttachment).toBe('fixed')
  })

  it('should set background-attachment to scroll', () => {
    const element = document.createElement('div')
    element.className = 'test'
    document.body.appendChild(element)

    backgroundAttachment('test', 'scroll')

    expect(element.style.backgroundAttachment).toBe('scroll')
  })
})
