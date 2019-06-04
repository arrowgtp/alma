// const path = require(`path`)
// const fs = require('fs')
// const { createFilePath } = require(`gatsby-source-filesystem`)

// const locales = fs.readdirSync(path.join(__dirname, './src/content'))

// exports.onCreatePage = function onCreatePage({ actions, page }) {
//   const exclude = ['/dev-404-page'] // TODO: possibly ignore

//   if (
//     !exclude.find(pathToExclude => page.path === pathToExclude) &&
//     locales.some(locale => page.path.startsWith(`/${locale}`)) === false
//   ) {
//     actions.deletePage(page)

//     locales.forEach(locale => {
//       actions.createPage({
//         ...page,
//         path: `/${locale}${page.path}`,
//         context: {
//           locale,
//           ...(page.context || {})
//         }
//       })
//     })

//   }
// }

// exports.onCreateNode = ({ node, getNode, actions }) => {
//   const { createNodeField } = actions
//   if (node.internal.type === `Mdx`) {
//     const slug = createFilePath({
//       node,
//       getNode,
//       basePath: path.join(__dirname, 'content'),
//     })
//     createNodeField({
//       node,
//       name: `slug`,
//       value: slug,
//     })
//   }
// }

// exports.createPages = async ({ graphql, actions }) => {

//   const { createPage } = actions

//   const { data, errors } = await graphql(`
//     {
//       posts: allMdx {
//         edges {
//           node {
//             fields {
//               slug
//             }
//           }
//         }
//       }
//     }
//   `)

//   if (errors) {
//     console.log(errors)
//   }

//   const templatesBase = path.join(__dirname, 'src', 'templates')

//   const templates = fs
//     .readdirSync(templatesBase)
//     .filter(filePath => !filePath.startsWith('article'))
//     .map(filePath => path.basename(filePath, '.js'))

//   locales.forEach(locale => {
//     templates.forEach(templatePath => {
//       createPage({
//         component: path.join(templatesBase, `${templatePath}.js`),
//         // path: `/${locale}/${templatePath === 'index' ? '' : templatePath}`,
//         path: `/${locale}/${templatePath}`,
//         context: {
//           locale,
//           localeExpr: `/\/${locale}\//`,
//         },
//       })
//     })
//   })

//   data.posts.edges.forEach(({ node }) => {
//     createPage({
//       path: node.fields.slug,
//       component: path.resolve(`./src/templates/article.js`),
//       context: {
//         slug: node.fields.slug,
//         id: node.id,
//       },
//     })
//   })
// }

// exports.onCreateWebpackConfig = ({ actions }) => {
//   actions.setWebpackConfig({
//     resolve: {
//       modules: [path.resolve(__dirname, 'src'), 'node_modules'],
//     },
//   })
// }


const path = require(`path`)

const { createFilePath } = require(`gatsby-source-filesystem`)

// exports.onCreateNode = ({ node, getNode, actions }) => {
//   const { createNodeField } = actions
//   if (node.internal.type === `Mdx`) {
//     const slug = createFilePath({ node, getNode })
//     createNodeField({
//       node,
//       name: `slug`,
//       value: `${slug}`,
//     })
//   }
// }

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