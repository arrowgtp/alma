import React from 'react'
import { injectIntl } from 'gatsby-plugin-intl'
import SEO from "../components/seo"


import ViewContainer from '../components/layout/ViewContainer'
import CenteredContainer from '../components/styled/CenteredContainer'
import AlmaHeader from '../components/Header'

const Resort = ({ intl }) => {
  return (
    <ViewContainer>
      <SEO title="Resort" />
      <CenteredContainer>
        <AlmaHeader title='The Resort' />
        <p>
          We're the only site running on your computer dedicated to showing the best
          photos and videos of pandas eating lots of food.
        </p>
        <p>{intl.formatMessage({ id: "title" })}</p>
        <p>{intl.formatMessage({ id: "slogan" })}</p>
      </CenteredContainer>
    </ViewContainer>
  )
}

export default injectIntl(Resort)

// export default Resort