import React, { useEffect } from 'react'
import styled from 'styled-components'

const MainContainer = styled.main`
  margin: 0;
  padding: 0;
  grid-column: 1 / 4;
  grid-row: 1 / 3;
  overflow-x: hidden;
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
  z-index: 1;
  /* background: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMCIgaGVpZ2h0PSIzMCI+CjxyZWN0IHdpZHRoPSIzMCIgaGVpZ2h0PSIzMCIgZmlsbD0iI2ZmZmZmZiI+PC9yZWN0Pgo8cmVjdCB4PSIxNSIgd2lkdGg9IjMwIiBoZWlnaHQ9IjMwIiBmaWxsPSIjZmRmZGZkIj48L3JlY3Q+Cjwvc3ZnPg==");
  background-repeat: repeat; */

  @media (min-width: 50rem) {
    grid-column: 2 / 3;
    grid-row: 1 / 6;
    /* overflow-x: hidden;
    overflow-y: scroll; */
    overflow-x: initial;
    overflow-y: initial;
  }
`

const Main = ({ children }) => {

  // const elementRef = useRef()

  // useEffect(() => {
  //   setTimeout(() => elementRef.current.scrollTop = 0, 0)
  // }, [])

   useEffect(() => {
    setTimeout(() => document.getElementById('MainContainer').scrollTop = 0, 0);
  })

  return (
    // <Main ref={elementRef}>
    <MainContainer id='MainContainer'>
      {children}
    </MainContainer>
  )
}

export default Main