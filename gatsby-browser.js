// exports.shouldUpdateScroll = () => {
//   return [0,0];
// };

// exports.shouldUpdateScroll = ({
//   routerProps: { location },
//   getSavedScrollPosition
// }) => {
//   const currentPosition = getSavedScrollPosition(location)
//   const queriedPosition = getSavedScrollPosition({ pathname: `/random` })

//   window.scrollTo(...(currentPosition || [0, 0]))

//   return false
// }

// exports.onRouteUpdate = () => {
//   window.scrollTo(0, 0)
// }

// exports.shouldUpdateScroll = () => {
//   return false;
// }
// import React from 'react'
// import Div100vh from 'react-div-100vh'

// exports.wrapPageElement = ({ element }) => {
//   return <Div100vh>{element}</Div100vh>
// }

// const React = require('react')
// const Div100vh = require('react-div-100vh')

// exports.wrapPageElement = ({ element }) => {
//   return <Div100vh>{element}</Div100vh>
// }

import React from 'react'
import Div100vh from 'react-div-100vh'

export const wrapPageElement = ({ element }) => {
  return <Div100vh>{element}</Div100vh>
}
