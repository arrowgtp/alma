import React, { useEffect } from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { injectIntl } from 'gatsby-plugin-intl'

import almaLogoShellWhite from '../images/alma/alma-logo-shell-white.svg'

import './Layout.css'

// import AnimatedLogo from './AnimatedLogo'

import Logo from './Logo'
import Nav from './Navigation'
import PromoButton from './PromoButton'

// const App = styled(motion.div)`
//   margin: 0;
//   padding: 0;
//   width: 100vw;
//   height: 100vh;
//   height: calc(var(--vh, 1vh) * 100);
//   display: grid;
//   grid-template-rows: 20vh 70vh 10vh;
//   grid-template-rows:
//     calc(var(--vh, 1vh) * 20)
//     calc(var(--vh, 1vh) * 70) 
//     calc(var(--vh, 1vh) * 10)
//   ;
//   grid-template-columns: repeat(3, 1fr);
//   /* opacity: 0; */
//   z-index: 2;

//   @media (min-width: 50rem) {
//     grid-template-rows: 100vh;
//     grid-template-columns: 20vw 80vw;
//   }
// `

const App = styled.div`
  margin: 0;
  padding: 0;
  width: 100vw;
  height: 100vh;
  height: calc(var(--vh, 1vh) * 100);
  display: grid;
  grid-template-rows: 20vh 70vh 10vh;
  grid-template-rows:
    calc(var(--vh, 1vh) * 20)
    calc(var(--vh, 1vh) * 70) 
    calc(var(--vh, 1vh) * 10)
  ;
  grid-template-columns: repeat(3, 1fr);
  /* opacity: 0; */
  z-index: 2;

  @media (min-width: 50rem) {
    grid-template-rows: 100vh;
    grid-template-columns: 20vw 80vw;
  }
`

const Main = styled.main`
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

const Menu = styled.div`
  margin: 0;
  padding: 0;
  grid-column: 1 / 4;
  grid-row: 3 / 4;
  background: white;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  z-index: 1000;
  box-shadow: 0px 0px 64px rgba(0, 0, 0, 0.25);
  align-items: center;
  justify-items: center;

  @media (min-width: 50rem) {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    height: 100vh;
    width: 20vw;
    display: grid;
    grid-template-rows: 20vh 65vh 15vh;
    grid-template-columns: 1fr;
    align-items: center;
    justify-items: center;
    z-index: 100;
    background: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMCIgaGVpZ2h0PSIzMCI+CjxyZWN0IHdpZHRoPSIzMCIgaGVpZ2h0PSIzMCIgZmlsbD0iI2ZmZmZmZiI+PC9yZWN0Pgo8cmVjdCB4PSIxNSIgd2lkdGg9IjMwIiBoZWlnaHQ9IjMwIiBmaWxsPSIjZmRmZGZkIj48L3JlY3Q+Cjwvc3ZnPg==");
    background-repeat: repeat;
    box-shadow: 0px 0px 32px rgba(0, 0, 0, 0.25);
    box-shadow:
      0 15px 30px 0 rgba(0,0,0,0.11),
      0 5px 15px 0 rgba(0,0,0,0.08)
    ;
  }
`

const Layout = ({ children }) => {

  // const elementRef = useRef()

  // useEffect(() => {
  //  setTimeout(() => elementRef.current.scrollTop = 0, 0)
  // }, [])

  // useEffect(() => {
  //  setTimeout(() => document.getElementById('MainContainer').scrollTop = 0, 0);
  // })

  // document.getElementById('#office-manager').getBoundingClientRect()

  useEffect(() => {
    if (window.location.href.indexOf('careers')!== -1) {
      if (window.location.href.indexOf('#office-manager') !== -1) {
        let officeManager = document.querySelector('#office-manager').offsetTop
        document.getElementById('main').scrollTop = officeManager
      } else if (window.location.href.indexOf('#administrative-asistant') !== -1) {
        let administrativeAsistant = document.querySelector('#administrative-asistant').offsetTop
        document.getElementById('main').scrollTop = administrativeAsistant
      } else if (window.location.href.indexOf('#vacation-counselor') !== -1) {
        let vacationCounselor = document.querySelector('#vacation-counselor').offsetTop
        document.getElementById('main').scrollTop = vacationCounselor
      } else {
        document.getElementById('main').scrollTop = 0
      }
    } else {
      document.getElementById('main').scrollTop = 0
    }
  })

  return (
    <>
      {/* <AnimatedLogo/> */}
      <App
        animate={{ opacity: 1 }}
        transition={{
        ease: 'easeInOut',
        duration: 1,
        delay: 0 
        }}
      >
        <Menu>
          <Logo/>
          <Nav/>
          <PromoButton/>
        </Menu>
        <Main id='main'>
          {children}
        </Main>
      </App>
    </>
  )
}

export default injectIntl(Layout)
