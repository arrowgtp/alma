import styled from 'styled-components'
// import almaPattern1 from '../../images/alma-pattern-1.png'
// import almaPattern2 from '../../images/alma-pattern-2.png'

import almaPattern1 from '../../images/alma-bg-pattern-1.svg'
import almaPattern2 from '../../images/alma-bg-pattern-2.svg'

export default styled.div`
  margin: 0;
  padding: 0;
  min-width: 0;
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  ${props =>
    props.blue && `
      background-color: hsla(188, 70%, 43%, 1);
      background-image: url(${almaPattern1});
  `}
  ${props =>
    props.orange && `
      background-color: hsla(30, 46%, 59%, 1); 
      background-image: url(${almaPattern2});
  `}
  background-repeat: repeat;
  background-size: 96px;
  box-shadow: inset 0px 0px 32px rgba(0, 0, 0, 0.25);

  ::-webkit-scrollbar {
    display: none;
  }

  ::after {
    content:'';
    flex: 0 0 2rem;
  }
`