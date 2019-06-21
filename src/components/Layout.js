import React from 'react'
import styled from 'styled-components'
import { injectIntl } from 'gatsby-plugin-intl'
// import { TransitionProvider } from 'gatsby-plugin-transitions'

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
// import almaLogoShellGrey from '../images/alma-logo-shell-grey.svg'

const App = styled.div`
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
    grid-template-columns: 1fr 3fr;
  }

  @media (min-width: 60rem) {
    grid-template-rows: 20vh 5vh 5vh 50vh 20vh;
  }
`

// const Main = styled.main`
//   margin: 0;
//   padding: 0;
//   grid-column: 1 / 4;
//   grid-row: 1 / 3;
//   background: white;
//   overflow-y: scroll;
//   -webkit-overflow-scrolling: touch;
//   z-index: 0;
//   display: grid;
//   grid-template-columns: 
//     minmax(1rem, 1fr) 
//     minmax(1rem, 40rem) 
//     minmax(1rem, 1fr);

//   @media (min-width: 50rem) {
//     grid-column: 2 / 3;
//     grid-row: 1 / 5;
//   }
// `

// const Main = styled.main`
//   grid-column: 1 / 4;
//   grid-row: 1 / 3;
//   overflow: scroll;
//   -webkit-overflow-scrolling: touch;
//   will-change: scroll-position;

//   @media (min-width: 50rem) {
//     grid-column: 2 / 3;
//     grid-row: 1 / 5;
//   }
// `

const Locales = styled.div`
  /* grid-column: 1 / 4;
  grid-row: 2 / 3;
  justify-content: center;
  cursor: pointer;
  z-index: 1000; */
  display: none;

  @media (min-width: 50rem) {
    grid-column: 1 / 2;
    grid-row: 2 / 3;
    align-self: center;
    display: flex;
    justify-content: center;
    cursor: pointer;
    z-index: 1000;
  }
`;

const SocialButtons = styled.div`
  display: none;

  @media (min-width: 50rem) {
    display: flex;
    margin: 0;
    grid-column: 1 / 2;
    grid-row: 3 / 4;
    line-height: 1;
    align-self: center;
    justify-content: center;
    align-items: center;
    cursor: pointer;
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

    :nth-child(2) {
      padding: 0;
    }
`

const Contact = styled.div`
  /* grid-column: 3 / 4;
  grid-row: 4 / 5;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  z-index: 2; */
  display: none;

  @media (min-width: 50rem) {
    grid-column: 1 / 2;
    grid-row: 5 / 6;
    display: flex;
    align-items: center;
    justify-content: flex-start;
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
    z-index: 0;
  }
`

const Layout = ({ children }) => {
  return (
    <App>
      <Logo to={`/`}>
        <img src={almaLogoWithBG} alt="The Alma Resort Logo."  />
      </Logo>
      <Locales>
        <Language />
      </Locales>
      <SocialButtons>
        <SocialButton href='https://www.facebook.com/almavacations'>
          <img src={FacebookIcon} alt='The Alma Resort Facebook account.'  />
        </SocialButton>
        <SocialButton href='https://www.instagram.com/almavacations'>
          <img src={InstagramIcon} alt='The Alma Resort Instagram account.'  />
        </SocialButton>
        <SocialButton href='https://www.twitter.com/almavacations'>
          <img src={TwitterIcon} alt='The Alma Resort Twitter account.'  />
        </SocialButton>
      </SocialButtons>
      <Menu changeMenuOn="50rem" />
      <Contact>
        <Button>Join</Button>
      </Contact>
      <Main>
        {children}
      </Main>
      {/* <TransitionProvider location={location}>
        {children}
      </TransitionProvider> */}
      {/* <TransitionProvider
        location={location}
        enter={{
          opacity: 0,
          config: {
            mass: 1,
            tension: 210,
            friction: 20,
            clamp: true
          }
        }}
        usual={{
          opacity: 1,
        }}
        leave={{
          opacity: 0,
          config: {
            duration: 250
          }
        }}
      >
          {children}
      </TransitionProvider> */}
      <SidePanelBackground />
      <AlmaBGShell src={almaBGShell}/>
    </App>
  )
}

export default injectIntl(Layout)

// export default Layout
