import React, { useState, useEffect, useRef, Fragment } from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { graphql } from 'gatsby'
import { Link, injectIntl } from 'gatsby-plugin-intl'
import Img from 'gatsby-image'
import SEO from '../components/seo'

import Content from '../components/layout/Content'
import { Button } from '../components/visual/Button'
import { Space, P } from '../components/visual/Typography'

import lifestyleImage from '../images/lifestyle/lifestyle-1.jpg'
import starburst from '../images/promos/promo-starburst.svg'

// const AnimatedCard = styled(motion.div)`
//   opacity: 0;
//   grid-column: 1 / 4;
//   margin: 0;
//   padding: 0;
//   /* height: 90vh; */
//   /* background-image: url(${lifestyleImage});
//   background-position: center;
//   background-repeat: no-repeat;
//   background-size: cover; */
//   height: calc(var(--vh, 1vh) * 90);
//   display: grid;
//   grid-template-rows: repeat(8, 1fr);
//   grid-template-columns: repeat(8, 1fr);

//   @media (min-width: 50rem) {
//     height: 100vh;
//   }
// `

// const PromoContent = styled.div`
//   grid-column: 1 / 4;
//   display: grid;
//   grid-template-columns: repeat(8, 1fr);
//   grid-template-rows: auto;
// `

// const Image = styled.div`
//   background-image: url(${lifestyleImage});
//   background-position: center;
//   background-repeat: no-repeat;
//   background-size: cover;
//   grid-column: 1 / 9;
//   grid-row: 1;
//   margin: 0;
//   border-radius: 0px;
//   mask-image: linear-gradient(
//     to bottom,
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

//   @media (min-width: 50rem) {
//     mask-image: none;
//     grid-column: 1 / 6;
//     grid-row: 2;
//     margin: 2rem;
//     border-radius: 32px;
//   }
// `

const Message = styled(P)`
  grid-column: 1 / 4;
  margin: 0 1rem 0 1rem;
  padding: 1rem;
  align-self: stretch;
  justify-self: stretch;
  color: black;
  font-family: 'Open Sans', sans-serif;
  font-size: calc(18px + (32 - 18) * ((100vw - 300px) / (1600 - 300)));
  line-height: 1.5;
  text-align: center;
`

const PromoVacation = styled.div`
  grid-column: 1 / 4;
  /* grid-row: 1 / 9; */
  height: 80vh;
  margin: 2rem;
  border-radius: 32px;
  margin: 1rem;
  padding: 0;
  display: grid;
  grid-template-rows: repeat(8, 1fr);
  grid-template-columns: repeat(8, 1fr);
  /* border: 1px red solid; */
  @media (min-width: 50rem) {
    grid-column: 1 / 3;
  }
`

const NarrowPromoVacationImage = styled(Img)`
  grid-row: 1 / 9;
  grid-column: 1 / 9;
  object-fit: cover;
  z-index: 1;
  border-radius: 32px;

  @media(min-width: 50rem) {
    display: none;
  }
`

const WidePromoVacationImage = styled(Img)`
  display: none;

  @media(min-width: 50rem) {
    grid-row: 1 / 9;
    grid-column: 1 / 9;
    object-fit: cover;
    z-index: 1;
    border-radius: 32px;
  }
`

const PromoVacationImage = styled(Img)`
  grid-row: 1 / 9;
  grid-column: 1 / 9;
  object-fit: cover;
  z-index: 1;
  border-radius: 32px;
`

const PromoVacationText = styled.div`
  margin: 0;
  padding: 1rem;
  grid-row: 1 / 9;
  grid-column: 1 / 9;
  /* align-self: center; */
  background: rgba(0, 0, 0, 0.5);
  border-radius: 32px;
  z-index: 2;
  /* display: grid;
  grid-template-rows: repeat(3, 1fr);
  grid-template-columns: repeat(8, 1fr); */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (min-width: 50rem) {
    grid-row: 2 / 8;
    grid-column: 2 / 6;
    box-shadow: 0px 0px 32px rgba(255,255,255,0.5);
  }
`

const PromoTitle = styled.h1`
  margin: 0 1rem;
  padding: 2rem;
  grid-column: 1 / 9;
  grid-row: 1 / 2;
  line-height: 1.5;
  color: white;
  font-size: 32px;
  font-size: calc(24px + (32 - 24) * ((100vw - 300px) / (1600 - 300)));
  text-align: center;
  /* border: 1px red solid; */
  font-family: 'Open Sans', sans-serif;
  @media(min-width: 50rem) {
    font-size: calc(24px + (32 - 24) * ((100vw - 300px) / (1600 - 300)));
  }
`

