import React, { useState } from 'react'
import styled from 'styled-components'
import { useTransition, animated } from 'react-spring'

const Container = styled(animated.main)`
  margin: 0;
  padding: 0;
  z-index: 1;
  /* width: 100vw; */
  display: grid;
  grid-template-rows: auto;
  grid-template-columns: 
    minmax(2rem, 1fr) 
    minmax(1rem, 45rem) 
    minmax(2rem, 1fr)
  ;
`

const ViewContainer = ({ children }) => {
  const [state] = useState(true);
  const transition = useTransition(state, null, { 
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 }
  });
  return transition.map(({ item, key, props: fade }) =>
    item && <Container key={key} style={fade}>{children}</Container>
  )

  // return (
  //   <Container>{children}</Container>
  // )
}

export default ViewContainer