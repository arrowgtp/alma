import React, { useEffect } from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { injectIntl } from 'gatsby-plugin-intl'

import almaLogo from '../images/alma/alma-logo.svg'

import PromoCruise from '../images/promos/promo-cruise-wide.jpg'
import PromoVegas from '../images/promos/promo-vegas-wide.jpg'

import './Layout.css'

// import AnimatedLogo from './AnimatedLogo'

import Logo from './Logo'
import Nav from './Navigation'
import PromoButton from './PromoButton'

const App = styled(motion.div)`
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  width: 100vw;
  height: 100vh;
  height: calc(var(--vh, 1vh) * 100);
  display: grid;
  grid-template-rows: 20vh 70vh 10vh;
  grid-template-rows:
    calc(var(--vh, 1vh) * 20)
    calc(var(--vh, 1vh) * 70) 
    calc(var(--vh, 1vh) * 10)
  ;
  grid-template-columns: repeat(3, 1fr);
  z-index: 2;

  @media (min-width: 50rem) {
    grid-template-rows: 100vh;
    grid-template-columns: 20vw 80vw;
  }
`

const Main = styled.main`
  margin: 0;
  padding: 0;
  grid-column: 1 / 4;
  grid-row: 1 / 3;
  overflow-x: hidden;
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
  z-index: 1;
  /* background-image: url(${almaLogo});
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  background-size: 16rem; */
  box-shadow: 0px 0px 16px hsla(0,0%,0%,1);

  @media (min-width: 50rem) {
    grid-column: 2 / 3;
    grid-row: 1 / 6;
    /* overflow-x: hidden;
    overflow-y: scroll; */
    overflow-x: initial;
    overflow-y: initial;
    position: relative;
  }
`

const AlmaLogo = styled.img`
  margin: 0;
  padding: 0;
  grid-column: 1 / 4;
  grid-row: 1 / 3;
  align-self: center;
  justify-self: center;
  width: 16rem;
  height: auto;
  z-index: 0;
  opacity: 0.5;
  
  @media (min-width: 50rem) {
    grid-column: 2 / 3;
    grid-row: 1 / 5;
    /* position: fixed;
    top: 50%;
    left: 50%;
    bottom: 50%;
    right: 50%; */
  }
`

const Menu = styled.div`
  margin: 0;
  padding: 0;
  grid-column: 1 / 4;
  grid-row: 3 / 4;
  background: white;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  z-index: 1000;
  box-shadow: 0px 0px 64px rgba(0, 0, 0, 0.25);
  align-items: center;
  justify-items: center;

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
    align-items: center;
    justify-items: center;
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

const PromoBanner = styled(Link)`
  box-sizing: content-box;
  margin: 0;
  padding: 0;
  position: fixed;
  bottom: 10vh;
  bottom: calc(var(--vh, 1vh) * 10);
  left: 0;
  right: 0;
  height: 10vh;
  height: calc(var(--vh, 1vh) * 10);
  width: 100vw;
  background: #001721;
  background: black;
  z-index: 10;
  border-top: 2px solid #af875d;
  color: white;
  box-shadow: 0px 0px 32px rgba(0, 0, 0, 0.25);
  /* display: flex;
  align-items: center;
  justify-content: space-between; */
  display: grid;
  grid-template-rows: 1;
  grid-template-columns: repeat(4, 1fr);

  @media (min-width: 50rem) {
    bottom: 0;
    right: 0;
    left: 20vw;
    width: 80vw;
    height: 12vh;
  }
`

const Image = styled.img`
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  width: auto;
  height: 10vh;

  @media (min-width: 50rem) {
    height: 12vh;
  }
`

const PromoCruiseImage = styled(Image)`
grid-column: 1 / 3;
grid-row: 1 / 2;
justify-self: start;
z-index: 1;
mask-image: linear-gradient(
    to left,
    hsla(0, 0%, 100%, 0) 0%,
    hsla(0, 0%, 100%, 0.013) 8.1%,
    hsla(0, 0%, 100%, 0.049) 15.5%,
    hsla(0, 0%, 100%, 0.104) 22.5%,
    hsla(0, 0%, 100%, 0.175) 29%,
    hsla(0, 0%, 100%, 0.259) 35.3%,
    hsla(0, 0%, 100%, 0.352) 41.2%,
    hsla(0, 0%, 100%, 0.45) 47.1%,
    hsla(0, 0%, 100%, 0.55) 52.9%,
    hsla(0, 0%, 100%, 0.648) 58.8%,
    hsla(0, 0%, 100%, 0.741) 64.7%,
    hsla(0, 0%, 100%, 0.825) 71%,
    hsla(0, 0%, 100%, 0.896) 77.5%,
    hsla(0, 0%, 100%, 0.951) 84.5%,
    hsla(0, 0%, 100%, 0.987) 91.9%,
    hsl(0, 0%, 100%) 100%)
  ;
