import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled, { css } from 'styled-components'

// import { css } from '@emotion/core'
// import styled from '@emotion/styled'

const Scroller = styled.div`
  perspective: 1px;
  /* perspective-origin: 0 0; */
  margin: 0;
  padding: 0;
  width: 100vw;
  height: 80vh;
  overflow-x: hidden;
  overflow-y: scroll;
  border: 1px solid black;
  background: white;

  @media(orientation: landscape) {
    width: 80vw;
    height: 86vh;
  }
`

const Section = css`
  /* transform-origin: 0 0; */
  margin: 0;
  padding: 0;
  width: 80vw;
  height: 86vh;
  border: 1px solid red;
  /* position: relative; */
  /* display: grid;
  grid-template-rows: repeat(8, 1fr);
  grid-template-columns: repeat(12, 1fr); */
`

const Section1 = styled.div`
  ${Section}
  margin-top: 0;
`

const Section2 = styled.div`
  ${Section}
  margin-top: 86vh;
`

const Wrapper = css`
  /* transform-origin: center; */
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`

const Speed1 = css`
  transform: translateZ(-1px) scale(2);
`

const Speed2 = css`
  transform: translateZ(-2px) scale(3);
`

const Speed3 = css`
  transform: translateZ(-3px) scale(4);
`

const Speed4 = css`
  transform: translateZ(-4px) scale(5);
`

const Speed5 = css`
  transform: translateZ(-5px) scale(6);
`

const Speed6 = css`
  transform: translateZ(-6px) scale(7);
`

const Speed7 = css`
  transform: translateZ(-7px) scale(8);
`

const Speed8 = css`
  transform: translateZ(-8px) scale(9);
`

const Wrapper1 = styled.div`
  ${Wrapper}
  ${Speed1}
`

const Wrapper2 = styled.div`
  ${Wrapper}
  ${Speed2}
`

const Wrapper3 = styled.div`
  ${Wrapper}
  ${Speed3}
`

const Wrapper4 = styled.div`
  ${Wrapper}
  ${Speed4}
`

const Wrapper5 = styled.div`
  ${Wrapper}
  ${Speed5}
`

const Wrapper6 = styled.div`
  ${Wrapper}
  ${Speed6}
`

// const Box = css`
//   margin-left: 250px;
//   display: inline-block;
//   height: 100px;
//   width: 300px;
// `

// const Box1 = styled.div`
//   ${Box}
//   margin-top: 100px;
//   background: red;
// `

// const Box2 = styled.div`
//   ${Box}
//   margin-top: 200px;
//   background: yellow;
// `

// const Box3 = styled.div`
//   ${Box}
//   margin-top: 300px;
//   background: blue;
// `

// const Box4 = styled.div`
//   ${Box}
//   margin-top: 400px;
//   background: green;
// `

// const Box5 = styled.div`
//   ${Box}
//   margin-top: 500px;
//   background: pink;
// `

// const Box6 = styled.div`
//   ${Box}
//   margin-top: 600px;
//   background: purple;
// `

const PageContent = styled.div`
  height: 6000px;
`

const Text = css`
  font-family: 'Quicksand', sans-serif;
  text-transform: uppercase;
  font-size: 64px;
`

const Text1 = styled.p`
  ${Text}
  margin-top: 40vh;
  margin-left: 40vw;
  padding: 1rem;
  width: 32vw;
  z-index: 2;
  background: white;
`

const Text2 = styled.p`
  ${Text}
  margin-top: 80vh;
  margin-left: 40vw;
  padding: 1rem;
  width: 32vw;
  z-index: 2;
  background: white;
`

const Text3 = styled.p`
  ${Text}
  margin-top: 120vh;
  margin-left: 40vw;
  padding: 1rem;
  width: 32vw;
  z-index: 2;
  background: white;
`

const Image1 = styled(Img)`
  margin-top: 20vh;
  margin-left: 8vw;
  width: 24vw;
  height: auto;
  z-index: 0;
`

const Image2 = styled(Img)`
  margin-top: 40vh;
  margin-left: 16vw;
  width: 24vw;
  height: auto;
  z-index: 0;
`

const Image3 = styled(Img)`
  margin-top: 80vh;
  margin-left: 24vw;
  width: 24vw;
  height: auto;
  z-index: 0;
`

const Image4 = styled(Img)`
  margin-top: 120vh;
  margin-left: 32vw;
  width: 24vw;
  height: auto;
  z-index: 0;
`

const ParallaxTwo = ({ data }) => {

  return (
    <Scroller id='scroller'>
      {/* <Section1>
        <Wrapper1>
          <Box1></Box1>
        </Wrapper1>
        <Wrapper2>
          <Box2></Box2>
        </Wrapper2>
        <Wrapper3>
          <Box3></Box3>
        </Wrapper3>
        <Wrapper4>
          <Box4></Box4>
        </Wrapper4>
        <Wrapper5>
          <Box5></Box5>
        </Wrapper5>
        <Wrapper6>
          <Box6></Box6>
        </Wrapper6>
        
      </Section1> */}
      <Section1>  
        <Wrapper4>
          <Image1
            fluid={data.resortOverview.childImageSharp.fluid}
            alt="The Alma Resort."
          />
        </Wrapper4>
        <Wrapper6>
          <Text1>Happiness</Text1>
        </Wrapper6>
        <Wrapper3>
          <Image2
            fluid={data.almaResort1.childImageSharp.fluid}
            alt="The Alma Resort."
          />
        </Wrapper3>
        <Wrapper5>
          <Text2>Harmony</Text2>
        </Wrapper5>
        <Wrapper2>
          <Image3
            fluid={data.villaLivingRoom1.childImageSharp.fluid}
            alt="The Alma Resort."
          />
        </Wrapper2>
        <Wrapper4>
          <Text3>Home</Text3>
        </Wrapper4>
        <Wrapper1>
          <Image4
            fluid={data.villaBedroom1.childImageSharp.fluid}
            alt="The Alma Resort."
          />
        </Wrapper1>
      </Section1>
      <PageContent/>
    </Scroller>
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
    resortBirdseye: file(relativePath: { eq: "resort/birdseye-1x1.jpg" }) {
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
    resortDrone1: file(relativePath: { eq: "resort/resort-drone-1-1x1.jpg" }) {
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
  }
`

export default ParallaxTwo