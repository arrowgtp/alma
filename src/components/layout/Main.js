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

// const ScrollPosition = styled.p`
//   position: fixed;
//   top: 1rem;
//   right: 1rem;
// `

const Main = ({ children }) => {

  // const elementRef = useRef()

  // useEffect(() => {
  //   setTimeout(() => elementRef.current.scrollTop = 0, 0)
  // }, [])

  //  useEffect(() => {
  //   setTimeout(() => document.getElementById('MainContainer').scrollTop = 0, 0);
  // })

  // document.getElementById('#office-manager').getBoundingClientRect()

  useEffect(() => {

    // let officeManager = document.querySelector('#office-manager').offsetTop
    // let administrativeAsistant = document.querySelector('#administrative-asistant').offsetTop
    // let vacationCounselor = document.querySelector('#vacation-counselor').offsetTop

    if (window.location.href.indexOf('careers')!== -1) {
      if (window.location.href.indexOf('#office-manager') !== -1) {
        let officeManager = document.querySelector('#office-manager').offsetTop
        document.getElementById('MainContainer').scrollTop = officeManager
        // document.getElementById('MainContainer').scrollTop = 1000
      } else if (window.location.href.indexOf('#administrative-asistant') !== -1) {
        let administrativeAsistant = document.querySelector('#administrative-asistant').offsetTop
        document.getElementById('MainContainer').scrollTop = administrativeAsistant
        // document.getElementById('MainContainer').scrollTop = 2000
      } else if (window.location.href.indexOf('#vacation-counselor') !== -1) {
        let vacationCounselor = document.querySelector('#vacation-counselor').offsetTop
        document.getElementById('MainContainer').scrollTop = vacationCounselor
        // document.getElementById('MainContainer').scrollTop = 3000
      } else {
        document.getElementById('MainContainer').scrollTop = 0
      }
    } else {
      document.getElementById('MainContainer').scrollTop = 0
    }

    // if (window.location.href.indexOf('#office-manager') !== -1) {
    //   // document.getElementById('MainContainer').scrollTop = officeManager
    //   document.getElementById('MainContainer').scrollTop = 1000
    // } else if (window.location.href.indexOf('#administrative-asistant') !== -1) {
    //   // document.getElementById('MainContainer').scrollTop = administrativeAsistant
    //   document.getElementById('MainContainer').scrollTop = 2000
    // } else if (window.location.href.indexOf('#vacation-counselor') !== -1) {
    //   // document.getElementById('MainContainer').scrollTop = vacationCounselor
    //   document.getElementById('MainContainer').scrollTop = 3000
    // } else {
    //   document.getElementById('MainContainer').scrollTop = 0
    // }
  })

  return (
    // <Main ref={elementRef}>
    <MainContainer id='MainContainer'>
      {/* <ScrollPosition>{currentPosition}</ScrollPosition> */}
      {children}
    </MainContainer>
  )
}

export default Main