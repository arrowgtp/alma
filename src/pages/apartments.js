import React from 'react'
import { graphql } from 'gatsby'
import { Link, injectIntl } from 'gatsby-plugin-intl'
import styled from 'styled-components'
import Img from 'gatsby-image'
import SEO from '../components/seo'


import ViewContainer from '../components/layout/ViewContainer'
import FullWidthContainer from '../components/layout/FullWidthContainer'
import CenteredContainer from '../components/layout/CenteredContainer'
import { FullContentCard, FullContentImage, HeadingContainer, FullCaption } from '../components/layout/FullContentCard'
import { FullImage, Image, Caption } from '../components/visual/FullImage'
import FlexContainer from '../components/layout/FlexContainer'
import FlexBox from '../components/layout/FlexBox'
import AlmaHeader from '../components/Header'
import Button from '../components/visual/Button'
import { Space, H1, H2, P, UL, LI } from '../components/visual/Typography'

import Footer from '../components/Footer'

const ButtonContainer = styled.div`
  margin: 0;
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
        <FullCaption>Artist Rendering</FullCaption>
      </FullContentCard>

      <CenteredContainer>
        <Space/>
        <P>{intl.formatMessage({ id: "apartments-paragraph-1" })}</P>
        <Space/>
      </CenteredContainer>

      {/* <FullWidthContainer>
        <FullImage fluid={data.apartmentLivingRoom2.childImageSharp.fluid}/>
      </FullWidthContainer> */}

      <FullWidthContainer>
        <FullImage>
          <Image fluid={data.apartmentLivingRoom2.childImageSharp.fluid}/>
          <Caption>Artist Rendering</Caption>
        </FullImage>
      </FullWidthContainer>

      <CenteredContainer>
        <Space/>
        <P>{intl.formatMessage({ id: "apartments-paragraph-2" })}</P>
        <Space/>
      </CenteredContainer>

      {/* <FullWidthContainer>
        <FullImage fluid={data.apartmentKitchen.childImageSharp.fluid}/>
      </FullWidthContainer> */}

      <FullWidthContainer>
        <FullImage>
          <Image fluid={data.apartmentKitchen.childImageSharp.fluid}/>
          <Caption>Artist Rendering</Caption>
        </FullImage>
      </FullWidthContainer>

      <CenteredContainer>
        <Space/>
        <P>{intl.formatMessage({ id: "apartments-paragraph-3" })}</P>
        <Space/>
      </CenteredContainer>

      {/* <FullWidthContainer>
        <FullImage fluid={data.apartmentBedroom.childImageSharp.fluid}/>
      </FullWidthContainer> */}

      <FullWidthContainer>
        <FullImage>
          <Image fluid={data.apartmentBedroom.childImageSharp.fluid}/>
          <Caption>Artist Rendering</Caption>
        </FullImage>
      </FullWidthContainer>

      <CenteredContainer>
        <Space/>
        <P>{intl.formatMessage({ id: "apartments-paragraph-4" })}</P>
        <Space/>
      </CenteredContainer>

      <FullWidthContainer>
        <FullImage>
          <Image fluid={data.apartmentBathroom.childImageSharp.fluid}/>
          <Caption>Artist Rendering</Caption>
        </FullImage>
      </FullWidthContainer>

      {/* <FullWidthContainer>
        <FullImage fluid={data.apartmentBathroom.childImageSharp.fluid}/>
      </FullWidthContainer> */}


      <CenteredContainer>
        <Space/>
        <AlmaHeader blue title={intl.formatMessage({ id: "floorplans-title" })}></AlmaHeader>
      </CenteredContainer>

      <FullWidthContainer>
        <FlexContainer>
          <FlexBox>
            <FloorplanHeading>
              {intl.formatMessage({ id: "floorplan-a" })}
            </FloorplanHeading>
            <FloorplanParagraph>
              {intl.formatMessage({ id: "floorplan-a-size" })}
            </FloorplanParagraph>
            <FloorplanParagraph>{intl.formatMessage({ id: "floorplan-a-bedrooms" })}</FloorplanParagraph>
            <FloorplanParagraph>{intl.formatMessage({ id: "floorplan-a-capacity" })}</FloorplanParagraph>
          </FlexBox>
          <FlexBox>
            <Floorplan fluid={data.floorplanA.childImageSharp.fluid}/>
          </FlexBox>
        </FlexContainer>
      </FullWidthContainer>

      <FullWidthContainer>
        <FlexContainer>
          <FlexBox>
            <FloorplanHeading>{intl.formatMessage({ id: "floorplan-b" })}</FloorplanHeading>
            <FloorplanParagraph>{intl.formatMessage({ id: "floorplan-b-size" })}</FloorplanParagraph>
            <FloorplanParagraph>{intl.formatMessage({ id: "floorplan-b-bedrooms" })}</FloorplanParagraph>
            <FloorplanParagraph>{intl.formatMessage({ id: "floorplan-b-capacity" })}</FloorplanParagraph>
          </FlexBox>
          <FlexBox>
            <Floorplan fluid={data.floorplanB.childImageSharp.fluid}/>
          </FlexBox>
        </FlexContainer>
      </FullWidthContainer>

      <FullWidthContainer>
        <FlexContainer>
          <FlexBox>
            <FloorplanHeading>{intl.formatMessage({ id: "floorplan-c" })}</FloorplanHeading>
            <FloorplanParagraph>{intl.formatMessage({ id: "floorplan-c-size" })}</FloorplanParagraph>
            <FloorplanParagraph>{intl.formatMessage({ id: "floorplan-c-bedrooms" })}</FloorplanParagraph>
            <FloorplanParagraph>{intl.formatMessage({ id: "floorplan-c-capacity" })}</FloorplanParagraph>
          </FlexBox>
          <FlexBox>
            <Floorplan fluid={data.floorplanC.childImageSharp.fluid}/>
          </FlexBox>
        </FlexContainer>
      </FullWidthContainer>

      <CenteredContainer>
        <FloorplanHeading>{intl.formatMessage({ id: "floorplan-h" })}</FloorplanHeading>
        <FloorplanParagraph>{intl.formatMessage({ id: "floorplan-h-placeholder" })}</FloorplanParagraph>
      </CenteredContainer>

      <CenteredContainer>
        <Space/>
        <P>Click here to learn more about our beautiful and luxurious oceanfront villas, their amenities, and their floorplans.</P>
        <Space/>
        <ButtonContainer>
          <Link to="/villas">
            <Button>{intl.formatMessage({ id: "villas-title" })}</Button>
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