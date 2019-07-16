import React from 'react'
import { injectIntl } from 'gatsby-plugin-intl'

import './Layout.css'
import AppContainer from './layout/AppContainer'
import Main from './layout/ContentContainer'
import Menu from './Menu'

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
