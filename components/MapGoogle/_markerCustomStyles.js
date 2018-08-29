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

const customMarker = {
  url: `data:image/svg+xml;utf-8, \
  <svg enable-background="new 0 0 100 100" version="1.1" viewBox="0 0 100 100" xml:space="preserve" xmlns="http://www.w3.org/2000/svg">
    <style type="text/css">
      .st0{fill:${hashTag}${colorFill};stroke:${hashTag}${colorStroke};stroke-width:7;stroke-miterlimit:10;}
    </style>
    <path class="st0" d="M50,4c9.2,0,18.4,4.2,25.1,10.9c6.7,7.5,10.9,15.9,10.9,26s-4.2,20.9-10.9,27.6L50,94.4l-25.1-26  C18.2,61.7,14,51.7,14,40.8c0-10,3.3-18.4,10.9-26C31.6,8.2,40.8,4,50,4z"/>
  </svg>
  `
}

export default customMarker
