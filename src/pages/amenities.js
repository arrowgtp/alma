import React from 'react'
import { graphql } from 'gatsby'
import { Link, injectIntl } from 'gatsby-plugin-intl'
import styled from 'styled-components'
import Img from 'gatsby-image'
import SEO from "../components/seo"

import { FullContentCard, FullContentImage, HeadingContainer } from '../components/layout/FullContentCard'
import ViewContainer from '../components/layout/ViewContainer'
import FullWidthContainer from '../components/layout/FullWidthContainer'
import CenteredContainer from '../components/layout/CenteredContainer'
import AlmaHeader from '../components/Header'
import Button from '../components/visual/Button'
import P from '../components/visual/Paragraph'
import FullImage from '../components/visual/FullImage'

const ButtonContainer = styled.div`
  margin: 0 0 2rem 0;
  display: flex;
  justify-content: center;
`

const UL = styled.ul`
  font-family: 'Work Sans', sans-serif;
  margin: 2rem;
  padding: 0;
  color: #006897;
  list-style-type: circle;
`

const ListTitle = styled.h1`
  font-family: 'Quicksand', sans-serif;
  text-transform: uppercase;
  font-size: 40px;
  color: #006897;
  text-align: center;
`

const LI = styled.li`
  font-family: 'Work Sans', sans-serif;
  color: #006897;
  list-style-type: circle;
  font-size: 16px;
  padding: 0.25rem;
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
      </FullContentCard>

      <CenteredContainer>
        <P>{intl.formatMessage({ id: "amenities-paragraph-1" })}</P>
      </CenteredContainer>

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

      <FullWidthContainer>
        <FullImage fluid={data.receptionLobby.childImageSharp.fluid}/>
      </FullWidthContainer>

      <FullWidthContainer>
        <FullImage fluid={data.lobbyLounge.childImageSharp.fluid}/>
      </FullWidthContainer>

      <FullWidthContainer>
        <FullImage fluid={data.conventionCenter.childImageSharp.fluid}/>
      </FullWidthContainer>

      <FullWidthContainer>
        <FullImage fluid={data.ballroom.childImageSharp.fluid}/>
      </FullWidthContainer>

      <CenteredContainer> 
        <P>Now see our latest contruction updates to view our progress.</P>
        <ButtonContainer>
          <Link to="/construction">
            <Button>Learn More</Button>
          </Link> 
        </ButtonContainer> 
      </CenteredContainer>

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