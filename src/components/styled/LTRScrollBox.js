import styled from 'styled-components'
// import almaPattern1 from '../images/alma-pattern-1.png'
import almaPattern2 from '../../images/alma-pattern-2.png'

export default styled.div`
  margin: 0;
  padding: 0;
  min-width: 0;
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  /* background: #ddd; */
  background: url(${almaPattern2});
  background-repeat: repeat;
  box-shadow: inset 0px 0px 32px rgba(0, 0, 0, 0.25);

  ::-webkit-scrollbar {
    display: none;
  }

  ::after {
    content:'';
    flex: 0 0 2rem;
  }
`