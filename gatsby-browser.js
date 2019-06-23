import React from 'react'
import Div100vh from 'react-div-100vh'

export const wrapRootElement = ({ element }) => {
  return (
    <Div100vh>{element}</Div100vh>
  )
}