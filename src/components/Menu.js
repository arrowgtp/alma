import React, { useState, useEffect, useRef, Fragment } from 'react'
import styled from 'styled-components'
import { useTransition, animated } from 'react-spring'
import { Link, injectIntl } from 'gatsby-plugin-intl'

import Language from './Language'

import almaBGShell from '../images/alma/alma-bg-shell.svg'
import almaShell from '../images/alma/alma-shell.svg'

import FacebookIcon from '../images/social/facebook-button.svg'
import InstagramIcon from '../images/social/instagram-button.svg'
import TwitterIcon from '../images/social/twitter-button.svg'

const SmallMenu = styled.div`
  margin: 0;
  padding: 0;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 10vh;
  background: white;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  z-index: 1000;
  box-shadow: 0px 0px 64px rgba(0, 0, 0, 0.25);

  @media (min-width: 50rem) {
    display: none;
  }
`

const MobileMenu = styled(animated.div)`
  margin: 0;
  padding: 2rem;
  position: fixed;
  bottom: 15vh;
  left: 5vw;
  height: 50vh;
  width: 90vw;
  border-radius: 16px;
  background: white;
  background-image: url(${almaBGShell});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  /* background: hsla(255,100%,100%,0.5); */
  display: grid;
  grid-template-rows: repeat(8, 1fr);
  grid-template-columns: repeat(8, 1fr);
  align-items: center;
  box-shadow: 0px 0px 32px rgba(0, 0, 0, 0.25);
  z-index: 1000000;
`

const LargeMenu = styled.div`
  display: none;

  @media (min-width: 50rem) {
    grid-column: 1 / 2;
    grid-row: 4 / 5;
    align-self: center;
    justify-self: center;
    display: grid;
    grid-template-rows: auto;
    grid-template-columns: 1fr 2fr 2fr;
    grid-column-gap: 0.5rem;
    z-index: 10;
  }
`

const MobileLinkFlex = styled.div`
  display: grid;
  grid-template-rows: auto;
  grid-template-columns: 1fr 2fr 2fr;
  grid-column-gap: 0.5rem;
  align-self: center;
  justify-self: center;
  z-index: 10;

  :first-child {
    grid-row: 1 / 5;
    grid-column: 1 / 5;
  }

  :nth-child(2) {
    grid-row: 1 / 5;
    grid-column: 5 / 9;

  }

  :nth-child(3) {
    grid-row: 5 / 9;
    grid-column: 1 / 5;
  }

`

const AlmaLink = styled(Link)`
  grid-column: 2 / 4;
  text-decoration: none;
  margin: 0;
  padding: 0.6rem 0;
  line-height: 1;
  color: #2d658e;
  font-size: 20px;

  :focus {
    /* background: hsla(207, 55%, 69%, 0.2); */
    border-radius: 32px;
    box-shadow: inset 0 0 8px hsla(0,0%,0%,0.25);
  }

  @media (min-width: 50rem) {
    font-size: calc(12px + (24 - 12) * ((100vw - 300px) / (1600 - 300)));
    grid-column: 2 / 4;
  }
`

const AlmaLink2 = styled(Link)`
  grid-column: 2 / 4;
  /* grid-column: auto; */
  font-size: calc(12px + (24 - 12) * ((100vw - 300px) / (1600 - 300)));
  /* font-family: 'Quicksand', 'Open Sans', 'DM Serif Display'; */
  /* text-align: center; */
  line-height: 1;
  margin: 0;
  padding: 0.4rem 0;
  color: grey;
  /* border: 1px solid black; */
  /* width: 50%; */

  @media (min-width: 50rem) {
    grid-column: 2 / 4;
    font-size: calc(12px + (16 - 12) * ((100vw - 300px) / (1600 - 300)));
  }
`

const AlmaBulletShell = styled.img`
  padding: 0;
  width: 0.9rem;
  margin-bottom: 2px;
  height: auto;
  grid-column: 1 / 2;
  align-self: center;
  justify-self: center;

  @media (min-width: 50rem) {
    grid-column: 1 / 2;
    margin-bottom: 0px;
  }
`

const AlmaHR = styled.hr`
  grid-column: 2 / 4;
  margin: 0;
  padding: 0;
`

