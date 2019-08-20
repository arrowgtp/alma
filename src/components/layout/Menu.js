import React, { Fragment } from 'react'
import styled from 'styled-components'
// import { useTransition, animated } from 'react-spring'
import { injectIntl } from 'gatsby-plugin-intl'

// import almaBGShell from '../images/alma/alma-bg-shell.svg'
// import almaShell from '../images/alma/alma-shell.svg'
// import almaLogoWithBG from '../images/alma/alma-logo-with-bg.svg'
// import almaWhiteShell from '../images/alma/alma-logo-shell-white.svg'

// const MenuContainer = styled.div`
//   margin: 0;
//   padding: 0;
//   position: fixed;
//   bottom: 0;
//   left: 0;
//   right: 0;
//   height: 10vh;
//   background: white;
//   display: grid;
//   grid-template-columns: 1fr 1fr 1fr;
//   grid-template-rows: 1fr;
//   z-index: 1000;
//   box-shadow: 0px 0px 64px rgba(0, 0, 0, 0.25);

//   @media (min-width: 50rem) {
//     top: 0;
//     bottom: 0;
//     left: 0;
//     right: auto;
//     height: 100vh;
//     width: 20vw;
//     display: grid;
//     grid-template-rows: 15vh 5vh 5vh 60vh 15vh;
//     grid-template-columns: 1fr;
//     z-index: 100;
//     background: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMCIgaGVpZ2h0PSIzMCI+CjxyZWN0IHdpZHRoPSIzMCIgaGVpZ2h0PSIzMCIgZmlsbD0iI2ZmZmZmZiI+PC9yZWN0Pgo8cmVjdCB4PSIxNSIgd2lkdGg9IjMwIiBoZWlnaHQ9IjMwIiBmaWxsPSIjZmRmZGZkIj48L3JlY3Q+Cjwvc3ZnPg==");
//     background-repeat: repeat;
//     box-shadow: 0px 0px 32px rgba(0, 0, 0, 0.25);
//     box-shadow:
//       0 15px 30px 0 rgba(0,0,0,0.11),
//       0 5px 15px 0 rgba(0,0,0,0.08)
//     ;
//   }
// `

// const SmallMenuContainer = styled.div`
//   margin: 0;
//   padding: 0;
//   position: fixed;
//   bottom: 0;
//   left: 0;
//   right: 0;
//   height: 10vh;
//   background: white;
//   display: grid;
//   grid-template-columns: 1fr 1fr 1fr;
//   grid-template-rows: 1fr;
//   z-index: 1000;
//   box-shadow: 0px 0px 64px rgba(0, 0, 0, 0.25);

//   @media (min-width: 50rem) {
//     display: none;
//   }
// `

const SmallMenuContainer = styled.div`
  margin: 0;
  padding: 0;
  grid-column: 1 / 4;
  grid-row: 3 / 4;
  /* position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 10vh; */
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

const LargeMenuContainer = styled.div`
  display: none;

  @media (min-width: 50rem) {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    height: 100vh;
    width: 20vw;
    display: grid;
    grid-template-rows: 20vh 65vh 15vh;
    grid-template-columns: 1fr;
    z-index: 100;
    background: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMCIgaGVpZ2h0PSIzMCI+CjxyZWN0IHdpZHRoPSIzMCIgaGVpZ2h0PSIzMCIgZmlsbD0iI2ZmZmZmZiI+PC9yZWN0Pgo8cmVjdCB4PSIxNSIgd2lkdGg9IjMwIiBoZWlnaHQ9IjMwIiBmaWxsPSIjZmRmZGZkIj48L3JlY3Q+Cjwvc3ZnPg==");
    background-repeat: repeat;
    box-shadow: 0px 0px 32px rgba(0, 0, 0, 0.25);
    box-shadow:
      0 15px 30px 0 rgba(0,0,0,0.11),
      0 5px 15px 0 rgba(0,0,0,0.08)
    ;
  }
`

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

const Menu = (props) => {

  return (
    <Fragment>
      <SmallMenuContainer>{props.children}</SmallMenuContainer>
      <LargeMenuContainer>{props.children}</LargeMenuContainer>
    </Fragment>
  )
}

export default injectIntl(Menu)

