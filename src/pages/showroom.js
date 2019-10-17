import React from 'react'
import { graphql } from 'gatsby'
import { Link, injectIntl } from 'gatsby-plugin-intl'
// import styled from 'styled-components'
// import Img from 'gatsby-image'
import SEO from '../components/seo'

import Content from '../components/layout/Content'

import FullWidthContainer from '../components/layout/FullWidthContainer'
import { FullImage, Image } from '../components/visual/FullImage'
import { FullContentCard, HeadingContainer } from '../components/layout/FullContentCard'
import CenteredContainer from '../components/layout/CenteredContainer'
import AlmaHeader from '../components/Header'
import { Button, ButtonContainer } from '../components/visual/Button'
import { Space, SmallSpace, H1, H2, P } from '../components/visual/Typography'
import Watermark from '../components/Watermark'
import Caption from '../components/Caption'
import Box from '../components/Box'

import Footer from '../components/Footer'

const Showroom = ({ data, intl }) => {
  return (
    <Content>

      <SEO title={intl.formatMessage({ id: "showroom-title" })} />
      
      <FullContentCard>
        <HeadingContainer>
          <AlmaHeader
            white
            title={intl.formatMessage({ id: "showroom-title" })}
          />
        </HeadingContainer>
        <Image grid fluid={data.showroomEntrance.childImageSharp.fluid}/>
        <Caption large>Actual Image</Caption>
        <Watermark large/>
      </FullContentCard>

      <CenteredContainer>
        <Space/>
        <AlmaHeader
          blue
          title={intl.formatMessage({ id: "showroom-title" })}
        />
        <Space/>
        {/* <H1>{intl.formatMessage({ id: "alma-contact-title" })}</H1>
        <Space/> */}
        <H2>{intl.formatMessage({ id: "alma-phone-number-title" })}</H2>
        <SmallSpace/>
        {/* <P>{intl.formatMessage({ id: "alma-phone-number" })}</P> */}
        <a href="tel:+18336962562"><P>1.833.OWN.ALMA | 1.833.696.2562</P></a>
        <Space/>
        <H2>{intl.formatMessage({ id: "showroom-address-title" })}</H2>
        <SmallSpace/>
        <P>{intl.formatMessage({ id: "showroom-address" })}</P>
        <P>{intl.formatMessage({ id: "showroom-location" })}</P>
        <P>{intl.formatMessage({ id: "showroom-zipcode" })}</P>
        <Space/>
        <H2>{intl.formatMessage({ id: "showroom-hours-title" })}</H2>
        <SmallSpace/>
        <P>{intl.formatMessage({ id: "showroom-hours" })}</P>
        <Space/>
        <H2>{intl.formatMessage({ id: "showroom-email-title" })}</H2>
        <SmallSpace/>
        <a href="mailto:travel@alma.vacations"><P>travel@alma.vacations</P></a>
        <Space/>
        <H2>{intl.formatMessage({ id: "showroom-website-title" })}</H2>
        <SmallSpace/>
        <a href="https://alma.vacations"><P>alma.vacations</P></a>
        <Space/>
      </CenteredContainer>

      <FullWidthContainer>
        <FullImage>
          <Image rounded fluid={data.showroom2.childImageSharp.fluid}/>
          <Caption medium>Actual Image</Caption>
          <Watermark medium/>
        </FullImage>
        <Space/>
        <FullImage>
          <Image rounded fluid={data.showroom3.childImageSharp.fluid}/>
          <Caption medium>Actual Image</Caption>
          <Watermark medium/>
        </FullImage>
        <Space/>
        <FullImage>
          <Image rounded fluid={data.showroom4.childImageSharp.fluid}/>
          <Caption medium>Actual Image</Caption>
          <Watermark medium/>
        </FullImage>
        <Space/>
        <FullImage>
          <Image rounded fluid={data.showroom5.childImageSharp.fluid}/>
          <Caption medium>Actual Image</Caption>
          <Watermark medium/>
        </FullImage>
        <Space/>
        <FullImage>
          <Image rounded fluid={data.showroom6.childImageSharp.fluid}/>
          <Caption medium>Actual Image</Caption>
          <Watermark medium/>
        </FullImage>
        <Space/>
        <FullImage>
          <Image rounded fluid={data.showroom7.childImageSharp.fluid}/>
          <Caption medium>Actual Image</Caption>
          <Watermark medium/>
        </FullImage>
        <Space/>
        <FullImage>
          <Image rounded fluid={data.showroom8.childImageSharp.fluid}/>
          <Caption medium>Actual Image</Caption>
          <Watermark medium/>
        </FullImage>
        <Space/>
        <FullImage>
          <Image rounded fluid={data.showroom9.childImageSharp.fluid}/>
          <Caption medium>Actual Image</Caption>
          <Watermark medium/>
        </FullImage>
        <Space/>
      </FullWidthContainer>

      <Footer>
        <p>{intl.formatMessage({ id: "copyright-notice" })}</p>
        <p>{intl.formatMessage({ id: "solicitation-notice" })}</p>
      </Footer>

    </Content>
  )
}

export const query = graphql`
  query {
    showroomEntrance: file(relativePath: { eq: "showroom/showroom-entrance-3x2.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2880) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    showroom1: file(relativePath: { eq: "showroom/showroom-1-4x3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2880) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    showroom2: file(relativePath: { eq: "showroom/showroom-2-4x3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2880) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    showroom3: file(relativePath: { eq: "showroom/showroom-3-4x3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2880) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    showroom4: file(relativePath: { eq: "showroom/showroom-4-4x3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2880) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    showroom5: file(relativePath: { eq: "showroom/showroom-5-4x3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2880) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    showroom6: file(relativePath: { eq: "showroom/showroom-6-4x3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2880) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    showroom7: file(relativePath: { eq: "showroom/showroom-7-4x3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2880) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    showroom8: file(relativePath: { eq: "showroom/showroom-8-4x3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2880) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    showroom9: file(relativePath: { eq: "showroom/showroom-9-4x3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2880) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

export default injectIntl(Showroom)