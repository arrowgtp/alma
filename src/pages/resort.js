import React from 'react'
import { graphql } from 'gatsby'
import { injectIntl } from 'gatsby-plugin-intl'
import styled from 'styled-components'
import Img from 'gatsby-image'
import SEO from "../components/seo"

import { FullContentCard, FullContentImage } from '../components/layout/FullContentCard'
import ViewContainer from '../components/layout/ViewContainer'
import FullWidthContainer from '../components/layout/FullWidthContainer'
import CenteredContainer from '../components/layout/CenteredContainer'
import AlmaHeader from '../components/Header'

const HeaderContainer = styled.div`
  grid-row: 1 / 3;
  grid-column: 1 / 9;
  margin: 0 2rem;
  z-index: 5;

  @media (min-width: 50rem) {
    grid-column: 2 / 8;
  }
`

const H2 = styled.h2`
  margin: 2rem 0;
  padding: 0;
`

const P = styled.p`
  margin: 2rem 0;
` 

const Resort = ({ data, intl }) => {
  return (
    <ViewContainer>
      <SEO title={intl.formatMessage({ id: "resort-title" })} />
      <FullContentCard>
        {/* <MainLogo src={almaLogoWithBG} alt="The Alma Resort Logo."  />
        <PageSlogan>{intl.formatMessage({ id: "slogan" })}</PageSlogan> */}
        <HeaderContainer>
          <AlmaHeader white
            title={intl.formatMessage({ id: "resort-title" })}
          />
        </HeaderContainer>
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
    almaResort1: file(relativePath: { eq: "resort/alma-resort-1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 3840) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    almaResort2: file(relativePath: { eq: "resort/alma-resort-2.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 3840) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    almaResort3: file(relativePath: { eq: "resort/alma-resort-3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 3840) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    almaResort4: file(relativePath: { eq: "resort/alma-resort-4.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 3840) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    almaResort5: file(relativePath: { eq: "resort/alma-resort-5.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 3840) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default injectIntl(Resort)