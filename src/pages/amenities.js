import React from 'react'
import { injectIntl } from 'gatsby-plugin-intl'
import SEO from "../components/seo"

import ViewContainer from '../components/ViewContainer'
import CenteredContainer from '../components/styled/CenteredContainer'
import AlmaHeader from '../components/Header'

const Amenities = ({ intl }) => {
  return (
    <ViewContainer>
      <SEO title="Amenities" />
      <CenteredContainer>
        <AlmaHeader title='Amenities' />
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

export default injectIntl(Amenities)

// export default Amenities