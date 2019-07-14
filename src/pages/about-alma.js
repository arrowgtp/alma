import React from 'react'
import { injectIntl } from 'gatsby-plugin-intl'
import SEO from "../components/seo"

import ViewContainer from '../components/layout/ViewContainer'
import CenteredContainer from '../components/layout/CenteredContainer'
import AlmaHeader from '../components/Header'

const AboutAlma = ({ intl }) => {
  return (
    <ViewContainer>
      <SEO title="About Alma" />
      <CenteredContainer>
        <AlmaHeader title='About Alma' />
        <p>{intl.formatMessage({ id: "title" })}</p>
        <p>{intl.formatMessage({ id: "slogan" })}</p> 
      </CenteredContainer>
    </ViewContainer>
  )
}

export default injectIntl(AboutAlma)