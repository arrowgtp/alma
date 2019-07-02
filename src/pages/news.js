import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import { Link, injectIntl } from 'gatsby-plugin-intl'
import SEO from "../components/seo"

import ViewContainer from '../components/layout/ViewContainer'
import CenteredContainer from '../components/styled/CenteredContainer'
import AlmaHeader from '../components/Header'

const NavLink = styled(Link)`
  text-decoration: none;
  padding: 1rem;
  line-height: 1;
`
const P = styled.p`
  font-size: 18px;
  line-height: 1.5;
`

const News = ({ data, intl }) => {
  return (
    <ViewContainer>
      <SEO title="News" />
      <CenteredContainer>
        <AlmaHeader title='Latest News' />
        <p>{intl.formatMessage({ id: "title" })}</p>
        <p>{intl.formatMessage({ id: "slogan" })}</p>
        <div>
          <h4>{data.articles.totalCount} Posts</h4>
          {data.articles.edges.map(({ node }) => (
            <div key={node.id}>
              <NavLink to={node.fields.slug}>
                <h3>
                  {node.frontmatter.title}{" "}
                  <span>
                    — {node.frontmatter.date}
                  </span>
                </h3>
                <h4>{node.frontmatter.subtitle}</h4>
                <P>{node.excerpt}</P>
              </NavLink>
            </div>
          ))}
        </div>
      </CenteredContainer>
    </ViewContainer>
  )
}

export const query = graphql`
  {
    articles: allMdx {
      totalCount
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            title
            subtitle
            date(formatString: "MMMM Do, YYYY")
          }
        }
      }
    }
  }
`

export default injectIntl(News)

// export default News