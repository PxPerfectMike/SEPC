import { describe, it, expect, beforeEach, afterEach } from 'vitest'
import { backgroundRepeat } from '../../src/functions/backgroundRepeat'

describe('backgroundRepeat', () => {
  beforeEach(() => {
    document.body.innerHTML = ''
  })

  afterEach(() => {
    document.body.innerHTML = ''
  })

  it('should set background-repeat', () => {
    const element = document.createElement('div')
    element.className = 'test'
    document.body.appendChild(element)

    backgroundRepeat('test', 'no-repeat')

    expect(element.style.backgroundRepeat).toBe('no-repeat')
  })

  it('should handle repeat-x', () => {
    const element = document.createElement('div')
    element.className = 'test'
    document.body.appendChild(element)

    backgroundRepeat('test', 'repeat-x')

    expect(element.style.backgroundRepeat).toBe('repeat-x')
  })
})
