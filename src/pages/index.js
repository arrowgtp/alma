import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import Img from 'gatsby-image'
import { Link, injectIntl } from 'gatsby-plugin-intl'
import SEO from '../components/seo'

import ViewContainer from '../components/layout/ViewContainer'
import { FullContentCard, FullContentImage, HeadingContainer, FullCaption } from '../components/layout/FullContentCard'
import FullWidthContainer from '../components/layout/FullWidthContainer'
import CenteredContainer from '../components/layout/CenteredContainer'
import HorizontalScrollContainer from '../components/layout/HorizontalScrollContainer'
import AlmaHeader from '../components/Header'
import { Space, H1, H2, P, UL, LI } from '../components/visual/Typography'
import Button from '../components/visual/Button'

import almaLogoWithBG from '../images/alma/alma-logo-with-bg.svg'

import Footer from '../components/Footer'

const ButtonContainer = styled.div`
  margin: 0;
  display: flex;
  justify-content: center;
`

const MainLogo = styled.img`
  width: calc(192px + (320 - 192) * ((100vw - 300px) / (1600 - 300)));
  height: auto;
  grid-row: 1 / 3;
  grid-column: 1 / 9;
  z-index: 5;
  align-self: center;
  justify-self: center;
  /* filter: drop-shadow( 0px 0px 16px rgba(0, 0, 0, 0.25)); */
  z-index: 1;

  @media (min-width: 50rem) {
    display: none;
  }
`

const PageSlogan = styled.div`
  grid-row: 7 / 9;
  grid-column: 1 / 9;
  z-index: 1;
  color: white;
  font-size: calc(18px + (32 - 18) * ((100vw - 300px) / (1600 - 300)));
  font-family: 'Quicksand';
  align-self: end;
  justify-self: center;
  margin-bottom: 3rem;

  @media (min-width: 50rem) {
    grid-row: 8 / 9;
    grid-column: 1 / 9;
  }
`

const Card = styled.div`
  position: relative;
  flex: 0 0 auto;
  margin: 1rem 0.5rem;
  padding: 0.25rem;
  width: 80%;
  height: auto;
  background: white;
  line-height: 1;
  white-space: pre-wrap;
  border-radius: 8px;
  box-shadow: 0px 0px 32px rgba(0, 0, 0, 0.5);

  :first-child {
    margin-left: 1rem;
  }

  :last-child {
    margin-right: -1rem;
  }

  @media (min-width: 50rem) {
    width: 40%;
  }
`

const CardImg = styled(Img)`
  margin: 0;
  padding: 0;
  width: 100%;
  height: auto;
  border-radius: 6px;
  z-index: 1;
`

const CardCaption = styled.caption`
  position: absolute;
  color: white;
  text-shadow: 1px 1px 3px hsla(0,0%,0%,0.75);
  bottom: 0;
  left: 0;
  font-family: 'Work Sans', sans-serif;
  margin: 1rem;
  padding: 0;
  z-index: 2;
`

const RCIMap = styled(FullContentImage)`
  width: 100%;
  height: auto;
`

// const NewsContainer = styled.div`
//   z-index: 5;
//   grid-column: 1 / 8;
//   margin: 0;
//   padding: 2rem;
//   display: grid;
//   grid-template-columns: 1fr;
//   grid-template-rows: auto;
//   grid-gap: 2rem;

//   @media (min-width: 800px) {
//     grid-template-columns: 1fr 1fr;
//     grid-gap: 2rem;
//   }

//   @media (min-width: 1600px) {
//     grid-template-columns: 1fr 1fr;
//   }

//   @media (orientation: landscape) {
//     .content-grid {
//       margin: 2rem;
//     }
//   }
// `

