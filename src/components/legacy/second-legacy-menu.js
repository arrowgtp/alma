import React, { useState, useEffect, useRef, Fragment } from 'react'
import styled from 'styled-components'
import { useTransition, animated } from 'react-spring'
import { Link, injectIntl } from 'gatsby-plugin-intl'

import Logo from './Logo'

import Language from './Language'

import almaBGShell from '../images/alma/alma-bg-shell.svg'
import almaShell from '../images/alma/alma-shell.svg'
import almaLogoWithBG from '../images/alma/alma-logo-with-bg.svg'
import almaWhiteShell from '../images/alma/alma-logo-shell-white.svg'

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

  @media (orientation: landscape) {
    display: none;
  }
`

const MobileMenu = styled(animated.div)`
  margin: 0;
  padding: 1rem;
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

  /* @media (min-width: 50rem) {
    grid-column: 1 / 2;
    grid-row: 4 / 5;
    align-self: center;
    justify-self: center;
    display: grid;
    grid-template-rows: auto;
    grid-template-columns: 1fr 2fr 2fr;
    grid-column-gap: 0.5rem;
    z-index: 10;
  } */

  @media (orientation: landscape) {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    height: 100vh;
    width: 20vw;
    /* grid-column: 1 / 2;
    grid-row: 1 / 5; */
    /* align-self: center;
    justify-self: center; */
    display: grid;
    grid-template-rows: 18vh 5vh 5vh 57vh 15vh;
    grid-template-columns: 1fr;
    grid-column-gap: 0.5rem;
    z-index: 10;
  }
`

const Navigation = styled.div`
  grid-row: 4 / 5;
  grid-column: 1 / 3;
  z-index: 1000;
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
    margin: 0 -1rem -1rem 0;
  }

  :nth-child(2) {
    grid-row: 1 / 5;
    grid-column: 5 / 9;
    margin: 0 0 -1rem -1rem;
  }

  :nth-child(3) {
    grid-row: 5 / 9;
    grid-column: 1 / 5;
    margin: -1rem -1rem 0 0;
  }

  @media (min-width: 50rem ) {
    grid-row: 4 / 5;
    grid-column: 1 / 2;
    z-index: 1000;
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
      margin: 0 -1rem -1rem 0;
    }

    :nth-child(2) {
      grid-row: 1 / 5;
      grid-column: 5 / 9;
      margin: 0 0 -1rem -1rem;
    }

    :nth-child(3) {
      grid-row: 5 / 9;
      grid-column: 1 / 5;
      margin: -1rem -1rem 0 0;
    }
  }
`

// const MobileLinkFlex = styled.div`
//   display: grid;
//   grid-template-rows: auto;
//   grid-template-columns: 1fr 2fr 2fr;
//   grid-column-gap: 0.5rem;
//   align-self: center;
//   justify-self: center;
//   z-index: 10;

//   :first-child {
//     grid-row: 1 / 5;
//     grid-column: 1 / 5;
//     margin: 0 -1rem -1rem 0;
//   }

//   :nth-child(2) {
//     grid-row: 1 / 5;
//     grid-column: 5 / 9;
//     margin: 0 0 -1rem -1rem;
//   }

//   :nth-child(3) {
//     grid-row: 5 / 9;
//     grid-column: 1 / 5;
//     margin: -1rem -1rem 0 0;
//   }

// `

const AlmaLink = styled(Link)`
  grid-column: 2 / 4;
  white-space: nowrap;
  text-decoration: none;
  font-family: 'Work Sans', 'DM Serif Display', 'Lato';
  font-size: calc(18px + (32 - 18) * ((100vw - 300px) / (1600 - 300)));
  font-weight: 300;
  margin: 0;
  padding: 0.6rem 0;
  line-height: 1;
  color: #2d658e;
  /* font-size: 20px; */

  /* :focus {
    background: hsla(207, 55%, 69%, 0.2);
    border-radius: 32px;
    box-shadow: inset 0 0 8px hsla(0,0%,0%,0.25);
  } */

  @media (min-width: 50rem) {
    font-size: calc(10px + (20 - 10) * ((100vw - 300px) / (1600 - 300)));
    grid-column: 2 / 4;
  }
`

