/**
 * SEPC v2.0 Playground
 *
 * Live demo of all SEPC features
 */

import {
  backgroundColor,
  color,
  dimension,
  margin,
  padding,
  border,
  outline,
  borderRadius,
  textAlign,
  backgroundImage,
} from '../src/index'

console.log('🎨 SEPC v2.0 Playground loaded!')

// Background Color Demo
backgroundColor('test-bg-color', '#4a90e2')
color('test-bg-color', 'white')
padding('test-bg-color', '20px')
borderRadius('test-bg-color', 'rounded-lg')

// Text Color Demo
color('test-text-color', '#e74c3c')
padding('test-text-color', '15px')

// Dimensions Demo
dimension('test-dimensions', '300px', '200px')
backgroundColor('test-dimensions', '#2ecc71')
color('test-dimensions', 'white')
padding('test-dimensions', '20px')
borderRadius('test-dimensions', 'rounded')

// Multiple Elements Demo
backgroundColor('test-multiple', '#9b59b6')
color('test-multiple', 'white')
padding('test-multiple', '15px')
margin('test-multiple', '10px')
borderRadius('test-multiple', 'pill')

console.log('✅ All styles applied successfully!')
console.log('📊 Open DevTools to see SEPC in action!')
console.log('💡 Try modifying the styles in playground/main.ts')
