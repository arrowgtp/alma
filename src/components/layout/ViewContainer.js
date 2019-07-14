import React, { useState } from 'react'
import styled from 'styled-components'
import { useTransition, animated, config } from 'react-spring'

// const Container = styled(animated.main)`
const Container = styled.main`
  margin: 0;
  padding: 0;
  z-index: 1;
  /* width: 100%;
  height: 100%; */
  display: grid;
  grid-template-rows: auto;
  grid-template-columns: 
    minmax(1rem, 1fr) 
    minmax(1rem, 40rem) 
    minmax(1rem, 1fr)
  ;
`

const ViewContainer = (props) => {
  const [state] = useState(true);
  const transition = useTransition(state, null, { 
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 }
  });
  return transition.map(({ item, key, props: fade }) =>
    item && <Container key={key} style={fade}>{props.children}</Container>
  )

  // return (
  //   <Container>{props.children}</Container>
  // )
}

export default ViewContainer