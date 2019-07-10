import React from 'react'
import SEO from '../components/seo'

import AlmaHeader from '../components/Header'
import ViewContainer from '../components/layout/ViewContainer'
import CenteredContainer from '../components/layout/CenteredContainer'

const NotFoundPage = () => (
  <ViewContainer>
    <SEO title="404" />
    <CenteredContainer>
      <AlmaHeader title='Uh Oh' />
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </CenteredContainer>
  </ViewContainer>
)

export default NotFoundPage
