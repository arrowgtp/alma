import React from 'react'
import { graphql } from 'gatsby'
import { Link, injectIntl } from 'gatsby-plugin-intl'
// import styled from 'styled-components'
import SEO from "../components/seo"

import Content from '../components/layout/Content'

import { FullContentCard, HeadingContainer } from '../components/layout/FullContentCard'
import { FullImage, Image } from '../components/visual/FullImage'
import FullWidthContainer from '../components/layout/FullWidthContainer'
import CenteredContainer from '../components/layout/CenteredContainer'
import AlmaHeader from '../components/Header'
import { Button, ButtonContainer } from '../components/visual/Button'
import { Space, P } from '../components/visual/Typography'
import Watermark from '../components/Watermark'
import Caption from '../components/Caption'

import Footer from '../components/Footer'


const Resort = ({ data, intl }) => {
  return (
    <Content>

      <SEO title={intl.formatMessage({ id: "resort-title" })} />
      
      <FullContentCard>
        <HeadingContainer>
          <AlmaHeader white title={intl.formatMessage({ id: "resort-title" })}/>
        </HeadingContainer>
        <Image grid fluid={data.almaResort2.childImageSharp.fluid}/>
        <Caption large>Artist Rendering</Caption>
        <Watermark large/>
      </FullContentCard>

      <CenteredContainer>
        <Space/>
        <P>{intl.formatMessage({ id: "resort-paragraph-1" })}</P>
        <Space/>
      </CenteredContainer>

      <FullWidthContainer>
        <FullImage>
          <Image rounded fluid={data.almaResort1.childImageSharp.fluid}/>
          <Caption medium>Artist Rendering</Caption>
          <Watermark medium/>
        </FullImage>
      </FullWidthContainer>

      <CenteredContainer>
        <Space/>
        <P>{intl.formatMessage({ id: "resort-paragraph-2" })}</P>
        <Space/>
      </CenteredContainer>

      {/* <FullWidthContainer>
        <FullImage fluid={data.almaResort3.childImageSharp.fluid}/>
      </FullWidthContainer> */}

      <FullWidthContainer>
        <FullImage>
          <Image rounded fluid={data.almaResort3.childImageSharp.fluid}/>
          <Caption medium>Artist Rendering</Caption>
          <Watermark medium/>
        </FullImage>
      </FullWidthContainer>

      <CenteredContainer>
        <Space/>
        <P>{intl.formatMessage({ id: "resort-paragraph-3" })}</P>
        <Space/>
      </CenteredContainer>

      <FullWidthContainer>
        <FullImage>
          <Image rounded fluid={data.almaResort4.childImageSharp.fluid}/>
          <Caption medium>Artist Rendering</Caption>
          <Watermark medium/>
        </FullImage>
      </FullWidthContainer>

      <CenteredContainer>
        <Space/>
        <P>{intl.formatMessage({ id: "resort-paragraph-4" })}</P>
        <Space/>
      </CenteredContainer>

      <FullWidthContainer>
        <FullImage>
          <Image rounded fluid={data.almaResort5.childImageSharp.fluid}/>
          <Caption medium>Artist Rendering</Caption>
          <Watermark medium/>
        </FullImage>
      </FullWidthContainer>

      <CenteredContainer>
        <Space/>
        <P>{intl.formatMessage({ id: "resort-to-apartments" })}</P>
        <Space/>
        <ButtonContainer>
          <Link to="/apartments">
            <Button>{intl.formatMessage({ id: "apartments-title" })}</Button>
          </Link> 
        </ButtonContainer>
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
    resortOverview: file(relativePath: { eq: "resort/resort-overview-render-1-16x10.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 3456) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    almaResort1: file(relativePath: { eq: "resort/resort-render-1-16x10.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2880) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    almaResort2: file(relativePath: { eq: "resort/resort-render-2-16x10.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2880) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    almaResort3: file(relativePath: { eq: "resort/resort-render-3-16x10.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2880) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    almaResort4: file(relativePath: { eq: "resort/resort-render-4-16x10.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2880) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    almaResort5: file(relativePath: { eq: "resort/resort-overview-render-2-16x10.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2880) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

export default injectIntl(Resort)