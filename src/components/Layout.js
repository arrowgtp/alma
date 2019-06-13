import React from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import { injectIntl } from 'gatsby-plugin-intl'
import { TransitionProvider } from 'gatsby-plugin-transitions'

import './Layout.css'
import Logo from './Logo'
import Language from './Language'
import Menu from './Menu'
import Button from './styled/Button'

import almaLogoWithBG from '../images/alma-logo-with-bg.svg'
import almaBGShell from '../images/alma-bg-shell.svg'

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
    grid-template-rows: 20vh 5vh 55vh 20vh;
    grid-template-columns: 1fr 3fr;
  }

  @media (min-width: 60rem) {
    grid-template-rows: 20vh 5vh 55vh 20vh;
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
  grid-column: 1 / 4;
  grid-row: 2 / 3;
  justify-content: center;
  cursor: pointer;
  z-index: 1000;
  display: none;

  @media (min-width: 50rem) {
    grid-column: 1 / 2;
    grid-row: 2 / 3;
    display: flex;
  }
`;

const Contact = styled.div`
  grid-column: 3 / 4;
  grid-row: 3 / 4;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  z-index: 2;

  @media (min-width: 50rem) {
    grid-column: 1 / 2;
    grid-row: 4 / 5;
    justify-content: center;
  }
`;

const AlmaBGShell = styled.img`
  display: none;

  @media (min-width: 50rem) {
    display: block;
    grid-column: 1 / 2;
    grid-row: 4 / 5;
    margin-left: -64px;
    margin-top: -64px;
    z-index: 1;
  }
`

const SidePanelBackground = styled.div`
  display: none;

  @media (min-width: 50rem) {
    display: block;
    grid-column: 1 / 2;
    grid-row: 1 / 5;
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

const Layout = ({ location, children }) => {
  return (
    <App>
      <Helmet
        title="Alma Vacations"
        meta={[
          { name: 'description', content: 'Sample' },
          { name: 'keywords', content: 'sample, something' },
        ]}
      >
        <html lang="en" />
      </Helmet>
      <Logo to={`/`}>
        <img src={almaLogoWithBG} alt="The Alma Resort Logo."  />
      </Logo>
      <Locales>
        <Language />
      </Locales>
      <Menu changeMenuOn="50rem" />
      <Contact>
        <Button>Join</Button>
      </Contact>
      {/* <Main>
        {children}
      </Main> */}
      {/* <TransitionProvider location={location}>
        {children}
      </TransitionProvider> */}
      <TransitionProvider
        location={location}
        enter={{
          opacity: 0,
          config: {
            mass: 1,
            tension: 210,
            friction: 20,
            clamp: true
          },
          onRest: () => {
            console.log("Hello, World!");
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
      </TransitionProvider>
      <SidePanelBackground />
      <AlmaBGShell src={almaBGShell}/>
    </App>
  )
}

export default injectIntl(Layout)

// export default Layout
