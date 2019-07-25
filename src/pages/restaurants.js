import React from 'react'
import { graphql } from 'gatsby'
import { Link, injectIntl } from 'gatsby-plugin-intl'
import styled from 'styled-components'
// import Img from 'gatsby-image'
import SEO from "../components/seo"

import { FullContentCard, FullContentImage, HeadingContainer } from '../components/layout/FullContentCard'
import ViewContainer from '../components/layout/ViewContainer'
import FullWidthContainer from '../components/layout/FullWidthContainer'
import CenteredContainer from '../components/layout/CenteredContainer'
import AlmaHeader from '../components/Header'
import Button from '../components/visual/Button'
import { Space, H1, H2, P, UL, ListTitle, LI } from '../components/visual/Typography'
// import P from '../components/visual/Paragraph'
import FullImage from '../components/visual/FullImage'

import Footer from '../components/Footer'

const ButtonContainer = styled.div`
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
`

const Restaurants = ({ data, intl }) => {
  return (
    <ViewContainer>

      <SEO title={intl.formatMessage({ id: "restaurants-title" })} />
      
      <FullContentCard>
        <HeadingContainer>
          <AlmaHeader white
            title={intl.formatMessage({ id: "restaurants-title" })}
          />
        </HeadingContainer>
        <FullContentImage fluid={data.realRestaurant1.childImageSharp.fluid}/>
      </FullContentCard>

      <CenteredContainer>
        <Space/>
        <P>{intl.formatMessage({ id: "restaurants-paragraph-1" })}</P>
        <Space/>
      </CenteredContainer>

      <FullWidthContainer>
        <FullImage fluid={data.allDayDiner2.childImageSharp.fluid}/>
        {/* <FullImage fluid={data.allDayDiner2.childImageSharp.fluid}/> */}
      </FullWidthContainer>

      <CenteredContainer>
        <Space/>
        <P>{intl.formatMessage({ id: "restaurants-paragraph-2" })}</P>
        <Space/>
      </CenteredContainer>

      <FullWidthContainer>
        <FullImage fluid={data.beachBar2.childImageSharp.fluid}/>
      </FullWidthContainer>

      <CenteredContainer>
        <Space/>
        <P>{intl.formatMessage({ id: "restaurants-paragraph-3" })}</P>
        <Space/>
      </CenteredContainer>

      <FullWidthContainer>
        <FullImage fluid={data.asianRestaurant.childImageSharp.fluid}/>
      </FullWidthContainer>

      <CenteredContainer>
        <Space/>
        <P>{intl.formatMessage({ id: "restaurants-paragraph-4" })}</P>
        <Space/>
      </CenteredContainer>

      <FullWidthContainer>
        <FullImage fluid={data.italianRestaurant.childImageSharp.fluid}/>
      </FullWidthContainer>

      <CenteredContainer>
        <Space/>
        <P>{intl.formatMessage({ id: "restaurants-paragraph-5" })}</P>
        <Space/>
      </CenteredContainer>

      <FullWidthContainer>
        <FullImage fluid={data.foodCourt1.childImageSharp.fluid}/>
      </FullWidthContainer>

      <CenteredContainer>
        <Space/>
        <P>{intl.formatMessage({ id: "restaurants-paragraph-6" })}</P>
        <Space/>
      </CenteredContainer>

      <FullWidthContainer>
        <FullImage fluid={data.pub1.childImageSharp.fluid}/>
      </FullWidthContainer>

      <CenteredContainer>
        <UL>
          <ListTitle>{intl.formatMessage({ id: "restaurants-list" })}</ListTitle>
          <LI>{intl.formatMessage({ id: "restaurants-list-point-1" })}</LI>
          <LI>{intl.formatMessage({ id: "restaurants-list-point-2" })}</LI>
          <LI>{intl.formatMessage({ id: "restaurants-list-point-3" })}</LI>
          <LI>{intl.formatMessage({ id: "restaurants-list-point-4" })}</LI>
          <LI>{intl.formatMessage({ id: "restaurants-list-point-5" })}</LI>
          <LI>{intl.formatMessage({ id: "restaurants-list-point-6" })}</LI>
          <LI>{intl.formatMessage({ id: "restaurants-list-point-7" })}</LI>
          <LI>{intl.formatMessage({ id: "restaurants-list-point-8" })}</LI>
          <LI>{intl.formatMessage({ id: "restaurants-list-point-9" })}</LI>
          <LI>{intl.formatMessage({ id: "restaurants-list-point-10" })}</LI>
          <LI>{intl.formatMessage({ id: "restaurants-list-point-11" })}</LI>
        </UL>
      </CenteredContainer>


      <CenteredContainer>
        <Space/> 
        <P>Click here to learn more about our incredible and diverse selection lovely amenities, facilities, and activities.</P>
        <Space/>
        <ButtonContainer>
          <Link to="/amenities">
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
    allDayDiner1: file(relativePath: { eq: "restaurants/all-day-diner-1-16x10.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1798) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    allDayDiner2: file(relativePath: { eq: "restaurants/all-day-diner-2-16x10.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1798) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    beachBar1: file(relativePath: { eq: "restaurants/beach-bar-1-16x10.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1790) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    beachBar2: file(relativePath: { eq: "restaurants/beach-bar-2-16x10.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1790) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    asianRestaurant: file(relativePath: { eq: "restaurants/asian-restaurant-16x10.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1796) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    foodCourt1: file(relativePath: { eq: "restaurants/food-court-1-16x10.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1796) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    foodCourt2: file(relativePath: { eq: "restaurants/food-court-2-16x10.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1796) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    italianRestaurant: file(relativePath: { eq: "restaurants/italian-restaurant-16x10.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1789) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    pub1: file(relativePath: { eq: "restaurants/pub-1-16x10.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1794) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    pub2: file(relativePath: { eq: "restaurants/pub-2-16x10.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1794) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    realRestaurant1: file(relativePath: { eq: "restaurants/real-restaurant-1-16x10.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2045) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

export default injectIntl(Restaurants)