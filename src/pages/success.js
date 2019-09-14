import React from 'react'
import styled from 'styled-components'
import { Link, injectIntl } from 'gatsby-plugin-intl'
import { Space, H1, P } from '../components/visual/Typography'
import { Button } from '../components/visual/Button'

const Box = styled.div`
  width: 100vw;
  height: 100vh;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;

  @media (min-width: 50rem) {
    width: 80vw;
  }
`

const Success = () => {
  return(
    <Box>
      <H1>Yay!</H1> 
      <Space/>
      <P>Your information has been submitted successfully, and we will be in touch with you shortly. Thank you very much for your interest in the Alma Resort.</P>
      <Space/>
      <Link to={`/`}>
        <Button>Home</Button>
      </Link>
    </Box>
  )
}

export default injectIntl(Success)