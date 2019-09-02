import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

const AppContainer = styled(motion.div)`
  margin: 0;
  padding: 0;
  width: 100vw;
  height: 100vh;
  height: calc(var(--vh, 1vh) * 100);
  display: grid;
  grid-template-rows: 20vh 70vh 10vh;
  grid-template-rows:
    calc(var(--vh, 1vh) * 20)
    calc(var(--vh, 1vh) * 70) 
    calc(var(--vh, 1vh) * 10)
  ;
  grid-template-columns: repeat(3, 1fr);
  /* background: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMCIgaGVpZ2h0PSIzMCI+CjxyZWN0IHdpZHRoPSIzMCIgaGVpZ2h0PSIzMCIgZmlsbD0iI2ZmZmZmZiI+PC9yZWN0Pgo8cmVjdCB4PSIxNSIgd2lkdGg9IjMwIiBoZWlnaHQ9IjMwIiBmaWxsPSIjZmRmZGZkIj48L3JlY3Q+Cjwvc3ZnPg==");
  background-repeat: repeat; */
  opacity: 0;
  z-index: 2;

  @media (min-width: 50rem) {
    /* grid-template-rows: 18vh 5vh 5vh 57vh 15vh; */
    grid-template-rows: 100vh;
    grid-template-columns: 20vw 80vw;
  }
`

const App = ({ children }) => {
  return (
    <AppContainer
      animate={{ opacity: 1 }}
      transition={{ ease: 'easeInOut', duration: 1, delay: 0 }}
    >
      {children}
    </AppContainer>
  )
}

export default App