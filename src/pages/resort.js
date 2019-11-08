import React from 'react'
import { graphql } from 'gatsby'
import { Link, injectIntl } from 'gatsby-plugin-intl'
// import styled from 'styled-components'
import SEO from "../components/seo"

import Content from '../components/layout/Content'

import { HeadingContainer } from '../components/layout/FullContentCard'
import { FullImage, Image } from '../components/visual/FullImage'
import AlmaHeader from '../components/Header'
import { Button, ButtonContainer } from '../components/visual/Button'
import { Space, P } from '../components/visual/Typography'
import Watermark from '../components/Watermark'
import Caption from '../components/Caption'
import Box from '../components/Box'

import Footer from '../components/Footer'


const Resort = ({ data, intl }) => {
  return (
    <Content>

      <SEO title={intl.formatMessage({ id: "resort-title" })} />
      
      <Box featured>
        <HeadingContainer>
          <AlmaHeader white title={intl.formatMessage({ id: "resort-title" })}/>
        </HeadingContainer>
        <Image grid fluid={data.almaResort2.childImageSharp.fluid}/>
        <Caption large>Artist Rendering</Caption>
        <Watermark large/>
      </Box>

      <Box center>
        <Space/>
        <P>{intl.formatMessage({ id: "resort-paragraph-1" })}</P>
        <Space/>
      </Box>

      <Box full>
        <FullImage>
          <Image rounded fluid={data.almaResort1.childImageSharp.fluid}/>
          <Caption medium>Artist Rendering</Caption>
          <Watermark medium/>
        </FullImage>
      </Box>

      <Box center>
        <Space/>
        <P>{intl.formatMessage({ id: "resort-paragraph-2" })}</P>
        <Space/>
      </Box>

      <Box full>
        <FullImage>
          <Image rounded fluid={data.almaResort3.childImageSharp.fluid}/>
          <Caption medium>Artist Rendering</Caption>
          <Watermark medium/>
        </FullImage>
      </Box>

      <Box center>
        <Space/>
        <P>{intl.formatMessage({ id: "resort-paragraph-3" })}</P>
        <Space/>
      </Box>

      <Box full>
        <FullImage>
          <Image rounded fluid={data.almaResort4.childImageSharp.fluid}/>
          <Caption medium>Artist Rendering</Caption>
          <Watermark medium/>
        </FullImage>
      </Box>

      <Box center>
        <Space/>
        <P>{intl.formatMessage({ id: "resort-paragraph-4" })}</P>
        <Space/>
      </Box>

      <Box full>
        <FullImage>
          <Image rounded fluid={data.almaResort5.childImageSharp.fluid}/>
          <Caption medium>Artist Rendering</Caption>
          <Watermark medium/>
        </FullImage>
      </Box>

      <Box center>
        <Space/>
        <P>{intl.formatMessage({ id: "apartments-to-villas" })}</P>
        <Space/>
        <ButtonContainer>
          <Link to="/villas">
            <Button>{intl.formatMessage({ id: "villas-title" })}</Button>
          </Link> 
        </ButtonContainer>
        <Space/>
        <Space/>
      </Box>

      

      <Footer/>

    </Content>
  )
}

export const query = graphql`
  query {
    resortOverview: file(relativePath: { eq: "resort/resort-overview-render-1-16x10.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 3456) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    almaResort1: file(relativePath: { eq: "resort/resort-render-1-16x10.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2880) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    almaResort2: file(relativePath: { eq: "resort/resort-render-2-16x10.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2880) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    almaResort3: file(relativePath: { eq: "resort/resort-render-3-16x10.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2880) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    almaResort4: file(relativePath: { eq: "resort/resort-render-4-16x10.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2880) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    almaResort5: file(relativePath: { eq: "resort/resort-overview-render-2-16x10.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2880) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

export default injectIntl(Resort)