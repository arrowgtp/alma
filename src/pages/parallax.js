import React, { useRef, useEffect } from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'

import lax from 'lax.js'

function useLax() {
  const requestRef = useRef();

  useEffect(() => {
    lax.setup() // initialization
    const element = document.querySelector('#scroller') // Find your scrollable element

    const updateLax = () => {
      lax.update(element.scrollTop) // pass in the elements scrolled position
      requestRef.current = window.requestAnimationFrame(updateLax);
    };

    requestRef.current = window.requestAnimationFrame(updateLax);

    return () => {
      if (requestRef.current) {
        window.cancelAnimationFrame(requestRef.current);
      }
    };
  }, []);
}

const Scroller = styled.div`
  margin: 0;
  padding: 0;
  width: 100vw;
  height: 80vh;
  overflow-x: none;
  overflow-y: scroll;
  border: 1px solid black;
  background: white;

  @media(orientation: landscape) {
    width: 80vw;
    height: 80vh;
  }
`

const Section = styled.div`
  margin: 0;
  padding: 0;
  width: 100%;
  height: 120vh;
  border: 1px solid red;
  position: relative;
  display: grid;
  grid-template-rows: repeat(8, 1fr);
  grid-template-columns: repeat(12, 1fr);
`

const ImageOne = styled(Img)`
  display: block;
  width: 60vw;
  height: auto;
  border: 1px solid red;
  grid-row: 1 / 9;
  grid-column: 1 / 12;
  align-self: start;
  justify-self: start;
  z-index: 0;
`

const ImageTwo = styled(Img)`
  display: block;
  width: 50vw;
  height: auto;
  border: 1px solid red;
  grid-row: 1 / 9;
  grid-column: 1 / 13 ;
  align-self: end;
  justify-self: end;
  z-index: 1;
`

const Text = styled.p`
  font-size: 48px;
  width: 60vw;
  height: auto;
  position: absolute;
  bottom: 0;
  right: 0;
  border: 1px solid red;
  z-index: 2;
`

const Parallax = ({ data }) => {

  useLax()

  return (
    <Scroller id='scroller'>
      <Section>
        <ImageOne
          className="lax"
          data-lax-preset="lazy-1000"
          fluid={data.resortOverview.childImageSharp.fluid}
          alt="The Alma Resort."
        />
        <Text className="lax" data-lax-preset="lazy-100">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </Text>
        <ImageTwo
          className="lax"
          data-lax-preset="speedy-30"
          fluid={data.resortBirdseye.childImageSharp.fluid}
          alt="The Alma Resort."
        />
      </Section>
      <Section>
        <Text className="lax" data-lax-preset="lazy-200">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </Text>
        <Text className="lax" data-lax-preset="lazy-100">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </Text>
      </Section>
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

export default Parallax