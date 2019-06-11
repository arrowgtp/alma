// import { ReactDOM } from 'react'
// import PageWrapper from './components/PageWrapper'

// exports.shouldUpdateScroll = ({
//   routerProps: { location },
//   getSavedScrollPosition
// }) => {
//   const currentPosition = getSavedScrollPosition(location)
//   const queriedPosition = getSavedScrollPosition({ pathname: `/random` })

//   window.scrollTo(...(currentPosition || [0, 0]))
//   ReactDOM.findDOMNode(PageWrapper).scrollTo(...(currentPosition || [0, 0]))
//   document.querySelector('PageWrapper').scrollTo(...(currentPosition || [0, 0]))

//   return false
// }