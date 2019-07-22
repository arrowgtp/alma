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
        <AlmaHeader title={intl.formatMessage({ id: "villas-subtitle" })}></AlmaHeader>
        <P>{intl.formatMessage({ id: "resort-p1" })}</P>
      </CenteredContainer>

      <FullWidthContainer>
        <Img fluid={data.villaExterior1.childImageSharp.fluid}/>
      </FullWidthContainer>

      <CenteredContainer>
        <P>{intl.formatMessage({ id: "resort-p2" })}</P>
      </CenteredContainer>

      <FullWidthContainer>
        <Img fluid={data.villaLivingRoom2.childImageSharp.fluid}/>
      </FullWidthContainer>

      <CenteredContainer>
        <P>{intl.formatMessage({ id: "resort-p3" })}</P>
      </CenteredContainer>

      <FullWidthContainer>
        <Img fluid={data.villaBedroom1.childImageSharp.fluid}/>
      </FullWidthContainer>

      <CenteredContainer>
        <P>{intl.formatMessage({ id: "resort-p3" })}</P>
      </CenteredContainer>

      <FullWidthContainer>
        <Img fluid={data.villaBathroom1.childImageSharp.fluid}/>
      </FullWidthContainer>

      <CenteredContainer>
        <Img fluid={data.floorplanD.childImageSharp.fluid}/>
      </CenteredContainer>

      <CenteredContainer>
        <Img fluid={data.floorplanE.childImageSharp.fluid}/>
      </CenteredContainer>

      <CenteredContainer>
        <Img fluid={data.floorplanF.childImageSharp.fluid}/>
      </CenteredContainer>

      <CenteredContainer>
        <Img fluid={data.floorplanG.childImageSharp.fluid}/>
      </CenteredContainer>

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