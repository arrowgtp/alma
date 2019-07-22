import React from 'react'
import styled from 'styled-components'
import { injectIntl } from 'gatsby-plugin-intl'
import SEO from '../components/seo'

import ViewContainer from '../components/layout/ViewContainer'
import CenteredContainer from '../components/layout/CenteredContainer'
import AlmaHeader from '../components/Header'
import P from '../components/visual/Paragraph'

const UL = styled.ul`
  font-family: 'Work Sans', sans-serif;
  margin: 2rem;
  padding: 0;
  color: #006897;
  list-style-type: circle;
`

const AlmaHeading1 = styled.h1`
  font-family: 'Quicksand', sans-serif;
  text-transform: uppercase;
  font-size: 40px;
  color: #006897;
`

const AlmaHeading2 = styled.h1`
  font-family: 'Quicksand', sans-serif;
  text-transform: uppercase;
  font-size: 32px;
  color: #006897;
`

const LI = styled.li`
  font-family: 'Work Sans', sans-serif;
  color: #006897;
  list-style-type: circle;
  font-size: 16px;
  padding: 0.25rem;
`

const Alma = ({ intl }) => {
  return (
    <ViewContainer>
      <SEO title={intl.formatMessage({ id: "alma-title" })}/>
      <CenteredContainer>

        <AlmaHeader title={intl.formatMessage({ id: "alma-title" })}/>
        <P>{intl.formatMessage({ id: "alma-subtitle" })}</P>

        <AlmaHeading1>{intl.formatMessage({ id: "alma-heading-1" })}</AlmaHeading1>

        <AlmaHeading2>{intl.formatMessage({ id: "alma-heading-1-1" })}</AlmaHeading2>
        <P>{intl.formatMessage({ id: "alma-paragraph-1-1" })}</P>

        <AlmaHeading2>{intl.formatMessage({ id: "alma-heading-1-2" })}</AlmaHeading2>
        <P>{intl.formatMessage({ id: "alma-paragraph-1-2" })}</P>

        <AlmaHeading2>{intl.formatMessage({ id: "alma-heading-1-3" })}</AlmaHeading2>
        <P>{intl.formatMessage({ id: "alma-paragraph-1-3" })}</P>
        <UL>
          <LI>{intl.formatMessage({ id: "alma-1-3-point-1" })}</LI>
          <LI>{intl.formatMessage({ id: "alma-1-3-point-2" })}</LI>
          <LI>{intl.formatMessage({ id: "alma-1-3-point-3" })}</LI>
          <LI>{intl.formatMessage({ id: "alma-1-3-point-4" })}</LI>
          <LI>{intl.formatMessage({ id: "alma-1-3-point-5" })}</LI>
        </UL>

        <AlmaHeading2>{intl.formatMessage({ id: "alma-heading-1-4" })}</AlmaHeading2>
        <P>{intl.formatMessage({ id: "alma-paragraph-1-4" })}</P>

      </CenteredContainer>
    </ViewContainer>
  )
}

export default injectIntl(Alma)