// const NewsCardOne = styled(Link)`
//   margin: 0;
//   padding: 0;
//   width: 100%;
//   height: 100%;
//   border-radius: 16px;
//   display: grid;
//   z-index: 1;
//   grid-template-columns: repeat(12, 1fr);
//   grid-template-rows: repeat(8, 1fr);
//   transition: All 250ms ease;
//   box-shadow: 
//     0 13px 27px -5px rgba(50,50,93,.25),
//     0 8px 16px -8px rgba(0,0,0,.3),
//     0 -6px 16px -6px rgba(0,0,0,.025)
//   ;
//   transform: translateY(0px);

//   :hover {
//     box-shadow:
//       0 30px 60px -12px rgba(50,50,93,.25),
//       0 18px 36px -18px rgba(0,0,0,.3),
//       0 -12px 36px -8px rgba(0,0,0,.025)
//     ;
//     transform: translateY(-2px);
//   }

//   :active {
//     transition: All 100ms ease;
//     transform: translateY(2px);
//   }

//   @media (min-width: 50rem) {
//   }
// `

// const NewsTitleOne = styled.h1`
//   text-shadow: 0px 0px 8px hsla(360, 100%, 100%, 1);
//   font-size: calc(32px + (64 - 32) * ((100vw - 300px) / (1600 - 300)));
//   font-family: 'Caveat', sans-serif;
//   font-weight: normal;
//   color: #fff;
//   margin: 0;
//   padding: 0 0 0 1rem;
//   font-weight: normal;
//   color: #fff;
//   line-height: 1;
//   font-style: bold;
//   grid-column: 1 / 13;
//   grid-row: 5 / 7;
//   align-self: end;
//   z-index: 10;

//   @media (min-width: 800px) {
//     font-size: calc(16px + (64 - 16) * ((100vw - 300px) / (1600 - 300)));
//   }
// `

// const NewsSubtitleOne = styled.h2`
//   text-shadow: 0px 0px 32px rgba(0, 0, 0, 1);
//   font-size: calc(12px + (18 - 12) * ((100vw - 300px) / (1600 - 300)));
//   font-family: 'Open Sans', sans-serif;
//   color: #fff;
//   margin: 0;
//   padding: 0 0 0 1rem;
//   font-size: 12px;
//   color: #fff;
//   line-height: 1;
//   align-self: center;
//   font-style: normal;
//   grid-column: 1 / 13;
//   grid-row: 7 / 8;
//   z-index: 10;

//   @media (min-width: 800px) {
//     font-size: calc(12px + (16 - 12) * ((100vw - 300px) / (1600 - 300)));
//   }
// `

// const NewsDateOne = styled.h3`
//   text-shadow: 0px 0px 32px rgba(0, 0, 0, 1);
//   font-size: calc(8px + (12 - 8) * ((100vw - 300px) / (1600 - 300)));
//   font-family: 'Open Sans', sans-serif;
//   color: #fff;
//   grid-column: 1 / 13;
//   grid-row: 8 / 9;
//   z-index: 10;
//   padding: 0 0 0 1rem;
//   margin: 0;
// `

// const NewsImageOne = styled(Img)`
//   grid-column: 1 / 13;
//   grid-row: 1 / 9;
//   width: 100%;
//   height: auto;
//   border-radius: 16px;
//   z-index: 1;
// `

// const NewsScrimOne = styled.div`
//   grid-column: 1 / 13;
//   grid-row: 1 / 9;
//   background: linear-gradient(
//     to bottom,
//     hsla(0, 0%, 0%, 0) 0%,
//     hsla(0, 0%, 0%, 0.006) 8.1%,
//     hsla(0, 0%, 0%, 0.024) 15.5%,
//     hsla(0, 0%, 0%, 0.052) 22.5%,
//     hsla(0, 0%, 0%, 0.088) 29%,
//     hsla(0, 0%, 0%, 0.13) 35.3%,
//     hsla(0, 0%, 0%, 0.176) 41.2%,
//     hsla(0, 0%, 0%, 0.225) 47.1%,
//     hsla(0, 0%, 0%, 0.275) 52.9%,
//     hsla(0, 0%, 0%, 0.324) 58.8%,
//     hsla(0, 0%, 0%, 0.37) 64.7%,
//     hsla(0, 0%, 0%, 0.412) 71%,
//     hsla(0, 0%, 0%, 0.448) 77.5%,
//     hsla(0, 0%, 0%, 0.476) 84.5%,
//     hsla(0, 0%, 0%, 0.494) 91.9%,
//     hsla(0, 0%, 0%, 0.5) 100%
//   );
//   border-radius: 16px;
//   z-index: 2;
// `

