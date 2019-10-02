import { IntlContextConsumer } from "gatsby-plugin-intl"
import { graphql } from 'gatsby'

export default function Template({ data }) {
  return (
    <IntlContextConsumer>
      {({ language: currentLanguage }) => (
        <Page
          siteUrl={data.site.siteMetadata.siteUrl}
          currentLanguage={currentLanguage}
          current={data.current.fields.page}
          newer={safeGet(data.newer, 'fields.page')}
          older={safeGet(data.older, 'fields.page')}
        />
      )}
    </IntlContextConsumer>
  )
}

// export const pageQuery = graphql`
//   fragment FileFields on File {
//     fields {
//       page {
//         path
//         type
//         lang
//         versions {
//           lang
//           date
//           title
//           markdown
//         }
//       }
//     }
//   }
// `