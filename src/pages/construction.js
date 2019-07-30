import React from 'react'
import { graphql } from 'gatsby'
import { Link, injectIntl } from 'gatsby-plugin-intl'
import styled from 'styled-components'
// import Img from 'gatsby-image'
import SEO from "../components/seo"

import { FullContentCard, FullContentImage, HeadingContainer } from '../components/layout/FullContentCard'
import ViewContainer from '../components/layout/ViewContainer'
import CenteredContainer from '../components/layout/CenteredContainer'
import AlmaHeader from '../components/Header'
import Button from '../components/visual/Button'
import { Space, H1, H2, P, UL, LI } from '../components/visual/Typography'

import FullWidthContainer from '../components/layout/FullWidthContainer'
import { FullImage, Image, Caption } from '../components/visual/FullImage'

import Footer from '../components/Footer'

const ButtonContainer = styled.div`
  margin: 0;
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
        <FullContentImage fluid={data.june1.childImageSharp.fluid}/>
      </FullContentCard>

      <CenteredContainer>
        <Space/>
        <AlmaHeader
          blue
          title={intl.formatMessage({ id: "construction-month" })}
        />
        <Space/>
        <P>{intl.formatMessage({ id: "construction-paragraph-1" })}</P>
        <Space/>
        <P>{intl.formatMessage({ id: "construction-paragraph-2" })}</P>
        <Space/>
        <P>{intl.formatMessage({ id: "construction-paragraph-3" })}</P>
        <Space/>
        <P>{intl.formatMessage({ id: "construction-paragraph-4" })}</P>
        <Space/>
      </CenteredContainer>
      <FullWidthContainer>
        <FullImage><Image fluid={data.june2.childImageSharp.fluid}/></FullImage>
        <Space/>
        <FullImage><Image fluid={data.june3.childImageSharp.fluid}/></FullImage>
        <Space/>
        <FullImage><Image fluid={data.june4.childImageSharp.fluid}/></FullImage>
        <Space/>
        <FullImage><Image fluid={data.june5.childImageSharp.fluid}/></FullImage>
        <Space/>
        <FullImage><Image fluid={data.june6.childImageSharp.fluid}/></FullImage>
        <Space/>
        <FullImage><Image fluid={data.june7.childImageSharp.fluid}/></FullImage>
        <Space/>
        <FullImage><Image fluid={data.june8.childImageSharp.fluid}/></FullImage>
        <Space/>
        <FullImage><Image fluid={data.june9.childImageSharp.fluid}/></FullImage>
        <Space/>
        <FullImage><Image fluid={data.june10.childImageSharp.fluid}/></FullImage>
        <Space/>
        <FullImage><Image fluid={data.june11.childImageSharp.fluid}/></FullImage>
        <Space/>
        <FullImage><Image fluid={data.june12.childImageSharp.fluid}/></FullImage>
        <Space/>
        <FullImage><Image fluid={data.june13.childImageSharp.fluid}/></FullImage>
        <Space/>
        <FullImage><Image fluid={data.june14.childImageSharp.fluid}/></FullImage>
      </FullWidthContainer>
        
      <CenteredContainer>
        <Space/>
        <P>Click here to see the amazing vacations options that joining the alma resort will give you.</P>
        <Space/>
        <ButtonContainer>
          <Link to="/vacations">
            <Button>{intl.formatMessage({ id: "vacations-title" })}</Button>
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
    june1: file(relativePath: { eq: "construction/june-1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2880) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    june2: file(relativePath: { eq: "construction/june-2.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2880) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    june3: file(relativePath: { eq: "construction/june-3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2880) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    june4: file(relativePath: { eq: "construction/june-4.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2880) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    june5: file(relativePath: { eq: "construction/june-5.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2880) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    june6: file(relativePath: { eq: "construction/june-6.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2880) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    june7: file(relativePath: { eq: "construction/june-7.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2880) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    june8: file(relativePath: { eq: "construction/june-8.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2880) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    june9: file(relativePath: { eq: "construction/june-9.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2880) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    june10: file(relativePath: { eq: "construction/june-10.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2880) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    june11: file(relativePath: { eq: "construction/june-11.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2880) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    june12: file(relativePath: { eq: "construction/june-12.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2880) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    june13: file(relativePath: { eq: "construction/june-13.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2880) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    june14: file(relativePath: { eq: "construction/june-14.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2880) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    
  }
`

export default injectIntl(Construction)