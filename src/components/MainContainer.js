import React, { Component } from 'react'
// import ReactDOM from 'react-dom'
import styled from 'styled-components'

const Main = styled.main`
  margin: 0;
  padding: 0;
  grid-column: 1 / 4;
  grid-row: 1 / 3;
  background: white;
  overflow: scroll;
  -webkit-overflow-scrolling: touch;
  z-index: 1;
  background: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMCIgaGVpZ2h0PSIzMCI+CjxyZWN0IHdpZHRoPSIzMCIgaGVpZ2h0PSIzMCIgZmlsbD0iI2ZmZmZmZiI+PC9yZWN0Pgo8cmVjdCB4PSIxNSIgd2lkdGg9IjMwIiBoZWlnaHQ9IjMwIiBmaWxsPSIjZmRmZGZkIj48L3JlY3Q+Cjwvc3ZnPg==");
  background-repeat: repeat;
  display: grid;
  grid-template-columns: 
    minmax(1rem, 1fr) 
    minmax(1rem, 40rem) 
    minmax(1rem, 1fr)
  ;
  grid-template-rows: auto;

  @media (min-width: 50rem) {
    grid-column: 2 / 3;
    grid-row: 1 / 7;
}
`

class MainContainer extends Component {

  componentDidUpdate() {
    // ReactDOM.findDOMNode(this).scrollTop = 0;
    document.getElementById('SexyMainContent').scrollTop = 0;
    // ReactDOM.findDOMNode(this).scrollTop;
    // ReactDOM.findDOMNode(this).scrollTo(0,0);
  }

  componentDidMount() {
    // ReactDOM.findDOMNode(this).scrollTop = 0;
    // this.scrollTop = 0;
    // ReactDOM.findDOMNode(this).scrollTo(0,0);
    // ReactDOM.findDOMNode(this).scrollTop = 0;
    document.getElementById('SexyMainContent').scrollTop = 0;
  }

  // componentDidUpdate(prevProps) {
  //   if (this.props.location !== prevProps.location) {
  //     window.scrollTo(0, 0)
  //     ReactDOM.findDOMNode(this).scrollTop = 0;
  //   }
  // }

  render() {
    return (
      <Main id='SexyMainContent'>
        {this.props.children}
      </Main>
    )
  }
}

export default MainContainer