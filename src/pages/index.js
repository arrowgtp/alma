import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import Img from 'gatsby-image'
import { Link, injectIntl } from 'gatsby-plugin-intl'
import SEO from '../components/seo'

import ViewContainer from '../components/layout/ViewContainer'
import FullWidthContainer from '../components/layout/FullWidthContainer'
import CenteredContainer from '../components/layout/CenteredContainer'
import HorizontalScrollContainer from '../components/layout/HorizontalScrollContainer'
import AlmaHeader from '../components/Header'
import { FullContentCard, FullContentImage } from '../components/layout/FullContentCard'

import P from '../components/visual/Paragraph'

import almaLogoWithBG from '../images/alma/alma-logo-with-bg.svg'

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
  align-self: end;
  justify-self: center;
  margin-bottom: 3rem;

  @media (min-width: 50rem) {
    grid-row: 8 / 9;
    grid-column: 1 / 9;
  }
`

const Card = styled.div`
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
  border-radius: 6px;
`

const NewsContainer = styled.div`
  z-index: 5;
  grid-column: 1 / 8;
  margin: 0;
  padding: 2rem;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  grid-gap: 2rem;

  @media (min-width: 800px) {
    grid-template-columns: 1fr 1fr;
    grid-gap: 2rem;
  }

  @media (min-width: 1600px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (orientation: landscape) {
    .content-grid {
      margin: 2rem;
    }
  }
`

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

const NewsCard = styled(Link)`
  text-decoration: none;
  background: white;
  border-radius: 16px;
  z-index: 1;
  box-shadow: 
    0 13px 27px -5px rgba(50,50,93,0.1),
    0 8px 16px -8px rgba(0,0,0,0.15),
    0 -6px 16px -6px rgba(0,0,0,0.01)
  ;
`

const NewsImage = styled(Img)`
  position: relative;
  margin: 0;
  border-radius: 16px 16px 0 0;
  z-index: 0;
  background: white;
  /* box-shadow: 
    0 13px 27px -5px rgba(50,50,93,.25),
    0 8px 16px -8px rgba(0,0,0,.3),
    0 -6px 16px -6px rgba(0,0,0,.025)
  ; */
  /* mask-image: linear-gradient(
    to top,
    hsla(0, 0%, 100%, 0) 0%,
    hsla(0, 0%, 100%, 0.013) 8.1%,
    hsla(0, 0%, 100%, 0.049) 15.5%,
    hsla(0, 0%, 100%, 0.104) 22.5%,
    hsla(0, 0%, 100%, 0.175) 29%,
    hsla(0, 0%, 100%, 0.259) 35.3%,
    hsla(0, 0%, 100%, 0.352) 41.2%,
    hsla(0, 0%, 100%, 0.45) 47.1%,
    hsla(0, 0%, 100%, 0.55) 52.9%,
    hsla(0, 0%, 100%, 0.648) 58.8%,
    hsla(0, 0%, 100%, 0.741) 64.7%,
    hsla(0, 0%, 100%, 0.825) 71%,
    hsla(0, 0%, 100%, 0.896) 77.5%,
    hsla(0, 0%, 100%, 0.951) 84.5%,
    hsla(0, 0%, 100%, 0.987) 91.9%,
    hsl(0, 0%, 100%) 100%) */
  ;
`

const NewsTitle = styled.h1`
  font-size: calc(16px + (64 - 16) * ((100vw - 300px) / (1600 - 300)));
  font-family: 'DM Serif Display';
  color: black;
  margin: calc(8px + (32 - 8) * ((100vw - 300px) / (1600 - 300)));
  z-index: 2;
`

const NewsDate = styled.p`
  font-size: 12px;
  font-family: 'DM Serif Display';
  font-style: italic;
  margin: calc(8px + (32 - 8) * ((100vw - 300px) / (1600 - 300)));
`

const NewsSubtitle = styled.p`
  font-size: calc(10px + (16 - 10) * ((100vw - 300px) / (1600 - 300)));
  margin: calc(8px + (32 - 8) * ((100vw - 300px) / (1600 - 300)));
`

const AlmaSeparator = styled.hr`
  margin: 1rem 2rem;
  border: 0;
  height: 1px;
  background-image: linear-gradient(
    to right,
    hsla(29, 47%, 75%, 1),
    hsla(29, 47%, 75%, 1),
    hsla(29, 47%, 75%, 1)
  );
`

const NewsExcerpt = styled.p`
  font-size: calc(8px + (12 - 8) * ((100vw - 300px) / (1600 - 300)));
  margin: calc(8px + (32 - 8) * ((100vw - 300px) / (1600 - 300)));
`

// const InstaGrid = styled.div`
//   margin: 0;
//   padding: 2rem;
//   display: grid;
//   grid-template-columns: 1fr 1fr;
//   grid-template-rows: 1fr 1fr 1fr;
//   grid-gap: 2rem;

//   @media (min-width: 50rem) {
//     grid-template-columns: 1fr 1fr 1fr;
//     grid-template-rows: 1fr 1fr 1fr;
//   }
// `

// const InstaPost = styled.div`
//   margin: 0;
//   padding: 0;
//   width: 100%;
//   height: 0;
//   padding-bottom: 100%;
//   border-radius: 16px;
//   box-shadow: 0px 0px 24px 0px rgba(0,0,0,0.15);
//   position: relative;
//   transition: All 250ms ease;
//   box-shadow: 
//     0 13px 27px -5px rgba(50,50,93,.25),
//     0 8px 16px -8px rgba(0,0,0,.3),
//     0 -6px 16px -6px rgba(0,0,0,.025)
//   ;

//   :hover {
//     box-shadow:
//       0 30px 60px -12px rgba(50,50,93,.25),
//       0 18px 36px -18px rgba(0,0,0,.3),
//       0 -12px 36px -8px rgba(0,0,0,.025)
//     ;
//     transform: translateY(-2px);
//   }
// `

// const InstaSpacer = styled.div`
//   position: absolute;
//   top: 0;
//   left: 0;
//   height: 100%;
//   width: 100%;
//   display: grid;
//   grid-template-rows: repeat(8, 1fr);
//   grid-template-columns: repeat(8, 1fr);
// `

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

// const InstaImage = styled(Img)`
//   grid-row: 1 / 9;
//   grid-column: 1 / 9;
//   margin: 0;
//   padding: 0;
//   border-radius: 16px;
//   object-fit: cover;
//   width: 100%;
//   height: 100%;
//   z-index: 0;
// `

// const InstaScrim = styled.div`
//   grid-column: 1 / 9;
//   grid-row: 1 / 9;
//   background: linear-gradient(
//     to bottom,
//     hsla(0, 0%, 0%, 0) 0%,
//     hsla(0, 0%, 0%, 0.003) 8.1%,
//     hsla(0, 0%, 0%, 0.012) 15.5%,
//     hsla(0, 0%, 0%, 0.026) 22.5%,
//     hsla(0, 0%, 0%, 0.044) 29%,
//     hsla(0, 0%, 0%, 0.065) 35.3%,
//     hsla(0, 0%, 0%, 0.088) 41.2%,
//     hsla(0, 0%, 0%, 0.113) 47.1%,
//     hsla(0, 0%, 0%, 0.137) 52.9%,
//     hsla(0, 0%, 0%, 0.162) 58.8%,
//     hsla(0, 0%, 0%, 0.185) 64.7%,
//     hsla(0, 0%, 0%, 0.206) 71%,
//     hsla(0, 0%, 0%, 0.224) 77.5%,
//     hsla(0, 0%, 0%, 0.238) 84.5%,
//     hsla(0, 0%, 0%, 0.247) 91.9%,
//     hsla(0, 0%, 0%, 0.25) 100%
//   );
//   z-index: 1;
//   border-radius: 16px;
// `

const Index = ({ data, intl }) => {

  return (
    <ViewContainer>

      <SEO title="Home" />

      <FullContentCard>
        <MainLogo src={almaLogoWithBG} alt="The Alma Resort Logo."  />
        <PageSlogan>{intl.formatMessage({ id: "slogan" })}</PageSlogan>
        <FullContentImage fluid={data.resortOverview.childImageSharp.fluid}/>
      </FullContentCard>
  
      <CenteredContainer>
        <AlmaHeader title={intl.formatMessage({ id: "resort-title" })} />
        <P>{intl.formatMessage({ id: "resort-p1" })}</P>
      </CenteredContainer>
  
        <FullWidthContainer>
          <HorizontalScrollContainer orange>
            <Card><CardImg fluid={data.almaResort1.childImageSharp.fluid}/></Card>
            <Card><CardImg fluid={data.almaResort2.childImageSharp.fluid}/></Card>
            <Card><CardImg fluid={data.almaResort3.childImageSharp.fluid}/></Card>
            <Card><CardImg fluid={data.almaResort4.childImageSharp.fluid}/></Card>
            <Card><CardImg fluid={data.almaResort1.childImageSharp.fluid}/></Card>
          </HorizontalScrollContainer>
        </FullWidthContainer>

      <CenteredContainer>
        <AlmaHeader white title='Apartments'/>
        <P>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</P>
      </CenteredContainer>

      <FullWidthContainer>
        <HorizontalScrollContainer blue> 
          <Card><CardImg fluid={data.almaLivingRoom1.childImageSharp.fluid}/></Card>
          <Card><CardImg fluid={data.almaLivingRoom2.childImageSharp.fluid}/></Card>
          <Card><CardImg fluid={data.almaKitchen1.childImageSharp.fluid}/></Card>
          <Card><CardImg fluid={data.almaBedroom1.childImageSharp.fluid}/></Card>
          <Card><CardImg fluid={data.almaBathroom1.childImageSharp.fluid}/></Card>
        </HorizontalScrollContainer>
      </FullWidthContainer>

      <CenteredContainer>
        <AlmaHeader white title='Villas'/>
        <P>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</P>
      </CenteredContainer>

      <FullWidthContainer>
        <HorizontalScrollContainer blue>
          <Card><CardImg fluid={data.villaExterior1.childImageSharp.fluid}/></Card>
          <Card><CardImg fluid={data.villaLivingRoom1.childImageSharp.fluid}/></Card>
          <Card><CardImg fluid={data.villaLivingRoom2.childImageSharp.fluid}/></Card>
          <Card><CardImg fluid={data.villaBedroom1.childImageSharp.fluid}/></Card>
          <Card><CardImg fluid={data.villaBathroom1.childImageSharp.fluid}/></Card>
        </HorizontalScrollContainer>
      </FullWidthContainer>

      <CenteredContainer>
        <AlmaHeader white title='Amenities' />
        <P>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</P>
      </CenteredContainer>

      <FullWidthContainer>
        <HorizontalScrollContainer blue>
          <Card><CardImg fluid={data.reception.childImageSharp.fluid}/></Card>
          <Card><CardImg fluid={data.allDayDiner.childImageSharp.fluid}/></Card>
          <Card><CardImg fluid={data.ballroom.childImageSharp.fluid}/></Card>
          <Card><CardImg fluid={data.beachBar.childImageSharp.fluid}/></Card>
          <Card><CardImg fluid={data.spaTreatment.childImageSharp.fluid}/></Card>
        </HorizontalScrollContainer>
      </FullWidthContainer>

      <CenteredContainer>
        {/* <AlmaHeader title={intl.formatMessage({ id: "resort-title" })} /> */}
        <AlmaHeader title='Vacations' />
        <P>{intl.formatMessage({ id: "resort-p1" })}</P>
      </CenteredContainer>
  
      {/* <FullWidthContainer>
        <HorizontalScrollContainer orange>
          <Card><CardImg fluid={data.almaResort1.childImageSharp.fluid}/></Card>
          <Card><CardImg fluid={data.almaResort2.childImageSharp.fluid}/></Card>
          <Card><CardImg fluid={data.almaResort3.childImageSharp.fluid}/></Card>
          <Card><CardImg fluid={data.almaResort4.childImageSharp.fluid}/></Card>
          <Card><CardImg fluid={data.almaResort1.childImageSharp.fluid}/></Card>
        </HorizontalScrollContainer>
      </FullWidthContainer> */}

      <CenteredContainer>
        <AlmaHeader white title='About RCI' />
        <P>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</P>
      </CenteredContainer>

      {/* <FullWidthContainer>
        <HorizontalScrollContainer blue>
          <Card><CardImg fluid={data.almaResort1.childImageSharp.fluid}/></Card>
          <Card><CardImg fluid={data.almaResort2.childImageSharp.fluid}/></Card>
          <Card><CardImg fluid={data.almaResort3.childImageSharp.fluid}/></Card>
          <Card><CardImg fluid={data.almaResort4.childImageSharp.fluid}/></Card>
          <Card><CardImg fluid={data.almaResort5.childImageSharp.fluid}/></Card>
        </HorizontalScrollContainer>
      </FullWidthContainer> */}

      <CenteredContainer>
        <AlmaHeader white title='Ownership' />
        <P>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</P>
      </CenteredContainer>

      {/* <FullWidthContainer>
        <HorizontalScrollContainer blue>
          <Card><CardImg fluid={data.almaResort1.childImageSharp.fluid}/></Card>
          <Card><CardImg fluid={data.almaResort2.childImageSharp.fluid}/></Card>
          <Card><CardImg fluid={data.almaResort3.childImageSharp.fluid}/></Card>
          <Card><CardImg fluid={data.almaResort4.childImageSharp.fluid}/></Card>
          <Card><CardImg fluid={data.almaResort5.childImageSharp.fluid}/></Card>
        </HorizontalScrollContainer>
      </FullWidthContainer> */}

      <CenteredContainer>
        <AlmaHeader white title='Benefits' />
        <P>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</P>
      </CenteredContainer>

      {/* <FullWidthContainer>
        <HorizontalScrollContainer blue>
          <Card><CardImg fluid={data.almaResort1.childImageSharp.fluid}/></Card>
          <Card><CardImg fluid={data.almaResort2.childImageSharp.fluid}/></Card>
          <Card><CardImg fluid={data.almaResort3.childImageSharp.fluid}/></Card>
          <Card><CardImg fluid={data.almaResort4.childImageSharp.fluid}/></Card>
          <Card><CardImg fluid={data.almaResort5.childImageSharp.fluid}/></Card>
        </HorizontalScrollContainer>
      </FullWidthContainer> */}

      <CenteredContainer>
        {/* <AlmaHeader title={intl.formatMessage({ id: "resort-title" })} /> */}
        <AlmaHeader title='Alma' />
        <P>{intl.formatMessage({ id: "resort-p1" })}</P>
      </CenteredContainer>
  
      {/* <FullWidthContainer>
        <HorizontalScrollContainer orange>
          <Card><CardImg fluid={data.almaResort1.childImageSharp.fluid}/></Card>
          <Card><CardImg fluid={data.almaResort2.childImageSharp.fluid}/></Card>
          <Card><CardImg fluid={data.almaResort3.childImageSharp.fluid}/></Card>
          <Card><CardImg fluid={data.almaResort4.childImageSharp.fluid}/></Card>
          <Card><CardImg fluid={data.almaResort1.childImageSharp.fluid}/></Card>
        </HorizontalScrollContainer>
      </FullWidthContainer> */}

      <CenteredContainer>
        <AlmaHeader white title='About Us' />
        <P>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</P>
      </CenteredContainer>

      {/* <FullWidthContainer>
        <HorizontalScrollContainer blue>
          <Card><CardImg fluid={data.almaResort1.childImageSharp.fluid}/></Card>
          <Card><CardImg fluid={data.almaResort2.childImageSharp.fluid}/></Card>
          <Card><CardImg fluid={data.almaResort3.childImageSharp.fluid}/></Card>
          <Card><CardImg fluid={data.almaResort4.childImageSharp.fluid}/></Card>
          <Card><CardImg fluid={data.almaResort5.childImageSharp.fluid}/></Card>
        </HorizontalScrollContainer>
      </FullWidthContainer> */}

      <CenteredContainer>
        <AlmaHeader white title='Our Story' />
        <P>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</P>
      </CenteredContainer>

      {/* <FullWidthContainer>
        <HorizontalScrollContainer blue>
          <Card><CardImg fluid={data.almaResort1.childImageSharp.fluid}/></Card>
          <Card><CardImg fluid={data.almaResort2.childImageSharp.fluid}/></Card>
          <Card><CardImg fluid={data.almaResort3.childImageSharp.fluid}/></Card>
          <Card><CardImg fluid={data.almaResort4.childImageSharp.fluid}/></Card>
          <Card><CardImg fluid={data.almaResort5.childImageSharp.fluid}/></Card>
        </HorizontalScrollContainer>
      </FullWidthContainer> */}

      <CenteredContainer>
        <AlmaHeader white title='News' />
        <P>All the latest news that's fit to print about the worlds newest and brightest hotspot in the Vietnam travel scene</P>
        <P>{data.articles.totalCount} Posts</P>
      </CenteredContainer>
    
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

      <FullWidthContainer>
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
      </FullWidthContainer>
        
      {/* <CenteredContainer>
        <AlmaHeader title='Instagram' />
      </CenteredContainer> */}

      {/* <FullWidthContainer>
        <InstaGrid>
          {data.allInstaNode.edges.map(({ node }) => (
            <InstaPost key={node.id}>
              <InstaSpacer>
                <InstaLikes>❤️ {node.likes}</InstaLikes>
                <InstaComments>💬 {node.comments}</InstaComments>
                <InstaScrim />
                <InstaImage src={node.original} />
                <InstaImage fluid={node.localFile.childImageSharp.fluid} />
              </InstaSpacer>
            </InstaPost>
          ))}
        </InstaGrid>
      </FullWidthContainer> */}

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
    resortOverview: file(relativePath: { eq: "resort/alma-resort-overview.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 3840) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    almaResort1: file(relativePath: { eq: "resort/alma-resort-1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 3840) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    almaResort2: file(relativePath: { eq: "resort/alma-resort-2.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 3840) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    almaResort3: file(relativePath: { eq: "resort/alma-resort-3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 3840) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    almaResort4: file(relativePath: { eq: "resort/alma-resort-4.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 3840) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    almaResort5: file(relativePath: { eq: "resort/alma-resort-5.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 3840) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    villaExterior1: file(relativePath: { eq: "villas/villa-exterior-1-3840x2880.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 3840) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    villaLivingRoom1: file(relativePath: { eq: "villas/villa-living-room-1-3840x2880.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 3840) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    villaLivingRoom2: file(relativePath: { eq: "villas/villa-living-room-2-3840x2880.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 3840) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    villaBedroom1: file(relativePath: { eq: "villas/villa-bedroom-1-3840x2880.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 3840) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    villaBathroom1: file(relativePath: { eq: "villas/villa-bathroom-1-3840x2880.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 3840) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    villaLivingRoom1: file(relativePath: { eq: "villas/villa-living-room-1-3840x2880.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 3840) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    almaBathroom1: file(relativePath: { eq: "rooms/alma-bathroom-1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 3840) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    almaBedroom1: file(relativePath: { eq: "rooms/alma-bedroom-1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 3840) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    almaKitchen1: file(relativePath: { eq: "rooms/alma-kitchen-1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 3840) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    almaLivingRoom1: file(relativePath: { eq: "rooms/alma-living-room-1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 3840) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    almaLivingRoom2: file(relativePath: { eq: "rooms/alma-living-room-2.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 3840) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    reception: file(relativePath: { eq: "amenities/reception-lobby-3840x2880.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 3840) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    ballroom: file(relativePath: { eq: "amenities/ballroom-3840x2880.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 3840) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    spaTreatment: file(relativePath: { eq: "amenities/spa-treatment-3840x2880.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 3840) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    allDayDiner: file(relativePath: { eq: "restaurants/all-day-diner-1-3840x2880.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 3840) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    beachBar: file(relativePath: { eq: "restaurants/beach-bar-2-3840x2880.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 3840) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

export default injectIntl(Index)