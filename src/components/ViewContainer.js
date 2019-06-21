import React, { useState } from 'react'
import styled from 'styled-components'
import { useTransition, animated } from 'react-spring'

const Container = styled(animated.main)`
  margin: 0;
  padding: 0;
  z-index: 1;
  display: grid;
  grid-template-columns: 
    minmax(1rem, 1fr) 
    minmax(1rem, 40rem) 
    minmax(1rem, 1fr)
  ;
`

// const PageWrapper = (props) => {

//   const [show] = useState(false)
//   const transition = useTransition(show, null, {
//     from: { opacity: 0 },
//     enter: { opacity: 1 },
//     leave: { opacity: 0 }
//   });

//   return (
//     <>
//       {transition.map(({ item, key, fade }) => (
//         item && (
//           <Wrapper key={key} style={fade}>
//             {props.children}
//           </Wrapper>)
//       ))}
//     </>
//   )
// }

const ViewContainer = (props) => {
  const [state] = useState(true);
  const transition = useTransition(state, null, { 
    from: { opacity: 0 },
    enter: {
      // config: {
      //   duration: 500
      // },
      opacity: 1,
    },
    leave: {
      // config: {
      //   duration: 500
      // },
      opacity: 0,
    } 
  });
  return transition.map(({ item, key, props: fade }) =>
    item && <Container key={key} style={fade}>{props.children}</Container>
  )
}

export default ViewContainer

  // const fadeIn = useSpring({
  //   opacity: 1,
  //   from: { opacity: 0 },
  //   config: { duration: 1000}
  // })

  // return (
  //   <Wrapper style={fadeIn}>
  //     {props.children}
  //   </Wrapper>
  // )