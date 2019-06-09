const path = require('path');

module.exports = {
  siteMetadata: {
    title: `Alma Vacations`,
  },
  plugins: [
    `gatsby-plugin-netlify`,
    `gatsby-mdx`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`./src/components/Layout.js`),
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: path.join(__dirname, `./src/content`),
        // path: `${__dirname}/src/content`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-transformer-yaml`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Alma`,
        short_name: `Alma`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#ffffff`,
        display: 'minimal-ui',
        icon: `src/images/alma-shell.svg`,
      },
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Knewave', 'Oswald', 'Average', 'Open Sans', 'Fira Sans', 'Nunito', 'Quicksand', 'Exo', 'Caveat', 'Nothing You Could Do', 'Over the Rainbow', 'Condiment']
        }
      }
    },
    {
      resolve: 'gatsby-source-instagram',
      options: {
        username: 'gia_arrowgtp',
      },
    },
    `gatsby-plugin-twitter`,
    {
      resolve: `gatsby-plugin-intl`,
      options: {
        path: `${__dirname}/src/intl`,
        languages: ['en', 'vi'],
        defaultLanguage: 'en',
        redirect: true,
      },
    },
    `gatsby-plugin-offline`
  ]
};