const Button = styled.button`
  margin: 0;
  padding: 0;
  background: linear-gradient(0deg, rgba(45,101,142,1) 0%, rgba(81,168,190,1) 100%);
  border: 2px solid #AF875D;
  color: white;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 4px;
  font-size: calc(10px + (40 - 10) * ((100vw - 300px) / (1600 - 300)));
  padding:
    calc(8px + (32 - 8) * ((100vw - 300px) / (1600 - 300)))
    calc(16px + (48 - 16) * ((100vw - 300px) / (1600 - 300)))
  ;
  padding-right: -4px;
  align-self: center;
  justify-self: center;
  text-shadow: 1px 1px hsla(0, 0%, 0%, 0.5);
  border-radius: 32px;
  line-height: 1;
  outline: none;
  z-index: 100;
  -webkit-tap-highlight-color: transparent;
  transition: background 500ms ease;

  :hover {
    background: linear-gradient(0deg, hsla(205, 58%, 33%, 1) 0%, hsla(192, 43%, 49%, 1) 100%);
    color: #eee;
    cursor: pointer;
    outline: none;
  }

  :active {
    outline: none;
    /* box-shadow: 0px 0px 8px rgba(0, 0, 200, 0.5); */
  }

  :focus {
    outline: none;
    /* box-shadow: 0px 0px 8px rgba(0, 0, 200, 0.5); */
  }
`

const SocialButtons = styled.div`
  display: flex;
  margin: 0;
  padding: 0;
  grid-column: 5 / 9;
  grid-row: 5 / 7;
  align-self: center;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  margin-bottom: -1rem;

  @media (min-width: 50rem) {
    display: none;
  }
`

const SocialButton = styled.a`
  margin: 0;
  padding: 0;
  height: 32px;
  width: 32px;

  > img {
      margin-bottom: 0;
      padding: 0;
      height: 32px;
      width: 32px;
    }
`

const MenuButton = styled(Button)`
  grid-column: 1 / 2;
  z-index: 100;
`

const JoinButton = styled(Button)`
  grid-column: 3 / 4;
  z-index: 100;
`

const AlmaShell = styled(Link)`
  margin: 0;
  padding: 0;
  grid-column: 2 / 3;
  z-index: 1;
  margin: 0;
  padding: 0;
  -webkit-tap-highlight-color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;

  > img {
    height: auto;
    width: 100%;
    max-width: 6rem;
    margin: 0;
    padding: 8px;
    margin-top: -24px;
    background: white;
    border-radius: 50% 50% 0 0;
  }
`

const DownArrow = styled.div`
  width: 0; 
  height: 0; 
  border-left: 20px solid transparent;
  border-right: 20px solid transparent;
  border-top: 20px solid white;
  grid-row: 8 / 9;
  grid-column: 2 / 3;
  margin-bottom: -48px;
  margin-left: -40px;
  align-self: end;
`

const Locales = styled.div`
  grid-row: 7 / 9;
  grid-column: 5 / 9;
  z-index: 2;
  display: flex;
  justify-content: center;
  cursor: pointer;
  z-index: 1000;
  -webkit-tap-highlight-color: transparent;
  margin-top: -1rem;
`

const AlmaBGShell = styled.img`
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  grid-column: 1 / 9;
  grid-row: 1 / 9;
  z-index: 1;
  object-fit: cover;
  opacity: 0.25;
`

