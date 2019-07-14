import React from 'react'
import { injectIntl } from 'gatsby-plugin-intl'
import SEO from '../components/seo'

import ViewContainer from '../components/layout/ViewContainer'
import CenteredContainer from '../components/layout/CenteredContainer'
import AlmaHeader from '../components/Header'

import P from '../components/visual/Paragraph'

const Villas = ({ intl }) => {
  return (
    <ViewContainer>
      <SEO title="Villas" />
      <CenteredContainer>
        <AlmaHeader title='Villas' />
        <P>{intl.formatMessage({ id: "title" })}</P>
        <P>{intl.formatMessage({ id: "slogan" })}</P>
      </CenteredContainer>
    </ViewContainer>
  )
}

export default injectIntl(Villas)