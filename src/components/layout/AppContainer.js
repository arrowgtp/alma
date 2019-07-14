import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { useSpring, animated } from 'react-spring'

const App = styled(animated.div)`
  margin: 0;
  padding: 0;
  height: 100vh;
  /* height: calc(var(--vh, 1vh) * 100); */
  width: 100vw;
  overflow-x: hidden;
  display: grid;
  grid-template-rows: 20vh 70vh 10vh;
  grid-template-columns: repeat(3, 1fr);
  background: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMCIgaGVpZ2h0PSIzMCI+CjxyZWN0IHdpZHRoPSIzMCIgaGVpZ2h0PSIzMCIgZmlsbD0iI2ZmZmZmZiI+PC9yZWN0Pgo8cmVjdCB4PSIxNSIgd2lkdGg9IjMwIiBoZWlnaHQ9IjMwIiBmaWxsPSIjZmRmZGZkIj48L3JlY3Q+Cjwvc3ZnPg==");
  background-repeat: repeat;

  @media (min-width: 50rem) {
    grid-template-rows: 18vh 5vh 5vh 57vh 15vh;
    /* grid-template-rows: 20% 5% 5% 50% 20%; */
    /* grid-template-rows: 4fr 1fr 1fr 10fr 4fr; */
    grid-template-columns: 1fr 4fr;
  }
`

// const WindowInfo = styled.div`
//   position: fixed;
//   top: 0;
//   right: 0;
//   font-size: 12px;
//   line-height: 1;
//   z-index: 1000;
//   margin: 1rem 1rem 0 0;
//   padding: 0.5rem 1rem;
//   background: white;
//   border-radius: 8px;
//   box-shadow: 0px 0px 16px hsla(0,0%,0%,0.25);
// `

// Hook
// function useWindowSize() {
  
//   const isClient = typeof window === 'object'

//   function getSize() {
//     return {
//       width: isClient ? window.innerWidth : undefined,
//       height: isClient ? window.innerHeight : undefined
//     }
//   }

//   const [windowSize, setWindowSize] = useState(getSize)

//   useEffect(() => {

//     if (!isClient) {
//       return false
//     }
    
//     function handleResize() {
//       setWindowSize(getSize())
//     }

//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, []) // Empty array ensures that effect is only run on mount and unmount

//   return windowSize
// }

const AppContainer = (props) => {

  // const fade = useSpring({opacity: 1, from: {opacity: 0}})

  // const size = useWindowSize()

  return (
    // <App style={fade}>
    <App style>
      {/* <WindowInfo>{size.width}px / {size.height}px</WindowInfo> */}
      {props.children}
    </App>
  )
}

export default AppContainer