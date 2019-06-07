import React, { Component } from 'react'
// import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Link } from 'gatsby-plugin-intl'

// import Button from './styled/Button'
import Language from './Language'
import almaBGShell from '../images/alma-bg-shell.svg'
import almaBorder from '../images/alma-border.svg'
// import Shell from './Shell'

// import almaLogoWithBG from '../images/alma-logo-with-bg.svg'
import almaShell from '../images/alma-shell.svg'
// import almaBGShell from '../images/alma-bg-shell.svg';

// const SmallMenu = styled.div`
//   text-align: center;
//   margin: 0;
//   padding: 0;
//   text-decoration: none;
//   grid-column: 1 / 2;
//   grid-row: 3 / 4;
//   z-index: 2;
//   display: flex;
//   flex-direction: column;
//   align-items: flex-end;
//   justify-content: center;
//   font-size: 10px;
//   z-index: 10;

//   @media (min-width: ${props => props.size}) {
//     display: none;
//   }
// `

const SmallMenu = styled.div`
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 10vh;
  background: white;
  z-index: 2;
  display: grid;
  grid-template-columns: 3fr 2fr 3fr;
  grid-template-rows: 1fr;
  z-index: 10;
  box-shadow: 0px 0px 64px rgba(0, 0, 0, 0.25);

  @media (min-width: ${props => props.size}) {
    display: none;
  }
`

const Button = styled.button`
  /* box-sizing: border-box; */
  /* grid-column: 1 / 2; */
  margin: 0;
  /* padding: 0; */
  background: linear-gradient(0deg, rgba(45,101,142,1) 0%, rgba(81,168,190,1) 100%);
  border: 2px solid #AF875D;
  color: white;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 4px;
  font-size: calc(10px + (40 - 10) * ((100vw - 300px) / (1600 - 300)));
  /* padding: 4px 8px; */
  padding:
    calc(8px + (32 - 8) * ((100vw - 300px) / (1600 - 300)))
    calc(16px + (48 - 16) * ((100vw - 300px) / (1600 - 300)))
  ;
  /* padding: calc(8px + (16 - 8) * ((100vw - 300px) / (1600 - 300))); */
  /* padding: 10vh; */
  padding-right: -4px;
  align-self: center;
  justify-self: center;
  text-shadow: 1px 1px hsla(0, 0%, 0%, 0.5);
  border-radius: 32px;
  line-height: 1;
  outline: none;
  z-index: 100;
  transition: background 500ms ease;

  :hover {
    background: linear-gradient(0deg, hsla(205, 58%, 33%, 1) 0%, hsla(192, 43%, 49%, 1) 100%);
    color: #eee;
    cursor: pointer;
  }

  :active {

  }
`

const MenuButton = styled(Button)`
  grid-column: 1 / 2;
`

const JoinButton = styled(Button)`
  grid-column: 3 / 4;
`

const AlmaShell = styled(Link)`
  margin: 0;
  padding: 0;
  grid-column: 2 / 3;
  z-index: 2;
  /* border: 1px solid red; */
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  > img {
    height: auto;
    width: 100%;
    max-width: 6rem;
    /* border: 1px solid red; */
    margin: 0;
    padding: 8px;
    margin-top: -24px;
    background: white;
    border-radius: 50% 50% 0 0;
  }
`

const LargeMenu = styled.div`
  display: none;

  @media (min-width: ${props => props.size}) {
    grid-column: 1 / 2;
    grid-row: 2 / 3;
    height: 60vh;
    font-size: 18px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    z-index: 10;
  }
`

const MobileMenu = styled.div`
  margin: 0;
  padding: 0;
  position: fixed;
  bottom: 18vh;
  left: 5vw;
  height: 50vh;
  width: 90vw;
  border-radius: 16px;
  background: white;
  /* display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center; */
  display: grid;
  grid-template-rows: repeat(8, 1fr);
  grid-template-columns: repeat(8, 1fr);
  align-items: center;
  box-shadow: 0px 0px 32px rgba(0, 0, 0, 0.5);
`

const SLink = styled(Link)`
  text-decoration: none;
  padding: 1rem 2rem;
  line-height: 1;
  color: #2d658e;
  font-size: 18px;
  z-index: 3;
  grid-row: 1 / 2;
  grid-column: 1 / 9;
  align-self: center;
  justify-self: center;


  :focus {
    background: hsla(207, 55%, 69%, 0.2);
    border-radius: 32px;
  }

  @media (min-width: 50rem) {
    font-size: 20px;
  }

  :first-child {
    grid-row: 2 / 3;
    grid-column: 1 / 9;
  }

  :nth-child(2) {
    grid-row: 3 / 4;
    grid-column: 1 / 9;
  }

  :nth-child(3) {
    grid-row: 4 / 5;
    grid-column: 1 / 9;
  }

  :nth-child(4) {
    grid-row: 5 / 6;
    grid-column: 1 / 9;
  }

  :nth-child(5) {
    grid-row: 6 / 7;
    grid-column: 1 / 9;
  }

`

const Locales = styled.div`
  grid-row: 7 / 8;
  grid-column: 1 / 9;
  z-index: 2;
  display: flex;
  justify-content: center;
  cursor: pointer;
  z-index: 1000;
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
  opacity: 0.5;
`

// const MenuIcon = ({ onClick }) => (
//   <div role="button" onClick={onClick}>
//     {/* <Button>Menu</Button> */}
//   </div>
// );

class Menu extends Component {
  
  constructor(props) {
    super(props);

    this.state = {
      showMenu: false,
    }
  }

  handleClick = () => {
    this.setState({ showMenu: !this.state.showMenu });
  };

  handleClick = () => {
    this.setState(prevState => {
      return { showMenu: !prevState.showMenu }
    })
  }

  render() {

    const { changeMenuOn } = this.props

    // const [locale] = location.pathname.split('/').slice(1)

    return (
      <>
        <LargeMenu size={changeMenuOn}>
          <SLink to={`/resort`}>The Resort</SLink>
          <SLink to={`/rooms`}>The Rooms</SLink>
          <SLink to={`/amenities`}>The Amenities</SLink>
          <SLink to={`/news`}>Latest News</SLink>
          <SLink to={`/about`}>About Alma</SLink>
        </LargeMenu>
        <SmallMenu size={changeMenuOn}>
          {!this.state.showMenu ? (
            <MenuButton onClick={this.handleClick}>Menu</MenuButton>
          ) : (
            <MenuButton onClick={this.handleClick}>Close</MenuButton>
          )}
          {this.state.showMenu ? (
            <MobileMenu>
              <SLink to={`/resort`} onClick={this.handleClick}>
                The Resort
              </SLink>
              <SLink to={`/rooms`} onClick={this.handleClick}>
                The Rooms
              </SLink>
              <SLink to={`/amenities`} onClick={this.handleClick}>
                The Amenities
              </SLink>
              <SLink to={`/news`} onClick={this.handleClick}>
                Latest News
              </SLink>
              <SLink to={`/about`} onClick={this.handleClick}>
                About Alma
              </SLink>
              <Locales>
                <Language />
              </Locales>
              <AlmaBGShell src={almaBGShell}/>
            </MobileMenu>
          ) : null}
          <AlmaShell to={`/`}>
            <img src={almaShell} alt="The Alma Resort Shell."  />
          </AlmaShell>
          <JoinButton>Join</JoinButton>
        </SmallMenu>
      </>
    )
  }
}

Menu.propTypes = {
  changeMenuOn: PropTypes.string.isRequired,
}

export default Menu