// import React, { useEffect } from 'react'

// const WrapperComponent = (props) => {
//   useEffect(() => {
//     window.onresize = function() {
//       document.body.height = window.innerHeight;
//     }

//     window.onresize(); // called to initially set the height.
//   }, []);

//   return props.children;
// }

// export const wrapRootElement = ({ element }) => { 
//   return (
//     <WrapperComponent>
//         {element}
//     </WrapperComponent>
//   )
// }