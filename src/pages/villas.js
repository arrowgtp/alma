import React from 'react'
import { graphql } from 'gatsby'
import { Link, injectIntl } from 'gatsby-plugin-intl'
import styled from 'styled-components'
import Img from 'gatsby-image'
import SEO from "../components/seo"

import Content from '../components/layout/Content'
import { HeadingContainer } from '../components/layout/FullContentCard'
import { FullImage, Image } from '../components/visual/FullImage'
import FlexContainer from '../components/layout/FlexContainer'
import FlexBox from '../components/layout/FlexBox'
import AlmaHeader from '../components/Header'
import { Button, ButtonContainer } from '../components/visual/Button'
import { Space, P } from '../components/visual/Typography'
import Watermark from '../components/Watermark'
import Caption from '../components/Caption'
import Box from '../components/Box'

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

const Villas = ({ data, intl }) => {
  return (
    <Content>

      <SEO title={intl.formatMessage({ id: "villas-title" })} />
      
      <Box featured>
        <HeadingContainer>
          <AlmaHeader white title={intl.formatMessage({ id: "villas-title" })}/>
        </HeadingContainer>
        <Image grid fluid={data.realVillaExterior1.childImageSharp.fluid}/>
        <Caption large>Actual Image</Caption>
        <Watermark large/>
      </Box>

      <Box center>
        <Space/>
        <P>{intl.formatMessage({ id: "villas-paragraph-1" })}</P>
        <Space/>
      </Box>

      <Box full>
        <FullImage>
          <Image rounded fluid={data.villaDining1.childImageSharp.fluid}/>
          <Caption medium>Actual Image</Caption>
          <Watermark medium/>
        </FullImage>
      </Box>

      <Box center>
        <Space/>
        <P>{intl.formatMessage({ id: "villas-paragraph-2" })}</P>
        <Space/>
      </Box>

      <Box full>
        <FullImage>
          <Image rounded fluid={data.villaLivingRoom2.childImageSharp.fluid}/>
          <Caption medium>Actual Image</Caption>
          <Watermark medium/>
        </FullImage>
      </Box>


      <Box center>
        <Space/>
        <P>{intl.formatMessage({ id: "villas-paragraph-3" })}</P>
        <Space/>
      </Box>

      <Box full>
        <FullImage>
          <Image rounded fluid={data.villaBedroom1.childImageSharp.fluid}/>
          <Caption medium>Actual Image</Caption>
          <Watermark medium/>
        </FullImage>
      </Box>

      <Box center>
        <Space/>
        <P>{intl.formatMessage({ id: "villas-paragraph-4" })}</P>
        <Space/>
      </Box>

      <Box full>
        <FullImage>
          <Image rounded fluid={data.villaBathroom1.childImageSharp.fluid}/>
          <Caption medium>Actual Image</Caption>
          <Watermark medium/>
        </FullImage>
      </Box>      

      <Box center>
        <Space/>
        <AlmaHeader blue title={intl.formatMessage({ id: "floorplans-title" })}></AlmaHeader>
      </Box>

      <Box full>
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
      </Box>

      <Box full>
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
      </Box>

      <Box full>
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
      </Box>

      <Box full>
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
      </Box>

      <Box center> 
        <Space/>
        <P>{intl.formatMessage({ id: "villas-to-restaurants" })}</P>
        <Space/>
        <ButtonContainer>
          <Link to="/restaurants">
            <Button>{intl.formatMessage({ id: "restaurants-title" })}</Button>
          </Link> 
        </ButtonContainer>
        <Space/> 
        <Space/>
      </Box>

      <Footer>
        <p>{intl.formatMessage({ id: "copyright-notice" })}</p>
        <p>{intl.formatMessage({ id: "solicitation-notice" })}</p>
      </Footer>

    </Content>
  )
}

export const query = graphql`
  query {
    villaExterior1: file(relativePath: { eq: "villas/villa-exterior-render-1-4x3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2880) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    realVillaExterior1: file(relativePath: { eq: "villas/real-villa-1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2880) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    realVillaExterior2: file(relativePath: { eq: "villas/real-villa-2.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2880) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    realVillaExterior3: file(relativePath: { eq: "villas/real-villa-3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2880) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    realVillaInterior1: file(relativePath: { eq: "villas/real-villa-4.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2880) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    realVillaInterior2: file(relativePath: { eq: "villas/real-villa-5.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2880) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    realVillaInterior3: file(relativePath: { eq: "villas/real-villa-6.jpg" }) {
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
    villaDining1: file(relativePath: { eq: "villas/villa-dining-1-4x3.jpg" }) {
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