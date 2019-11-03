// 1. Import the `remarkForm` HOC
// import React from 'react'
// import { graphql } from 'gatsby'
// import { remarkForm } from 'gatsby-tinacms-remark'

// function TinaPostTemplate(props) {
//   return <h1>{props.data.markdownRemark.frontmatter.title}</h1>
// }

// 2. Wrap your template with `remarkForm`
// export default remarkForm(TinaPostTemplate)

// 3. Add the required fields to the GraphQL query
// export const pageQuery = graphql`
//   query TinaPostBySlug($slug: String!) {
//     markdownRemark(fields: { slug: { eq: $slug } }) {
//       id
//       html
//       frontmatter {
//         title
//         date
//         description
//       }
//       fileRelativePath
//       rawFrontmatter
//       rawMarkdownBody
//     }
//   }
// `