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
        <Image grid fluid={data.entrance.childImageSharp.fluid}/>
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
        <P>{intl.formatMessage({ id: "showroom-paragraph-1" })}</P>
        <Space/>
        <P>{intl.formatMessage({ id: "showroom-paragraph-2" })}</P>
        <Space/>
        <H2>{intl.formatMessage({ id: "alma-phone-number-title" })}</H2>
        <SmallSpace/>
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
          <Image rounded fluid={data.waitingArea.childImageSharp.fluid}/>
          <Caption medium>Actual Image</Caption>
          <Watermark medium/>
        </FullImage>
        <Space/>
        <FullImage>
          <Image rounded fluid={data.hallway.childImageSharp.fluid}/>
          <Caption medium>Actual Image</Caption>
          <Watermark medium/>
        </FullImage>
        <Space/>
        <FullImage>
          <Image rounded fluid={data.presentationRoom1.childImageSharp.fluid}/>
          <Caption medium>Actual Image</Caption>
          <Watermark medium/>
        </FullImage>
        <Space/>
        <FullImage>
          <Image rounded fluid={data.presentationRoom2.childImageSharp.fluid}/>
          <Caption medium>Actual Image</Caption>
          <Watermark medium/>
        </FullImage>
        <Space/>
        <FullImage>
          <Image rounded fluid={data.conferenceRoom.childImageSharp.fluid}/>
          <Caption medium>Actual Image</Caption>
          <Watermark medium/>
        </FullImage>
        <Space/>
        <FullImage>
          <Image rounded fluid={data.kitchen1.childImageSharp.fluid}/>
          <Caption medium>Actual Image</Caption>
          <Watermark medium/>
        </FullImage>
        <Space/>
        <FullImage>
          <Image rounded fluid={data.kitchen2.childImageSharp.fluid}/>
          <Caption medium>Actual Image</Caption>
          <Watermark medium/>
        </FullImage>
        <Space/>
        <FullImage>
          <Image rounded fluid={data.model.childImageSharp.fluid}/>
          <Caption medium>Actual Image</Caption>
          <Watermark medium/>
        </FullImage>
        <Space/>
        <FullImage>
          <Image rounded fluid={data.salesArea1.childImageSharp.fluid}/>
          <Caption medium>Actual Image</Caption>
          <Watermark medium/>
        </FullImage>
        <Space/>
        <FullImage>
          <Image rounded fluid={data.salesArea2.childImageSharp.fluid}/>
          <Caption medium>Actual Image</Caption>
          <Watermark medium/>
        </FullImage>
        <Space/>
        <FullImage>
          <Image rounded fluid={data.salesArea3.childImageSharp.fluid}/>
          <Caption medium>Actual Image</Caption>
          <Watermark medium/>
        </FullImage>
        <Space/>
        <FullImage>
          <Image rounded fluid={data.office1.childImageSharp.fluid}/>
          <Caption medium>Actual Image</Caption>
          <Watermark medium/>
        </FullImage>
        <Space/>
        <FullImage>
          <Image rounded fluid={data.office2.childImageSharp.fluid}/>
          <Caption medium>Actual Image</Caption>
          <Watermark medium/>
        </FullImage>
        <Space/>
        <FullImage>
          <Image rounded fluid={data.office3.childImageSharp.fluid}/>
          <Caption medium>Actual Image</Caption>
          <Watermark medium/>
        </FullImage>
        <Space/>
        <FullImage>
          <Image rounded fluid={data.office4.childImageSharp.fluid}/>
          <Caption medium>Actual Image</Caption>
          <Watermark medium/>
        </FullImage>
        <Space/>
        <FullImage>
          <Image rounded fluid={data.office5.childImageSharp.fluid}/>
          <Caption medium>Actual Image</Caption>
          <Watermark medium/>
        </FullImage>
        <Space/>
      </FullWidthContainer>

      <Footer/>

    </Content>
  )
}

export const query = graphql`
  query {
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
    entrance: file(relativePath: { eq: "showroom/entrance-3x2.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2880) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    waitingArea: file(relativePath: { eq: "showroom/waiting-area-1-4x3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2880) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    hallway: file(relativePath: { eq: "showroom/hallway-4x3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2880) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    presentationRoom1: file(relativePath: { eq: "showroom/presentation-room-1-4x3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2880) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    presentationRoom2: file(relativePath: { eq: "showroom/presentation-room-2-4x3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2880) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    conferenceRoom: file(relativePath: { eq: "showroom/conference-room-1-4x3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2880) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    kitchen1: file(relativePath: { eq: "showroom/kitchen-1-4x3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2880) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    kitchen2: file(relativePath: { eq: "showroom/kitchen-2-4x3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2880) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    model: file(relativePath: { eq: "showroom/3D-model-4x3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2880) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    salesArea1: file(relativePath: { eq: "showroom/sales-area-1-4x3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2880) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    salesArea2: file(relativePath: { eq: "showroom/sales-area-2-4x3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2880) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    salesArea3: file(relativePath: { eq: "showroom/sales-area-3-4x3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2880) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    office1: file(relativePath: { eq: "showroom/office-1-4x3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2880) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    office2: file(relativePath: { eq: "showroom/office-2-4x3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2880) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    office3: file(relativePath: { eq: "showroom/office-3-4x3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2880) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    office4: file(relativePath: { eq: "showroom/office-4-4x3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2880) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    office5: file(relativePath: { eq: "showroom/office-5-4x3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2880) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

export default injectIntl(Showroom)