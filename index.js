
module.exports = function (input) {
  var TO_FRACTION_64 = 0.015625
  var MM_TO_INCH = 25.4

  var simplifyFraction = function (numerator, _denominator) {
    var denominator = _denominator || 64
    // if there is no denominator then there is no fraction
    if (numerator < 1) {
      return ''
    }
    // fraction can't be broken further down:
    if (
      // a) if numerator is 1
      numerator === 1 ||
      // b) if numerator is prime number
      !((numerator % 2 === 0) || Math.sqrt(numerator) % 1 === 0)
    ) {
      return numerator + '/' + denominator
    }

    var newNumerator = numerator / 2
    var newDenominator = denominator / 2
    return simplifyFraction(newNumerator, newDenominator)
  }

  return {
    toInch: function () {
      var rawInches = Number(input) / MM_TO_INCH
      // integers
      var integers = Math.floor(rawInches)
      // limit to 6 decimals to avoid conflicts
      var decimals = Number((rawInches % 1).toFixed(6))
      // fractionize for denominator 64
      var fraction64 = Math.round(decimals / TO_FRACTION_64)
      var simplifiedFraction = simplifyFraction(fraction64)
      var result = [integers, simplifiedFraction]
      return result.filter(function (r) { return r }).join(' ')
    },

    toMM: function () {
      // should take numbers or strings
      var stringifiedInput = input + ''
      var fragments = stringifiedInput.split(' ')
      var inchesAndDecimals = fragments.map(function (fragment) {
        var broken = fragment.split('/')
        if (broken.length === 2) {
          // Strip the leading 0
          var decimals = (Number(broken[0]) / Number(broken[1])).toFixed(6)
          return decimals.slice(1)
        }
        return Number(broken[0])
      }).join('')

      // convert to mm
      var mm = Number(inchesAndDecimals) * MM_TO_INCH

      // return exact rounding if it is the 1:1 ratio
      // so the user doesn't freaks out of the conversion
      if (mm % MM_TO_INCH === 0) {
        return (Math.round(mm * 10) / 10) + ''
      }
      // round to the nearest half so it matches the toInch()
      // and return as string
      return (Math.round(mm * 2) / 2) + ''
    }
  }
}
