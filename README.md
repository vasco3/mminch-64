# mminch-64

![mminch-64](https://raw.githubusercontent.com/vasco3/mminch-64/master/mmInch64-logo.png)

> Convert millimeters to inches with fractions based on 64 denominator.


## About 

This library covers a specific need for practical need. People aren't used to think of inches as decimals. They understand them better in fractions. They want to see them as fractions of *64ths* like they would in an [inch ruler](https://www.piliapp.com/actual-size/inch-ruler/). There are many *inch-to-millimeters* tables like http://www.hamuniverse.com/antfrac.html that stress the importance of having inches as fractions.


### Disclaimer 

You might say that `3/64 inch` is `1.1906mm`. But to keep rounding simple and to be consistent on the conversion from mm to inches and inches to mm, it rounds millimeters to the nearest half eg. `1/4 in ~ 6.5mm` or `3/64 in ~ 1mm`. This rounding can cause trouble with fractions that are close to each other like `1/4` and `17/64` or with `3/16` and `13/64`. Due to  mismatch from fractions to decimals, the results are slightly off in most cases due to rounding.

This tool is meant to be for a practical use case and not a precise millimetrical use case. This is commonly found in industries like construction and engineering when they are talking about rough estimates. That means that this library can't be replaced by the numbers `0.0393701`, or if you want **/64ths**, `2.51968504`.

By no means use this library as an exact conversion tool for projects that require ultimate precision. By doing so you run the risk of losing millions of dollars like a hand-ful of [NASA projects](http://thinkreliability.com/CM-MarsCO.aspx).

> Shout out to [ugwe43to874nf4](https://www.reddit.com/user/ugwe43to874nf4) for pointing out some of the potential flaws of this library under an incorrect use.

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