// const NewsCard = styled(Link)`
//   text-decoration: none;
//   background: white;
//   border-radius: 16px;
//   z-index: 1;
//   box-shadow: 
//     0 13px 27px -5px rgba(50,50,93,0.1),
//     0 8px 16px -8px rgba(0,0,0,0.15),
//     0 -6px 16px -6px rgba(0,0,0,0.01)
//   ;
// `

// const NewsImage = styled(Img)`
//   position: relative;
//   margin: 0;
//   border-radius: 16px 16px 0 0;
//   z-index: 0;
//   background: white;
//   box-shadow: 
//     0 13px 27px -5px rgba(50,50,93,.25),
//     0 8px 16px -8px rgba(0,0,0,.3),
//     0 -6px 16px -6px rgba(0,0,0,.025)
//   ;
//   mask-image: linear-gradient(
//     to top,
//     hsla(0, 0%, 100%, 0) 0%,
//     hsla(0, 0%, 100%, 0.013) 8.1%,
//     hsla(0, 0%, 100%, 0.049) 15.5%,
//     hsla(0, 0%, 100%, 0.104) 22.5%,
//     hsla(0, 0%, 100%, 0.175) 29%,
//     hsla(0, 0%, 100%, 0.259) 35.3%,
//     hsla(0, 0%, 100%, 0.352) 41.2%,
//     hsla(0, 0%, 100%, 0.45) 47.1%,
//     hsla(0, 0%, 100%, 0.55) 52.9%,
//     hsla(0, 0%, 100%, 0.648) 58.8%,
//     hsla(0, 0%, 100%, 0.741) 64.7%,
//     hsla(0, 0%, 100%, 0.825) 71%,
//     hsla(0, 0%, 100%, 0.896) 77.5%,
//     hsla(0, 0%, 100%, 0.951) 84.5%,
//     hsla(0, 0%, 100%, 0.987) 91.9%,
//     hsl(0, 0%, 100%) 100%)
//   ;
// `

// const NewsTitle = styled.h1`
//   font-size: calc(16px + (64 - 16) * ((100vw - 300px) / (1600 - 300)));
//   font-family: 'DM Serif Display';
//   color: black;
//   margin: calc(8px + (32 - 8) * ((100vw - 300px) / (1600 - 300)));
//   z-index: 2;
// `

// const NewsDate = styled.p`
//   font-size: 12px;
//   font-family: 'DM Serif Display';
//   font-style: italic;
//   margin: calc(8px + (32 - 8) * ((100vw - 300px) / (1600 - 300)));
// `

// const NewsSubtitle = styled.p`
//   font-size: calc(10px + (16 - 10) * ((100vw - 300px) / (1600 - 300)));
//   margin: calc(8px + (32 - 8) * ((100vw - 300px) / (1600 - 300)));
// `

// const AlmaSeparator = styled.hr`
//   margin: 1rem 2rem;
//   border: 0;
//   height: 1px;
//   background-image: linear-gradient(
//     to right,
//     hsla(29, 47%, 75%, 1),
//     hsla(29, 47%, 75%, 1),
//     hsla(29, 47%, 75%, 1)
//   );
// `

// const NewsExcerpt = styled.p`
//   font-size: calc(8px + (12 - 8) * ((100vw - 300px) / (1600 - 300)));
//   margin: calc(8px + (32 - 8) * ((100vw - 300px) / (1600 - 300)));
// `