const PromoInfo = styled.h2`
  /* grid-column: 1 / 9;
  grid-row: 2 / 3; */
  color: white;
  margin: 0 2rem;
  padding: 1rem;
  font-size: 24px;
  font-size: calc(16px + (24 - 16) * ((100vw - 300px) / (1600 - 300)));
  line-height: 1.5;
  text-align: center;
  /* border: 1px red solid; */
  font-family: 'Open Sans', sans-serif;
`

const PromoDetails = styled.div`
  display: flex;
  flex-direction: column-reverse;
  flex-wrap: no-wrap;
  align-items: space-between;
  justify-content: center;
  /* border: 1px solid red; */

  
  @media (min-width: 50rem) {
    flex-direction: row;
  }
`

const PromoItems = styled.div`
  grid-column: 4 / 9;
  grid-row: 3 / 4;
  margin: 0 0 1rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* border: 1px solid red; */

  @media (min-width: 50rem)  {
    margin: 0 0 0 1rem;
  }
`

const PromoItinerary = styled.p`
  margin: 0 0 1rem 0;
  color: white;
  font-size: 16px;
  line-height: 1.5;
  margin: 0;
  padding: 0;
  font-family: 'Open Sans', sans-serif;
`

const PromoItem = styled.p`
  color: white;
  font-size: 16px;
  font-size: calc(12px + (16 - 12) * ((100vw - 300px) / (1600 - 300)));
  line-height: 1.5;
  margin: 0;
  padding: 0;
  font-family: 'Open Sans', sans-serif;

  @media (min-width: 50rem) {
    font-size: calc(12px + (16 - 12) * ((100vw - 300px) / (1600 - 300)));
  }
`

const PromoBang = styled.div`
  grid-column: 2 / 4;
  grid-row: 3 / 4;
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr;
  align-items: center;
  justify-items: center;
  /* border: 1px solid red; */
`

const PromoAmount = styled.p`
  color: white;
  font-size: 16px;
  line-height: 1;
  grid-row: 1 / 2;
  grid-column: 1 / 2;
  z-index: 2;
  transform: rotate(-16deg);
  font-family: 'Open Sans', sans-serif;
`

const PromoStarburst = styled.img`
  width: 8rem;
  height: auto;
  grid-row: 1 / 2;
  grid-column: 1 / 2;
  z-index: 1;
`

const Form = styled.form`
  grid-column: 1 / 4;
  margin: 0;
  padding: 0;
  width: 100vw;
  height: 90vh;
  height: calc(var(--vh, 1vh) * 90);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(255,255,255,1);
  border-radius: 0px;
  box-shadow: 0px 0px 32px rgba(0, 0, 0, 0.25);
  z-index: 100;
  opacity: 1;

  @media (min-width: 50rem) {
    position: fixed;
    top: 15vh;
    right: 2vw;
    bottom: 15vh;
    background: rgba(255,255,255,1);
    border-radius: 16px;
    height: 70vh;
    width: 20rem;
  }
`

const Label = styled.label`
  font-size: calc(16px + (24 - 16) * ((100vw - 300px) / (1600 - 300)));
  display: block;
  margin: 0.5rem 0;
  padding: 0;

  @media (min-width: 50rem) {
    font-size: calc(12px + (16 - 12) * ((100vw - 300px) / (1600 - 300)));
    padding: 0.5rem 2rem;
  }
`

const Input = styled.input`
  margin: 0.5rem 0;
  padding: 1.25rem;
  display: block;
  width: 80vw;
  height: 24px;
  font-size: 16px;
  border: 1px solid #006674;
  border: 1px solid hsla(0,0%,0%,0.25);
  background: hsla(255,100%,100%,0.5);
  border-radius: 8px;
  outline: none;
  background: rgba(255,255,255,0.75);
  
  @media (min-width: 50rem) {
    font-size: 18px;
    margin: 0.5rem 0;
    height: 24px;
    padding: 1.25rem;
    width: 14rem;
  }


  :focus {
    box-shadow: 0px 0px 12px rgba(81,167,190,0.5);
  }
`

const SubmitButton = styled(Button)`
  grid-column: 1 / 9;
  grid-row: 6 / 7;
  align-self: center;
  font-size: calc(16px + (24 - 16) * ((100vw - 300px) / (1600 - 300)));
  line-height: 1;
  margin-top: 1rem;
  /* margin-bottom: -64px; */
  padding: 0.75rem 1.25rem;
  padding: 16px 24px;
  vertical-align: baseline;
  color: whtie;
  /* box-shadow: 0px 0px 32px hsla(0,0%,0%,0.5); */
  text-shadow: none;

  @media (min-width: 50rem) {
    box-shadow: none;
  }

  :hover {
  }

  :active {
  }

  :focus {
  }
`

