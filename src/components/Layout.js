import React from 'react'
import styled from 'styled-components'
import { injectIntl } from 'gatsby-plugin-intl'
import { useSpring, animated } from 'react-spring'

import './Layout.css'
import Logo from './Logo'
import Main from './ContentContainer'
import Language from './Language'
import Menu from './Menu'
import Button from './styled/Button'

import almaLogoWithBG from '../images/alma-logo-with-bg.svg'
import almaBGShell from '../images/alma-bg-shell.svg'
import FacebookIcon from '../images/facebook-button.svg'
import InstagramIcon from '../images/instagram-button.svg'
import TwitterIcon from '../images/twitter-button.svg'
import almaWhiteShell from '../images/alma-logo-shell-white.svg'

const App = styled(animated.div)`
  margin: 0;
  padding: 0;
  height: 100vh;
  width: 100vw;
  display: grid;
  grid-template-rows: 20vh 70vh 10vh;
  grid-template-columns: repeat(3, 1fr);
  background: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMCIgaGVpZ2h0PSIzMCI+CjxyZWN0IHdpZHRoPSIzMCIgaGVpZ2h0PSIzMCIgZmlsbD0iI2ZmZmZmZiI+PC9yZWN0Pgo8cmVjdCB4PSIxNSIgd2lkdGg9IjMwIiBoZWlnaHQ9IjMwIiBmaWxsPSIjZmRmZGZkIj48L3JlY3Q+Cjwvc3ZnPg==");
  background-repeat: repeat;

  @media (min-width: 50rem) {
    grid-template-rows: 20vh 5vh 5vh 50vh 20vh;
    /* grid-template-rows: 4fr 1fr 1fr 10fr 4fr; */
    grid-template-columns: 1fr 3fr;
  }
`

const Locales = styled.div`
  display: none;

  @media (min-width: 50rem) {
    grid-column: 1 / 2;
    grid-row: 2 / 3;
    align-self: center;
    display: flex;
    justify-content: center;
    z-index: 1000;
  }
`;

const SocialButtons = styled.div`
  display: none;

  @media (min-width: 50rem) {
    display: flex;
    margin: 0;
    padding: 0;
    grid-column: 1 / 2;
    grid-row: 3 / 4;
    align-self: center;
    justify-content: center;
    align-items: center;
    z-index: 1000; 
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

const Contact = styled.div`
  display: none;

  @media (min-width: 50rem) {
    grid-column: 1 / 2;
    grid-row: 5 / 6;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
  }
`;

const AlmaBGShell = styled.img`
  display: none;

  @media (min-width: 50rem) {
    display: block;
    grid-column: 1 / 2;
    grid-row: 5 / 6;
    margin-left: -64px;
    margin-top: -64px;
    z-index: 1;
    opacity: 0.25;
  }
`

const AlmaWhiteShell = styled.img`
  display: block;
  margin: 0;
  padding: 0;
  width: 10rem;
  height: auto;
  grid-column: 1 / 4;
  grid-row: 1 / 5;
  z-index: 1;
  opacity: 0.5;
  align-self: center;
  justify-self: center;
  z-index: 0;
  filter: drop-shadow(0px 0px 32px hsla(0, 0%, 0%, 0.1));

  @media (min-width: 50rem) {
    grid-column: 2 / 4;
    grid-row: 1 / 6;
    width: 16rem;
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

const Layout = ({ children }) => {

  const fade = useSpring({opacity: 1, from: {opacity: 0}, config: {duration: 250}})

  return (
    <App style={fade}>
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
      <Menu/>
      <Contact>
        <Button>Join</Button>
      </Contact>
      <Main>
        {children}
      </Main>
      <SidePanelBackground />
      <AlmaBGShell src={almaBGShell}/>
      <AlmaWhiteShell src={almaWhiteShell}/>
    </App>
  )
}

export default injectIntl(Layout)
