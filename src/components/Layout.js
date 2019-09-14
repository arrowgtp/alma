import React from 'react'
import { injectIntl } from 'gatsby-plugin-intl'

import './Layout.css'

// import AnimatedLogo from './AnimatedLogo'
import App from './layout/App'
import Main from './layout/Main'
import Menu from './layout/Menu'

import Logo from './Logo'
import Nav from './Navigation'
import Contact from './Contact'

const Layout = ({ children }) => {
  return (
    <>
      {/* <AnimatedLogo/> */}
      <App>
        <Menu>
          <Logo/>
          <Nav/>
          {/* <Contact/> */}
        </Menu>
        <Main>
          {children}
        </Main>
      </App>
    </>
  )
}

export default injectIntl(Layout)