const Promo = ({ data, intl }) => {
  return (
    // <AnimatedCard 
    //   animate={{
    //     opacity: 1,
    //     transition: {
    //       type: "spring",
    //       stiffness: 100,
    //       damping: 10
    //     }
    //   }}
    // >
    <Content>
      <Message>{intl.formatMessage({ id: "promo-subtitle" })}</Message>
      <PromoVacation>
        <PromoVacationText>
          <PromoTitle>{intl.formatMessage({ id: "promo-vegas-title" })}</PromoTitle>
          <PromoInfo>{intl.formatMessage({ id: "promo-vegas-info" })}</PromoInfo>
          <Space/>
          <PromoDetails>
            <PromoBang>
              <PromoStarburst src={starburst}/>
              <PromoAmount>{intl.formatMessage({ id: "promo-vegas-amount" })}</PromoAmount>
            </PromoBang>
            <PromoItems>
              <PromoItem>{intl.formatMessage({ id: "promo-vegas-hotel-1" })}</PromoItem>
              <PromoItem>{intl.formatMessage({ id: "promo-vegas-hotel-2" })}</PromoItem>
              <PromoItem>{intl.formatMessage({ id: "promo-vegas-hotel-3" })}</PromoItem>
              <PromoItem>{intl.formatMessage({ id: "promo-vegas-hotel-4" })}</PromoItem>
              <PromoItem>{intl.formatMessage({ id: "promo-vegas-tickets" })}</PromoItem>
              {/* <Space/> */}
            </PromoItems>
          </PromoDetails>
        </PromoVacationText>
        {/* <NarrowPromoVacationImage fluid={data.promoVegas.childImageSharp.fluid} />
        <WidePromoVacationImage fluid={data.promoVegas.childImageSharp.fluid} /> */}
        <PromoVacationImage fluid={data.promoVegas.childImageSharp.fluid} />
      </PromoVacation>
      <PromoVacation>
        <PromoVacationText>
          <PromoTitle>{intl.formatMessage({ id: "promo-cruise-title" })}</PromoTitle>
          <PromoInfo>{intl.formatMessage({ id: "promo-cruise-info" })}</PromoInfo>
          <PromoItem>{intl.formatMessage({ id: "promo-cruise-itineraries" })}</PromoItem>
          <Space />
          <PromoDetails>
            <PromoBang>
              <PromoStarburst src={starburst}/>
              <PromoAmount>{intl.formatMessage({ id: "promo-cruise-amount" })}</PromoAmount>
            </PromoBang>
            <PromoItems>
              <PromoItem>{intl.formatMessage({ id: "promo-cruise-destination-1" })}</PromoItem>
              <PromoItem>{intl.formatMessage({ id: "promo-cruise-destination-2" })}</PromoItem>
              <PromoItem>{intl.formatMessage({ id: "promo-cruise-destination-3" })}</PromoItem>
              {/* <Space/> */}
            </PromoItems>
          </PromoDetails>
        </PromoVacationText>
        {/* <NarrowPromoVacationImage fluid={data.promoCruise.childImageSharp.fluid} />
        <WidePromoVacationImage fluid={data.promoCruise.childImageSharp.fluid} /> */}
        <PromoVacationImage fluid={data.promoCruise.childImageSharp.fluid} />
      </PromoVacation>
      <Space/>
      <Space/>
      <Space/>
      <Space/>
      <Form
        name="alma-form"
        method="post"
        action="/success"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
      >
        <input type="hidden" name="bot-field" />
        <input type="hidden" name="form-name" value="alma-form"/>
        <Label>Name<Input name="name" type="text"/></Label>   
        <Label>Email Address<Input name="email" type="email"/></Label>
        <Label>Phone Number<Input name="phone" type="tel"/></Label>
        <Label>Zip Code<Input name="zip" type="text"/></Label>
        <SubmitButton
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          type="submit"
        >
        Enter Now!
        </SubmitButton>
      </Form>
    {/* </AnimatedCard> */}
    </Content>
  )
}

export const query = graphql`
  query {
    promoVegas: file(relativePath: { eq: "promos/promo-vegas.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    promoCruise: file(relativePath: { eq: "promos/promo-cruise.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

export default injectIntl(Promo)