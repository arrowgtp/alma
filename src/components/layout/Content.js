import React from 'react'
import styled from 'styled-components'
import { motion, AnimatePresence } from 'framer-motion'

const Container = styled(motion.div)`
  margin: 0;
  padding: 0;
  z-index: 1;
  display: grid;
  grid-template-rows: auto;
  grid-template-columns: 
    minmax(2rem, 1fr) 
    minmax(1rem, 45rem) 
    minmax(2rem, 1fr)
  ;
`

const Content = ({ children }) => {
  // const [state] = useState(true);
  // const transition = useTransition(state, null, { 
  //   from: { opacity: 0 },
  //   enter: { opacity: 1 },
  //   leave: { opacity: 0 }
  // });
  // return transition.map(({ item, key, props: fade }) =>
  //   item && <Container key={key} style={fade}>{children}</Container>
  // )

  // return (
  //   <Container>{children}</Container>
  // )

  // Need to add conditionals that stop the animation when langauge is changed

  return (
    <AnimatePresence>
      <Container
        initial={{
          opacity: 0,
          transition: { 
            type: "spring",
            stiffness: 200,
            damping: 50
          }
        }}
        animate={{
          opacity: 1,
          transition: { 
            type: "spring",
            stiffness: 200,
            damping: 50,
            delay: 0.2
          }
        }}
        exit={{
          opacity: 0,
          transition: { 
            type: "spring",
            stiffness: 200,
            damping: 50
          }
        }}
      >
        {children}
      </Container>
    </AnimatePresence>
  )
}

export default Content