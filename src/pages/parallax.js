import React from 'react'
import styled from 'styled-components'
// import ParallaxThing from 'react-rellax'

// import Content from '../components/layout/Content'

const ParallaxContainer = styled.div`
  width: 80vw;
  height: 88vh;
  overflow-x: hidden;
  overflow-y: scroll;
  perspective: 1px;
  /* perspective-origin: 0 0; */
  border: 1px solid red;
  background: white;
`

const ParallaxGroup = styled.div`
  position: relative;
  height: 40vh;
  transform-style: preserve-3d;
`


const ChildOne = styled.div`
  /* transform-origin: 0 0; */
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  transform: translateZ(-1px) scale(4);
  background: red;
  width: 256px;
  height: 256px;
  z-index: 1;
  border: 1px solid black;
  opacity: 0.5;
`

const ChildTwo = styled.div`
  /* transform-origin: 0 0; */
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  transform: translateZ(-2px) scale(5);
  background: blue;
  width: 256px;
  height: 256px;
  z-index: 2;
  border: 1px solid black;
  opacity: 0.5;
  
`

const ChildThree = styled.div`
  /* transform-origin: 0 0; */
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  transform: translateZ(-3px) scale(6);
  background: green;
  width: 256px;
  height: 256px;
  z-index: 3;
  border: 1px solid black;
  opacity: 0.5;
`

const Parallax = () => {
  return(
    <ParallaxContainer>
      <ParallaxGroup>
        <ChildOne>Hi</ChildOne>
        <ChildTwo>Ho</ChildTwo>
        <ChildThree>There</ChildThree>
      </ParallaxGroup>
      <ParallaxGroup>
        <ChildOne>How</ChildOne>
        <ChildTwo>You</ChildTwo>
        <ChildThree>Doing?</ChildThree>
      </ParallaxGroup>
    </ParallaxContainer>
  )
}

export default Parallax