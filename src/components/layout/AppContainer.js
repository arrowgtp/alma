import React from 'react'
import styled from 'styled-components'

const App = styled.div`
  margin: 0;
  padding: 0;
  height: 100vh;
  width: 100vw;
  overflow-x: hidden;
  display: grid;
  grid-template-rows: 20vh 70vh 10vh;
  grid-template-columns: repeat(3, 1fr);
  background: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMCIgaGVpZ2h0PSIzMCI+CjxyZWN0IHdpZHRoPSIzMCIgaGVpZ2h0PSIzMCIgZmlsbD0iI2ZmZmZmZiI+PC9yZWN0Pgo8cmVjdCB4PSIxNSIgd2lkdGg9IjMwIiBoZWlnaHQ9IjMwIiBmaWxsPSIjZmRmZGZkIj48L3JlY3Q+Cjwvc3ZnPg==");
  background-repeat: repeat;

  @media (min-width: 50rem) {
    grid-template-rows: 18vh 5vh 5vh 57vh 15vh;
    grid-template-columns: 1fr 4fr;
  }
`

const AppContainer = (props) => {
  return (
    <App>
      {props.children}
    </App>
  )
}

export default AppContainer