// we follow the svg path to amazon and taken the path from the original url
// https://s3-us-west-2.amazonaws.com/s.cdpn.io/134893/pin-red.svg

//  for the logic (inline SVG in JS), we follow this article:
// https://ubilabs.net/en/news/create-google-maps-markers-with-inline-svg-2016-01-08

// hash tag as %23. deprecation warning in Chrome
// [Deprecation] Using unescaped '#' characters in a data URI body is deprecated and will be removed in M71, around December 2018.
// Please use '%23' instead.
// See https://www.chromestatus.com/features/5656049583390720 for more details.
const hashTag = '%23'

const colorFill = 'EAB622'
const colorStroke = 'FFC832'

// for right dimension:
// to the SVG add always Width and Height info
const customMarker = {
  url: `data:image/svg+xml;utf-8, \
  <svg width="25" height="30" viewBox="0 0 25 30" xml:space="preserve" xmlns="http://www.w3.org/2000/svg">
  <style type="text/css">
    .st0{fill:${hashTag}${colorFill};stroke:${hashTag}${colorStroke};stroke-width:3;stroke-miterlimit:10;}
  </style>
  <path class="st0" d="m12.5 2.2c2.6 0 5.2 1.2 7.1 3.1 1.9 2.1 3.1 4.5 3.1 7.3s-1.2 5.9-3.1 7.8l-7.1 7.3-7.1-7.3c-1.9-1.9-3.1-4.7-3.1-7.8 0-2.8 0.9-5.2 3.1-7.3 1.9-1.9 4.5-3.1 7.1-3.1z"/>
  </svg>
  `
}

export default customMarker