const AlmaLink2 = styled(Link)`
  grid-column: 2 / 4;
  margin: 0;
  padding: 0.4rem 0;
  white-space: nowrap;
  font-family: 'Work Sans', 'DM Serif Display', 'Lato';
  font-size: calc(14px + (32 - 14) * ((100vw - 300px) / (1600 - 300)));
  font-weight: 300;
  line-height: 1;
  color: grey;

  @media (min-width: 50rem) {
    grid-column: 2 / 4;
    font-size: calc(8px + (16 - 8) * ((100vw - 300px) / (1600 - 300)));
  }
`

const AlmaBulletShell = styled.img`
  padding: 0;
  width: 0.9rem;
  height: auto;
  grid-column: 1 / 2;
  align-self: center;
  justify-self: center;

  @media (min-width: 50rem) {
    grid-column: 1 / 2;
    margin-bottom: 0px;
  }
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

const SidePanelBackground = styled.div`
  display: none;

  @media (min-width: 50rem) {
    display: block;
    grid-column: 1 / 2;
    grid-row: 1 / 6;
    background: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMCIgaGVpZ2h0PSIzMCI+CjxyZWN0IHdpZHRoPSIzMCIgaGVpZ2h0PSIzMCIgZmlsbD0iI2ZmZmZmZiI+PC9yZWN0Pgo8cmVjdCB4PSIxNSIgd2lkdGg9IjMwIiBoZWlnaHQ9IjMwIiBmaWxsPSIjZmRmZGZkIj48L3JlY3Q+Cjwvc3ZnPg==");
    background-repeat: repeat;
    box-shadow: 0px 0px 32px rgba(0, 0, 0, 0.25);
    box-shadow:
      0 15px 30px 0 rgba(0,0,0,0.11),
      0 5px 15px 0 rgba(0,0,0,0.08)
    ;
    z-index: 1;
  }
`

// const AlmaWhiteShell = styled.img`
//   display: block;
//   margin: 0;
//   padding: 0;
//   width: 10rem;
//   height: auto;
//   grid-column: 1 / 4;
//   grid-row: 1 / 5;
//   z-index: 1;
//   opacity: 0.5;
//   align-self: center;
//   justify-self: center;
//   z-index: 0;
//   filter: drop-shadow(0px 0px 32px hsla(0, 0%, 0%, 0.1));

//   @media (min-width: 50rem) {
//     grid-column: 2 / 4;
//     grid-row: 1 / 6;
//     width: 16rem;
//   }
// `

// const AlmaBGShell = styled.img`
//   display: none;

//   @media (min-width: 50rem) {
//     display: block;
//     grid-column: 1 / 2;
//     grid-row: 5 / 6;
//     margin-left: -64px;
//     margin-top: -64px;
//     z-index: 1;
//     opacity: 0.25;
//     overflow: hidden;
//   }
// `

const JoinButton = styled(Button)`
  grid-column: 3 / 4;
  z-index: 100;

  @media (min-width: 50rem) {
    grid-column: 1 / 2;
    grid-row: 5 / 6;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
  }
`

const SocialButtons = styled.div`
  display: flex;
  margin: 0 0 -1rem -1rem;
  padding: 0;
  grid-column: 5 / 9;
  grid-row: 5 / 7;
  align-self: center;
  justify-content: center;
  align-items: center;
  z-index: 1000;

  @media (min-width: 50rem) {
    margin: 0;
    padding: 0;
    height: 32px;
    width: 32px;
    grid-column: 1 / 3;
    grid-row: 3 / 4;
    align-self: center;
    justify-content: center;
    align-items: center;

    > img {
      margin-bottom: 0;
      padding: 0;
      height: 32px;
      width: 32px;
    }
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

// const SocialButtons = styled.div`
//   display: none;

//   @media (min-width: 50rem) {
//     display: flex;
//     margin: 0;
//     padding: 0;
//     grid-column: 1 / 2;
//     grid-row: 3 / 4;
//     align-self: center;
//     justify-content: center;
//     align-items: center;
//     z-index: 1000; 
//   }
// `

// const SocialButton = styled.a`
//   margin: 0;
//   padding: 0;
//   height: 32px;
//   width: 32px;

//   > img {
//       margin-bottom: 0;
//       padding: 0;
//       height: 32px;
//       width: 32px;
//     }
// `

const MenuButton = styled(Button)`
  grid-column: 1 / 2;
  z-index: 100;

  @media (min-width: 50rem) {
    display: none
  }
`

// const JoinButton = styled(Button)`
//   grid-column: 3 / 4;
//   z-index: 100;
// `

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

