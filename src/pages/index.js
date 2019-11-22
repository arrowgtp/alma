import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import Img from 'gatsby-image'
import { Link, injectIntl } from 'gatsby-plugin-intl'
import SEO from '../components/seo'

import YouTube from 'react-youtube'

import Content from '../components/layout/Content'
import HorizontalScrollContainer from '../components/layout/HorizontalScrollContainer'
import AlmaHeader from '../components/Header'
import { Space, P } from '../components/visual/Typography'
import Watermark from '../components/Watermark'
import Caption from '../components/Caption'
import { Image } from '../components/visual/FullImage'
import Box from '../components/Box'
import { Button, ButtonContainer } from '../components/visual/Button'

import almaLogoWithBG from '../images/alma/alma-logo-with-bg.svg'

import Footer from '../components/Footer'

const MainLogo = styled.img`
  width: calc(192px + (320 - 192) * ((100vw - 300px) / (1600 - 300)));
  height: auto;
  grid-row: 1 / 3;
  grid-column: 1 / 9;
  z-index: 1000;
  align-self: center;
  justify-self: center;
  /* filter: drop-shadow( 0px 0px 16px rgba(0, 0, 0, 0.25)); */
  z-index: 1;

  @media (orientation: landscape) {
    display: none;
  }
`

const PageSlogan = styled.div`
  grid-row: 3 / 4;
  grid-column: 1 / 9;
  z-index: 5;
  color: white;
  font-size: calc(18px + (32 - 18) * ((100vw - 300px) / (1600 - 300)));
  font-family: 'Quicksand';
  align-self: start;
  justify-self: center;
  margin-bottom: 1rem;
  text-shadow: 0px 0px 8px rgba(0,0,0,1);

  @media (orientation: landscape) {
    grid-row: 1 / 3;
    grid-column: 1 / 9;
    align-self: center;
  }
`

const Scrim = styled.div`
  grid-row: 1 / 9;
  grid-column: 1 / 9;
  z-index: 100;
  background: rgba(0,0,0,0.5);
`

const BackgroundVideo = styled(YouTube)`
  grid-row: 1 / 9;
  grid-column: 1 / 9;
  object-fit: cover;
  z-index: 1000;
  /* min-width: 100%;
  min-height: 100%; */
  width: 100%;
  height: auto;
  /* position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0; */
`

