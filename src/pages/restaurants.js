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

const ButtonContainer = styled.div`
  margin: 0 0 2rem 0;
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
        <FullContentImage fluid={data.beachBar2.childImageSharp.fluid}/>
      </FullContentCard>

      <CenteredContainer>
        <AlmaHeader title={intl.formatMessage({ id: "restaurants-subtitle" })}></AlmaHeader>
        <P>{intl.formatMessage({ id: "resort-p1" })}</P>
      </CenteredContainer>

      <FullWidthContainer>
        <Img fluid={data.allDayDiner1.childImageSharp.fluid}/>
      </FullWidthContainer>
      <FullWidthContainer>
        <Img fluid={data.allDayDiner2.childImageSharp.fluid}/>
      </FullWidthContainer>

      <CenteredContainer>
        <P>{intl.formatMessage({ id: "resort-p2" })}</P>
      </CenteredContainer>

      <FullWidthContainer>
        <Img fluid={data.beachBar1.childImageSharp.fluid}/>
      </FullWidthContainer>
      <FullWidthContainer>
        <Img fluid={data.beachBar2.childImageSharp.fluid}/>
      </FullWidthContainer>

      <CenteredContainer>
        <P>{intl.formatMessage({ id: "resort-p3" })}</P>
      </CenteredContainer>

      <FullWidthContainer>
        <Img fluid={data.asianRestaurant.childImageSharp.fluid}/>
      </FullWidthContainer>

      <CenteredContainer>
        <P>{intl.formatMessage({ id: "resort-p3" })}</P>
      </CenteredContainer>

      <FullWidthContainer>
        <Img fluid={data.italianRestaurant.childImageSharp.fluid}/>
      </FullWidthContainer>

      <CenteredContainer>
        <P>{intl.formatMessage({ id: "resort-p3" })}</P>
      </CenteredContainer>

      <FullWidthContainer>
        <Img fluid={data.foodCourt1.childImageSharp.fluid}/>
      </FullWidthContainer>
      <FullWidthContainer>
        <Img fluid={data.foodCourt2.childImageSharp.fluid}/>
      </FullWidthContainer>
      
      <CenteredContainer>
        <P>{intl.formatMessage({ id: "resort-p3" })}</P>
      </CenteredContainer>

      <FullWidthContainer>
        <Img fluid={data.pub1.childImageSharp.fluid}/>
      </FullWidthContainer>
      <FullWidthContainer>
        <Img fluid={data.pub2.childImageSharp.fluid}/>
      </FullWidthContainer>

      <CenteredContainer> 
        <P>Learn more about our lovely amenities.</P>
        <ButtonContainer>
          <Link to="/amenities">
            <Button>Learn More</Button>
          </Link> 
        </ButtonContainer> 
      </CenteredContainer>

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
  }
`

export default injectIntl(Restaurants)