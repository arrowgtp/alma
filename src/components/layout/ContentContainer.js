import React, { useState, useEffect, useRef } from 'react'
import styled from 'styled-components'

const Main = styled.main`
  margin: 0;
  padding: 0;
  grid-column: 1 / 4;
  grid-row: 1 / 3;
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
  z-index: 1;

  @media (min-width: 50rem) {
    grid-column: 2 / 3;
    grid-row: 1 / 6;
  }
`

const ScrollInfo = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  font-size: 12px;
  line-height: 1;
  z-index: 1000;
  margin: 3.5rem 1rem 0 0;
  padding: 0.5rem 1rem;
  background: white;
  border-radius: 8px;
  box-shadow: 0px 0px 16px hsla(0,0%,0%,0.25);
`

// function useScrollPosition(elementRef) {

//   function getScroll() {
//     return {
//       y: elementRef.current ? elementRef.current.scrollTop : undefined,
//       x: elementRef.current ? elementRef.current.scrollLeft : undefined
//     }
//   }

//   const [scrollPosition, setScrollPosition] = useState(getScroll)

//   useEffect(() => {

//     if (!elementRef.current) {
//       return false
//     }
      
//     function handleScroll() {
//       setScrollPosition(getScroll())
//     }

//     elementRef.current.addEventListener('scroll', handleScroll);
//     return () => elementRef.current.removeEventListener('scroll', handleScroll);
//   }, []) // Empty array ensures that effect is only run on mount and unmount

//   return scrollPosition
// }

const ContentContainer = (props) => {

  // const elementRef = useRef()

  // const scroll = useScrollPosition(elementRef)

  // useEffect(() => {
  //   setTimeout(() => elementRef.current.scrollTop = 0, 0)
  // }, [])

   useEffect(() => {
    setTimeout(() => document.getElementById('ContentContainer').scrollTop = 0, 0);
  })

  return (
    // <Main ref={elementRef} id='ContentContainer'>
    <Main id='ContentContainer'>
      {/* <ScrollInfo id='ScrollInfo'>
        Scroll Position: {scroll.y}px
      </ScrollInfo> */}
      {props.children}
    </Main>
  )
}

export default ContentContainer

  // useEffect(() => {
  //   setTimeout(() => elementRef.current.scrollTop = 0, 0)
  // })

   // useLayoutEffect(() => {
  //   setTimeout(() => document.getElementById('ContentContainer').scrollTop = 0, 0);
  // })