import React from 'react'
import { graphql } from 'gatsby'
import { Link, injectIntl } from 'gatsby-plugin-intl'
import styled from 'styled-components'
// import Img from 'gatsby-image'
import SEO from "../components/seo"

import ViewContainer from '../components/layout/ViewContainer'
import { FullContentCard, FullContentImage, HeadingContainer, FullCaption } from '../components/layout/FullContentCard'
import { FullImage, Image, Caption } from '../components/visual/FullImage'
import FullWidthContainer from '../components/layout/FullWidthContainer'
import CenteredContainer from '../components/layout/CenteredContainer'
import AlmaHeader from '../components/Header'
import Button from '../components/visual/Button'
import { Space, H1, H2, P, UL, LI } from '../components/visual/Typography'

import Footer from '../components/Footer'

const ButtonContainer = styled.div`
  margin: 0;
  display: flex;
  justify-content: center;
`

const Resort = ({ data, intl }) => {
  return (
    <ViewContainer>

      <SEO title={intl.formatMessage({ id: "resort-title" })} />
      
      <FullContentCard>
        <HeadingContainer>
          <AlmaHeader white
            title={intl.formatMessage({ id: "resort-title" })}
          />
        </HeadingContainer>
        <FullContentImage fluid={data.almaResort2.childImageSharp.fluid}/>
        <FullCaption>Artist Rendering</FullCaption>
      </FullContentCard>

      <CenteredContainer>
        <Space/>
        {/* <AlmaHeader title={intl.formatMessage({ id: "resort-subtitle" })}></AlmaHeader> */}
        <P>{intl.formatMessage({ id: "resort-paragraph-1" })}</P>
        <Space/>
      </CenteredContainer>

      {/* <FullWidthContainer>
        <FullImage fluid={data.almaResort1.childImageSharp.fluid}/>
      </FullWidthContainer> */}

      <FullWidthContainer>
        <FullImage>
          <Image fluid={data.almaResort1.childImageSharp.fluid}/>
          <Caption>Artist Rendering</Caption>
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
          <Image fluid={data.almaResort3.childImageSharp.fluid}/>
          <Caption>Artist Rendering</Caption>
        </FullImage>
      </FullWidthContainer>

      <CenteredContainer>
        <Space/>
        <P>{intl.formatMessage({ id: "resort-paragraph-3" })}</P>
        <Space/>
      </CenteredContainer>

      <FullWidthContainer>
        <FullImage>
          <Image fluid={data.almaResort4.childImageSharp.fluid}/>
          <Caption>Artist Rendering</Caption>
        </FullImage>
      </FullWidthContainer>

      {/* <FullWidthContainer>
        <FullImage fluid={data.almaResort4.childImageSharp.fluid}/>
      </FullWidthContainer> */}

      <CenteredContainer>
        <Space/>
        <P>{intl.formatMessage({ id: "resort-paragraph-4" })}</P>
        <Space/>
      </CenteredContainer>

      <FullWidthContainer>
        <FullImage>
          <Image fluid={data.almaResort5.childImageSharp.fluid}/>
          <Caption>Artist Rendering</Caption>
        </FullImage>
      </FullWidthContainer>

      {/* <FullWidthContainer>
        <FullImage fluid={data.almaResort5.childImageSharp.fluid}/>
      </FullWidthContainer> */}

      <CenteredContainer>
        <Space/>
        <P>Click here to learn more about our beautiful oceanview apartments, their floorplans, and all the amenities that they have to offer our members.</P>
        <Space/>
        <ButtonContainer>
          <Link to="/apartments">
            <Button>Learn More</Button>
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
    resortOverview: file(relativePath: { eq: "resort/resort-overview-1-16x10.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 3456) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    almaResort1: file(relativePath: { eq: "resort/resort-1-16x10.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2880) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    almaResort2: file(relativePath: { eq: "resort/resort-2-16x10.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2880) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    almaResort3: file(relativePath: { eq: "resort/resort-3-16x10.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2880) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    almaResort4: file(relativePath: { eq: "resort/resort-4-16x10.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2880) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    almaResort5: file(relativePath: { eq: "resort/resort-overview-2-16x10.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2880) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

export default injectIntl(Resort)