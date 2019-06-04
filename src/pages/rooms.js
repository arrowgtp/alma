import React from 'react'
import { injectIntl } from "gatsby-plugin-intl"

import PageWrapper from '../components/PageWrapper'
import CenteredContainer from '../components/styled/CenteredContainer'
import H1 from '../components/styled/H1'

const Rooms = ({ intl }) => {
  return (
    <PageWrapper>
      <CenteredContainer>
        <H1>The Rooms</H1>
        <p>
          We're the only site running on your computer dedicated to showing the best
          photos and videos of pandas eating lots of food.
        </p>
        <p>{intl.formatMessage({ id: "title" })}</p>

        <p>{intl.formatMessage({ id: "slogan" })}</p>
      </CenteredContainer>
    </PageWrapper>
  )
}

export default injectIntl(Rooms)