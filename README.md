# mminch-64

> Convert millimeters to inches with fractions based on 64 denominator.

## Disclaimer

Most of the people dealing with inches understand them better by fractions.
This practice is commonly found in industries like construction.

Due to this mismatch from fractions to decimals, the results are slightly off
in most cases due to rounding.

This tool is meant to be for a practical use case and not a precise millimetrical use case.

## Install

From npm

`npm install --save mminch-64`

## Usage

### Convert mm to inches

```js
  mminch(1).toInch() // '3/64'
```

### Conver inches to mm

```js
  mminch('3/64').toMM() // '1'
```

## Supported conversions

- mm to in
- in to mm


