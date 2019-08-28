import React from 'react'
import { graphql } from 'gatsby'
import { Link, injectIntl } from 'gatsby-plugin-intl'
import styled from 'styled-components'
// import Img from 'gatsby-image'
import SEO from '../components/seo'

import ViewContainer from '../components/layout/ViewContainer'
import FullWidthContainer from '../components/layout/FullWidthContainer'
import CenteredContainer from '../components/layout/CenteredContainer'
import { FullContentCard, FullContentImage, HeadingContainer, FullCaption } from '../components/layout/FullContentCard'
import { FullImage, Image, Caption } from '../components/visual/FullImage'
import AlmaHeader from '../components/Header'
import Button from '../components/visual/Button'
import { Space, H1, H2, P, UL, ListTitle, LI } from '../components/visual/Typography'
import Watermark from '../components/Watermark'


import Footer from '../components/Footer'

const ButtonContainer = styled.div`
  margin: 0 0 2rem 0;
  display: flex;
  justify-content: center;
`

const Amenities = ({ data, intl }) => {
  return (
    <ViewContainer>

      <SEO title={intl.formatMessage({ id: "amenities-title" })} />
      
      <FullContentCard>
        <HeadingContainer>
          <AlmaHeader white
            title={intl.formatMessage({ id: "amenities-title" })}
          />
        </HeadingContainer>
        <FullContentImage fluid={data.spaTreatment.childImageSharp.fluid}/>
        <FullCaption>Artist Rendering</FullCaption>
      </FullContentCard>

      <CenteredContainer>
        <Space/>
        <P>{intl.formatMessage({ id: "amenities-paragraph-1" })}</P>
        <Space/>
      </CenteredContainer>

      <FullWidthContainer>
        <FullImage>
          <Image fluid={data.receptionLobby.childImageSharp.fluid}/>
          <Caption>Artist Rendering</Caption>
        </FullImage>
      </FullWidthContainer>

      <CenteredContainer>
        <Space/>
        <P>{intl.formatMessage({ id: "amenities-paragraph-2" })}</P>
        <Space/>
      </CenteredContainer>

      <FullWidthContainer>
        <FullImage>
          <Image fluid={data.lobbyLounge.childImageSharp.fluid}/>
          <Caption>Artist Rendering</Caption>
        </FullImage>
      </FullWidthContainer>

      <CenteredContainer>
        <Space/>
        <P>{intl.formatMessage({ id: "amenities-paragraph-3" })}</P>
        <Space/>
      </CenteredContainer>

      <FullWidthContainer>
        <FullImage>
          <Image fluid={data.conventionCenter.childImageSharp.fluid}/>
          <Caption>Artist Rendering</Caption>
        </FullImage>
      </FullWidthContainer>

      <CenteredContainer>
        <Space/>
        <P>{intl.formatMessage({ id: "amenities-paragraph-4" })}</P>
        <Space/>
      </CenteredContainer>

      <FullWidthContainer>
        <FullImage>
          <Image fluid={data.ballroom.childImageSharp.fluid}/>
          <Caption>Artist Rendering</Caption>
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

    </ViewContainer>
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
  }
`

export default injectIntl(Amenities)