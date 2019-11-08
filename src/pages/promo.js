import React, { useState, useEffect, useRef, Fragment } from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { graphql } from 'gatsby'
import { Link, injectIntl } from 'gatsby-plugin-intl'
import Img from 'gatsby-image'
import SEO from '../components/seo'

// import 'react-phone-number-input/style.css'
// import PhoneInput from 'react-phone-number-input'

import Content from '../components/layout/Content'
import { Button } from '../components/visual/Button'
import { Space, P } from '../components/visual/Typography'

// import lifestyleImage from '../images/lifestyle/lifestyle-1.jpg'
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

// const Content = styled.div`
//   margin: 0;
//   padding: 0;
//   width: 100vw;
//   height: 90vh;
//   height: calc(var(--vh, 1vh) * 90);
//   display: grid;
//   grid-template-columns: repeat(8, 1fr);
//   grid-template-rows: calc(var(--vh, 1vh) * 90) calc(var(--vh, 1vh) * 90);

// `

// const PromoBox = styled.div`
//   grid-column: 1/9;
//   grid-row: 1 / 2;
//   border: 1px solid red;
//   margin: 0;
//   padding: 0;
//   width: 100vw;
//   height: 90vh;
//   height: calc(var(--vh, 1vh) * 90);
//   display: grid;
//   grid-template-rows: repeat(8, 1fr);
//   grid-template-columns: repeat(8, 1fr);

//   @media (orientation: landscape) {
//     width: 80vw;
//     height: 100vh;
//     display: grid;
//     grid-template-rows: repeat(8, 1fr);
//     grid-template-columns: repeat(8, 1fr);
//   } 
// `

// const Message = styled(P)`
//   grid-column: 1 / 4;
//   margin: 0 1rem 0 1rem;
//   padding: 1rem;
//   align-self: stretch;
//   justify-self: stretch;
//   color: black;
//   font-family: 'Open Sans', sans-serif;
//   font-size: calc(18px + (32 - 18) * ((100vw - 300px) / (1600 - 300)));
//   line-height: 1.5;
//   text-align: center;
// `

const PromoVacation = styled.div`
  grid-column: 1 / 4;
  margin: 0;
  padding: 0;
  height: 90vh;
  height: calc(var(--vh, 1vh) * 90);
  display: grid;
  grid-template-rows: repeat(8, 1fr);
  grid-template-columns: repeat(8, 1fr);

  @media(orientation: landscape) {
    height: 100vh;
  }
`

// const NarrowPromoVacationImage = styled(Img)`
//   grid-row: 1 / 9;
//   grid-column: 1 / 9;
//   object-fit: cover;
//   z-index: 1;
//   border-radius: 32px;

//   @media(orientation: landscape) {
//     display: none;
//   }
// `

// const WidePromoVacationImage = styled(Img)`
//   display: none;

//   @media(orientation: landscape) {
//     grid-row: 1 / 9;
//     grid-column: 1 / 9;
//     object-fit: cover;
//     z-index: 1;
//     border-radius: 32px;
//   }
// `

const PromoVacationImage = styled(Img)`
  margin: 0;
  padding: 0;
  grid-row: 1 / 9;
  grid-column: 1 / 9;
  object-fit: cover;
  z-index: 1;
`

const PromoVacationText = styled.div`
  margin: 0;
  padding: 1rem;
  grid-row: 1 / 9;
  grid-column: 1 / 9;
  background: rgba(0, 0, 0, 0.5);
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (orientation: landscape) {
    grid-row: 2 / 8;
    grid-column: 2 / 6;
    box-shadow: 0px 0px 32px rgba(255,255,255,0.5);
    border-radius: 32px;
  }
`

const PromoTitle = styled.h1`
  margin: 0;
  padding: 0;
  line-height: 1.5;
  color: white;
  font-size: 32px;
  font-size: calc(24px + (48 - 24) * ((100vw - 300px) / (1600 - 300)));
  text-align: center;
  font-family: 'Open Sans', sans-serif;

  @media(orientation: landscape) {
    font-size: calc(24px + (36 - 24) * ((100vw - 300px) / (1600 - 300)));
    margin: 0;
    padding: 0;
  }
`

const PromoInfo = styled.h2`
  color: white;
  margin: 0;
  padding: 0;
  font-size: 24px;
  font-size: calc(12px + (20 - 12) * ((100vw - 300px) / (1600 - 300)));
  line-height: 1.5;
  text-align: center;
  font-family: 'Open Sans', sans-serif;

  @media(orientation: landscape) {
    margin: 0;
    padding: 0;
    font-size: calc(12px + (20 - 12) * ((100vw - 300px) / (1600 - 300)));
  }
`

