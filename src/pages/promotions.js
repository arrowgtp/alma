import React from 'react'
import { injectIntl } from 'gatsby-plugin-intl'
import SEO from '../components/seo'

import Content from '../components/layout/Content'
import CenteredContainer from '../components/layout/CenteredContainer'
import AlmaHeader from '../components/Header'

const Promotions = ({ intl }) => {
  return (
    <Content>
      <SEO title="Promotions" />
      <CenteredContainer>
        <AlmaHeader title='Promotions' />
        <p>{intl.formatMessage({ id: "title" })}</p>
        <p>{intl.formatMessage({ id: "slogan" })}</p>
      </CenteredContainer>
    </Content>
  )
}

export default injectIntl(Promotions)