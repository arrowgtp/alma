import React from 'react'
// import styled from 'styled-components'
import { graphql } from 'gatsby'
import { Link, injectIntl } from 'gatsby-plugin-intl'
import SEO from "../components/seo"

import Content from '../components/layout/Content'
// import FullWidthContainer from '../components/layout/FullWidthContainer'
import CenteredContainer from '../components/layout/CenteredContainer'
import { FullContentCard, FullContentImage, HeadingContainer } from '../components/layout/FullContentCard'
// import { FullImage, Image } from '../components/visual/FullImage'
import AlmaHeader from '../components/Header'
// import AlmaHeading from '../components/visual/AlmaHeading'
import { Button, ButtonContainer } from '../components/visual/Button'
import { Space, H1, H2, P, UL, LI } from '../components/visual/Typography'
import Watermark from '../components/Watermark'
import Caption from '../components/Caption'

import Footer from '../components/Footer'

const Vacations = ({ intl, data }) => {
  return (
    <Content>

      <SEO title={intl.formatMessage({ id: "vacations-title" })}/>

      <FullContentCard>
        <HeadingContainer>
          <AlmaHeader white title={intl.formatMessage({ id: "vacations-title" })}/>
        </HeadingContainer>
        <FullContentImage fluid={data.secretsConcunPool.childImageSharp.fluid}/>
        <Caption large>Actual Image</Caption>
        <Watermark large/>
      </FullContentCard>

      <CenteredContainer>
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
        <AlmaHeader blue title={intl.formatMessage({ id: "rci-destinations-title" })}/>
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

      <CenteredContainer>
        <Space/>
        <P>{intl.formatMessage({ id: "vacations-to-alma" })}</P>
        <Space/>
        <ButtonContainer>
          <Link to="/alma">
            <Button>{intl.formatMessage({ id: "alma-title" })}</Button>
          </Link> 
        </ButtonContainer>
        <Space/>
        <Space/>
      </CenteredContainer>

      <Footer>
        <p>{intl.formatMessage({ id: "copyright-notice" })}</p>
        <p>{intl.formatMessage({ id: "solicitation-notice" })}</p>
      </Footer>

    </Content>
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