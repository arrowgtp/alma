import React from 'react'
import { graphql } from 'gatsby'
import { Link, injectIntl } from 'gatsby-plugin-intl'
import styled from 'styled-components'
import Img from 'gatsby-image'
import SEO from "../components/seo"

import { FullContentCard, FullContentImage, HeadingContainer } from '../components/layout/FullContentCard'
import ViewContainer from '../components/layout/ViewContainer'
// import FullWidthContainer from '../components/layout/FullWidthContainer'
import CenteredContainer from '../components/layout/CenteredContainer'
import AlmaHeader from '../components/Header'
import Button from '../components/visual/Button'
import P from '../components/visual/Paragraph'
import FullWidthContainer from '../components/layout/FullWidthContainer';

const ButtonContainer = styled.div`
  margin: 0 0 2rem 0;
  display: flex;
  justify-content: center;
`

const Construction = ({ data, intl }) => {
  return (
    <ViewContainer>

      <SEO title={intl.formatMessage({ id: "construction-title" })} />
      
      <FullContentCard>
        <HeadingContainer>
          <AlmaHeader white
            title={intl.formatMessage({ id: "construction-title" })}
          />
        </HeadingContainer>
        <FullContentImage fluid={data.july1.childImageSharp.fluid}/>
      </FullContentCard>

      <CenteredContainer>
        <P>{intl.formatMessage({ id: "construction-paragraph-1" })}</P>
        <P>{intl.formatMessage({ id: "construction-paragraph-2" })}</P>
        <P>{intl.formatMessage({ id: "construction-paragraph-3" })}</P>
        <P>{intl.formatMessage({ id: "construction-paragraph-4" })}</P>
      </CenteredContainer>
      <FullWidthContainer>
        <Img fluid={data.july1.childImageSharp.fluid}/>
        <Img fluid={data.july2.childImageSharp.fluid}/>
        <Img fluid={data.july3.childImageSharp.fluid}/>
        <Img fluid={data.july4.childImageSharp.fluid}/>
        <Img fluid={data.july5.childImageSharp.fluid}/>
        <Img fluid={data.july6.childImageSharp.fluid}/>
        <Img fluid={data.july7.childImageSharp.fluid}/>
        <Img fluid={data.july8.childImageSharp.fluid}/>
        <Img fluid={data.july9.childImageSharp.fluid}/>
        <Img fluid={data.july10.childImageSharp.fluid}/>
        <Img fluid={data.july11.childImageSharp.fluid}/>
        <Img fluid={data.july12.childImageSharp.fluid}/>
        <Img fluid={data.july13.childImageSharp.fluid}/>
        <Img fluid={data.july14.childImageSharp.fluid}/>
      </FullWidthContainer>
        
      <CenteredContainer> 
        <P>Head back home now and learn more about all of the wonderful vacation opportunites that could be yours.</P>
        <ButtonContainer>
          <Link to="/">
            <Button>Home</Button>
          </Link> 
        </ButtonContainer> 
      </CenteredContainer>

    </ViewContainer>
  )
}

export const query = graphql`
  query {
    july1: file(relativePath: { eq: "construction/july-1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2880) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    july2: file(relativePath: { eq: "construction/july-2.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2880) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    july3: file(relativePath: { eq: "construction/july-3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2880) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    july4: file(relativePath: { eq: "construction/july-4.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2880) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    july5: file(relativePath: { eq: "construction/july-5.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2880) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    july6: file(relativePath: { eq: "construction/july-6.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2880) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    july7: file(relativePath: { eq: "construction/july-7.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2880) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    july8: file(relativePath: { eq: "construction/july-8.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2880) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    july9: file(relativePath: { eq: "construction/july-9.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2880) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    july10: file(relativePath: { eq: "construction/july-10.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2880) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    july11: file(relativePath: { eq: "construction/july-11.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2880) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    july12: file(relativePath: { eq: "construction/july-12.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2880) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    july13: file(relativePath: { eq: "construction/july-13.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2880) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    july14: file(relativePath: { eq: "construction/july-14.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2880) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    
  }
`

export default injectIntl(Construction)