`

const PromoVegasImage = styled(Image)`
  grid-column: 3 / 5;
  grid-row: 1 / 2;
  justify-self: end;
  z-index: 1;
  /* mask-image: linear-gradient(
    to right,
    hsla(0, 0%, 100%, 0) 0%,
    hsla(0, 0%, 100%, 0.013) 8.1%,
    hsla(0, 0%, 100%, 0.049) 15.5%,
    hsla(0, 0%, 100%, 0.104) 22.5%,
    hsla(0, 0%, 100%, 0.175) 29%,
    hsla(0, 0%, 100%, 0.259) 35.3%,
    hsla(0, 0%, 100%, 0.352) 41.2%,
    hsla(0, 0%, 100%, 0.45) 47.1%,
    hsla(0, 0%, 100%, 0.55) 52.9%,
    hsla(0, 0%, 100%, 0.648) 58.8%,
    hsla(0, 0%, 100%, 0.741) 64.7%,
    hsla(0, 0%, 100%, 0.825) 71%,
    hsla(0, 0%, 100%, 0.896) 77.5%,
    hsla(0, 0%, 100%, 0.951) 84.5%,
    hsla(0, 0%, 100%, 0.987) 91.9%,
    hsl(0, 0%, 100%) 100%)
  ; */
`

const PromoHeader = styled.h1`
  grid-column: 1 / 5;
  grid-row: 1 / 2;
  margin: 0;
  padding: 0.5rem 1.25rem;
  justify-self: center;
  align-self: center;
  z-index: 2;
  color: black;
  font-family: 'Quicksand', sans-serif;
  text-transform: uppercase;
  /* text-shadow: 0px 0px 8px white;
  text-shadow: 0px 0px 16px black; */
  box-shadow: 0px 0px 16px black;
  font-size: 16px;
  background: white;
  border-radius: 32px;
  /* border: 1px solid red; */

  @media (min-width: 50rem) {
    padding: 0.75rem 1.5rem;
    font-size: 24px;
  }
`

const Layout = ({ children }) => {

  // const elementRef = useRef()

  // useEffect(() => {
  //  setTimeout(() => elementRef.current.scrollTop = 0, 0)
  // }, [])

  // useEffect(() => {
  //  setTimeout(() => document.getElementById('MainContainer').scrollTop = 0, 0);
  // })

  // document.getElementById('#office-manager').getBoundingClientRect()

  useEffect(() => {
    if (window.location.href.indexOf('careers')!== -1) {

      if (window.location.href.indexOf('#office-manager') !== -1) {
        let officeManager = document.querySelector('#office-manager').offsetTop
        document.getElementById('main').scrollTop = officeManager
      } else if (window.location.href.indexOf('#administrative-assistant') !== -1) {
        let administrativeAsistant = document.querySelector('#administrative-assistant').offsetTop
        document.getElementById('main').scrollTop = administrativeAsistant
      } else if (window.location.href.indexOf('#vacation-counselor') !== -1) {
        let vacationCounselor = document.querySelector('#vacation-counselor').offsetTop
        document.getElementById('main').scrollTop = vacationCounselor
      } else if (window.location.href.indexOf('#marketing-promoter') !== -1) {
        let marketingPromoter = document.querySelector('#marketing-promoter').offsetTop
        document.getElementById('main').scrollTop = marketingPromoter
      } else {
        document.getElementById('main').scrollTop = 0
      }

    } else if (window.location.href.indexOf('promo')!== -1) {
      // condition goes here to hide the PromoBanner component
    } else {
      document.getElementById('main').scrollTop = 0
    }
  })

  return (
    <>
      {/* <AnimatedLogo/> */}
      <App
        animate={{ opacity: 1 }}
        transition={{
        ease: 'easeInOut',
        duration: 1,
        delay: 0 
        }}
      >
        <Menu>
          <Logo/>
          <Nav/>
          <PromoButton/>
        </Menu>
        <Main id='main'>
          {children}
        </Main> 
        <AlmaLogo src={almaLogo} alt="The Alma Logo" />
        <PromoBanner
          to="/promo"
          style={{
            display:
              window.location.href.indexOf('promo')!== -1 ? 'none'
              :
              window.location.href.indexOf('careers')!== -1 ? 'none'
              :
              window.location.href.indexOf('success')!== -1 ? 'none'
              :
              'grid'
            }}>
          <PromoCruiseImage src={PromoCruise}/>
          <PromoHeader>Win a free vacation!</PromoHeader>
          <PromoVegasImage src={PromoVegas}/>
        </PromoBanner>
      </App>
    </>
  )
}

export default injectIntl(Layout)
