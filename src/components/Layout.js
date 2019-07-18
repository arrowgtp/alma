import React from 'react'
// import styled from 'styled-components'
import { injectIntl } from 'gatsby-plugin-intl'

// import { Context } from "./Context"

import './Layout.css'

import App from './layout/AppContainer'
import Main from './layout/ContentContainer'
import Menu from './Menu'

import Logo from './Logo'
import Nav from './Navigation'
import Contact from './Contact'

const Layout = ({ children }) => {
  return (
    // <Context>
      <App>
        <Menu>
          <Logo/>
          <Nav/>
          <Contact/>
        </Menu>
        <Main>
          {children}
        </Main>
      </App>
    // </Context>
  )
}

export default injectIntl(Layout)
