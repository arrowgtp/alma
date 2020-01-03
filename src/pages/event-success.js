import React from 'react'
import styled from 'styled-components'
import { Link, injectIntl } from 'gatsby-plugin-intl'
import Content from '../components/layout/Content'
import { Space, H1, P } from '../components/visual/Typography'
import { Button } from '../components/visual/Button'
// import Box from '../components/Box'

const Box = styled.div`
  grid-column: 1/ 4;
  grid-row: 1 / 4;
  width: 100vw;
  height: 90vh;
  margin: 0;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* border: 1px solid red; */

  @media (orientation: landscape) {
    width: 80vw;
    height: 100vh;
    padding: 8rem;
  }
`

const CenterP = styled(P)`
  max-width: 60ch;
`

const Success = ({ data, intl }) => {
  return(
    <Content>
      <Box>
        <H1>Yay!</H1> 
        <Space/>
        <CenterP>
        Your information has been submitted successfully. Thank you for your interest in the Alma Resort!
        </CenterP>
        <Space/>
        <Link to={`/event`}>
          <Button>New Submission</Button>
        </Link>
      </Box>
    </Content>
  )
}

export default injectIntl(Success)