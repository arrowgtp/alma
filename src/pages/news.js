// ``import React from 'react'
// import { graphql } from 'gatsby'
// import Img from 'gatsby-image'
// import styled from 'styled-components'
// import { Link, injectIntl } from 'gatsby-plugin-intl'
// import SEO from "../components/seo"

// import Content from '../components/layout/Content'
// import CenteredContainer from '../components/layout/CenteredContainer'
// import AlmaHeader from '../components/Header'

// const NavLink = styled(Link)`
//   text-decoration: none;
//   padding: 1rem;
//   line-height: 1;
// `

// const NewsImage = styled(Img)`
//   position: relative;
//   margin: 0 0 2rem 0;
//   border-radius: 16px;
//   box-shadow: 
//     0 13px 27px -5px rgba(50,50,93,.25),
//     0 8px 16px -8px rgba(0,0,0,.3),
//     0 -6px 16px -6px rgba(0,0,0,.025)
//   ;

//   &:before {
//     display: block;
//     position:absolute;
//     left:0;
//     top:0;
//     width:100%;
//     height:100%;
//     z-index: 2;
//     background: linear-gradient(
//     to bottom,
//     hsla(0, 0%, 0%, 0) 0%,
//     hsla(0, 0%, 0%, 0.006) 8.1%,
//     hsla(0, 0%, 0%, 0.024) 15.5%,
//     hsla(0, 0%, 0%, 0.052) 22.5%,
//     hsla(0, 0%, 0%, 0.088) 29%,
//     hsla(0, 0%, 0%, 0.13) 35.3%,
//     hsla(0, 0%, 0%, 0.176) 41.2%,
//     hsla(0, 0%, 0%, 0.225) 47.1%,
//     hsla(0, 0%, 0%, 0.275) 52.9%,
//     hsla(0, 0%, 0%, 0.324) 58.8%,
//     hsla(0, 0%, 0%, 0.37) 64.7%,
//     hsla(0, 0%, 0%, 0.412) 71%,
//     hsla(0, 0%, 0%, 0.448) 77.5%,
//     hsla(0, 0%, 0%, 0.476) 84.5%,
//     hsla(0, 0%, 0%, 0.494) 91.9%,
//     hsla(0, 0%, 0%, 0.5) 100%
//   );
//   }
// `

// const NewsTitle = styled.h1`
//   font-size: 32px;
// `

// const NewsDate = styled.p`
//   font-size: 12px;
//   font-style: italic;
// `

// const NewsSubtitle = styled.p`
// font-size: 18px;
// `

// const NewsExcerpt = styled.p`
// font-size: 16px;
// `

// const News = ({ data, intl }) => {
//   return (
//     <Content>
//       <SEO title="News" />
//       <CenteredContainer>
//         <AlmaHeader title='Latest News' />
//         <p>{intl.formatMessage({ id: "title" })}</p>
//         <p>{intl.formatMessage({ id: "slogan" })}</p>
//         <div>
//           <h4>{data.articles.totalCount} Posts</h4>
//           {data.articles.edges.map(({ node }) => (
//             <NavLink key={node.id} to={node.fields.slug}>
//               <NewsImage fluid={node.frontmatter.image.childImageSharp.fluid} alt="cool stuff." />
//               <NewsTitle>{node.frontmatter.title}{" "}</NewsTitle>
//               <NewsDate>{node.frontmatter.date}</NewsDate>
//               <NewsSubtitle>{node.frontmatter.subtitle}</NewsSubtitle>
//               <NewsExcerpt>{node.excerpt}</NewsExcerpt>
//             </NavLink>
//           ))}
//         </div>
//       </CenteredContainer>
//     </Content>
//   )
// }

// export const query = graphql`
//   {
//     articles: allMdx {
//       totalCount
//       edges {
//         node {
//           excerpt
//           fields {
//             slug
//           }
//           frontmatter {
//             title
//             subtitle
//             description
//             date(formatString: "MMMM Do, YYYY")
//             image {
//               childImageSharp {
//                 fluid(maxWidth: 3840) {
//                   ...GatsbyImageSharpFluid
//                 }
//               }
//             }
//           }
//         }
//       }
//     }
//   }
// `

// export default injectIntl(News)

// // export default News