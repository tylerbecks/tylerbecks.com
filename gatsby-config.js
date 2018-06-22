module.exports = {
  siteMetadata: {
    title: 'Tyler Becks',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    `gatsby-plugin-jss`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography.js`,
      },
    },
  ],
}
