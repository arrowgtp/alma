import React from 'react'
import { graphql } from 'gatsby'
// import { Link, injectIntl } from 'gatsby-plugin-intl'
import { useIntl, Link } from "gatsby-plugin-intl"
import styled from 'styled-components'
// import Img from 'gatsby-image'
import SEO from '../components/seo'

import Content from '../components/layout/Content'

// import FullWidthContainer from '../components/layout/FullWidthContainer'
import { FullImage, Image } from '../components/visual/FullImage'
import { FullContentCard, HeadingContainer } from '../components/layout/FullContentCard'
import CenteredContainer from '../components/layout/CenteredContainer'
import AlmaHeader from '../components/Header'
// import { Button, ButtonContainer } from '../components/visual/Button'
import { Space, P } from '../components/visual/Typography'
import Watermark from '../components/Watermark'
import Caption from '../components/Caption'
// import Box from '../components/Box'

import Footer from '../components/Footer'

// const VideoBox = styled.div`
//   position: relative;
// 	padding-bottom: 52.75%;
// 	padding-top: 25px;
// 	height: 0;

//   > iframe {
//     position: absolute;
//     top: 0;
//     left: 0;
//     width: 100%;
//     height: 100%;
//   }
// `

const News = ({ data }) => {

  const intl = useIntl()

  return (
    <Content>

      <SEO title={intl.formatMessage({ id: "news-title" })} />
      
      <FullContentCard>
        <HeadingContainer>
          <AlmaHeader white title={intl.formatMessage({ id: "news-title" })}/>
        </HeadingContainer>
        <Image grid fluid={data.oct19.childImageSharp.fluid}/>
        <Caption large>Actual Image</Caption>
        <Watermark large/>
      </FullContentCard>

      <CenteredContainer>
        <Space/>
        <AlmaHeader
          blue
          title={intl.formatMessage({ id: "february-title" })}
        />
        <Space/>
        <P>{intl.formatMessage({ id: "february-paragraph-1" })}</P>
        <Space/>
        <P>{intl.formatMessage({ id: "february-paragraph-2" })}</P>
        <Space/>
        <P>{intl.formatMessage({ id: "february-paragraph-3" })}</P>
        <Space/>
        <P>{intl.formatMessage({ id: "february-paragraph-4" })}</P>
        <Space/>
        <P>{intl.formatMessage({ id: "february-paragraph-5" })}</P>
        <Space/>
      </CenteredContainer>

      <CenteredContainer>
        <Space/>
        <AlmaHeader
          blue
          title={intl.formatMessage({ id: "january-title" })}
        />
        <Space/>
        <P>{intl.formatMessage({ id: "january-paragraph-1" })}</P>
        <Space/>
        <P>{intl.formatMessage({ id: "january-paragraph-2" })}</P>
        <Space/>
        <P>{intl.formatMessage({ id: "january-paragraph-3" })}</P>
        <Space/>
        <P>{intl.formatMessage({ id: "january-paragraph-4" })}</P>
        <Space/>
      </CenteredContainer>
        
      {/* <CenteredContainer>
        <Space/>
        <P>{intl.formatMessage({ id: "construction-to-vacations" })}</P>
        <Space/>
        <ButtonContainer>
          <Link to="/vacations">
            <Button>{intl.formatMessage({ id: "vacations-title" })}</Button>
          </Link> 
        </ButtonContainer>
        <Space/>
        <Space/>
      </CenteredContainer> */}

      <Footer/>

    </Content>
  )
}

export const query = graphql`
  query {
    oct19: file(relativePath: { eq: "construction/october-2019-19.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2880) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

export default News