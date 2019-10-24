const path = require('path');

module.exports = {
  siteMetadata: {
    title: `Alma Vacations`,
    description: `This is the website of the Alma resort in Vietnam.`,
    author: `Arrow GTP`
  },
  plugins: [
    // `gatsby-plugin-preact`,
    {
      resolve: `gatsby-source-youtube-v2`,
      options: {
        channelId: ['UCMzsbNMXxwVTLOUZr_3lZWw'],
        apiKey: 'AIzaSyDkAv4jUnYsIGOwtcdLpTE3bmfm9ww2o0Y',
        maxVideos: 50 // Defaults to 50
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-150454229-1',
      },
    },
    'gatsby-plugin-webpack-bundle-analyzer',
    `gatsby-plugin-modal-routing`,
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
        redirect: false,
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
