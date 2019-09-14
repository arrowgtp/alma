import React, { useState, useEffect, useRef, Fragment } from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'
import { Link, injectIntl } from 'gatsby-plugin-intl'
import Img from 'gatsby-image'
import SEO from '../components/seo'

import { Button } from '../components/visual/Button'
import { Space, P } from '../components/visual/Typography'

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
  grid-column: 1 / 6;
  grid-row: 1 / 9;
  margin: 2rem;
  border-radius: 32px;
`

const Form = styled.form`
  margin: 0;
  padding: 2rem;
  grid-column: 6 / 9;
  grid-row: 2 / 7;
  /* width: 40vw;
  height: 60vh; */
  background: white;
  display: grid;
  grid-template-rows: repeat(5, 1fr);
  grid-template-columns: repeat(8, 1fr);
  align-items: center;
  border-radius: 16px;
  box-shadow: 0px 0px 32px rgba(0, 0, 0, 0.25);
  z-index: 100;
  /* opacity: 0.75; */

  @media (min-width: 50rem) {
    margin: 0 4rem 0 -8rem;
    padding: 0;
    /* width: 40rem;
    height: 60vh; */
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
  font-size: calc(16px + (24 - 16) * ((100vw - 300px) / (1600 - 300)));
  line-height: 1.5;
  font-weight: 800;
  /* text-shadow: 0px 0px 8px hsla(0,0%,0%,1); */
`

const Label = styled.label`
  grid-column: 1 / 9;
  display: block;
  margin: 0;
  padding: 1rem 2rem;
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
  /* box-shadow: 0px 0px 16px hsla(0,0%,0%,0.1); */
  text-shadow: none;

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
        name="contact-form"
        method="post"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
      >
        <input type="hidden" name="contact-form" value="contact"/>
        {/* <input type="hidden" name="bot-field" /> */}
        <Message>
          Don’t miss out on a chance to win your next exotic getaway! Enter now!
        </Message>
        <Label htmlFor="name">Name<Input name="name" type="text"/></Label>   
        <Label htmlFor="email">Email<Input name="email" type="email"/></Label>
        <Label htmlFor="phone">Number<Input name="phone" type="tel"/></Label>
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