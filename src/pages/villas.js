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
import FlexContainer from '../components/layout/FlexContainer'
import FlexBox from '../components/layout/FlexBox'
import AlmaHeader from '../components/Header'
import Button from '../components/visual/Button'
import P from '../components/visual/Paragraph'

const ButtonContainer = styled.div`
  margin: 0 0 2rem 0;
  display: flex;
  justify-content: center;
`

const Floorplan = styled(Img)`
  width: 100%;
  height: auto;
`

const FloorplanHeading = styled.h1`
  margin: 1rem;
  padding: 0;
  text-transform: uppercase;
  font-family: 'Quicksand', sans-serif;
  font-size: 48px;
  color: #006897;
`

const FloorplanParagraph = styled.p`
  margin: 0.5rem;
  padding: 0;
  font-family: 'Work Sans', sans-serif;
  font-size: 16px;
  color: #006897;
`

const Villas = ({ data, intl }) => {
  return (
    <ViewContainer>

      <SEO title={intl.formatMessage({ id: "villas-title" })} />
      
      <FullContentCard>
        <HeadingContainer>
          <AlmaHeader white
            title={intl.formatMessage({ id: "villas-title" })}
          />
        </HeadingContainer>
        <FullContentImage fluid={data.villaLivingRoom1.childImageSharp.fluid}/>
      </FullContentCard>

      <CenteredContainer>
        <P>{intl.formatMessage({ id: "villas-paragraph-1" })}</P>
      </CenteredContainer>

      <FullWidthContainer>
        <Img fluid={data.villaExterior1.childImageSharp.fluid}/>
      </FullWidthContainer>

      <FullWidthContainer>
        <Img fluid={data.villaLivingRoom2.childImageSharp.fluid}/>
      </FullWidthContainer>

      <FullWidthContainer>
        <Img fluid={data.villaBedroom1.childImageSharp.fluid}/>
      </FullWidthContainer>

      <FullWidthContainer>
        <Img fluid={data.villaBathroom1.childImageSharp.fluid}/>
      </FullWidthContainer>

      <CenteredContainer>
        {/* <AlmaHeader white title={intl.formatMessage({ id: "floorplans-title" })}></AlmaHeader> */}
        <AlmaHeader white title="Floorplans"></AlmaHeader>
      </CenteredContainer>

      <FullWidthContainer>
        <FlexContainer>
          <FlexBox>
            <FloorplanHeading>{intl.formatMessage({ id: "floorplan-d" })}</FloorplanHeading>
            <FloorplanParagraph>{intl.formatMessage({ id: "floorplan-d-size" })}</FloorplanParagraph>
            <FloorplanParagraph>{intl.formatMessage({ id: "floorplan-d-bedrooms" })}</FloorplanParagraph>
            <FloorplanParagraph>{intl.formatMessage({ id: "floorplan-d-capacity" })}</FloorplanParagraph>
          </FlexBox>
          <FlexBox>
            <Floorplan fluid={data.floorplanD.childImageSharp.fluid}/>
          </FlexBox>
        </FlexContainer>
      </FullWidthContainer>

      <FullWidthContainer>
        <FlexContainer>
          <FlexBox>
            <FloorplanHeading>{intl.formatMessage({ id: "floorplan-e" })}</FloorplanHeading>
            <FloorplanParagraph>{intl.formatMessage({ id: "floorplan-e-size" })}</FloorplanParagraph>
            <FloorplanParagraph>{intl.formatMessage({ id: "floorplan-e-bedrooms" })}</FloorplanParagraph>
            <FloorplanParagraph>{intl.formatMessage({ id: "floorplan-e-capacity" })}</FloorplanParagraph>
          </FlexBox>
          <FlexBox>
            <Floorplan fluid={data.floorplanE.childImageSharp.fluid}/>
          </FlexBox>
        </FlexContainer>
      </FullWidthContainer>

      <FullWidthContainer>
        <FlexContainer>
          <FlexBox>
            <FloorplanHeading>{intl.formatMessage({ id: "floorplan-f" })}</FloorplanHeading>
            <FloorplanParagraph>{intl.formatMessage({ id: "floorplan-f-size" })}</FloorplanParagraph>
            <FloorplanParagraph>{intl.formatMessage({ id: "floorplan-f-bedrooms" })}</FloorplanParagraph>
            <FloorplanParagraph>{intl.formatMessage({ id: "floorplan-f-capacity" })}</FloorplanParagraph>
          </FlexBox>
          <FlexBox>
            <Floorplan fluid={data.floorplanF.childImageSharp.fluid}/>
          </FlexBox>
        </FlexContainer>
      </FullWidthContainer>

      <FullWidthContainer>
        <FlexContainer>
          <FlexBox>
            <FloorplanHeading>{intl.formatMessage({ id: "floorplan-g" })}</FloorplanHeading>
            <FloorplanParagraph>{intl.formatMessage({ id: "floorplan-g-size" })}</FloorplanParagraph>
            <FloorplanParagraph>{intl.formatMessage({ id: "floorplan-g-bedrooms" })}</FloorplanParagraph>
            <FloorplanParagraph>{intl.formatMessage({ id: "floorplan-g-capacity" })}</FloorplanParagraph>
          </FlexBox>
          <FlexBox>
            <Floorplan fluid={data.floorplanG.childImageSharp.fluid}/>
          </FlexBox>
        </FlexContainer>
      </FullWidthContainer>

      <CenteredContainer> 
        <P>Learn more about the fabulous food at our world class restuarants and food court.</P>
        <ButtonContainer>
          <Link to="/restaurants">
            <Button>Learn More</Button>
          </Link> 
        </ButtonContainer> 
      </CenteredContainer>

    </ViewContainer>
  )
}

export const query = graphql`
  query {
    villaExterior1: file(relativePath: { eq: "villas/villa-exterior-1-4x3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2880) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    villaLivingRoom1: file(relativePath: { eq: "villas/villa-living-room-1-4x3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2880) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    villaLivingRoom2: file(relativePath: { eq: "villas/villa-living-room-2-4x3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2880) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    villaBedroom1: file(relativePath: { eq: "villas/villa-bedroom-1-4x3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2880) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    villaBathroom1: file(relativePath: { eq: "villas/villa-bathroom-1-4x3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2880) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    floorplanD: file(relativePath: { eq: "floorplans/plan-d.png" }) {
      childImageSharp {
        fluid(maxWidth: 3299) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    floorplanE: file(relativePath: { eq: "floorplans/plan-e.png" }) {
      childImageSharp {
        fluid(maxWidth: 3339) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    floorplanF: file(relativePath: { eq: "floorplans/plan-f.png" }) {
      childImageSharp {
        fluid(maxWidth: 3218) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    floorplanG: file(relativePath: { eq: "floorplans/plan-g.png" }) {
      childImageSharp {
        fluid(maxWidth: 3262) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default injectIntl(Villas)