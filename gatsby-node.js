const path = require(`path`)

const { createFilePath } = require(`gatsby-source-filesystem`)

// exports.onCreateNode = ({ node, getNode, actions }) => {
//   const { createNodeField } = actions
//   if (node.internal.type === `Mdx`) {
//     const slug = createFilePath({ node, getNode })
//     createNodeField({
//       node,
//       name: `slug`,
//       value: slug,
//     })
//   }
// }

exports.onCreateNode = ({ node, actions, getNodes }) => {
  const { createNodeField } = actions

  if (_isMarkdownNode(node)) {
    // pageType = "blog" or "static"
    // pageId = page slug
    // lang = "en" or "zh-TW"
    const { pageType, pageId, lang } = _getMarkdownNodeIdAndLanguage(node)

    // these values are extracted from within the markdown
    const { data: { title, date }, content: body } = _loadMarkdownFile(node)

    const pageData = {
      pageId,
      type: pageType,
      path: _generatePagePath({ pageType, pageId, date }),
      lang,
      date
    }

    // if is default language node then load in versions in other languages
    if (lang === defaultLanguage) {
      // generate all versions of the node (including default language version)
      getNodes().forEach(n => {
        if (_isMarkdownNode(n)) {
          const r = _getMarkdownNodeIdAndLanguage(n)

          if (r.pageId === pageId) {
            const gm = _loadMarkdownFile(n)

            pageData.versions.push({
              lang: r.lang,
              summary: gm.data.summary,
              title: gm.data.title,
              date: gm.data.date,
              markdown: gm.content,
            })
          }
        }
      })
    }

    // this adds all the data above to Gatsby's internal representation of the node
    createNodeField({
      node,
      name: 'page',
      value: pageData,
    })
  }

  return node
}

exports.createPages = async ({ actions, graphql, getNode }) => {
  const { createPage, createNodeField } = actions

  // fetch the blog posts in reverse chronological order so that we can have
  // them know where they sit in the chain
  const { data: { allFile: { nodes: blogPages } } } = await graphql(`
    {
      allFile( filter: { fields: { page: { type: { eq: "blog" } } } }, sort: { order:DESC, fields: fields___page___date } ) {
        nodes {
          id
          relativePath
        }
      }
    }
  `)
  _createMarkdownPages({ pages: blogPages, getNode, createPage }, index => {
    const newerPageId = 0 < index ? blogPages[index - 1].id : null
    const olderPageId = (blogPages.length - 1) > index ? blogPages[index + 1].id : null
    return { newerPageId, olderPageId }
  })

  // now let's generate the static pages
  const { data: { allFile: { nodes: staticPages } } } = await graphql(`
    {
      allFile( filter: { fields: { page: { type: { eq: "static" } } } } ) {
        nodes {
          id
          relativePath
        }
      }
    }
  `)
  _createMarkdownPages({ pages: staticPages, getNode, createPage })
}

const _createMarkdownPages = ({ pages, getNode, createPage }, cb) => {
  pages.forEach(({ id, relativePath }, index) => {
    const node = getNode(id)
    const { fields: { page: { path: pagePath, lang } } } = node

    if (defaultLanguage === lang) {
      createPage({
        path: pagePath,
        component: path.resolve(`src/templates/pageTemplate.js`),
        context: {
          relativePath,
          ...(cb ? cb(index, node) : null)
        },
      })
    }
  })
}

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `Mdx`) {
    const slug = createFilePath({ node, getNode })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  
    const result = await graphql(`
      {
        posts: allMdx {
          edges {
            node {
              fields {
                slug
              }
            }
          }
        }
      }
    `).then(res => res.data )

    result.posts.edges.forEach(({ node }) => {
      createPage({
        path: node.fields.slug,
        component: path.resolve(`./src/templates/article.js`),
        context: {
          slug: node.fields.slug,
          id: node.id
        },
      })
    })
}

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    },
  })
}