const Card = styled.figure`
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

const RCIMap = styled(Image)`
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

  @media (orientation: landscape) {
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

// const Watermark = () => {
//   return(
//     <CardWatermark src={almaLogoWhite}/>
//   )
// }

const VideoBox = styled.div`
  position: relative;
	padding-bottom: 52.75%;
	padding-top: 25px;
	height: 0;

  > iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`

const Index = ({ data, intl }) => {

  // _onReady(event) {
  //   // access to player in all event handlers via event.target
  //   // event.target.mute();
  // }
  
  // _onEnd(event) {
  //   event.target.playVideo();
  // }

  const videoOptions = {
    playerVars: { // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
      controls: 0,
      rel: 0,
      showinfo: 0
    }
  }

  return (
    <Content>

      <SEO title="Home" />

      <Box featured>
        {/* <Scrim /> */}
        <MainLogo src={almaLogoWithBG} alt="The Alma Resort Logo."/>
        <PageSlogan>{intl.formatMessage({ id: "slogan" })}</PageSlogan>
        {/* <FullContentImage fluid={data.resortOverview.childImageSharp.fluid}/> */}
        <Image grid fluid={data.oct14.childImageSharp.fluid}/>
        <Caption large>Artist Rendering</Caption>
        <Watermark large/>
        {/* <BackgroundVideo
          videoId="RwCOgvo7v-Q"
          opts={videoOptions}
          className="video-iframe"
          // onReady={this._onReady}
          // onEnd={this._onEnd}
        /> */}
      </Box>
  
      <Box center>
        <Space/>
        <AlmaHeader blue title={intl.formatMessage({ id: "resort-title" })} />
        <Space/>
        <VideoBox>
          <iframe width="100%" height="100%" src="https://www.youtube.com/embed/RwCOgvo7v-Q" frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="true"></iframe>
        </VideoBox>
        <Space/>
        <P>{intl.formatMessage({ id: "resort-intro-paragraph" })}</P>
        <Space/>
        <ButtonContainer>
          <Link to="/resort">
            <Button>{intl.formatMessage({ id: "resort-title" })}</Button>
          </Link>
        </ButtonContainer>
        <Space/>
      </Box>
  
      <Box full>
        <HorizontalScrollContainer orange>
          <Card>
            <CardImg
              fluid={data.resortDrone1.childImageSharp.fluid}
              alt="The Alma Resort."
            />
            <Caption small>Actual Image</Caption>
            <Watermark small/>
          </Card>
          <Card>
            <CardImg fluid={data.resortDrone2.childImageSharp.fluid} alt="The Alma Resort."/>
            <Caption small>Actual Image</Caption>
            <Watermark small/>
          </Card>
          <Card>
            <CardImg fluid={data.resortDrone3.childImageSharp.fluid} alt="The Alma Resort."/>
            <Caption small>Actual Image</Caption>
            <Watermark small/>
          </Card>
          <Card>
            <CardImg fluid={data.resortBirdseye.childImageSharp.fluid} alt="The Alma Resort."/>
            <Caption small>Actual Image</Caption>
            <Watermark small/>
          </Card>
          <Card>
            <CardImg fluid={data.resortDrone5.childImageSharp.fluid} alt="The Alma Resort."/>
            <Caption small>Actual Image</Caption>
            <Watermark small/>
          </Card>
          <Card>
            <CardImg fluid={data.resortDay1.childImageSharp.fluid} alt="The Alma Resort."/>
            <Caption small>Actual Image</Caption>
            <Watermark small/>
          </Card>
          <Card>
            <CardImg fluid={data.resortExterior6.childImageSharp.fluid} alt="The Alma Resort."/>
            <Caption small>Actual Image</Caption>
            <Watermark small/>
          </Card>
          <Card>
            <CardImg fluid={data.resortExterior10.childImageSharp.fluid} alt="The Alma Resort."/>
            <Caption small>Actual Image</Caption>
            <Watermark small/>
          </Card>
          {/* <Card>
            <CardImg fluid={data.almaResort1.childImageSharp.fluid}/>
            <Caption small>Artist Rendering</Caption>
            <Watermark small/>
          </Card>
          <Card>
            <CardImg fluid={data.almaResort2.childImageSharp.fluid}/>
            <Caption small>Artist Rendering</Caption>
            <Watermark small/>
          </Card>
          <Card>
            <CardImg fluid={data.almaResort3.childImageSharp.fluid}/>
            <Caption small>Artist Rendering</Caption>
            <Watermark small/>
          </Card>
          <Card>
            <CardImg fluid={data.almaResort4.childImageSharp.fluid}/>
            <Caption small>Artist Rendering</Caption>
            <Watermark small/>
          </Card>
          <Card>
            <CardImg fluid={data.almaResort1.childImageSharp.fluid}/>
            <Caption small>Artist Rendering</Caption>
            <Watermark small/>
          </Card> */}
        </HorizontalScrollContainer>
      </Box>

      <Box center>
        <Space/>
        <AlmaHeader white title={intl.formatMessage({ id: "villas-title" })} />
        <Space/>
        <P>{intl.formatMessage({ id: "villas-intro-paragraph" })}</P>
        <Space/>
        <ButtonContainer>
          <Link to="/villas">
            <Button>{intl.formatMessage({ id: "villas-title" })}</Button>
          </Link> 
        </ButtonContainer>
        <Space/>
      </Box>

      <Box full>
        <HorizontalScrollContainer blue>
          <Card>
            <CardImg fluid={data.resortExterior7.childImageSharp.fluid} alt="The Alma Resort."/>
            <Caption small>Actual Image</Caption>
            <Watermark small/>
          </Card>
          <Card>
            <CardImg fluid={data.villaExterior1.childImageSharp.fluid} alt="The Alma Resort."/>
            <Caption small>Actual Image</Caption>
            <Watermark small/>
          </Card>
          <Card>
            <CardImg fluid={data.villaExterior4.childImageSharp.fluid} alt="The Alma Resort."/>
            <Caption small>Actual Image</Caption>
            <Watermark small/>
          </Card>
          <Card>
            <CardImg fluid={data.villaLivingRoom1.childImageSharp.fluid} alt="The Alma Resort."/>
            <Caption small>Actual Image</Caption>
            <Watermark small/>
          </Card>
          <Card>
            <CardImg fluid={data.villaLivingRoom2.childImageSharp.fluid} alt="The Alma Resort."/>
            <Caption small>Actual Image</Caption>
            <Watermark small/>
          </Card>
          <Card>
            <CardImg fluid={data.villaDining1.childImageSharp.fluid} alt="The Alma Resort."/>
            <Caption small>Actual Image</Caption>
            <Watermark small/>
          </Card>
          <Card>
            <CardImg fluid={data.villaBedroom1.childImageSharp.fluid} alt="The Alma Resort."/>
            <Caption small>Actual Image</Caption>
            <Watermark small/>
          </Card>
          <Card>
            <CardImg fluid={data.villaBathroom1.childImageSharp.fluid} alt="The Alma Resort."/>
            <Caption small>Actual Image</Caption>
            <Watermark small/>
          </Card>
        </HorizontalScrollContainer>
      </Box>

      <Box center>
        <Space/>
        <AlmaHeader white title={intl.formatMessage({ id: "apartments-title" })} />
        <Space/>
        <P>{intl.formatMessage({ id: "apartments-intro-paragraph" })}</P>
        <Space/>
        <ButtonContainer>
          <Link to="/apartments">
            <Button>{intl.formatMessage({ id: "apartments-title" })}</Button>
          </Link> 
        </ButtonContainer>
        <Space/>
      </Box>

      <Box full>
        <HorizontalScrollContainer blue> 
          <Card>
            <CardImg fluid={data.apartmentLivingRoom1.childImageSharp.fluid} alt="Apartment living room."/>
            <Caption small>Artist Rendering</Caption>
            <Watermark small/>
            </Card>
          <Card>
            <CardImg fluid={data.apartmentLivingRoom2.childImageSharp.fluid} alt="Apartment living room."/>
            <Caption small>Artist Rendering</Caption>
            <Watermark small/>
          </Card>
          <Card>
            <CardImg fluid={data.apartmentKitchen.childImageSharp.fluid} alt="Apartment kitchen."/>
            <Caption small>Artist Rendering</Caption>
            <Watermark small/>
          </Card>
          <Card>
            <CardImg fluid={data.apartmentBedroom.childImageSharp.fluid} alt="Apartment Bedroom."/>
            <Caption small>Artist Rendering</Caption>
            <Watermark small/>
          </Card>
          <Card>
            <CardImg fluid={data.apartmentBathroom.childImageSharp.fluid} alt="Apartment bathroom."/>
            <Caption small>Artist Rendering</Caption>
            <Watermark small/>
          </Card>
        </HorizontalScrollContainer>
      </Box>

      <Box center>
        <Space/>
        <AlmaHeader white title={intl.formatMessage({ id: "restaurants-title" })} />
        <Space/>
        <P>{intl.formatMessage({ id: "restaurants-intro-paragraph" })}</P>
        <Space/>
        <ButtonContainer>
          <Link to="/restaurants">
            <Button>{intl.formatMessage({ id: "restaurants-title" })}</Button>
          </Link> 
        </ButtonContainer>
        <Space/>
      </Box>

      <Box full>
        <HorizontalScrollContainer blue>
          <Card>
            <CardImg fluid={data.realRestaurant1.childImageSharp.fluid} alt="The Alma Resort."/>
            <Caption small>Actual Image</Caption>
            <Watermark small/>
          </Card>
          <Card>
            <CardImg fluid={data.allDayDiner1.childImageSharp.fluid} alt="The Alma Resort."/>
            <Caption small>Artist Rendering</Caption>
            <Watermark small/>
          </Card>
          <Card>
            <CardImg fluid={data.beachBar2.childImageSharp.fluid} alt="The Alma Resort."/>
            <Caption small>Artist Rendering</Caption>
            <Watermark small/>
          </Card>
          <Card>
            <CardImg fluid={data.asianRestaurant.childImageSharp.fluid} alt="The Alma Resort."/>
            <Caption small>Artist Rendering</Caption>
            <Watermark small/>
          </Card>
          <Card>
            <CardImg fluid={data.foodCourt1.childImageSharp.fluid} alt="The Alma Resort."/>
            <Caption small>Artist Rendering</Caption>
            <Watermark small/>
          </Card>
          <Card>
            <CardImg fluid={data.italianRestaurant.childImageSharp.fluid} alt="The Alma Resort."/>
            <Caption small>Artist Rendering</Caption>
            <Watermark small/>
          </Card>
          <Card>
            <CardImg fluid={data.pub1.childImageSharp.fluid} alt="The Alma Resort."/>
            <Caption small>Artist Rendering</Caption>
            <Watermark small/>
          </Card>
        </HorizontalScrollContainer>
      </Box>

      <Box center>
        <Space/>
        <AlmaHeader white title={intl.formatMessage({ id: "amenities-title" })} />
        <Space/>
        <P>{intl.formatMessage({ id: "amenities-intro-paragraph" })}</P>
        <Space/>
        <ButtonContainer>
          <Link to="/amenities">
            <Button>{intl.formatMessage({ id: "amenities-title" })}</Button>
          </Link> 
        </ButtonContainer>
        <Space/>
      </Box>

      <Box full>
        <HorizontalScrollContainer blue>
          <Card>
            <CardImg fluid={data.waterpark4.childImageSharp.fluid} alt="The Alma Resort."/>
            <Caption small>Artist Rendering</Caption>
            <Watermark small/>
          </Card>
          <Card>
            <CardImg fluid={data.lobbyLounge.childImageSharp.fluid} alt="The Alma Resort."/>
            <Caption small>Artist Rendering</Caption>
            <Watermark small/>
          </Card>
          <Card>
            <CardImg fluid={data.conventionCenter.childImageSharp.fluid} alt="The Alma Resort."/>
            <Caption small>Artist Rendering</Caption>
            <Watermark small/>
          </Card>
          <Card>
            <CardImg fluid={data.ballroom.childImageSharp.fluid} alt="The Alma Resort."/>
            <Caption small>Artist Rendering</Caption>
            <Watermark small/>
          </Card>
          <Card>
            <CardImg fluid={data.spaTreatment.childImageSharp.fluid} alt="The Alma Resort."/>
            <Caption small>Artist Rendering</Caption>
            <Watermark small/>
          </Card>
        </HorizontalScrollContainer>
      </Box>

      <Box center>
        <Space/>
        <AlmaHeader white title={intl.formatMessage({ id: "construction-title" })} />
        <Space/>
        <P>{intl.formatMessage({ id: "construction-intro-paragraph" })}</P>
        <Space/>
        <ButtonContainer>
          <Link to="/construction">
            <Button>{intl.formatMessage({ id: "construction-title" })}</Button>
          </Link> 
        </ButtonContainer>
        <Space/>
      </Box>

      <Box full>
        <HorizontalScrollContainer blue>
        <Card>
            <CardImg fluid={data.sep1.childImageSharp.fluid} alt="The Alma Resort."/>
            <Caption small>Actual Image</Caption>
            <Watermark small/>
          </Card>
          <Card>
            <CardImg fluid={data.sep3.childImageSharp.fluid} alt="The Alma Resort."/>
            <Caption small>Actual Image</Caption>
            <Watermark small/>
          </Card>
          <Card>
            <CardImg fluid={data.sep4.childImageSharp.fluid} alt="The Alma Resort."/>
            <Caption small>Actual Image</Caption>
            <Watermark small/>
          </Card>
          <Card>
            <CardImg fluid={data.sep6.childImageSharp.fluid} alt="The Alma Resort."/>
            <Caption small>Actual Image</Caption>
            <Watermark small/>
          </Card>
          <Card>
            <CardImg fluid={data.aug1.childImageSharp.fluid} alt="The Alma Resort."/>
            <Caption small>Actual Image</Caption>
            <Watermark small/>
          </Card>
          <Card>
            <CardImg fluid={data.aug2.childImageSharp.fluid} alt="The Alma Resort."/>
            <Caption small>Actual Image</Caption>
            <Watermark small/>
          </Card>
          <Card>
            <CardImg fluid={data.aug3.childImageSharp.fluid} alt="The Alma Resort."/>
            <Caption small>Actual Image</Caption>
            <Watermark small/>
          </Card>
          <Card>
            <CardImg fluid={data.aug4.childImageSharp.fluid} alt="The Alma Resort."/>
            <Caption small>Actual Image</Caption>
            <Watermark small/>
          </Card>
          <Card>
            <CardImg fluid={data.aug5.childImageSharp.fluid} alt="The Alma Resort."/>
            <Caption small>Actual Image</Caption>
            <Watermark small/>
          </Card>
        </HorizontalScrollContainer>
      </Box>

      <Box center>
        <Space/>
        <AlmaHeader blue title={intl.formatMessage({ id: "vacations-title" })} />
        <Space/>
        <P>{intl.formatMessage({ id: "vacations-intro-paragraph" })}</P>
        <Space/>
        <ButtonContainer>
          <Link to="/vacations">
            <Button>{intl.formatMessage({ id: "vacations-title" })}</Button>
          </Link> 
        </ButtonContainer>
        <Space/>
      </Box>

      <Box full>
        <RCIMap fluid={data.rciMap.childImageSharp.fluid}/>
      </Box>
      
      <Box center>
        <Space/>
        <AlmaHeader blue title={intl.formatMessage({ id: "alma-title" })} />
        <Space/>
        <P>{intl.formatMessage({ id: "alma-intro-paragraph" })}</P>
        <Space/>
        <ButtonContainer>
          <Link to="/vacations">
            <Button>{intl.formatMessage({ id: "alma-title" })}</Button>
          </Link> 
        </ButtonContainer>
        <Space/>
      </Box>

      {/* <Box center>
        <AlmaHeader white title='News' />
        <P>All the latest news that's fit to print about the worlds newest and brightest hotspot in the Vietnam travel scene</P>
        <P>{data.articles.totalCount} Posts</P>
      </Box> */}
    
      {/* <Box full>
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
      </Box> */}

      {/* <Box full>
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
      </Box> */}
        
      <Box center>
        <AlmaHeader blue title='Instagram' />
        <Space/>
        <P>{intl.formatMessage({ id: "instagram-paragraph" })}</P>
      </Box>

      <Box full>
        <InstaGrid>
          {data.allInstaNode.edges.map(({ node }) => (
            <InstaPost key={node.id}>
              <InstaSpacer>
                <InstaScrim />
                <InstaImage fluid={node.localFile.childImageSharp.fluid} alt="An Alma Instagram image."/>
              </InstaSpacer>
            </InstaPost>
          ))}
        </InstaGrid>
        <Space/>
      </Box>

      <Footer/>

    </Content>
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
    resortOverview: file(relativePath: { eq: "resort/resort-overview-render-1-16x10.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 3456) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    resortBirdseye: file(relativePath: { eq: "resort/birdseye-1x1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    resortDay1: file(relativePath: { eq: "resort/resort-day-1-1x1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    almaResort1: file(relativePath: { eq: "resort/resort-render-1-4x3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2880) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    almaResort2: file(relativePath: { eq: "resort/resort-render-2-4x3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2880) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    almaResort3: file(relativePath: { eq: "resort/resort-render-3-4x3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2880) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    almaResort4: file(relativePath: { eq: "resort/resort-render-4-4x3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2880) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    almaResort5: file(relativePath: { eq: "resort/resort-overview-render-2-4x3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2880) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    resortDrone1: file(relativePath: { eq: "resort/resort-drone-1-1x1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    resortDrone2: file(relativePath: { eq: "resort/resort-drone-2-1x1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    resortDrone3: file(relativePath: { eq: "resort/resort-drone-3-1x1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    resortDrone4: file(relativePath: { eq: "resort/resort-drone-4-1x1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    resortDrone5: file(relativePath: { eq: "resort/resort-drone-5-1x1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    resortExterior6: file(relativePath: { eq: "resort/resort-exterior-6-1x1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    resortExterior7: file(relativePath: { eq: "resort/resort-exterior-7-1x1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    resortExterior8: file(relativePath: { eq: "resort/resort-exterior-8-1x1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    resortExterior9: file(relativePath: { eq: "resort/resort-exterior-9-1x1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    resortExterior10: file(relativePath: { eq: "resort/resort-exterior-10-1x1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    apartmentLivingRoom1: file(relativePath: { eq: "apartments/apartment-living-room-1-render-1x1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2160) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    apartmentLivingRoom2: file(relativePath: { eq: "apartments/apartment-living-room-2-render-1x1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2160) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    apartmentKitchen: file(relativePath: { eq: "apartments/apartment-kitchen-render-1x1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2160) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    apartmentBedroom: file(relativePath: { eq: "apartments/apartment-bedroom-render-1x1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2160) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    apartmentBathroom: file(relativePath: { eq: "apartments/apartment-bathroom-render-1x1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2160) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    villaExterior1: file(relativePath: { eq: "villas/villa-exterior-1-1x1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    villaExterior4: file(relativePath: { eq: "villas/villa-exterior-4-1x1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    villaLivingRoom1: file(relativePath: { eq: "villas/villa-living-room-1-1x1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    villaLivingRoom2: file(relativePath: { eq: "villas/villa-living-room-3-1x1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    villaDining1: file(relativePath: { eq: "villas/villa-dining-1-1x1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    villaBedroom1: file(relativePath: { eq: "villas/villa-bedroom-1-1x1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    villaBathroom1: file(relativePath: { eq: "villas/villa-bathroom-1-1x1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    realRestaurant1: file(relativePath: { eq: "restaurants/restaurant-1-1x1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1798) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    allDayDiner1: file(relativePath: { eq: "restaurants/all-day-diner-1-render-1x1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1798) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    asianRestaurant: file(relativePath: { eq: "restaurants/asian-restaurant-render-1x1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1796) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    beachBar2: file(relativePath: { eq: "restaurants/beach-bar-2-render-1x1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1790) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    foodCourt1: file(relativePath: { eq: "restaurants/food-court-1-render-1x1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1796) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    italianRestaurant: file(relativePath: { eq: "restaurants/italian-restaurant-render-1x1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1789) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    pub1: file(relativePath: { eq: "restaurants/pub-1-render-1x1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1794) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    receptionLobby: file(relativePath: { eq: "amenities/reception-lobby-render-1x1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    lobbyLounge: file(relativePath: { eq: "amenities/lobby-lounge-render-1x1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    conventionCenter: file(relativePath: { eq: "amenities/convention-center-render-1x1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    ballroom: file(relativePath: { eq: "amenities/ballroom-render-1x1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    spaTreatment: file(relativePath: { eq: "amenities/spa-treatment-render-1x1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    june1: file(relativePath: { eq: "construction/june-1-4x3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2880) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    june2: file(relativePath: { eq: "construction/june-2-4x3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2880) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    june3: file(relativePath: { eq: "construction/june-3-4x3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2880) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    june4: file(relativePath: { eq: "construction/june-4-4x3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2880) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    june5: file(relativePath: { eq: "construction/june-5-4x3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2880) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    june6: file(relativePath: { eq: "construction/june-6-4x3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2880) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    june7: file(relativePath: { eq: "construction/june-7-4x3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2880) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    june14: file(relativePath: { eq: "construction/june-14-4x3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2880) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    aug1: file(relativePath: { eq: "construction/august-1-1x1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2880) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    aug2: file(relativePath: { eq: "construction/august-2-1x1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2880) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    aug3: file(relativePath: { eq: "construction/august-3-1x1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2880) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    aug4: file(relativePath: { eq: "construction/august-4-1x1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2880) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    aug5: file(relativePath: { eq: "construction/august-5-1x1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2880) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }

    aug6: file(relativePath: { eq: "construction/august-6-1x1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2880) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    aug7: file(relativePath: { eq: "construction/august-7-1x1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2880) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    sep1: file(relativePath: { eq: "construction/september-1-1x1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2880) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    sep3: file(relativePath: { eq: "construction/september-3-1x1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2880) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    sep4: file(relativePath: { eq: "construction/september-4-1x1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2880) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    sep6: file(relativePath: { eq: "construction/september-6-1x1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2880) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    waterpark4: file(relativePath: { eq: "amenities/waterpark-4-1x1.jpg" }) {
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
    oct1: file(relativePath: { eq: "construction/october-2019-1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2880) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    oct2: file(relativePath: { eq: "construction/october-2019-2.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2880) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    oct3: file(relativePath: { eq: "construction/october-2019-3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2880) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    oct4: file(relativePath: { eq: "construction/october-2019-4.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2880) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    oct5: file(relativePath: { eq: "construction/october-2019-5.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2880) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    oct6: file(relativePath: { eq: "construction/october-2019-6.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2880) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    oct7: file(relativePath: { eq: "construction/october-2019-7.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2880) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    oct8: file(relativePath: { eq: "construction/october-2019-8.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2880) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    oct9: file(relativePath: { eq: "construction/october-2019-9.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2880) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    oct10: file(relativePath: { eq: "construction/october-2019-10.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2880) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    oct11: file(relativePath: { eq: "construction/october-2019-11.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2880) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    oct12: file(relativePath: { eq: "construction/october-2019-12.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2880) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    oct13: file(relativePath: { eq: "construction/october-2019-13.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2880) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    oct14: file(relativePath: { eq: "construction/october-2019-14.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2880) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    oct15: file(relativePath: { eq: "construction/october-2019-15.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2880) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    oct16: file(relativePath: { eq: "construction/october-2019-16.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2880) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    oct17: file(relativePath: { eq: "construction/october-2019-17.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2880) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    oct18: file(relativePath: { eq: "construction/october-2019-18.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2880) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    oct19: file(relativePath: { eq: "construction/october-2019-19.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2880) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
  
`

export default injectIntl(Index)