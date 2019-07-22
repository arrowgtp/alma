import React from 'react'
import { injectIntl } from 'gatsby-plugin-intl'
import SEO from "../components/seo"

import ViewContainer from '../components/layout/ViewContainer'
import CenteredContainer from '../components/layout/CenteredContainer'
import AlmaHeader from '../components/Header'

const Vacations = ({ intl }) => {
  return (
    <ViewContainer>
      <SEO title={intl.formatMessage({ id: "vacations-title" })}/>
      <CenteredContainer>

        <AlmaHeader title={intl.formatMessage({ id: "vacations-title" })}/>
        
        <p>{intl.formatMessage({ id: "vacations-paragraph-1" })}</p>

        <h1>{intl.formatMessage({ id: "rci-title" })}</h1>

        <p>{intl.formatMessage({ id: "rci-paragraph-1" })}</p>

      </CenteredContainer>
    </ViewContainer>
  )
}

export default injectIntl(Vacations)