const Locales = styled.div`
  grid-row: 7 / 9;
  grid-column: 5 / 9;
  z-index: 2;
  display: flex;
  justify-content: center;
  cursor: pointer;
  z-index: 1000;
  -webkit-tap-highlight-color: transparent;
  margin: -2rem 0 0 -1rem;

  @media (min-width: 50rem) {
    grid-column: 1 / 2;
    grid-row: 2 / 3;
    align-self: center;
    display: flex;
    justify-content: center;
    z-index: 1000;
  }
`

// const Locales = styled.div`
//   display: none;

//   @media (min-width: 50rem) {
//     grid-column: 1 / 2;
//     grid-row: 2 / 3;
//     align-self: center;
//     display: flex;
//     justify-content: center;
//     z-index: 1000;
//   }
// `


const DownArrow = styled.div`
  width: 0; 
  height: 0; 
  border-left: 20px solid transparent;
  border-right: 20px solid transparent;
  border-top: 20px solid white;
  grid-row: 8 / 9;
  grid-column: 2 / 3;
  margin-bottom: -32px;
  margin-left: -32px;
  align-self: end;
`

// const AlmaBGShell = styled.img`
//   margin: 0;
//   padding: 0;
//   width: 100%;
//   height: 100%;
//   grid-column: 1 / 9;
//   grid-row: 1 / 9;
//   z-index: 1;
//   object-fit: cover;
//   opacity: 0.25;
// `

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
        <Logo to={`/`}>
          <img src={almaLogoWithBG} alt="The Alma Resort Logo."  />
        </Logo>
        <Locales>
          <Language />
        </Locales>
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
        <Navigation>
          <AlmaBulletShell src={almaShell}/>
          <AlmaLink to={`/resort`}>Resort</AlmaLink>
            <AlmaLink2 to={`/apartments`}>Apartments</AlmaLink2>
            <AlmaLink2 to={`/villas`}>Villas</AlmaLink2>
            <AlmaLink2 to={`/amenities`}>Amenities</AlmaLink2>
          <AlmaBulletShell src={almaShell}/>
          <AlmaLink to={`/vacations`}>Vacations</AlmaLink>
            <AlmaLink2 to={`/about-rci`}>About</AlmaLink2>
            <AlmaLink2 to={`/ownership`}>Ownership</AlmaLink2>
            <AlmaLink2 to={`/benefits`}>Benefits</AlmaLink2>
          <AlmaBulletShell src={almaShell}/>
          <AlmaLink to={`/alma`}>Alma</AlmaLink>
            <AlmaLink2 to={`/about-alma`}>About Us</AlmaLink2>
            <AlmaLink2 to={`/story`}>Our Story</AlmaLink2>
            <AlmaLink2 to={`/news`}>News</AlmaLink2>
          <AlmaBulletShell src={almaShell}/>
          <AlmaLink to={`/promotions`}>Promotions</AlmaLink>
        </Navigation>
        <JoinButton>Join</JoinButton>
        <SidePanelBackground />
        {/* <AlmaBGShell src={almaBGShell}/> */}
        {/* <AlmaWhiteShell src={almaWhiteShell}/> */}
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
          <Navigation>
            <AlmaBulletShell src={almaShell}/>
            <AlmaLink to={`/resort`} onClick={toggle}>Resort</AlmaLink>
              <AlmaLink2 to={`/apartments`} onClick={toggle}>Apartments</AlmaLink2>
              <AlmaLink2 to={`/villas`} onClick={toggle}>Villas</AlmaLink2>
              <AlmaLink2 to={`/amenities`} onClick={toggle}>Amenities</AlmaLink2>
          </Navigation>
          <Navigation>
            <AlmaBulletShell src={almaShell}/>
            <AlmaLink to={`/vacations`} onClick={toggle}>Vacations</AlmaLink>
              <AlmaLink2 to={`/about-rci`} onClick={toggle}>About</AlmaLink2>
              <AlmaLink2 to={`/ownership`} onClick={toggle}>Ownership</AlmaLink2>
              <AlmaLink2 to={`/benefits`} onClick={toggle}>Benefits</AlmaLink2>
          </Navigation>
          <Navigation>
            <AlmaBulletShell src={almaShell}/>
            <AlmaLink to={`/alma`} onClick={toggle}>Alma</AlmaLink>
              <AlmaLink2 to={`/about-alma`} onClick={toggle}>About Us</AlmaLink2>
              <AlmaLink2 to={`/story`} onClick={toggle}>Our Story</AlmaLink2>
              <AlmaLink2 to={`/news`} onClick={toggle}>News</AlmaLink2>
          </Navigation>
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