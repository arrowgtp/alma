import React from 'react'
import { graphql } from 'gatsby'
import { injectIntl } from 'gatsby-plugin-intl'
import styled from 'styled-components'
import Img from 'gatsby-image'
import SEO from "../components/seo"

import { FullContentCard, FullContentImage, HeadingContainer } from '../components/layout/FullContentCard'
import ViewContainer from '../components/layout/ViewContainer'
import FullWidthContainer from '../components/layout/FullWidthContainer'
import CenteredContainer from '../components/layout/CenteredContainer'
import AlmaHeader from '../components/Header'

const P = styled.p`
  margin: 2rem 0;
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
        <P>{intl.formatMessage({ id: "resort-p1" })}</P>
      </CenteredContainer>

      <FullWidthContainer>
        <Img fluid={data.almaResort3.childImageSharp.fluid}/>
      </FullWidthContainer>

      <CenteredContainer>
        <P>{intl.formatMessage({ id: "resort-p2" })}</P>
      </CenteredContainer>

      <FullWidthContainer>
        <Img fluid={data.almaResort4.childImageSharp.fluid}/>
      </FullWidthContainer>

      <CenteredContainer>
        <P>{intl.formatMessage({ id: "resort-p3" })}</P>
      </CenteredContainer>

      <FullWidthContainer>
        <Img fluid={data.almaResort5.childImageSharp.fluid}/>
      </FullWidthContainer>
      

    </ViewContainer>
  )
}

export const query = graphql`
  query {
    almaResort1: file(relativePath: { eq: "resort/resort-1-16x10.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 3456) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    almaResort2: file(relativePath: { eq: "resort/resort-2-16x10.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 3456) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    almaResort3: file(relativePath: { eq: "resort/resort-3-16x10.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 3456) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    almaResort4: file(relativePath: { eq: "resort/resort-4-16x10.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 3456) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    almaResort5: file(relativePath: { eq: "resort/resort-overview-2-16x10.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 3456) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default injectIntl(Resort)