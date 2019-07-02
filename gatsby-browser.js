import React, { useEffect } from 'react'
import Div100vh from 'react-div-100vh'

const WrapperComponent = (props) => {
  useEffect(() => {
    window.onresize = function() {
      document.body.height = window.innerHeight;
    }

    window.onresize(); // called to initially set the height.
  }, []);

  return props.children;
}

export const wrapRootElement = ({ element }) => { 
  return (
    <WrapperComponent>
      <Div100vh>
        {element}
      </Div100vh>
    </WrapperComponent>
  )
}