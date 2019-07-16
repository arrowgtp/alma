import React from 'react'
import styled from 'styled-components'
import { injectIntl } from 'gatsby-plugin-intl'

import './Layout.css'
import AppContainer from './layout/AppContainer'
import Main from './layout/ContentContainer'
import Menu from './Menu'

// const Menu = styled.div`
//   margin: 0;
//   padding: 0;
//   position: fixed;
//   bottom: 0;
//   left: 0;
//   right: 0;
//   height: 10vh;
//   background: white;
//   display: grid;
//   grid-template-columns: 1fr 1fr 1fr;
//   grid-template-rows: 1fr;
//   z-index: 1000;
//   box-shadow: 0px 0px 64px rgba(0, 0, 0, 0.25);

//   @media (min-width: 50rem) {
//     margin: 0;
//     padding: 0;
//     position: fixed;
//     top: 0;
//     bottom: 0;
//     left: 0;
//     height: 100vh;
//     width: 20vw;
//     display: grid;
//     grid-template-rows: 15vh 5vh 5vh 60vh 15vh;
//     grid-template-columns: 1fr;
//     z-index: 10;
//   }
// `

const Layout = ({ children }) => {
  return (
    <AppContainer>
      <Menu/>
      <Main>
        {children}
      </Main>
    </AppContainer>
  )
}

export default injectIntl(Layout)
