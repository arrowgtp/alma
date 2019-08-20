import React, { Fragment } from 'react'
import { injectIntl } from 'gatsby-plugin-intl'

// import { Context } from "./Context"

import './Layout.css'

import AnimatedLogo from './AnimatedLogo'
import App from './layout/App'
import Main from './layout/Main'
import Menu from './layout/Menu'

import Logo from './Logo'
import Nav from './Navigation'
import Contact from './Contact'

const Layout = ({ children }) => {
  return (
    <Fragment>
      {/* <AnimatedLogo/> */}
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
    </Fragment>
  )
}

export default injectIntl(Layout)
