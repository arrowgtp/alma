import React, { useEffect } from 'react'
import styled from 'styled-components'

import almaLogoShellWhite from '../../images/alma/alma-logo-shell-white.svg'
// import almaShell from '../../images/alma/alma-shell.svg'

const MainContainer = styled.main`
  margin: 0;
  padding: 0;
  grid-column: 1 / 4;
  grid-row: 1 / 3;
  overflow-x: hidden;
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
  z-index: 1;
  background-image: url(${almaLogoShellWhite});
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  box-shadow: 0px 0px 16px hsla(0,0%,0%,1);

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