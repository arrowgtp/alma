import React, { Fragment } from 'react'
import Helmet from 'react-helmet'
// import { graphql } from 'gatsby' 
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
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-rows: 20vh 70vh 10vh;
  grid-template-columns: repeat(3, 1fr);
  background: white;

  @media (min-width: 50rem) {
    grid-template-rows: 20vh 5vh 55vh 20vh;
    grid-template-columns: 1fr 3fr;
  }

  @media (min-width: 60rem) {
    grid-template-rows: 20vh 5vh 55vh 20vh;
    grid-template-columns: 1fr 4fr;
  }
`;

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
  /* display: flex; */
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
  grid-column: 1 / 2;
  grid-row: 4 / 5;
  margin-left: -64px;
  margin-top: -64px;

  @media (min-width: 50rem) {
    display: block;
  }
`

const SidePanelBackground = styled.div`
  display: block;
  grid-column: 1 / 4;
  grid-row: 3 / 4;
  box-shadow: 0px 0px 32px rgba(0, 0, 0, 0.25);
  /* box-shadow: 0 15px 30px 0 rgba(0,0,0,0.11),
              0 5px 15px 0 rgba(0,0,0,0.08); */
  z-index: 1;

  @media (min-width: 50rem) {
    display: block;
    grid-column: 1 / 2;
    grid-row: 1 / 5;
    /* background: 
      linear-gradient(
        0deg,
        rgba(0,153,184,0.2539390756302521) 0%,
        rgba(255,255,255,1) 100%
      )
    ; */
  }
`;

// const Background = styled.div`
//   grid-column: 1 / 5;
//   grid-row: 1 / 5;
//   background: blue;
//   z-index: -1;
// `

// const titleQuery = graphql`
//   query MainSiteTitleQuery {
//     site {
//       siteMetadata {
//         title
//       }
//     }
//   }
// `;

const Layout = ({ location, children }) => {
  return (
    <Fragment>
      <Helmet
        title="Alma Vacations"
        meta={[
          { name: 'description', content: 'Sample' },
          { name: 'keywords', content: 'sample, something' },
        ]}
      >
        <html lang="en" />
      </Helmet>
      <App>
        <Logo to={`/`}>
          <img src={almaLogoWithBG} alt="The Alma Resort Logo."  />
        </Logo>
        <Locales>
          <Language />
        </Locales>
        <Menu changeMenuOn="50rem" />
        {/* <Shell to={`/`}>
          <img src={almaShell} alt="The Alma Resort Shell."  />
        </Shell> */}
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
        {/* <Background /> */}
      </App>
    </Fragment>
  )
}

export default injectIntl(Layout)

// export default Layout
