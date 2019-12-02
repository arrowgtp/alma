import React from 'react'
import styled from 'styled-components'
// import ParallaxThing from 'react-rellax'

// import Content from '../components/layout/Content'

const Container = styled.div`
  width: 70vw;
  height: 70vh;
  overflow-x: hidden;
  overflow-y: scroll;
  perspective: 1px;
  perspective-origin: 0 0;
  border: 1px solid red;
  background: white;
  position: relative;
`

const ChildOne = styled.div`
  transform-origin: 0 0;
  transform: translateZ(-1px) scale(4);
  background: red;
  width: 256px;
  height: 256px;
  z-index: 1;
`

const ChildTwo = styled.div`
  transform-origin: 0 0;
  transform: translateZ(-2px) scale(5);
  background: blue;
  width: 256px;
  height: 256px;
  z-index: 2;
`

const ChildThree = styled.div`
  transform-origin: 0 0;
  transform: translateZ(-3px) scale(6);
  background: green;
  width: 256px;
  height: 256px;
  z-index: 3;
`

const Parallax = () => {
  return(
    <Container>
      <ChildOne></ChildOne>
      <ChildTwo></ChildTwo>
      <ChildThree></ChildThree>
    </Container>
  )
}

export default Parallax