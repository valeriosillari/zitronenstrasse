// custom color: a little bit darker then the main one. for the marker looks the same
const markerColorFill = '#eab622'
const markerColorStroke = '#FFC832'

// path inspiration from this codepen:
// https://codepen.io/defvayne23/pen/EVYGRw?editors=1010
// we follow the svg path to amazon and taken the path from the original url
// https://s3-us-west-2.amazonaws.com/s.cdpn.io/134893/pin-red.svg
const markerPath = 'M 8 2.1 c 1.1 0 2.2 0.5 3 1.3 c 0.8 0.9 1.3 1.9 1.3 3.1 s -0.5 2.5 -1.3 3.3 l -3 3.1 l -3 -3.1 c -0.8 -0.8 -1.3 -2 -1.3 -3.3 c 0 -1.2 0.4 -2.2 1.3 -3.1 c 0.8 -0.8 1.9 -1.3 3 -1.3 Z'

const markerCustomStyles = {
  path: markerPath,
  fillColor: markerColorFill,
  strokeColor: markerColorStroke,
  fillOpacity: 1,
  scale: 2.5,
  strokeWeight: 2
  // for correct alignmnet of custom SVG icon with map point
  // anchor: new google.maps.Point(11, 12)
}

export default markerCustomStyles
