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
      </FullContentCard>

      <CenteredContainer>
        <AlmaHeader title={intl.formatMessage({ id: "resort-subtitle" })}></AlmaHeader>
        <P>{intl.formatMessage({ id: "resort-paragraph-1" })}</P>
      </CenteredContainer>

      <FullWidthContainer>
        <FullImage fluid={data.almaResort1.childImageSharp.fluid}/>
      </FullWidthContainer>

      <CenteredContainer>
        <P>{intl.formatMessage({ id: "resort-paragraph-2" })}</P>
      </CenteredContainer>

      <FullWidthContainer>
        <FullImage fluid={data.almaResort3.childImageSharp.fluid}/>
      </FullWidthContainer>

      <CenteredContainer>
        <P>{intl.formatMessage({ id: "resort-paragraph-3" })}</P>
      </CenteredContainer>

      <FullWidthContainer>
        <FullImage fluid={data.almaResort4.childImageSharp.fluid}/>
      </FullWidthContainer>

      <FullWidthContainer>
        <FullImage fluid={data.almaResort5.childImageSharp.fluid}/>
      </FullWidthContainer>

      <CenteredContainer> 
        <P>Learn more about our beautiful oceanview apartments and their floorplans.</P>
        <ButtonContainer>
          <Link to="/apartments">
            <Button>Learn More</Button>
          </Link> 
        </ButtonContainer> 
      </CenteredContainer>

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