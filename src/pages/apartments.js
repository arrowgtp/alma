import React from 'react'
import { injectIntl } from 'gatsby-plugin-intl'
import SEO from "../components/seo"

import ViewContainer from '../components/layout/ViewContainer'
import CenteredContainer from '../components/layout/CenteredContainer'
import AlmaHeader from '../components/Header'

const Apartments = ({ intl }) => {
  return (
    <ViewContainer>
      <SEO title="Apartments" />
      <CenteredContainer>
        <AlmaHeader title='Apartments' />
        <p>{intl.formatMessage({ id: "title" })}</p>
        <p>{intl.formatMessage({ id: "slogan" })}</p>
      </CenteredContainer>
    </ViewContainer>
  )
}

export default injectIntl(Apartments)