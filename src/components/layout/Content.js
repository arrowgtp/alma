import React from 'react'
import styled from 'styled-components'
import { motion, AnimatePresence } from 'framer-motion'

const Container = styled(motion.div)`
  margin: 0;
  padding: 0;
  z-index: 1;
  background: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMCIgaGVpZ2h0PSIzMCI+CjxyZWN0IHdpZHRoPSIzMCIgaGVpZ2h0PSIzMCIgZmlsbD0iI2ZmZmZmZiI+PC9yZWN0Pgo8cmVjdCB4PSIxNSIgd2lkdGg9IjMwIiBoZWlnaHQ9IjMwIiBmaWxsPSIjZmRmZGZkIj48L3JlY3Q+Cjwvc3ZnPg==");
  background-repeat: repeat;
  display: grid;
  grid-template-rows: auto;
  grid-template-columns: 
    minmax(1rem, 1fr) 
    minmax(1rem, 45rem) 
    minmax(1rem, 1fr)
  ;
`

// const Container = styled.div`
//   margin: 0;
//   padding: 0;
//   z-index: 1;
//   display: grid;
//   grid-template-rows: auto;
//   grid-template-columns: 
//     minmax(2rem, 1fr) 
//     minmax(1rem, 45rem) 
//     minmax(2rem, 1fr)
//   ;
// `

const Content = ({ children }) => {

  // Need to add conditionals that stop the animation when langauge is changed
  
  return (
    <AnimatePresence>
      <Container
        initial={{
          opacity: 0,
          transition: { 
            type: "spring",
            stiffness: 500,
            damping: 100
          }
        }}
        animate={{
          opacity: 1,
          transition: { 
            type: "spring",
            stiffness: 500,
            damping: 100,
            delay: 0.2
          }
        }}
        exit={{
          opacity: 0,
          transition: { 
            type: "spring",
            stiffness: 500,
            damping: 100
          }
        }}
      >
        {children}
      </Container>
    </AnimatePresence>
  )

  // return (
  //   <Container>
  //     {children}
  //   </Container>
  // )
}

export default Content