const Menu = () => {

  const node = useRef();

  const [ isToggled, setToggle ] = useState(false);

  const transition = useTransition(isToggled, null, { 
    from: { opacity: 0, transform: 'translate3d(-33%,60%,0) scale(0.1)' },
    enter: { opacity: 1, transform: 'translate3d(0,0%,0) scale(1)' },
    leave: { opacity: 0, transform: 'translate3d(-33%,60%,0) scale(0.1)' }
  });

  const toggle = () => setToggle(!isToggled);

  const handleClick = e => {
    if (node.current.contains(e.target)) {
      return;
    }
    setToggle(false);
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClick);
    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, []);

  return (
    <Fragment>
      <LargeMenu>
        <AlmaBulletShell src={almaShell}/>
        <AlmaLink to={`/resort`}>Resort</AlmaLink>
        {/* <AlmaHR/> */}
          <AlmaLink2 to={`/resort/apartments`}>Apartments</AlmaLink2>
          <AlmaLink2 to={`/resort/villas`}>Villas</AlmaLink2>
          <AlmaLink2 to={`/resort/amenities`}>Amenities</AlmaLink2>
          {/* <AlmaLink2 to={`/resort/construction`}>Construction</AlmaLink2> */}
        <AlmaBulletShell src={almaShell}/>
        <AlmaLink to={`/vacations`}>Vacations</AlmaLink>
        {/* <AlmaHR/> */}
          <AlmaLink2 to={`vacations/about`}>About</AlmaLink2>
          <AlmaLink2 to={`vacations/ownership`}>Ownership</AlmaLink2>
          <AlmaLink2 to={`vacations/benefits`}>Benefits</AlmaLink2>
        {/* <AlmaLink to={`/about`}>About Alma</AlmaLink> */}
        <AlmaBulletShell src={almaShell}/>
        <AlmaLink to={`/story`}>Alma</AlmaLink>
          <AlmaLink2 to={`alma/about`}>About Us</AlmaLink2>
          <AlmaLink2 to={`alma/story`}>Our Story</AlmaLink2>
          <AlmaLink2 to={`alma/news`}>News</AlmaLink2>
        {/* <AlmaLink to={`/news`}>Latest News</AlmaLink> */}
      </LargeMenu>
      <SmallMenu ref={node}>
        {!isToggled ?
          (
            <MenuButton onClick={toggle}>Menu</MenuButton>
          ) : (
            <MenuButton onClick={toggle}>Close</MenuButton>
          )
        }
        {transition.map(({ item, key, props: fade }) => (
          item && <MobileMenu key={key} style={fade}>

          
          <MobileLinkFlex>
            <AlmaBulletShell src={almaShell}/>
            <AlmaLink to={`/resort`}>Resort</AlmaLink>
            {/* <AlmaHR/> */}
              <AlmaLink2 to={`/resort/apartments`}>Apartments</AlmaLink2>
              <AlmaLink2 to={`/resort/villas`}>Villas</AlmaLink2>
              <AlmaLink2 to={`/resort/amenities`}>Amenities</AlmaLink2>
          </MobileLinkFlex>
          <MobileLinkFlex>
            <AlmaBulletShell src={almaShell}/>
            <AlmaLink to={`/vacations`}>Vacations</AlmaLink>
            {/* <AlmaHR/> */}
              <AlmaLink2 to={`vacations/about`}>About</AlmaLink2>
              <AlmaLink2 to={`vacations/ownership`}>Ownership</AlmaLink2>
              <AlmaLink2 to={`vacations/benefits`}>Benefits</AlmaLink2>
          </MobileLinkFlex>
          <MobileLinkFlex>
            <AlmaBulletShell src={almaShell}/>
            <AlmaLink to={`/story`}>Alma</AlmaLink>
            {/* <AlmaHR/> */}
              <AlmaLink2 to={`alma/about`}>About Us</AlmaLink2>
              <AlmaLink2 to={`alma/story`}>Our Story</AlmaLink2>
              <AlmaLink2 to={`alma/news`}>News</AlmaLink2>
          </MobileLinkFlex>
          <SocialButtons>
            <SocialButton href='https://www.facebook.com/almavacations'>
              <img src={FacebookIcon} alt='The Alma Resort Facebook account.' />
            </SocialButton>
            <SocialButton href='https://www.instagram.com/almavacations'>
              <img src={InstagramIcon} alt='The Alma Resort Instagram account.' />
            </SocialButton>
            <SocialButton href='https://www.twitter.com/almavacations'>
              <img src={TwitterIcon} alt='The Alma Resort Twitter account.' />
            </SocialButton>
          </SocialButtons>
          <Locales>
            <Language />
          </Locales>
          <DownArrow />
            {/* <AlmaBGShell src={almaBGShell}/> */}
          </MobileMenu>
          ))}
        <AlmaShell to={`/`}>
          <img src={almaShell} alt="The Alma Resort Shell."  />
        </AlmaShell>
        <JoinButton>Join</JoinButton>
      </SmallMenu>
    </Fragment>
  )
}

export default injectIntl(Menu)