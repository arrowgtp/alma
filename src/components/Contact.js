import React, { useState, useEffect, useRef, Fragment } from 'react'
import styled from 'styled-components'
import { useTransition, animated } from 'react-spring'
import { injectIntl } from 'gatsby-plugin-intl'

import P from './visual/Paragraph'

import Button from './visual/Button'

import almaBGShell from '../images/alma/alma-bg-shell.svg'

const FormContainer = styled.div`
  /* grid-column: 3 / 4;
  grid-row: 1 / 2; */
  display: flex;
  align-items: center;
  justify-content: center;

  @media (min-width: 50rem) {
    /* grid-column: 1 / 2;
    grid-row: 3 / 4; */
    /* display: flex;
    align-items: center;
    justify-content: center; */
  }
`

const Form = styled(animated.div)`
  margin: 0;
  padding: 1rem;
  position: fixed;
  bottom: 15vh;
  left: 5vw;
  height: 60vh;
  width: 90vw;
  border-radius: 16px;
  background: white;
  background-image: url(${almaBGShell});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: grid;
  grid-template-rows: repeat(5, 1fr);
  grid-template-columns: repeat(8, 1fr);
  align-items: center;
  box-shadow: 0px 0px 32px rgba(0, 0, 0, 0.25);
  z-index: 100;

  @media (min-width: 50rem) {
    margin: 0 0 1rem 2rem;
    padding: 2rem;
    left: 20vw;
    top: auto;
    width: 28rem;
    height: 32rem;
    bottom: 0;
    grid-template-rows: repeat(5, 1fr);
  }
`

const DownArrow = styled.div`
  width: 0; 
  height: 0;
  /* border-bottom: 20px solid transparent; */
  border-left: 20px solid transparent;
  border-right: 20px solid transparent;
  border-top: 20px solid white;
  grid-row: 8 / 9;
  grid-column: 8 / 9;
  margin-bottom: -32px;
  margin-left: -12px;
  align-self: end;

  @media (min-width: 50rem) {
    grid-row: 5 / 6;
    grid-column: 1 / 2;
    /* border-left: 0; */
    border-top: 20px solid transparent;
    border-bottom: 20px solid transparent; 
    border-right: 20px solid white;
    margin: 0;
    margin-left: -72px;
    /* margin-bottom: 64px; */
  }
`

const JoinButton = styled(Button)`
  /* grid-column: 3 / 4;
  grid-row: 1 / 2; */
  z-index: 100;

  @media (min-width: 50rem) {
    font-size: 24px;
    padding: 12px 16px;
    grid-column: 1 / 2;
    grid-row: 3 / 4;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
    padding: 0.75rem 1.25rem;
    font-size: 16px;
    line-height: 1;
  }
`

// const LargeContact = styled.div`
//   margin: 1rem;
//   padding: 1rem;
//   grid-row: 3 / 4;
//   background: white;
//   border-radius: 16px;
//   box-shadow: 0px 0px 8px hsla(0, 0%, 0%, 0.1);
// `

const Label = styled.label`
  grid-column: 1 / 9;
  display: block;
  margin: 0;
  padding: 1rem;
  color: #006674;
`

const Input = styled.input`
  grid-column: 1 / 9;
  margin: 0.25rem 0 0 0;
  padding: 1rem;
  display: block;
  width: 100%;
  height: 24px;
  border: 1px solid #006674;
  /* background: #eee; */
  border-radius: 4px;
`

const SubmitButton = styled(Button)`
  grid-column: 1 / 9;
  grid-row: 5 / 6;
  align-self: center;
  font-size: 16px;
  margin-top: 1rem;
  padding: 0.5rem 1rem;
`

const FormP = styled(P)`
  grid-column: 1 / 9;
  margin: 0 1rem 0 1rem;
  padding: 0;
  align-self: center;
  justify-self: center;
`

const Contact = () => {

  const joinRef = useRef();

  const [ isToggled, setToggle ] = useState(false);

  const toggle = () => setToggle(!isToggled);

  const handleClick = e => {
    if (joinRef.current.contains(e.target)) {
      return;
    }
    setToggle(false);
  }

  useEffect(() => {
    document.addEventListener("mousedown", handleClick);
    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, []);

  const transition = useTransition(isToggled, null, { 
    from: { opacity: 0, transform: 'translate3d(33%,60%,0) scale(0.1)' },
    enter: { opacity: 1, transform: 'translate3d(0,0%,0) scale(1)' },
    leave: { opacity: 0, transform: 'translate3d(33%,60%,0) scale(0.1)' }
  });

  return (
    <Fragment>

      <FormContainer ref={joinRef}>

        {!isToggled ?
          (
            <JoinButton onClick={toggle}>Promo</JoinButton>
          ) : (
            <JoinButton onClick={toggle}>Close</JoinButton>
          )
        }

        {transition.map(({ item, key, props: fade }) => (
          item 
          &&
          <Form key={key} style={fade} name="contact" method="POST" data-netlify="true">
            <FormP>
            Don’t miss out on a chance to win your next exotic getaway! Enter now!
            </FormP>
            <Label>Name: <Input type="text" name="name"/></Label>   
            <Label>Email: <Input type="email" name="email" /></Label>
            <Label>Number: <Input type="tel" name="email" /></Label>
            <SubmitButton type="submit">Submit</SubmitButton>
            <DownArrow />
          </Form>
        ))}

      </FormContainer>
      
      {/* <LargeContact>
        <Form name="contact" method="POST" data-netlify="true">
          <Label>Name: <Input type="text" name="name"/></Label>   
          <Label>Email: <Input type="email" name="email" /></Label>
          <Label>Number: <Input type="tel" name="email" /></Label>
          <label>Message: <textarea name="message"></textarea></label>
          <Button type="submit">Join</Button>
        </Form>
      </LargeContact> */}

    </Fragment>
  )
}

export default injectIntl(Contact)