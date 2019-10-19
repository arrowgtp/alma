import React from 'react'
import { injectIntl } from 'gatsby-plugin-intl'

import './Layout.css'

// import AnimatedLogo from './AnimatedLogo'
import App from './layout/App'
import Main from './layout/Main'
import Menu from './layout/Menu'

import Logo from './Logo'
import Nav from './Navigation'
import PromoButton from './PromoButton'

const Layout = ({ children }) => {

  if (typeof window !== "undefined") {
    // eslint-disable-next-line global-require
    require("smooth-scroll")('a[href*="#"]')
  }

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