const InstaGrid = styled.div`
  margin: 0;
  padding: 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  grid-gap: 2rem;

  @media (min-width: 50rem) {
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
  }
`

const InstaPost = styled.div`
  margin: 0;
  padding: 0;
  width: 100%;
  height: 0;
  padding-bottom: 100%;
  border-radius: 16px;
  box-shadow: 0px 0px 24px 0px rgba(0,0,0,0.15);
  position: relative;
  transition: All 250ms ease;
  box-shadow: 
    0 13px 27px -5px rgba(50,50,93,.25),
    0 8px 16px -8px rgba(0,0,0,.3),
    0 -6px 16px -6px rgba(0,0,0,.025)
  ;
  
  :hover {
    box-shadow:
      0 30px 60px -12px rgba(50,50,93,.25),
      0 18px 36px -18px rgba(0,0,0,.3),
      0 -12px 36px -8px rgba(0,0,0,.025)
    ;
    transform: translateY(-2px);
  }
`

const InstaSpacer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-rows: repeat(8, 1fr);
  grid-template-columns: repeat(8, 1fr);
`

// const InstaLikes = styled.p`
//   grid-row: 1 / 9;
//   grid-column: 1 / 9;
//   margin: 0;
//   padding: 0;
//   justify-self: start;
//   align-self: end;
//   z-index: 5;
//   color: white;
//   justify-self: center;
//   font-size: calc(8px + (32 - 12) * ((100vw - 300px) / (1600 - 300)));
// `

// const InstaComments = styled.p`
//   grid-row: 8 / 9;
//   grid-column: 5 / 9;
//   margin: 0;
//   padding: 0;
//   z-index: 5;
//   color: white;
//   justify-self: center;
//   font-size: calc(8px + (32 - 12) * ((100vw - 300px) / (1600 - 300)));
// `

const InstaImage = styled(Img)`
  grid-row: 1 / 9;
  grid-column: 1 / 9;
  margin: 0;
  padding: 0;
  border-radius: 16px;
  object-fit: cover;
  width: 100%;
  height: 100%;
  z-index: 0;
`

const InstaScrim = styled.div`
  grid-column: 1 / 9;
  grid-row: 1 / 9;
  background: linear-gradient(
    to bottom,
    hsla(0, 0%, 0%, 0) 0%,
    hsla(0, 0%, 0%, 0.003) 8.1%,
    hsla(0, 0%, 0%, 0.012) 15.5%,
    hsla(0, 0%, 0%, 0.026) 22.5%,
    hsla(0, 0%, 0%, 0.044) 29%,
    hsla(0, 0%, 0%, 0.065) 35.3%,
    hsla(0, 0%, 0%, 0.088) 41.2%,
    hsla(0, 0%, 0%, 0.113) 47.1%,
    hsla(0, 0%, 0%, 0.137) 52.9%,
    hsla(0, 0%, 0%, 0.162) 58.8%,
    hsla(0, 0%, 0%, 0.185) 64.7%,
    hsla(0, 0%, 0%, 0.206) 71%,
    hsla(0, 0%, 0%, 0.224) 77.5%,
    hsla(0, 0%, 0%, 0.238) 84.5%,
    hsla(0, 0%, 0%, 0.247) 91.9%,
    hsla(0, 0%, 0%, 0.25) 100%
  );
  z-index: 1;
  border-radius: 16px;
`

