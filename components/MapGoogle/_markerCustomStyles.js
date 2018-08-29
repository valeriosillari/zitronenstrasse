// we follow the svg path to amazon and taken the path from the original url
// https://s3-us-west-2.amazonaws.com/s.cdpn.io/134893/pin-red.svg

//  for the logic (inline SVG in JS), we follow this article:
// https://ubilabs.net/en/news/create-google-maps-markers-with-inline-svg-2016-01-08

const customMarker = {
  url: `data:image/svg+xml;utf-8, \
  <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
  viewBox="0 0 100 100" style="enable-background:new 0 0 100 100;" xml:space="preserve">
  <style type="text/css">
    .st0{fill:%23EAB622;stroke:%23FFC832;stroke-width:7;stroke-miterlimit:10;}
  </style>
  <path class="st0" d="M50,4c9.2,0,18.4,4.2,25.1,10.9c6.7,7.5,10.9,15.9,10.9,26s-4.2,20.9-10.9,27.6L50,94.4l-25.1-26
  C18.2,61.7,14,51.7,14,40.8c0-10,3.3-18.4,10.9-26C31.6,8.2,40.8,4,50,4z"/>
  </svg>
  `
}

export default customMarker
