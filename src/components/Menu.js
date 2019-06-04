import React, { Component } from 'react'
// import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Link } from "gatsby-plugin-intl"

import Button from './styled/Button'
import Language from './Language'
import almaBGShell from '../images/alma-bg-shell.svg';

const SmallMenu = styled.div`
  text-align: center;
  margin: 0;
  padding: 0;
  text-decoration: none;
  grid-column: 1 / 2;
  grid-row: 3 / 4;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  font-size: 10px;
  z-index: 10;

  @media (min-width: ${props => props.size}) {
    display: none;
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
  bottom: 15vh;
  left: 5vw;
  height: 50vh;
  width: 90vw;
  border-radius: 16px;
  background: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  display: grid;
  grid-template-rows: repeat(8, 1fr);
  grid-template-columns: repeat(8, 1fr);
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


  :focus {
    /* background: hsla(207, 55%, 69%, 0.2); */
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
            <Button onClick={this.handleClick}>Menu</Button>
          ) : (
            <Button onClick={this.handleClick}>Close</Button>
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
        </SmallMenu>
      </>
    )
  }
}

Menu.propTypes = {
  changeMenuOn: PropTypes.string.isRequired,
}

export default Menu