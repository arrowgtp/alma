import React from 'react'
import styled from 'styled-components'
// import { motion } from 'framer-motion'
import { graphql } from 'gatsby'
import { injectIntl } from 'gatsby-plugin-intl'
import Img from 'gatsby-image'
// import SEO from '../components/seo'

import Content from '../components/layout/Content'
import { Button } from '../components/visual/Button'

import almaPattern1 from '../images/alma/alma-bg-pattern-1.svg'

const SmallSpace = styled.div`
  height: calc(12px + (24 - 12) * ((100vw - 300px) / (1600 - 300)));
`

const Space = styled.div`
  height: calc(24px + (48 - 28) * ((100vw - 300px) / (1600 - 300)));
`

const PromoVacation = styled.div`
  grid-column: 1 / 4;
  margin: 0;
  padding: 0;
  height: 90vh;
  height: calc(var(--vh, 1vh) * 90);
  display: grid;
  grid-template-rows: repeat(13, 1fr);
  grid-template-columns: repeat(8, 1fr);

  @media(orientation: landscape) {
    height: 100vh;
    grid-template-rows: repeat(12, 1fr);
    grid-template-columns: repeat(8, 1fr);
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
  grid-row: 1 / 14;
  grid-column: 1 / 9;
  object-fit: cover;
  z-index: 1;
  mask-image: linear-gradient(
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
    hsl(0, 0%, 100%) 100%)
  ;

  @media (orientation: landscape) {
    mask-image: none;
    grid-row: 1 / 10;
  }
`

const PromoVacationText = styled.div`
  margin: 0;
  padding: 1rem;
  grid-row: 1 / 10;
  grid-column: 2 / 8;
  background: rgba(0, 0, 0, 0.75);
  align-self: center;
  justify-self: center;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 32px;

  @media (orientation: landscape) {
    grid-row: 1 / 9;
    grid-column: 3 / 7;
    box-shadow: 0px 0px 32px rgba(255,255,255,0.5);
    min-width: 20rem;
  }
`

const PromoTitle = styled.h1`
  margin: 0;
  padding: 0;
  line-height: 1.25;
  /* color: #2D668E; */
  color: white;
  font-size: 32px;
  font-size: calc(28px + (48 - 28) * ((100vw - 300px) / (1600 - 300)));
  text-align: center;
  font-family: 'Quicksand', sans-serif;
  text-transform: uppercase;

  @media(orientation: landscape) {
    font-size: calc(24px + (36 - 24) * ((100vw - 300px) / (1600 - 300)));
    margin: 0;
    padding: 0;
  }
`

const PromoInfo = styled.h2`
  color: #BE854D;
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
    font-size: calc(8px + (18 - 8) * ((100vw - 300px) / (1600 - 300)));
  }
`

const PromoFine = styled.p`
  /* color: black; */
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

const PromoVacationWinners = styled.div`
  margin: 0;
  padding: 0;
  grid-row: 11 / 13;
  grid-column: 1 / 9;
  background: rgba(0, 0, 0, 0.5);
  z-index: 2;
  padding: 0;
  min-width: 0;
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  background-color: hsla(188, 70%, 43%, 1);
  background-image: url(${almaPattern1});
  background-repeat: repeat;
  background-size: 96px;
  box-shadow: inset 0px 0px 32px rgba(0, 0, 0, 0.5);
  border-top: 4px solid white;

  ::-webkit-scrollbar {
    display: none;
  }

  ::after {
    content:'';
    flex: 0 0 2rem;
  }

  @media (orientation: landscape) {
    grid-row: 11 / 13;
    grid-column: 1 / 9;
    width: 100%;
    height: 100%;
    border-top: 8px solid white;
  }
`

const Title = styled.h1`
  font-family: 'Merienda One', sans-serif;
  line-height: 1;
  color: blue;
  grid-row: 10 / 11;
  grid-column: 1 / 9;
  align-self: end;
  color: #2D668E;
  justify-self: center;
  font-size: 16px;
  opacity: 1;

  @media (orientation: landscape) {
    font-size: 24px;
  }
`

const Winner = styled.figure`
  position: relative;
  flex: 0 0 auto;
  margin: 0;
  padding: 0;
  width: 12rem;
  height: auto;
  line-height: 1;
  white-space: pre-wrap;
  display: flex;
  align-items: center;
  justify-content: center;
  /* border: 1px solid red; */

  :first-child {
    /* margin-left: 1rem; */
  }

  :last-child {
    /* margin-right: -1rem; */
  }

  @media (orientation: landscape) {
    width: 30rem;
    width: calc(200px + (400 - 200) * ((100vw - 300px) / (1600 - 300)));
  }
`

const Picture = styled(Img)`
  margin: 0 1rem 0 0;
  padding: 0;
  width: calc(48px + (128 - 48) * ((100vw - 300px) / (1600 - 300)));
  height: calc(48px + (128 - 48) * ((100vw - 300px) / (1600 - 300)));
  border-radius: 512px;
  border: 4px solid white;
  z-index: 1;
  box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.5);

  @media (orientation: landscape) {
    margin: 0 2rem 0 0;
    width: 10rem;
    height: 10rem;
    border: 4px solid white;
    width: calc(64px + (96 - 64) * ((100vw - 300px) / (1600 - 300)));
    height: calc(64px + (96 - 64) * ((100vw - 300px) / (1600 - 300)));
  }
