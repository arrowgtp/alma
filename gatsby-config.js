const path = require('path');

module.exports = {
  siteMetadata: {
    title: `Alma Vacations`,
    description: `This is the website of the Alma resort in Vietnam.`,
    author: `Arrow GTP`
  },
  plugins: [
    // {
    //   resolve: 'gatsby-plugin-crisp-chat',
    //   options: {
    //     websiteId: '5bf26a00-0b14-4846-83e9-ed8bab8c0584',
    //     enableDuringDevelop: true, // Optional. Disables Crisp Chat during gatsby develop. Defaults to true.
    //     defer: false, // Optional. Sets the Crisp loading script to defer instead of async. Defaults to false.
    //     enableImprovedAccessibility: true // Optional. Sets aria-label attribute on pop-up icon for screen readers. Defaults to true.
    //   },
    // },
    // `gatsby-plugin-modal-routing`,
    `gatsby-plugin-netlify`,
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
    `gatsby-plugin-mdx`,
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: [`Open Sans`, `Quicksand`]
        }
      }
    },
    {
      resolve: 'gatsby-source-instagram',
      options: {
        username: 'almavacations',
      },
    },
    {
      resolve: `gatsby-plugin-intl`,
      options: {
        path: `${__dirname}/src/intl`,
        languages: ['en', 'vi'],
        defaultLanguage: 'en',
        redirect: true,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Alma`,
        short_name: `Alma`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#ffffff`,
        display: 'minimal-ui',
        icon: `src/images/alma/alma-shell.svg`,
      },
    },
    // `gatsby-plugin-offline`
  ]
};