const Index = ({ data, intl }) => {

  return (
    <ViewContainer>

      <SEO title="Home" />

      <FullContentCard>
        <MainLogo src={almaLogoWithBG} alt="The Alma Resort Logo."  />
        <PageSlogan>{intl.formatMessage({ id: "slogan" })}</PageSlogan>
        <FullContentImage fluid={data.resortOverview.childImageSharp.fluid}/>
        <FullCaption>Artist Rendering</FullCaption>
      </FullContentCard>
  
      <CenteredContainer>
        <Space/>
        <AlmaHeader title={intl.formatMessage({ id: "resort-title" })} />
        <Space/>
        <P>{intl.formatMessage({ id: "resort-paragraph-1" })}</P>
        <Space/>
        <ButtonContainer>
          <Link to="/resort">
            <Button>{intl.formatMessage({ id: "learn-more-button" })}</Button>
          </Link>
        </ButtonContainer>
        <Space/>
      </CenteredContainer>
  
        <FullWidthContainer>
          <HorizontalScrollContainer orange>
            <Card>
              <CardImg fluid={data.almaResort1.childImageSharp.fluid}/>
              <CardCaption>Artist Rendering</CardCaption>
            </Card>
            <Card><CardImg fluid={data.almaResort2.childImageSharp.fluid}/><CardCaption>Artist Rendering</CardCaption></Card>
            <Card><CardImg fluid={data.almaResort3.childImageSharp.fluid}/><CardCaption>Artist Rendering</CardCaption></Card>
            <Card><CardImg fluid={data.almaResort4.childImageSharp.fluid}/><CardCaption>Artist Rendering</CardCaption></Card>
            <Card><CardImg fluid={data.almaResort1.childImageSharp.fluid}/><CardCaption>Artist Rendering</CardCaption></Card>
          </HorizontalScrollContainer>
        </FullWidthContainer>

      <CenteredContainer>
        <Space/>
        <AlmaHeader title={intl.formatMessage({ id: "apartments-title" })} />
        <Space/>
        <P>{intl.formatMessage({ id: "apartments-intro-paragraph" })}</P>
        <Space/>
        <ButtonContainer>
          <Link to="/apartments">
            <Button>{intl.formatMessage({ id: "learn-more-button" })}</Button>
          </Link> 
        </ButtonContainer>
        <Space/>
      </CenteredContainer>

      <FullWidthContainer>
        <HorizontalScrollContainer blue> 
          <Card><CardImg fluid={data.apartmentLivingRoom1.childImageSharp.fluid}/><CardCaption>Artist Rendering</CardCaption></Card>
          <Card><CardImg fluid={data.apartmentLivingRoom2.childImageSharp.fluid}/><CardCaption>Artist Rendering</CardCaption></Card>
          <Card><CardImg fluid={data.apartmentKitchen.childImageSharp.fluid}/><CardCaption>Artist Rendering</CardCaption></Card>
          <Card><CardImg fluid={data.apartmentBedroom.childImageSharp.fluid}/><CardCaption>Artist Rendering</CardCaption></Card>
          <Card><CardImg fluid={data.apartmentBathroom.childImageSharp.fluid}/><CardCaption>Artist Rendering</CardCaption></Card>
        </HorizontalScrollContainer>
      </FullWidthContainer>

      <CenteredContainer>
        <Space/>
        <AlmaHeader title={intl.formatMessage({ id: "villas-title" })} />
        <Space/>
        <P>{intl.formatMessage({ id: "villas-intro-paragraph" })}</P>
        <Space/>
        <ButtonContainer>
          <Link to="/villas">
            <Button>{intl.formatMessage({ id: "learn-more-button" })}</Button>
          </Link> 
        </ButtonContainer>
        <Space/>
      </CenteredContainer>

      <FullWidthContainer>
        <HorizontalScrollContainer blue>
          <Card><CardImg fluid={data.realVillaExterior1.childImageSharp.fluid}/></Card>
          <Card><CardImg fluid={data.realVillaExterior2.childImageSharp.fluid}/></Card>
          <Card><CardImg fluid={data.realVillaExterior3.childImageSharp.fluid}/></Card>
          <Card><CardImg fluid={data.realVillaInterior1.childImageSharp.fluid}/></Card>
          <Card><CardImg fluid={data.realVillaInterior2.childImageSharp.fluid}/></Card>
          <Card><CardImg fluid={data.realVillaInterior3.childImageSharp.fluid}/></Card>
        </HorizontalScrollContainer>
      </FullWidthContainer>

      <CenteredContainer>
        <Space/>
        <AlmaHeader title={intl.formatMessage({ id: "restaurants-title" })} />
        <Space/>
        <P>{intl.formatMessage({ id: "restaurants-paragraph-1" })}</P>
        <Space/>
        <ButtonContainer>
          <Link to="/restaurants">
            <Button>{intl.formatMessage({ id: "learn-more-button" })}</Button>
          </Link> 
        </ButtonContainer>
        <Space/>
      </CenteredContainer>

      <FullWidthContainer>
        <HorizontalScrollContainer blue>
          <Card><CardImg fluid={data.allDayDiner1.childImageSharp.fluid}/><CardCaption>Artist Rendering</CardCaption></Card>
          <Card><CardImg fluid={data.beachBar2.childImageSharp.fluid}/><CardCaption>Artist Rendering</CardCaption></Card>
          <Card><CardImg fluid={data.asianRestaurant.childImageSharp.fluid}/><CardCaption>Artist Rendering</CardCaption></Card>
          <Card><CardImg fluid={data.foodCourt1.childImageSharp.fluid}/><CardCaption>Artist Rendering</CardCaption></Card>
          <Card><CardImg fluid={data.italianRestaurant.childImageSharp.fluid}/><CardCaption>Artist Rendering</CardCaption></Card>
          <Card><CardImg fluid={data.pub1.childImageSharp.fluid}/><CardCaption>Artist Rendering</CardCaption></Card>
        </HorizontalScrollContainer>
      </FullWidthContainer>

      <CenteredContainer>
        <Space/>
        <AlmaHeader title={intl.formatMessage({ id: "amenities-title" })} />
        <Space/>
        <P>{intl.formatMessage({ id: "amenities-intro-paragraph" })}</P>
        <Space/>
        <ButtonContainer>
          <Link to="/amenities">
            <Button>{intl.formatMessage({ id: "learn-more-button" })}</Button>
          </Link> 
        </ButtonContainer>
        <Space/>
      </CenteredContainer>

      <FullWidthContainer>
        <HorizontalScrollContainer blue>
          <Card><CardImg fluid={data.receptionLobby.childImageSharp.fluid}/><CardCaption>Artist Rendering</CardCaption></Card>
          <Card><CardImg fluid={data.lobbyLounge.childImageSharp.fluid}/><CardCaption>Artist Rendering</CardCaption></Card>
          <Card><CardImg fluid={data.conventionCenter.childImageSharp.fluid}/><CardCaption>Artist Rendering</CardCaption></Card>
          <Card><CardImg fluid={data.ballroom.childImageSharp.fluid}/><CardCaption>Artist Rendering</CardCaption></Card>
          <Card><CardImg fluid={data.spaTreatment.childImageSharp.fluid}/><CardCaption>Artist Rendering</CardCaption></Card>
        </HorizontalScrollContainer>
      </FullWidthContainer>

      <CenteredContainer>
        <Space/>
        <AlmaHeader title={intl.formatMessage({ id: "construction-title" })} />
        <Space/>
        <P>{intl.formatMessage({ id: "construction-intro-paragraph" })}</P>
        <Space/>
        <ButtonContainer>
          <Link to="/construction">
            <Button>{intl.formatMessage({ id: "learn-more-button" })}</Button>
          </Link> 
        </ButtonContainer>
        <Space/>
      </CenteredContainer>

      <FullWidthContainer>
        <HorizontalScrollContainer blue>
          <Card><CardImg fluid={data.june1.childImageSharp.fluid}/></Card>
          <Card><CardImg fluid={data.june2.childImageSharp.fluid}/></Card>
          <Card><CardImg fluid={data.june3.childImageSharp.fluid}/></Card>
          <Card><CardImg fluid={data.june4.childImageSharp.fluid}/></Card>
          <Card><CardImg fluid={data.june5.childImageSharp.fluid}/></Card>
        </HorizontalScrollContainer>
      </FullWidthContainer>

      <CenteredContainer>
        <Space/>
        <AlmaHeader title={intl.formatMessage({ id: "vacations-title" })} />
        <Space/>
        <P>{intl.formatMessage({ id: "vacations-intro-paragraph" })}</P>
        <Space/>
        <ButtonContainer>
          <Link to="/vacations">
            <Button>{intl.formatMessage({ id: "learn-more-button" })}</Button>
          </Link> 
        </ButtonContainer>
        <Space/>
      </CenteredContainer>

      <FullContentCard>
        <RCIMap fluid={data.rciMap.childImageSharp.fluid}/>
      </FullContentCard>
      
      <CenteredContainer>
        <Space/>
        <AlmaHeader title={intl.formatMessage({ id: "alma-title" })} />
        <Space/>
        <P>{intl.formatMessage({ id: "alma-paragraph-1-1" })}</P>
        <Space/>
        <ButtonContainer>
          <Link to="/vacations">
            <Button>{intl.formatMessage({ id: "learn-more-button" })}</Button>
          </Link> 
        </ButtonContainer>
        <Space/>
      </CenteredContainer>

      {/* <CenteredContainer>
        <AlmaHeader white title='News' />
        <P>All the latest news that's fit to print about the worlds newest and brightest hotspot in the Vietnam travel scene</P>
        <P>{data.articles.totalCount} Posts</P>
      </CenteredContainer> */}
    
      {/* <FullWidthContainer>
        <NewsContainer>
          {data.articles.edges.map(({ node }) => (
            <NewsCardOne key={node.id} to={node.fields.slug}>
              <NewsTitleOne>{node.frontmatter.title}</NewsTitleOne>
              <NewsSubtitleOne>{node.frontmatter.subtitle}</NewsSubtitleOne>
              <NewsDateOne>{node.frontmatter.date}</NewsDateOne>
              <NewsImageOne fluid={node.frontmatter.image.childImageSharp.fluid} alt="cool stuff." />
              <NewsScrimOne />
            </NewsCardOne>
          ))}
        </NewsContainer>
      </FullWidthContainer> */}

      {/* <FullWidthContainer>
        <NewsContainer>
          {data.articles.edges.map(({ node }) => (
            <NewsCard key={node.id} to={node.fields.slug}>
              <NewsImage fluid={node.frontmatter.image.childImageSharp.fluid} alt="cool stuff." />
              <NewsTitle>{node.frontmatter.title}{" "}</NewsTitle>
              <NewsDate>{node.frontmatter.date}</NewsDate>
              <NewsSubtitle>{node.frontmatter.subtitle}</NewsSubtitle>
              <AlmaSeparator/>
              <NewsExcerpt>{node.excerpt}</NewsExcerpt>
            </NewsCard>
          ))}
        </NewsContainer>
      </FullWidthContainer> */}
        
      <CenteredContainer>
        <AlmaHeader title='Instagram' />
      </CenteredContainer>

      <FullWidthContainer>
        <InstaGrid>
          {data.allInstaNode.edges.map(({ node }) => (
            <InstaPost key={node.id}>
              <InstaSpacer>
                <InstaScrim />
                <InstaImage fluid={node.localFile.childImageSharp.fluid} />
              </InstaSpacer>
            </InstaPost>
          ))}
        </InstaGrid>
        <Space/>
      </FullWidthContainer>

      <Footer>
        <p>{intl.formatMessage({ id: "copyright-notice" })}</p>
        <p>{intl.formatMessage({ id: "solicitation-notice" })}</p>
      </Footer>

    </ViewContainer>
  )
}