`

const Name = styled.p`
  font-size: 16px;
  color: white;
  line-height: 1.25;
  text-shadow: 0px 0px 16px rgba(0, 0, 0, 0.5);
  font-family: 'Quicksand', sans-serif;

  @media (orientation: landscape) {
    font-size: calc(16px + (32 - 16) * ((100vw - 300px) / (1600 - 300)));
  }
`

const Form = styled.form`
  grid-column: 1 / 9;
  grid-row: 2 / 3;
  margin: -2rem 0 0 0;
  padding: 0;
  width: 100vw;
  height: 100vh;
  height: calc(var(--vh, 1vh) * 100);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  /* background: rgba(255,255,255,1); */
  border-radius: 0px;
  z-index: 100;
  opacity: 1;

  @media (orientation: landscape) {
    /* position: fixed;
    top: 12.5vh;
    right: 2vw;
    bottom: 12.5vh; */
    grid-column: 6 / 9;
    grid-row: 1 / 9;
    width: calc(200px + (400 - 200) * ((100vw - 300px) / (1600 - 300)));
    height: 100%;
    justify-content: center;
    align-self: center;
    /* background: rgba(255,255,255,1);
    box-shadow: 0px 0px 32px rgba(0, 0, 0, 0.25);
    border-radius: 16px; */
    /* height: 75vh;
    width: 20rem; */
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
  background: hsla(255,100%,100%,1);
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

const Select = styled.select`
  width: 80vw;
  font-size: 16px;

  > option {
    height: 64px;
  }

  @media (orientation: landscape) {
    width: 14rem;
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
  font-size: 9px;
  line-height: 1.25;
  margin: 0;
  padding: 2rem 3rem;
  font-family: 'Open Sans', sans-serif;
`

const Holiday = ({ data, intl }) => {
  return (
    <Content>
      <PromoVacation>
        <PromoVacationText>
          <Space/>
          <PromoTitle>{intl.formatMessage({ id: "promo-holiday-title" })}</PromoTitle>
          <Space/>
          <PromoInfo>{intl.formatMessage({ id: "promo-holiday-info" })}</PromoInfo>
          <Space/>
          <PromoFine>{intl.formatMessage({ id: "promo-holiday-fine-1" })}</PromoFine>
          <PromoFine>{intl.formatMessage({ id: "promo-holiday-fine-2" })}</PromoFine>
          <PromoFine>{intl.formatMessage({ id: "promo-holiday-fine-3" })}</PromoFine>
          <Space/>
        </PromoVacationText>
        <Title>Winners!</Title>
        <PromoVacationWinners>
          <Winner>
            <Picture fluid={data.decWinner1.childImageSharp.fluid} alt="The Alma Resort."/>
            <Name>Iris<br/>Betzold</Name>
          </Winner>
          <Winner>
            <Picture fluid={data.decWinner2.childImageSharp.fluid} alt="The Alma Resort."/>
            <Name>Julissa<br/>Macchione</Name>
          </Winner>
        </PromoVacationWinners>
        <PromoVacationImage fluid={data.holidayPromo.childImageSharp.fluid} />
      </PromoVacation>
      <Form
        name="alma-form"
        method="post"
        action="/success"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
      >
        <input type="hidden" name="bot-field" />
        <input type="hidden" name="form-name" value="alma-form"/>
        <Label>{intl.formatMessage({ id: "promo-name" })}<Input name="name" type="text" required/></Label>
        <Label>{intl.formatMessage({ id: "promo-number" })}<Input name="phone" type="tel" required/></Label>
        <Label>Zip Code<Input name="zipcode" type="tel" required/></Label> 
        <Label>{intl.formatMessage({ id: "promo-email" })}<Input name="email" type="email" required/></Label>
        <Label>How did you hear about us?
          <SmallSpace/>
          <Select name="source" required>
            <option value="">- Please select an option -</option>
            <option value="hot-hui">Hot Hui Game</option>
            <option value="online">Online</option>
            <option value="tv">TV</option>
            <option value="newspaper-magazine">Newspaper / Magazine</option>
            <option value="event-show">Event / Show</option>
            <option value="direct-mail">Direct mail</option>
            <option value="billboard">Billboard</option>
            <option value="radio">Radio</option>
          </Select>
        </Label>
        <SmallSpace/>
        <SubmitButton
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          type="submit"
        >
        {intl.formatMessage({ id: "promo-submit" })}
        </SubmitButton>
        <Disclaimer> By entering this drawing, you declare that you are between the ages of 28 and 72 years old, and you agree to receive information and promotional offers about the Alma Resort via calls, text or email. You can unsubscribe at any time. This advertising material is being used for the purpose of soliciting the sale of timeshare interests. A comparable substitute will be offered if your selection is not available. Only one entry per household.</Disclaimer>
      </Form>
    </Content>
  )
}

export const query = graphql`
  query {
    holidayPromo: file(relativePath: { eq: "promos/holiday-promo.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    decWinner1: file(relativePath: { eq: "promos/dec-winner-1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    decWinner2: file(relativePath: { eq: "promos/dec-winner-2.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

export default injectIntl(Holiday)
