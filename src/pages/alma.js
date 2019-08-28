import React from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'
import { Link, injectIntl } from 'gatsby-plugin-intl'
import SEO from '../components/seo'

import ViewContainer from '../components/layout/ViewContainer'
import { FullContentCard, FullContentImage, HeadingContainer } from '../components/layout/FullContentCard'
import CenteredContainer from '../components/layout/CenteredContainer'
import AlmaHeader from '../components/Header'
import AlmaHeading from '../components/visual/AlmaHeading'
import { Button, ButtonContainer } from '../components/visual/Button'
import { Space, H1, H2, P, UL, LI } from '../components/visual/Typography'
import Watermark from '../components/Watermark'
import Caption from '../components/Caption'

import Footer from '../components/Footer'

const Alma = ({ intl, data }) => {
  return (
    <ViewContainer>
      <SEO title={intl.formatMessage({ id: "alma-title" })}/>

      <FullContentCard>
        <HeadingContainer>
          <AlmaHeader white title={intl.formatMessage({ id: "alma-title" })}/>
        </HeadingContainer>
        <FullContentImage fluid={data.almaConstruction.childImageSharp.fluid}/>
        <Caption large>Actual Image</Caption>
        <Watermark large/>
      </FullContentCard>

      <CenteredContainer>
        <Space/>
        <P>{intl.formatMessage({ id: "alma-intro-paragraph-2" })}</P>
        <Space/>
        <H1>{intl.formatMessage({ id: "alma-heading-1" })}</H1>
        <Space/>
        <H2>{intl.formatMessage({ id: "alma-heading-1-1" })}</H2>
        <Space/>
        <P>{intl.formatMessage({ id: "alma-paragraph-1-1" })}</P>
        <Space/>
        <H2>{intl.formatMessage({ id: "alma-heading-1-2" })}</H2>
        <Space/>
        <P>{intl.formatMessage({ id: "alma-paragraph-1-2" })}</P>
        <Space/>
        <H2>{intl.formatMessage({ id: "alma-heading-1-3" })}</H2>
        <Space/>
        <P>{intl.formatMessage({ id: "alma-paragraph-1-3" })}</P>
        <Space/>
        <UL>
          <LI>{intl.formatMessage({ id: "alma-1-3-point-1" })}</LI>
          <LI>{intl.formatMessage({ id: "alma-1-3-point-2" })}</LI>
          <LI>{intl.formatMessage({ id: "alma-1-3-point-3" })}</LI>
          <LI>{intl.formatMessage({ id: "alma-1-3-point-4" })}</LI>
          <LI>{intl.formatMessage({ id: "alma-1-3-point-5" })}</LI>
        </UL>

        <H2>{intl.formatMessage({ id: "alma-heading-1-4" })}</H2>
        <Space/>
        <P>{intl.formatMessage({ id: "alma-paragraph-1-4" })}</P>
        <Space/>

        <AlmaHeader blue
            title={intl.formatMessage({ id: "founder-name" })}
          />
        <Space/>
        <P>{intl.formatMessage({ id: "founder-paragraph-1" })}</P>
        <Space/>
        <P>{intl.formatMessage({ id: "founder-paragraph-2" })}</P>
        <Space/>

        <CenteredContainer>
        <Space/>
        <P>{intl.formatMessage({ id: "alma-to-home" })}</P>
        <Space/>
        <ButtonContainer>
          <Link to="/">
            <Button>Home</Button>
          </Link> 
        </ButtonContainer>
        <Space/>
        <Space/>
      </CenteredContainer>

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
    almaConstruction: file(relativePath: { eq: "construction/june-5.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2880) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default injectIntl(Alma)