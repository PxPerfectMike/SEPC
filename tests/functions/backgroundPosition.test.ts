import { describe, it, expect, beforeEach, afterEach } from 'vitest'
import { backgroundPosition } from '../../src/functions/backgroundPosition'

describe('backgroundPosition', () => {
  beforeEach(() => {
    document.body.innerHTML = ''
  })

  afterEach(() => {
    document.body.innerHTML = ''
  })

  it('should set background-position to center', () => {
    const element = document.createElement('div')
    element.className = 'test'
    document.body.appendChild(element)

    backgroundPosition('test', 'center')

    // happy-dom may duplicate center value
    expect(element.style.backgroundPosition).toContain('center')
  })

  it('should set background-position to top', () => {
    const element = document.createElement('div')
    element.className = 'test'
    document.body.appendChild(element)

    backgroundPosition('test', 'top')

    // happy-dom may prepend default value
    expect(element.style.backgroundPosition).toContain('top')
  })
})