const PromoFine = styled.p`
  color: white;
  margin: 0;
  padding: 0;
  font-size: calc(8px + (16 - 8) * ((100vw - 300px) / (1600 - 300)));
  line-height: 1.5;
  text-align: center;
  font-family: 'Open Sans', sans-serif;

  @media(orientation: landscape) {
    margin: 0;
    padding: 0;
    font-size: calc(8px + (14 - 8) * ((100vw - 300px) / (1600 - 300)));
  }
`

const PromoDetails = styled.div`
  display: flex;
  flex-direction: column-reverse;
  flex-wrap: no-wrap;
  align-items: space-between;
  justify-content: center;
  /* border: 1px solid red; */

  
  @media (orientation: landscape) {
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

  @media (orientation: landscape)  {
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

  @media (orientation: landscape) {
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
  font-size: 12px;
  line-height: 1.25;
  grid-row: 1 / 2;
  grid-column: 1 / 2;
  z-index: 2;
  text-align: center;
  transform: rotate(-16deg);
  font-family: 'Open Sans', sans-serif;

  @media (orientation: landscape) {
    font-size: 16px;
  }
`

const PromoStarburst = styled.img`
  width: 6rem;
  height: auto;
  grid-row: 1 / 2;
  grid-column: 1 / 2;
  z-index: 1;

  @media(orientation: landscape) {
    width: 8rem;
  }
`

const Form = styled.form`
  grid-column: 1 / 9;
  grid-row: 2 / 3;
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

  @media (orientation: landscape) {
    position: fixed;
    top: 12.5vh;
    right: 2vw;
    bottom: 12.5vh;
    background: rgba(255,255,255,1);
    border-radius: 16px;
    height: 75vh;
    width: 20rem;
  }
`

const Label = styled.label`
  font-size: calc(16px + (24 - 16) * ((100vw - 300px) / (1600 - 300)));
  display: block;
  margin: 0.25rem 0;
  padding: 0;

  @media (orientation: landscape) {
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
  
  @media (orientation: landscape) {
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

  @media (orientation: landscape) {
    box-shadow: none;
  }

  :hover {
  }

  :active {
  }

  :focus {
  }
`

const Disclaimer = styled.p`
  font-size: 8px;
  line-height: 1.25;
  margin: 0;
  padding: 2rem 3rem;
  font-family: 'Open Sans', sans-serif;
`

const PromoDisclaimer = styled(Disclaimer)`
  /* grid-row:  8 / 9;
  grid-column: 1 / 9;
  z-index: 5; */
  color: white;
  /* align-self: end;
  justify-self: center; */
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
      <PromoVacation>
        {/* <Message>{intl.formatMessage({ id: "promo-subtitle" })}</Message> */}
        <PromoVacationText>
          <PromoTitle>Win an Exclusive<br/>VIP Trip<br/>to Vietnam</PromoTitle>
          <Space/>
          <PromoInfo>Airfare for 4 +<br/>7 Nights at<br/>the Alma Resort</PromoInfo>
          <Space/>
          <PromoInfo>Winner will be chosen by<br/>April 20, 2020</PromoInfo>
          <Space/>
          <PromoFine>No purchase required</PromoFine>
          <PromoFine>Current offer good only<br/>for Southern California residents</PromoFine>
          <PromoFine>For more information or general questions,<br/>email us at travel@alma.vacations</PromoFine>
          {/* <PromoDetails>
            <PromoBang>
              <PromoStarburst src={starburst}/>
              <PromoAmount>$10,000<br/>Value!</PromoAmount>
            </PromoBang>
          </PromoDetails> */}
        </PromoVacationText>
        <PromoVacationImage fluid={data.promoVietnam.childImageSharp.fluid} />
      </PromoVacation>
        {/* <Message>{intl.formatMessage({ id: "promo-subtitle" })}</Message>
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
              
              </PromoItems>
            </PromoDetails>
            <PromoDisclaimer>{intl.formatMessage({ id: "promo-disclaimer-1" })}</PromoDisclaimer>
          </PromoVacationText>
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
              </PromoItems>
            </PromoDetails>
            <PromoDisclaimer>{intl.formatMessage({ id: "promo-disclaimer-1" })}</PromoDisclaimer>
          </PromoVacationText>
          <PromoVacationImage fluid={data.promoCruise.childImageSharp.fluid} />
        </PromoVacation> */}
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
        {/* <PhoneInput
          placeholder="Enter phone number"
          value={ this.state.value }
          onChange={ value => this.setState({ value }) } /> */}
        <Label>Zip Code<Input name="zip" type="text"/></Label>
        <SubmitButton
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          type="submit"
        >
        Enter Now!
        </SubmitButton>
        <Disclaimer>{intl.formatMessage({ id: "promo-disclaimer-vietnam-trip" })}</Disclaimer>
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
    promoVietnam: file(relativePath: { eq: "promos/promo-vietnam.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2048) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

export default injectIntl(Promo)