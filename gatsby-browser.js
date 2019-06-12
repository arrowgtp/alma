// import { ReactDOM } from 'reactDOM'
// import PageWrapper from 'components/PageWrapper'

// const shoudUpdateScroll = ({ routerProps: { location }, getSavedScrollPosition}) => {
//   const currentPosition = getSavedScrollPosition(location)
//   const queriedPosition = getSavedScrollPosition({ pathname: `/` })

//   window.scrollTo(...(currentPosition || [0, 0]))
//   document.querySelector('PageWrapper').scrollTo(...(currentPosition || [0, 0]))
//   ReactDOM.findDOMNode(PageWrapper).scrollTo(...(currentPosition || [0, 0]))

//   return false

// }

// export default shoudUpdateScroll

// exports.shouldUpdateScroll = ({
//   routerProps: { location },
//   getSavedScrollPosition
// }) => {
//   const currentPosition = getSavedScrollPosition(location)
//   const queriedPosition = getSavedScrollPosition({ pathname: `/` })

//   window.scrollTo(...(currentPosition || [0, 0]))
//   ReactDOM.findDOMNode(PageWrapper).scrollTo(...(currentPosition || [0, 0]))
//   document.querySelector('PageWrapper').scrollTo(...(currentPosition || [0, 0]))

//   return false
// }