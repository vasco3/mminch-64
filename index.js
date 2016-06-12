
module.exports = function (input) {
  var TO_FRACTION_64 = 0.015625
  var MM_TO_INCH = 25.4
  // should take numbers or strings
  // TODO var stringifiedInput = input + ''
  // TODO var numberAndFractions = stringifiedInput.split(' ')
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
      var inches = Math.floor(rawInches)
      var decimals = Number((rawInches % 1).toFixed(6))
      var fraction64 = Math.round(decimals / TO_FRACTION_64)
      var simplifiedFraction = simplifyFraction(fraction64)
      var result = [inches, simplifiedFraction]
      return result.filter(function (r) { return r }).join(' ')
    },

    toMM: function () {
      return input
    }
  }
}
