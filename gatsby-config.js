module.exports = {
  siteMetadata: {
    title: 'Codeveryone',
  },
  plugins: [`gatsby-plugin-react-helmet` /* To add seo tags to the head tag */,
            `gatsby-plugin-react-next` /* To make gatsby use React 16 instead of 15 which it uses by default */,
            `gatsby-plugin-offline` /* To enable offline viewing of the website using cache */,
            `gatsby-plugin-styled-components` /* To enable the use of styled-components */,
            `gatsby-plugin-typography` /* Include Typography.js in our pages */,
            `gatsby-plugin-catch-links`,
            `gatsby-transformer-remark`,
            `gatsby-plugin-no-sourcemaps`,
            {
              resolve: `gatsby-source-filesystem`,
              options: {
                path: `${__dirname}/src/pages/blogs`,
                name: 'pages',
              },
            },
          `gatsby-plugin-netlify`, /* make sure to put last in the array */],
}
