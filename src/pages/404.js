import React from 'react'
import H1 from '../components/styled/H1'
import ViewContainer from '../components/ViewContainer'
import CenteredContainer from '../components/styled/CenteredContainer'

const NotFoundPage = () => (
  <ViewContainer>
    <CenteredContainer>
      <H1>NOT FOUND</H1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </CenteredContainer>
  </ViewContainer>
)

export default NotFoundPage