export const query = graphql`
  query {
    allInstaNode(sort: { fields: [timestamp], order: DESC }) {
      edges {
        node {
          id
          likes
          comments
          mediaType
          preview
          original
          timestamp
          caption
          localFile {
            childImageSharp {
              fluid(maxWidth: 256) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          thumbnails {
            src
            config_width
            config_height
          }
          dimensions {
            height
            width
          }
        }
      }
    }
    articles: allMdx {
      totalCount
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            title
            subtitle
            description
            date(formatString: "MMMM Do, YYYY")
            image {
              childImageSharp {
                fluid(maxWidth: 3840) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
    resortOverview: file(relativePath: { eq: "resort/resort-overview-1-16x10.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 3456) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    almaResort1: file(relativePath: { eq: "resort/resort-1-4x3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2880) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    almaResort2: file(relativePath: { eq: "resort/resort-2-4x3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2880) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    almaResort3: file(relativePath: { eq: "resort/resort-3-4x3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2880) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    almaResort4: file(relativePath: { eq: "resort/resort-4-4x3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2880) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    almaResort5: file(relativePath: { eq: "resort/resort-overview-2-4x3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2880) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    apartmentLivingRoom1: file(relativePath: { eq: "apartments/apartment-living-room-1-4x3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2880) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    apartmentLivingRoom2: file(relativePath: { eq: "apartments/apartment-living-room-2-4x3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2880) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    apartmentKitchen: file(relativePath: { eq: "apartments/apartment-kitchen-4x3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2880) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    apartmentBedroom: file(relativePath: { eq: "apartments/apartment-bedroom-4x3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2880) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    apartmentBathroom: file(relativePath: { eq: "apartments/apartment-bathroom-4x3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2880) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    realVillaExterior1: file(relativePath: { eq: "villas/real-villa-1-4x3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2880) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    realVillaExterior2: file(relativePath: { eq: "villas/real-villa-2-4x3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2880) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    realVillaExterior3: file(relativePath: { eq: "villas/real-villa-3-4x3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2880) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    realVillaInterior1: file(relativePath: { eq: "villas/real-villa-4-4x3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2880) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    realVillaInterior2: file(relativePath: { eq: "villas/real-villa-5-4x3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2880) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    realVillaInterior3: file(relativePath: { eq: "villas/real-villa-6-4x3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2880) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    villaExterior1: file(relativePath: { eq: "villas/villa-exterior-1-4x3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2880) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    villaLivingRoom1: file(relativePath: { eq: "villas/villa-living-room-1-4x3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2880) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    villaLivingRoom2: file(relativePath: { eq: "villas/villa-living-room-2-4x3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2880) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    villaBedroom1: file(relativePath: { eq: "villas/villa-bedroom-1-4x3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2880) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    villaBathroom1: file(relativePath: { eq: "villas/villa-bathroom-1-4x3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2880) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    allDayDiner1: file(relativePath: { eq: "restaurants/all-day-diner-1-4x3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1798) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    asianRestaurant: file(relativePath: { eq: "restaurants/asian-restaurant-4x3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1796) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    beachBar2: file(relativePath: { eq: "restaurants/beach-bar-2-4x3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1790) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    foodCourt1: file(relativePath: { eq: "restaurants/food-court-1-4x3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1796) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    italianRestaurant: file(relativePath: { eq: "restaurants/italian-restaurant-4x3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1789) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    pub1: file(relativePath: { eq: "restaurants/pub-1-4x3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1794) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    receptionLobby: file(relativePath: { eq: "amenities/reception-lobby-4x3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2880) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    lobbyLounge: file(relativePath: { eq: "amenities/lobby-lounge-4x3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2880) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    conventionCenter: file(relativePath: { eq: "amenities/convention-center-4x3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2880) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    ballroom: file(relativePath: { eq: "amenities/ballroom-4x3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2880) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    spaTreatment: file(relativePath: { eq: "amenities/spa-treatment-4x3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2880) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
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
    rciMap: file(relativePath: { eq: "rci/rci-network-map.png" }) {
      childImageSharp {
        fluid(maxWidth: 2880) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

export default injectIntl(Index)