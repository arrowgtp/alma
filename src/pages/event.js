import React from 'react'
import styled from 'styled-components'
// import { motion } from 'framer-motion'
import { graphql } from 'gatsby'
import { injectIntl } from 'gatsby-plugin-intl'
import Img from 'gatsby-image'
// import SEO from '../components/seo'

import Content from '../components/layout/Content'
import { Button } from '../components/visual/Button'
import { Space, P } from '../components/visual/Typography'

const SmallSpace = styled.div`
  height: 1rem;
`

const Form = styled.form`
  grid-column: 1 / 9;
  grid-row: 1 / 9;
  margin: 0;
  padding: 0;
  width: 100vw;
  height: 160vh;
  height: calc(var(--vh, 1vh) * 150);
  display: block;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  border-radius: 0px;
  z-index: 100;
  opacity: 1;
  background: white;

  @media (orientation: landscape) {
    grid-column: 1 / 9;
    grid-row: 1 / 9;
    width: 80vw;
    height: 100vh;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-self: center;
  }
`

const Block = styled.div`
  /* border: 1px solid red; */
  display: flex;
  width: 100vw;
  height: 70vh;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (orientation: landscape) {
  width: 40vw;
  height: 100vh;
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

  // Full Name

  return (
    <Content>
      <Form
        name="alma-event-form"
        method="post"
        action="/event-success"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
      >
        <input type="hidden" name="bot-field" />
        <input type="hidden" name="form-name" value="alma-event-form"/>
        <Block>
          <Label>Full Name<Input name="name" type="text" required/></Label>
          <Label>Phone Number<Input name="phone" type="tel" required/></Label>
          <Label>Zip Code<Input name="zipcode" type="tel" required/></Label> 
          <Label>Email Address<Input name="email" type="email" required/></Label>
        </Block>
        <Block>
          <Label>Event
            <SmallSpace/>
            <Select name="Event" required>
              <option value="">- Please select an option -</option>
              <option value="1/3/20-1/23/20 - Flower Fest">1/3/20-1/23/20 - Flower Fest</option>
              <option value="1/5/20 - Concert">1/5/20 - Concert</option>
              <option value="1/19/20 - Tet Contest">1/19/20 - Tet Contest</option>
              <option value="1/24/20-1/26/20 - Tet Fest">1/24/20-1/26/20 - Tet Fest</option>
            </Select>
          </Label>
          <Space/>
          <Label>Team Member
            <SmallSpace/>
            <Select name="Team Member" required>
              <option value="">- Please select an option -</option>
              <option value="Brian B">Brian B</option>
              <option value="Christian C">Christian C</option>
              <option value="Christy N">Christy N</option>
              <option value="Corona N">Corona N</option>
              <option value="Diep N">Diep N</option>
              <option value="Emmy T">Emmy T</option>
              <option value="Gia L">Gia L</option>
              <option value="Hop N">Hop N</option>
              <option value="Kasey T">Kasey T</option>
              <option value="Long H">Long H</option>
              <option value="Terrian N">Terrian N</option>
              <option value=">Tung N">Tung N</option>
            </Select>
          </Label>
          <Space/>
          <SubmitButton
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            type="submit"
          >
          {intl.formatMessage({ id: "promo-submit" })}
          </SubmitButton>
          <Disclaimer>{intl.formatMessage({ id: "promo-disclaimer" })}</Disclaimer>
        </Block>
      </Form>
    </Content>
  )
}

export const query = graphql`
  query {
    coaster: file(relativePath: { eq: "promos/coaster.jpg" }) {
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