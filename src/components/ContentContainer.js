import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useSpring, useTransition, animated } from 'react-spring'
// import posed from 'react-pose';
// import { Transition } from 'react-spring/renderprops'
// import { TransitionProvider } from 'gatsby-plugin-transitions'

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

const Main = styled(animated.main)`
  margin: 0;
  padding: 0;
  grid-column: 1 / 4;
  grid-row: 1 / 3;
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
  z-index: 0;
  /* display: grid;
  grid-template-columns: 
    minmax(1rem, 1fr) 
    minmax(1rem, 40rem) 
    minmax(1rem, 1fr); */

  @media (min-width: 50rem) {
    grid-column: 2 / 3;
    grid-row: 1 / 6;
  }
`


// const FadeMain = posed.div({
//   visible: { opacity: 1 },
//   hidden: { opacity: 0 }
// });

// const Main = styled(FadeMain)`
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

// class MainContent extends Component {

//   componentDidMount() {
//     document.getElementById('SexyMainContent').scrollTop = 0;
//   }

//   componentDidUpdate() {
//     document.getElementById('SexyMainContent').scrollTop = 0;
    
    // this.prevDisplay = this.props.display;
  // }

  // componentDidUpdate(prevProps) {
  //   if (this.props.location !== prevProps.location) {
  //     document.getElementById('SexyMainContent').scrollTop = 0;
  //   }
  // }

  // render() {
  //   return (
  //     <Main id='SexyMainContent'>
  //       {this.props.children}
  //     </Main>
  //   )
  // }

  // render() {
  //   return (
  //     <Main
  //       id='SexyMainContent'
  //       initialPose='hidden' pose='visible'
  //     >
  //       {this.props.children}
  //     </Main>
  //   )
  // }

  // render() {
  //   return (
  //     <Transition
  //       update={{opacity: 0, opacity: 1}}
  //       from={{ opacity: 0 }}
  //       enter={{ opacity: 1 }}
  //       leave={{ opacity: 0 }}
  //     >
  //       <Main id='SexyMainContent'>
  //         {this.props.children}
  //       </Main>
  //     </Transition>
  //   )
  // }

  // render() {
  //   return (
  //     <TransitionProvider
  //       location={location}
  //       enter={{
  //         opacity: 0,
  //         config: {
  //           mass: 1,
  //           tension: 210,
  //           friction: 20,
  //           clamp: true
  //         }
  //       }}
  //       usual={{
  //         opacity: 1,
  //       }}
  //       leave={{
  //         opacity: 0,
  //         config: {
  //           duration: 250
  //         }
  //       }}
  //     >
  //       <Main id='SexyMainContent'>
  //         {this.props.children}
  //       </Main>
  //     </TransitionProvider>
      
  //   )
  // }
// }

// function MainContent(props) {

//   useEffect( () => { document.getElementById('SexyMainContent').scrollTop = 0; } )

//   return (
//     <Main id='SexyMainContent'>
//       {props.children}
//     </Main>
//   )
// }

// const MainContent = (props) => {

//   useEffect( () => { document.getElementById('SexyMainContent').scrollTop = 0; } )

  // const [show, set] = useState(false)

  // const transitions = useTransition(show, null, {
  //   from: { opacity: 0 },
  //   enter: { opacity: 1 },
  //   leave: { opacity: 0 },
  // })

  // return transitions.map(({ item, key, props }) =>
  // item && <Main id='SexyMainContent' key={key} style={props}>{props.children}</Main>
  // )

//   return (
//     <Main id='SexyMainContent'>
//       {props.children}
//     </Main>
//   )
// }


const ContentContainer = (props) => {

  // const contentContainer = document.getElementById('SexyMainContent');

  // const [fadeOut, set] = useSpring({ opacity: 1 });

  // const [fade, set] = useSpring(() => ({
  //   opacity: 0,
  //   config: {
  //     duration: 2000
  //   }
  // }))

  // const fadeIn = useSpring({opacity: 1, from: { opacity: 0 }});
  // const fadeOut = useSpring({opacity: 0, from: { opacity: 1 }});

  // const fade = useSpring({opacity: 1, from: { opacity: 0 }})
  // document.getElementById('SexyMainContent').scrollTop = 0;
  //  setTimeout(() => set({ opacity: 0 }), 0); 


  // useEffect(() => setTimeout(() => set({ opacity: 1 }), 0))

  useEffect(() => {
    //add animation to fade out the component over 250ms when it's children change
    setTimeout(() => document.getElementById('ContentContainer').scrollTop = 0, 0);
    //add animation to fade in component over 250ms after scroll has been reset
  })

  // const [show, set] = useState(false)
  // const transitions = useTransition(show, null, {
  //   from: { opacity: 0 },
  //   enter: { opacity: 1 },
  //   leave: { opacity: 0 },
  // })
  // return(
  //   <Main id='SexyMainContent'>
  //     {
  //       transitions.map(({ item, key, fade }) =>
  //       item
  //       && 
  //       <animated.div key={key} style={fade}>{props.children}</animated.div>)
  //     }
  //   </Main>
  // )

  // useEffect(() => {
  //   fadeOut;
  //   setTimeout(() => document.getElementById('SexyMainContent').scrollTop = 0, 200);
  //   setTimeout(() => contentContainer.scrollTop = 0, 200);
  //   document.getElementById('SexyMainContent').scrollTop = 0; 
  //   fadeIn;
  // })

  return (
    <Main id='ContentContainer'>
      {props.children}
    </Main>
  )
}

export default ContentContainer