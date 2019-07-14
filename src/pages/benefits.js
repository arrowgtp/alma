import React from 'react'
import { injectIntl } from 'gatsby-plugin-intl'
import SEO from '../components/seo'

import ViewContainer from '../components/layout/ViewContainer'
import CenteredContainer from '../components/layout/CenteredContainer'
import AlmaHeader from '../components/Header'

import P from '../components/visual/Paragraph'

const Benefits = ({ intl }) => {
  return (
    <ViewContainer>
      <SEO title="Benefits" />
      <CenteredContainer>
        <AlmaHeader title='Benefits' />
        <P>{intl.formatMessage({ id: "title" })}</P>
        <P>{intl.formatMessage({ id: "slogan" })}</P>
      </CenteredContainer>
    </ViewContainer>
  )
}

export default injectIntl(Benefits)