# mminch-64

> Convert millimeters to inches with fractions based on 64 denominator.

## About 

This library covers a specific need for practical need. People aren't used to think of inches as decimals. The ones who are used to deal with inches understand them better in fractions. They want to see them as fractions of 64ths like they would in an [inch ruler](https://www.piliapp.com/actual-size/inch-ruler/). There are many inch-to-millimeters tables like http://www.hamuniverse.com/antfrac.html that stress the importance of having inches as fractions.

So this library can't be replaced by the numbers `0.0393701`, or if you want **/64ths**, `2.51968504` you mentioned. 

To keep it simple it rounds millimeters to the nearest half eg. `1/4 in ~ 6.5mm` or `3/64 in ~ 1mm`.

Most of the people 
This practice is commonly found in industries like construction.

## Disclaimer

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


