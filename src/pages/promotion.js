import React, { useState, useEffect, useRef, Fragment } from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'
import { Link, injectIntl } from 'gatsby-plugin-intl'
import Img from 'gatsby-image'
import SEO from '../components/seo'

import { Button } from '../components/visual/Button'
import { P } from '../components/visual/Typography'

import lifestyleImage from '../images/lifestyle/lifestyle-1.jpg'

const FullContentCard = styled.div`
  grid-column: 1 / 4;
  margin: 0;
  padding: 0;
  /* height: 90vh; */
  /* background-image: url(${lifestyleImage});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover; */
  height: calc(var(--vh, 1vh) * 90);
  display: grid;
  grid-template-rows: repeat(8, 1fr);
  grid-template-columns: repeat(8, 1fr);

  @media (min-width: 50rem) {
    height: 100vh;
  }
`

const Image = styled.div`
  background-image: url(${lifestyleImage});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  grid-column: 1 / 9;
  grid-row: 1 / 9;
  margin: 0;
  border-radius: 0px;
  mask-image: linear-gradient(
    to bottom,
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

  @media (min-width: 50rem) {
    mask-image: none;
    grid-column: 1 / 6;
    grid-row: 1 / 9;
    margin: 2rem;
    border-radius: 32px;
  }
`

const Form = styled.form`
  margin: 0;
  padding: 2rem;
  grid-column: 1 / 9;
  grid-row: 1 / 9;
  /* width: 40vw;
  height: 60vh; */
  background: rgba(255,255,255,0.1);
  display: grid;
  grid-template-rows: repeat(5, 1fr);
  grid-template-columns: repeat(8, 1fr);
  align-items: center;
  border-radius: 0px;
  box-shadow: 0px 0px 32px rgba(0, 0, 0, 0.25);
  z-index: 100;
  /* opacity: 0.5; */

  @media (min-width: 50rem) {
    background: rgba(255,255,255,1);
    border-radius: 16px;
    opacity: 1;
    margin: 0 4rem 0 -8rem;
    padding: 0;
    /* width: 40rem;
    height: 60vh; */
    grid-column: 6 / 9;
    grid-row: 2 / 7;
    grid-template-rows: repeat(5, 1fr);
  }
`

const Message = styled(P)`
  grid-column: 1 / 9;
  margin: 0 1rem 0 1rem;
  padding: 1rem;
  align-self: stretch;
  justify-self: stretch;
  /* background: white; */
  /* border: 1px solid red; */
  color: black;
  font-family: 'Open Sans', sans-serif;
  font-size: calc(18px + (28 - 18) * ((100vw - 300px) / (1600 - 300)));
  line-height: 1.5;
  /* text-shadow: 0px 0px 8px hsla(0,0%,0%,1); */
`

const Label = styled.label`
  font-size: calc(16px + (24 - 16) * ((100vw - 300px) / (1600 - 300)));
  grid-column: 1 / 9;
  display: block;
  margin: 0;
  padding: 1rem 2rem;

  @media (min-width: 50rem) {
    font-size: calc(12px + (16 - 12) * ((100vw - 300px) / (1600 - 300)));
  }
`

const Input = styled.input`
  grid-column: 1 / 9;
  margin: 0.5rem 0;
  padding: 1.5rem;
  display: block;
  width: 100%;
  height: 24px;
  font-size: 16px;
  border: 1px solid #006674;
  border: 1px solid hsla(0,0%,0%,0.25);
  background: hsla(255,100%,100%,0.5);
  border-radius: 8px;
  outline: none;
  background: rgba(255,255,255,0.75);

  :focus {
    box-shadow: 0px 0px 12px rgba(0,0,0,0.2);
  }
`

const SubmitButton = styled(Button)`
  grid-column: 1 / 9;
  grid-row: 5 / 6;
  align-self: center;
  font-size: calc(16px + (24 - 16) * ((100vw - 300px) / (1600 - 300)));
  line-height: 1;
  margin-top: 1rem;
  /* margin-bottom: -64px; */
  padding: 0.75rem 1.25rem;
  padding: 16px 24px;
  vertical-align: baseline;
  color: whtie;
  box-shadow: 0px 0px 32px hsla(0,0%,0%,0.5);
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

const Promotion = () => {
  return (
    <FullContentCard>
      <Image></Image>
      <Form
        name="alma-form"
        method="POST"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
      >
        <input type="hidden" name="bot-field" />
        <input type="hidden" name="form-name" value="alma-form"/>
        {/* <input type="hidden" name="alma-form" value="contact"/> */}
        <Message>
          Don’t miss out on a chance to win your next exotic getaway! Enter now!
        </Message>
        <Label>Name<Input name="name" type="text"/></Label>   
        <Label>Email<Input name="email" type="email"/></Label>
        <Label>Number<Input name="phone" type="tel"/></Label>
        <SubmitButton
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          type="submit"
        >
        Submit
        </SubmitButton>
      </Form>     
    </FullContentCard>
  )
}

export default injectIntl(Promotion)