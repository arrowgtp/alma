import React from 'react'
import { graphql } from 'gatsby'
import { Link, injectIntl } from 'gatsby-plugin-intl'
// import styled from 'styled-components'
// import Img from 'gatsby-image'
import SEO from '../components/seo'

import Content from '../components/layout/Content'
import FullWidthContainer from '../components/layout/FullWidthContainer'
import CenteredContainer from '../components/layout/CenteredContainer'
import { FullContentCard, HeadingContainer } from '../components/layout/FullContentCard'
import { FullImage, Image } from '../components/visual/FullImage'
import AlmaHeader from '../components/Header'
import { Button, ButtonContainer } from '../components/visual/Button'
import { Space, P, UL, ListTitle, LI } from '../components/visual/Typography'
import Watermark from '../components/Watermark'
import Caption from '../components/Caption'
import Box from '../components/Box'

import Footer from '../components/Footer'

const Amenities = ({ data, intl }) => {
  return (
    <Content>

      <SEO title={intl.formatMessage({ id: "amenities-title" })} />
      
      <FullContentCard>
        <HeadingContainer>
          <AlmaHeader white title={intl.formatMessage({ id: "amenities-title" })}/>
        </HeadingContainer>
        <Image grid fluid={data.waterpark4.childImageSharp.fluid}/>
        <Caption large>Artist Rendering</Caption>
        <Watermark large/>
      </FullContentCard>

      <CenteredContainer>
        <Space/>
        <P>{intl.formatMessage({ id: "amenities-paragraph-1" })}</P>
        <Space/>
      </CenteredContainer>

      <FullWidthContainer>
        <FullImage>
          <Image rounded fluid={data.receptionLobby.childImageSharp.fluid}/>
          <Caption medium>Artist Rendering</Caption>
          <Watermark medium/>
        </FullImage>
      </FullWidthContainer>

      <CenteredContainer>
        <Space/>
        <P>{intl.formatMessage({ id: "amenities-paragraph-2" })}</P>
        <Space/>
      </CenteredContainer>

      <FullWidthContainer>
        <FullImage>
          <Image rounded fluid={data.lobbyLounge.childImageSharp.fluid}/>
          <Caption medium>Artist Rendering</Caption>
          <Watermark medium/>
        </FullImage>
      </FullWidthContainer>

      <CenteredContainer>
        <Space/>
        <P>{intl.formatMessage({ id: "amenities-paragraph-3" })}</P>
        <Space/>
      </CenteredContainer>

      <FullWidthContainer>
        <FullImage>
          <Image rounded fluid={data.conventionCenter.childImageSharp.fluid}/>
          <Caption medium>Artist Rendering</Caption>
          <Watermark medium/>
        </FullImage>
      </FullWidthContainer>

      <CenteredContainer>
        <Space/>
        <P>{intl.formatMessage({ id: "amenities-paragraph-4" })}</P>
        <Space/>
      </CenteredContainer>

      <FullWidthContainer>
        <FullImage>
          <Image rounded fluid={data.ballroom.childImageSharp.fluid}/>
          <Caption medium>Artist Rendering</Caption>
          <Watermark medium/>
        </FullImage>
      </FullWidthContainer>

      <CenteredContainer>
        <UL>
          <ListTitle>{intl.formatMessage({ id: "amenities-list" })}</ListTitle>
          <LI>{intl.formatMessage({ id: "amenities-list-point-1" })}</LI>
          <LI>{intl.formatMessage({ id: "amenities-list-point-2" })}</LI>
          <LI>{intl.formatMessage({ id: "amenities-list-point-3" })}</LI>
          <LI>{intl.formatMessage({ id: "amenities-list-point-4" })}</LI>
          <LI>{intl.formatMessage({ id: "amenities-list-point-5" })}</LI>
          <LI>{intl.formatMessage({ id: "amenities-list-point-6" })}</LI>
          <LI>{intl.formatMessage({ id: "amenities-list-point-7" })}</LI>
          <LI>{intl.formatMessage({ id: "amenities-list-point-8" })}</LI>
          <LI>{intl.formatMessage({ id: "amenities-list-point-9" })}</LI>
          <LI>{intl.formatMessage({ id: "amenities-list-point-10" })}</LI>
          <LI>{intl.formatMessage({ id: "amenities-list-point-11" })}</LI>
          <LI>{intl.formatMessage({ id: "amenities-list-point-12" })}</LI>
          <LI>{intl.formatMessage({ id: "amenities-list-point-13" })}</LI>
          <LI>{intl.formatMessage({ id: "amenities-list-point-14" })}</LI>
          <LI>{intl.formatMessage({ id: "amenities-list-point-15" })}</LI>
          <LI>{intl.formatMessage({ id: "amenities-list-point-16" })}</LI>
          <LI>{intl.formatMessage({ id: "amenities-list-point-17" })}</LI>
          <LI>{intl.formatMessage({ id: "amenities-list-point-18" })}</LI>
        </UL>
      </CenteredContainer>

      <CenteredContainer>
        <Space/>
        <P>{intl.formatMessage({ id: "amenities-to-construction" })}</P>
        <Space/>
        <ButtonContainer>
          <Link to="/construction">
            <Button>{intl.formatMessage({ id: "construction-title" })}</Button>
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
    receptionLobby: file(relativePath: { eq: "amenities/reception-lobby-4x3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2880) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    lobbyLounge: file(relativePath: { eq: "amenities/lobby-lounge-4x3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2880) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    conventionCenter: file(relativePath: { eq: "amenities/convention-center-4x3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2880) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    ballroom: file(relativePath: { eq: "amenities/ballroom-4x3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2880) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    spaTreatment: file(relativePath: { eq: "amenities/spa-treatment-4x3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2880) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    waterpark4: file(relativePath: { eq: "amenities/waterpark-4.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2880) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

export default injectIntl(Amenities)