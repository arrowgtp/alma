const path = require('path');

module.exports = {
  siteMetadata: {
    title: `Alma Vacations`,
    description: `This is the website of the Alma resort in Vietnam.`,
    author: `Arrow GTP`
  },
  plugins: [
    // {
    //   resolve: 'gatsby-source-prismic',
    //   options: {
    //     // The name of your prismic.io repository. This is required.
    //     // Example: 'gatsby-source-prismic-test-site' if your prismic.io address
    //     // is 'gatsby-source-prismic-test-site.prismic.io'.
    //     repositoryName: 'arrow-test-project.prismic.io',
  
    //     // An API access token to your prismic.io repository. This is required.
    //     // You can generate an access token in the "API & Security" section of
    //     // your repository settings. Setting a "Callback URL" is not necessary.
    //     // The token will be listed under "Permanent access tokens".
    //     accessToken: 'MC5YWkpkU3hBQUFDQUFsS0Uw.A--_ve-_ve-_vR_vv70JJu-_ve-_ve-_ve-_vTBJY20W77-9T--_vW0ldWwvGe-_vWxw77-9M--_vQ',
  
    //     // Set a link resolver function used to process links in your content.
    //     // Fields with rich text formatting or links to internal content use this
    //     // function to generate the correct link URL.
    //     // The document node, field key (i.e. API ID), and field value are
    //     // provided to the function, as seen below. This allows you to use
    //     // different link resolver logic for each field if necessary.
    //     // See: https://prismic.io/docs/javascript/query-the-api/link-resolving
    //     linkResolver: ({ node, key, value }) => doc => {
    //       // Your link resolver
    //     },
  
    //     // Set a list of links to fetch and be made available in your link
    //     // resolver function.
    //     // See: https://prismic.io/docs/javascript/query-the-api/fetch-linked-document-fields
    //     fetchLinks: [
    //       // Your list of links
    //     ],
  
    //     // Set an HTML serializer function used to process formatted content.
    //     // Fields with rich text formatting use this function to generate the
    //     // correct HTML.
    //     // The document node, field key (i.e. API ID), and field value are
    //     // provided to the function, as seen below. This allows you to use
    //     // different HTML serializer logic for each field if necessary.
    //     // See: https://prismic.io/docs/nodejs/beyond-the-api/html-serializer
    //     htmlSerializer: ({ node, key, value }) => (
    //       type,
    //       element,
    //       content,
    //       children,
    //     ) => {
    //       // Your HTML serializer
    //     },
  
    //     // Provide an object of Prismic custom type JSON schemas to load into
    //     // Gatsby. Providing the schemas allows you to query for fields present in
    //     // your custom types even if they are unused in your documents.
    //     schemas: {
    //       // Your custom types mapped to schemas
    //     },
  
    //     // Set a default language when fetching documents. The default value is
    //     // '*' which will fetch all languages.
    //     // See: https://prismic.io/docs/javascript/query-the-api/query-by-language
    //     lang: '*',
  
    //     // Set a function to determine if images are downloaded locally and made
    //     // available for gatsby-transformer-sharp for use with gatsby-image.
    //     // The document node, field key (i.e. API ID), and field value are
    //     // provided to the function, as seen below. This allows you to use
    //     // different logic for each field if necessary.
    //     // This defaults to always return true.
    //     shouldNormalizeImage: ({ node, key, value }) => {
    //       // Return true to normalize the image or false to skip.
    //     },
    //   },
    // },
    // {
    //   resolve: 'gatsby-plugin-crisp-chat',
    //   options: {
    //     websiteId: '5bf26a00-0b14-4846-83e9-ed8bab8c0584',
    //     enableDuringDevelop: true, // Optional. Disables Crisp Chat during gatsby develop. Defaults to true.
    //     defer: false, // Optional. Sets the Crisp loading script to defer instead of async. Defaults to false.
    //     enableImprovedAccessibility: true // Optional. Sets aria-label attribute on pop-up icon for screen readers. Defaults to true.
    //   },
    // },
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
