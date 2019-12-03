import React from 'react'
import styled from 'styled-components'

import { ParallaxProvider, Parallax } from 'react-scroll-parallax';

// import Content from '../components/layout/Content'

// const ParallaxContainer = styled.div`
//   margin: 0;
//   padding: 0;
//   display: block;
//   width: 100vw;
//   height: 75vh;
//   overflow-x: hidden;
//   overflow-y: auto;
//   perspective: 300px;
//   /* perspective-origin: 0 0; */
//   border: 1px solid red;
//   background: white;
//   /* font-size: 200%; */

//   @media (orientation: landscape) {
//     width: 80vw;
//     height: 80vh;
//   }
// `

// const ParallaxGroupOne = styled.div`
//   z-index: 3;
//   margin: 0;
//   padding: 0;
//   display: block;
//   position: relative;
//   height: 80vh;
//   transform-style: preserve-3d;
//   transition: transform 0.5s;
//   border: 1px solid red;
//   /* background: #aaa; */
// `

// const ParallaxGroupTwo = styled.div`
//   margin: 0;
//   margin-top: 80vh;
//   padding: 0;
//   display: block;
//   position: relative;
//   height: 80vh;
//   transform-style: preserve-3d;
//   transition: transform 0.5s;
//   border: 1px solid red;
//   /* background: #999; */
// `

// const ParallaxGroupThree = styled.div`
//   margin: 0;
//   padding: 0;
//   display: block;
//   position: relative;
//   height: 80vh;
//   transform-style: preserve-3d;
//   transition: transform 0.5s;
//   border: 1px solid red;
//   /* background: #666; */
// `

// const ParallaxLayerOne = styled.div`
//   margin: 0;
//   padding: 0;
//   position: absolute;
//   top: 0;
//   right: 0;
//   bottom: 0;
//   left: 0;
//   transform: translateZ(0);
//   border: 1px solid red;
//   display: flex;
//   align-items: center;
//   justify-content: center;
// `

// const ParallaxLayerTwo = styled.div`
//   margin: 0;
//   padding: 0;
//   position: absolute;
//   top: 0;
//   right: 0;
//   bottom: 0;
//   left: 0;
//   transform: translateZ(-300px) scale(2);
//   border: 1px solid red;
//   display: flex;
//   align-items: center;
//   justify-content: center;
// `

// const ParallaxLayerThree = styled.div`
//   margin: 0;
//   padding: 0;
//   position: absolute;
//   top: 0;
//   right: 0;
//   bottom: 0;
//   left: 0;
//   transform: translateZ(-600px) scale(3);
//   border: 1px solid red;
//   display: flex;
//   align-items: center;
//   justify-content: center;
// `

// const Text = styled.p`
//   margin: 0;
//   padding: 0;
//   line-height: 1;
//   font-size: 24px;
//   /* display: block;
//   text-align: center;
//   position: absolute;
//   left: 50%;
//   right: 50%;
//   transform: translate(-50%, -50%); */
// `

// const ChildOne = styled.div`
//   transform-origin: 0 0;
//   position: absolute;
//   top: 0;
//   right: 0;
//   bottom: 0;
//   left: 0;
//   transform: translateZ(-1px) scale(4);
//   background: red;
//   width: 256px;
//   height: 256px;
//   z-index: 1;
//   border: 1px solid black;
//   opacity: 0.5;
// `

// const ChildTwo = styled.div`
//   transform-origin: 0 0;
//   position: absolute;
//   top: 0;
//   right: 0;
//   bottom: 0;
//   left: 0;
//   transform: translateZ(-2px) scale(5);
//   background: blue;
//   width: 256px;
//   height: 256px;
//   z-index: 2;
//   border: 1px solid black;
//   opacity: 0.5;
// `

// const ChildThree = styled.div`
//   transform-origin: 0 0;
//   position: absolute;
//   top: 0;
//   right: 0;
//   bottom: 0;
//   left: 0;
//   transform: translateZ(-3px) scale(6);
//   background: green;
//   width: 256px;
//   height: 256px;
//   z-index: 3;
//   border: 1px solid black;
//   opacity: 0.5;
// `


const P1 = styled.p`
  width: 256px;
  height: 256px;
  background: #aaa;
`

const P2 = styled.p`
  width: 256px;
  height: 256px;
  background: #888;
`

const P3 = styled.p`
  width: 256px;
  height: 256px;
  background: #555;
`

const ParallaxPage = () => {
  return(
    <ParallaxProvider>
      <Parallax y={[0, 20]}><P1>Hello There</P1></Parallax>
      <Parallax y={[0, 20]}><P2>How are you doing?</P2></Parallax>
      <Parallax y={[0, 20]}><P3>Is life treating you good?</P3></Parallax>
    </ParallaxProvider>
    // <ParallaxContainer>
    //   <ParallaxGroupOne>
    //     <ParallaxLayerOne>
    //       <Text>Layer</Text>
    //     </ParallaxLayerOne>
    //     <ParallaxLayerTwo>
    //       <Text>Layer</Text>
    //     </ParallaxLayerTwo>
    //     <ParallaxLayerThree style={{background: '#555'}}>
    //       <Text>Layer</Text>
    //     </ParallaxLayerThree>
    //   </ParallaxGroupOne>
    //   <ParallaxGroupTwo>
    //     <ParallaxLayerOne>
    //       <Text>Layer</Text>
    //     </ParallaxLayerOne>
    //     <ParallaxLayerTwo>
    //       <Text>Layer</Text>
    //     </ParallaxLayerTwo>
    //     <ParallaxLayerThree style={{background: '#888'}}>
    //       <Text>Layer</Text>
    //     </ParallaxLayerThree>
    //   </ParallaxGroupTwo>
    //   {/* <ParallaxGroupThree>
    //     <ParallaxLayerOne>
    //       <Text>Layer</Text>
    //     </ParallaxLayerOne>
    //     <ParallaxLayerTwo>
    //       <Text>Layer</Text>
    //     </ParallaxLayerTwo>
    //     <ParallaxLayerThree style={{background: '#aaa'}}>
    //       <Text>Layer</Text>
    //     </ParallaxLayerThree>
    //   </ParallaxGroupThree> */}
    // </ParallaxContainer>
  )
}

export default ParallaxPage