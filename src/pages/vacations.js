import React from 'react'
import { injectIntl } from 'gatsby-plugin-intl'
import SEO from "../components/seo"

import ViewContainer from '../components/layout/ViewContainer'
import CenteredContainer from '../components/layout/CenteredContainer'
import AlmaHeader from '../components/Header'

const Vacations = ({ intl }) => {
  return (
    <ViewContainer>
      <SEO title="Vacations" />
      <CenteredContainer>
        <AlmaHeader title='Vacations' />
        <p>We're the only site running on your computer dedicated to showing the best
          photos and videos of pandas eating lots of food.</p>
        <p>{intl.formatMessage({ id: "title" })}</p>
        <p>{intl.formatMessage({ id: "slogan" })}</p>
      </CenteredContainer>
    </ViewContainer>
  )
}

export default injectIntl(Vacations)