import React from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'
import { injectIntl } from 'gatsby-plugin-intl'
import SEO from "../components/seo"


import ViewContainer from '../components/layout/ViewContainer'
import { FullContentCard, FullContentImage, HeadingContainer } from '../components/layout/FullContentCard'
import CenteredContainer from '../components/layout/CenteredContainer'
import AlmaHeader from '../components/Header'
import { Space, H1, H2, P, UL, LI } from '../components/visual/Typography'

import Footer from '../components/Footer'

const Vacations = ({ intl, data }) => {
  return (
    <ViewContainer>

      <SEO title={intl.formatMessage({ id: "vacations-title" })}/>

      <FullContentCard>
        <HeadingContainer>
          <AlmaHeader white
            title={intl.formatMessage({ id: "vacations-title" })}
          />
        </HeadingContainer>
        <FullContentImage fluid={data.secretsConcunPool.childImageSharp.fluid}/>
      </FullContentCard>

      <CenteredContainer>
        <Space/>
        <AlmaHeader title={intl.formatMessage({ id: "vacations-title" })}/>
        <Space/>
        <P>{intl.formatMessage({ id: "vacations-intro-paragraph" })}</P>
        <Space/>
        <H1>{intl.formatMessage({ id: "rci-heading-1" })}</H1>
        <Space/>
        <P>{intl.formatMessage({ id: "rci-paragraph-1" })}</P>
        <Space/>
        <H1>{intl.formatMessage({ id: "rci-heading-2" })}</H1>
        <Space/>
        <P>{intl.formatMessage({ id: "rci-paragraph-2" })}</P>
        <Space/>
        <H1>{intl.formatMessage({ id: "rci-heading-3" })}</H1>
        <Space/>
        <P>{intl.formatMessage({ id: "rci-paragraph-3" })}</P>
        <UL>
          <LI>{intl.formatMessage({ id: "rci-point-1" })}</LI>
          <LI>{intl.formatMessage({ id: "rci-point-2" })}</LI>
          <LI>{intl.formatMessage({ id: "rci-point-3" })}</LI>
          <LI>{intl.formatMessage({ id: "rci-point-4" })}</LI>
          <LI>{intl.formatMessage({ id: "rci-point-5" })}</LI>
        </UL>
        <H1>{intl.formatMessage({ id: "rci-heading-5" })}</H1>
        <Space/>
        <H2>{intl.formatMessage({ id: "rci-heading-5-1" })}</H2>
        <Space/>
        <P>{intl.formatMessage({ id: "rci-paragraph-5-1" })}</P>
        <Space/>
        <H2>{intl.formatMessage({ id: "rci-heading-5-2" })}</H2>
        <Space/>
        <P>{intl.formatMessage({ id: "rci-paragraph-5-2" })}</P>
        <Space/>
        <H2>{intl.formatMessage({ id: "rci-heading-5-3" })}</H2>
        <Space/>
        <P>{intl.formatMessage({ id: "rci-paragraph-5-3" })}</P>
        <Space/>
        <AlmaHeader white title={intl.formatMessage({ id: "rci-destinations-title" })}/>
        <Space/>
        <H1>{intl.formatMessage({ id: "rci-destination-1" })}</H1>
        <Space/>
        <P>{intl.formatMessage({ id: "rci-destination-1-paragraph" })}</P>
        <Space/>
        <H1>{intl.formatMessage({ id: "rci-destination-2" })}</H1>
        <Space/>
        <P>{intl.formatMessage({ id: "rci-destination-2-paragraph" })}</P>
        <Space/>
        <H1>{intl.formatMessage({ id: "rci-destination-3" })}</H1>
        <Space/>
        <P>{intl.formatMessage({ id: "rci-destination-3-paragraph" })}</P>
        <Space/>
        <H1>{intl.formatMessage({ id: "rci-destination-4" })}</H1>
        <Space/>
        <P>{intl.formatMessage({ id: "rci-destination-4-paragraph" })}</P>
        <Space/>
        <H1>{intl.formatMessage({ id: "rci-destination-5" })}</H1>
        <Space/>
        <P>{intl.formatMessage({ id: "rci-destination-5-paragraph" })}</P>
        <Space/>
        <H1>{intl.formatMessage({ id: "rci-destination-6" })}</H1>
        <Space/>
        <P>{intl.formatMessage({ id: "rci-destination-6-paragraph" })}</P>
        <Space/>
      </CenteredContainer>

      <Footer>
        <p>{intl.formatMessage({ id: "copyright-notice" })}</p>
        <p>{intl.formatMessage({ id: "solicitation-notice" })}</p>
      </Footer>

    </ViewContainer>
  )
}

export const query = graphql`
  query {
    secretsConcunPool: file(relativePath: { eq: "rci/secrets-cancun-pool.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2880) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default injectIntl(Vacations)