import React from 'react'
import { injectIntl } from 'gatsby-plugin-intl'

import ViewContainer from '../components/ViewContainer'
import CenteredContainer from '../components/styled/CenteredContainer'
import H1 from '../components/styled/H1'

const Amenities = ({ intl }) => {
  return (
    <ViewContainer>
      <CenteredContainer>
        <H1>The Amenities</H1>
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