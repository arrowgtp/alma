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

const ButtonContainer = styled.div`
  margin: 0 0 2rem 0;
  display: flex;
  justify-content: center;
`

const Apartments = ({ data, intl }) => {
  return (
    <ViewContainer>

      <SEO title={intl.formatMessage({ id: "apartments-title" })} />
      
      <FullContentCard>
        <HeadingContainer>
          <AlmaHeader white
            title={intl.formatMessage({ id: "apartments-title" })}
          />
        </HeadingContainer>
        <FullContentImage fluid={data.apartmentLivingRoom1.childImageSharp.fluid}/>
      </FullContentCard>

      <CenteredContainer>
        <AlmaHeader title={intl.formatMessage({ id: "apartments-subtitle" })}></AlmaHeader>
        <P>{intl.formatMessage({ id: "resort-p1" })}</P>
      </CenteredContainer>

      <FullWidthContainer>
        <Img fluid={data.apartmentLivingRoom2.childImageSharp.fluid}/>
      </FullWidthContainer>

      <CenteredContainer>
        <P>{intl.formatMessage({ id: "resort-p2" })}</P>
      </CenteredContainer>

      <FullWidthContainer>
        <Img fluid={data.apartmentKitchen.childImageSharp.fluid}/>
      </FullWidthContainer>

      <CenteredContainer>
        <P>{intl.formatMessage({ id: "resort-p3" })}</P>
      </CenteredContainer>

      <FullWidthContainer>
        <Img fluid={data.apartmentBedroom.childImageSharp.fluid}/>
      </FullWidthContainer>

      <CenteredContainer>
        <P>{intl.formatMessage({ id: "resort-p3" })}</P>
      </CenteredContainer>

      <FullWidthContainer>
        <Img fluid={data.apartmentBathroom.childImageSharp.fluid}/>
      </FullWidthContainer>

      <CenteredContainer>
        <Img fluid={data.floorplanA.childImageSharp.fluid}/>
      </CenteredContainer>

      <CenteredContainer>
        <Img fluid={data.floorplanB.childImageSharp.fluid}/>
      </CenteredContainer>

      <CenteredContainer>
        <Img fluid={data.floorplanC.childImageSharp.fluid}/>
      </CenteredContainer>

      <CenteredContainer> 
        <P>Learn more about our beautiful luxury oceanview villas and their floorplans.</P>
        <ButtonContainer>
          <Link to="/villas">
            <Button>Learn More</Button>
          </Link> 
        </ButtonContainer> 
      </CenteredContainer>

    </ViewContainer>
  )
}

export const query = graphql`
  query {
    apartmentLivingRoom1: file(relativePath: { eq: "apartments/apartment-living-room-1-4x3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2880) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    apartmentLivingRoom2: file(relativePath: { eq: "apartments/apartment-living-room-2-4x3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2880) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    apartmentKitchen: file(relativePath: { eq: "apartments/apartment-kitchen-4x3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2880) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    apartmentBedroom: file(relativePath: { eq: "apartments/apartment-bedroom-4x3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2880) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    apartmentBathroom: file(relativePath: { eq: "apartments/apartment-bathroom-4x3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2880) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    floorplanA: file(relativePath: { eq: "floorplans/plan-a.png" }) {
      childImageSharp {
        fluid(maxWidth: 2386) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    floorplanB: file(relativePath: { eq: "floorplans/plan-b.png" }) {
      childImageSharp {
        fluid(maxWidth: 2969) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    floorplanC: file(relativePath: { eq: "floorplans/plan-c.png" }) {
      childImageSharp {
        fluid(maxWidth: 3089) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default injectIntl(Apartments)