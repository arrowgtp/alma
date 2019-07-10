import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import Img from 'gatsby-image'
import { injectIntl } from 'gatsby-plugin-intl'
import SEO from "../components/seo"

import ViewContainer from '../components/layout/ViewContainer'
import FullWidthContainer from '../components/layout/FullWidthContainer'

const TeamGrid = styled.div`
  display: grid;
  grid-template-rows: auto;
  grid-template-columns: 1fr;
  grid-gap: 2rem;
  margin: 2rem;
`

const TeamMember = styled.div`
  display: grid;
  grid-template-rows: repeat(8, 1fr);
  grid-template-columns: repeat(8, 1fr);
  /* grid-gap: 1rem; */
  /* outline: 1px solid red; */
`

const Picture = styled(Img)`
  grid-column: 1 / 5;
  grid-row: 1 / 9;
  align-self: start;
  width: 100%;
  height: auto;
  margin: 0;
  padding: 0;
  border-radius: 8px;
  box-shadow: 0px 0px 16px hsla(0,0%,0%,0.25);
  /* outline: 1px solid red; */
`
const MemberInfo = styled.div`
  grid-column: 5 / 9;
  grid-row: 1 / 5;
  align-self: center;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Name = styled.h1`
  margin: 0 0 1rem 0;
  padding: 0;
  font-size: 24px;
  /* outline: 1px solid red; */
`

const Position = styled.h2`
  margin: 0 0 1rem 0;
  padding: 0;
  font-size: 16px;
  /* outline: 1px solid red; */
`

const Bio = styled.p`
  margin: 0;
  padding: 0;
  font-size: 12px;
  grid-column: 3 / 9;
  grid-row: 5 / 8;
  z-index: 2;
  background: white;
  border-radius: 8px;
  box-shadow: 0px 0px 32px hsla(0,0%,0%,0.25);
  padding: 1rem;
  /* outline: 1px solid red; */
`

const Team = ({data}) => {
  return (
    <ViewContainer>
      <SEO title="Team" />
      <FullWidthContainer>
        <TeamGrid>
          {data.allTeamYaml.edges.map(({node}) => (
            <TeamMember key={node.id}>
              <Picture fluid={node.picture.childImageSharp.fluid} alt={node.alt} />
              <MemberInfo>
                <Name>{node.name}</Name>
                <Position>{node.position}</Position>
              </MemberInfo>
              <Bio>{node.bio}</Bio>
            </TeamMember>
          ))}
        </TeamGrid>
      </FullWidthContainer>
    </ViewContainer>
  )
}

export const query = graphql`
  query {
    allTeamYaml {
      edges {
        node {
          name
          position
          picture {
            childImageSharp {
                fluid(maxWidth: 800) {
                  ...GatsbyImageSharpFluid
                }
              }
          }
          alt
          bio
        }
      }
    }
  }
`

export default injectIntl(Team)