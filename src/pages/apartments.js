import React from 'react'
import { graphql } from 'gatsby'
import { Link, injectIntl } from 'gatsby-plugin-intl'
import styled from 'styled-components'
import Img from 'gatsby-image'
import SEO from '../components/seo'

import Content from '../components/layout/Content'
import FullWidthContainer from '../components/layout/FullWidthContainer'
import CenteredContainer from '../components/layout/CenteredContainer'
import { FullContentCard, FullContentImage, HeadingContainer } from '../components/layout/FullContentCard'
import { FullImage, Image } from '../components/visual/FullImage'
import FlexContainer from '../components/layout/FlexContainer'
import FlexBox from '../components/layout/FlexBox'
import AlmaHeader from '../components/Header'
import { Button, ButtonContainer } from '../components/visual/Button'
import { Space, P } from '../components/visual/Typography'
import Watermark from '../components/Watermark'
import Caption from '../components/Caption'

import Footer from '../components/Footer'

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
    <Content>

      <SEO title={intl.formatMessage({ id: "apartments-title" })} />
      
      <FullContentCard>
        <HeadingContainer>
          <AlmaHeader white title={intl.formatMessage({ id: "apartments-title" })}/>
        </HeadingContainer>
        <FullContentImage fluid={data.apartmentLivingRoom1.childImageSharp.fluid}/>
        <Caption large>Artist Rendering</Caption>
        <Watermark large/>
      </FullContentCard>

      <CenteredContainer>
        <Space/>
        <P>{intl.formatMessage({ id: "apartments-paragraph-1" })}</P>
        <Space/>
      </CenteredContainer>

      <FullWidthContainer>
        <FullImage>
          <Image fluid={data.apartmentLivingRoom2.childImageSharp.fluid}/>
          <Caption medium>Artist Rendering</Caption>
          <Watermark medium/>
        </FullImage>
      </FullWidthContainer>

      <CenteredContainer>
        <Space/>
        <P>{intl.formatMessage({ id: "apartments-paragraph-2" })}</P>
        <Space/>
      </CenteredContainer>

      <FullWidthContainer>
        <FullImage>
          <Image fluid={data.apartmentKitchen.childImageSharp.fluid}/>
          <Caption medium>Artist Rendering</Caption>
          <Watermark medium/>
        </FullImage>
      </FullWidthContainer>

      <CenteredContainer>
        <Space/>
        <P>{intl.formatMessage({ id: "apartments-paragraph-3" })}</P>
        <Space/>
      </CenteredContainer>

      <FullWidthContainer>
        <FullImage>
          <Image fluid={data.apartmentBedroom.childImageSharp.fluid}/>
          <Caption medium>Artist Rendering</Caption>
          <Watermark medium/>
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
          <Caption medium>Artist Rendering</Caption>
          <Watermark medium/>
        </FullImage>
      </FullWidthContainer>

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
        <P>{intl.formatMessage({ id: "apartments-to-villas" })}</P>
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

    </Content>
  )
}

export const query = graphql`
  query {
    apartmentLivingRoom1: file(relativePath: { eq: "apartments/apartment-living-room-1-render-4x3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2880) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    apartmentLivingRoom2: file(relativePath: { eq: "apartments/apartment-living-room-2-render-4x3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2880) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    apartmentKitchen: file(relativePath: { eq: "apartments/apartment-kitchen-render-4x3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2880) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    apartmentBedroom: file(relativePath: { eq: "apartments/apartment-bedroom-render-4x3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2880) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    apartmentBathroom: file(relativePath: { eq: "apartments/apartment-bathroom-render-4x3.jpg" }) {
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