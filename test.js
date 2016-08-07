var assert = require('assert')
var mminch = require('./index')

console.log('testing api...')

assert( typeof mminch === 'function', 'mminch is not a function')
assert( typeof mminch() === 'object', 'mminch did not return a string')

console.log('testing conversions mm to inches...')

assert.equal(mminch('1').toInch(), '3/64')
assert.equal(mminch('1.5').toInch(), '1/16')
assert.equal(mminch('2').toInch(), '5/64')
assert.equal(mminch('2.5').toInch(), '3/32')
assert.equal(mminch('3').toInch(), '1/8')
assert.equal(mminch('8').toInch(), '5/16')
assert.equal(mminch('25.4').toInch(), '1')
assert.equal(mminch('26').toInch(), '1 1/32')
assert.equal(mminch('100').toInch(), '3 15/16')

console.log('testing conversions inches to mm...')

assert.equal(mminch('3/64').toMM(), '1')
assert.equal(mminch('1/16').toMM(), '1.5')
assert.equal(mminch('5/64').toMM(), '2')
assert.equal(mminch('3/32').toMM(), '2.5')
assert.equal(mminch('1/8').toMM(), '3')
assert.equal(mminch('5/16').toMM(), '8')
assert.equal(mminch('1').toMM(), '25.4')
assert.equal(mminch('1 1/32').toMM(), '26')
assert.equal(mminch('3 15/16').toMM(), '100')

console.log('testing conversions inches to feet...')

assert.equal(mminch('12').toFeet(), '1 ft')
assert.equal(mminch('1.042').toFeet(), '0 ft 3/64 in')
assert.equal(mminch('5/16').toFeet(), '0 ft 1/64 in')
assert.equal(mminch('14').toFeet(), '1 ft 2 in')
assert.equal(mminch('26').toFeet(), '2 ft 2 in')

console.log('testing passed!')

