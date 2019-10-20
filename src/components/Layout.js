import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { injectIntl } from 'gatsby-plugin-intl'

import almaLogoShellWhite from '../images/alma/alma-logo-shell-white.svg'

import './Layout.css'

// import AnimatedLogo from './AnimatedLogo'
// import App from './layout/App'
// import Main from './layout/Main'
import Menu from './layout/Menu'

import Logo from './Logo'
import Nav from './Navigation'
import PromoButton from './PromoButton'

const App = styled(motion.div)`
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

// const ScrollPosition = styled.p`
//   position: fixed;
//   top: 1rem;
//   right: 1rem;
// `

const Layout = ({ children }) => {
  return (
    <>
      {/* <AnimatedLogo/> */}
      <App>
        <Menu>
          <Logo/>
          <Nav/>
          <PromoButton/>
        </Menu>
        <Main>
          {children}
        </Main>
      </App>
    </>
  )
}

export default injectIntl(Layout)
