module.exports = {
  siteMetadata: {
    siteUrl: "https://comiquotes.gatsbyjs.io",
    title: "ComiQuotes",
  },
  plugins: [
    "gatsby-plugin-postcss",
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Audiowide`,
          `Quicksand`
        ],
        display: 'swap'
      }
    },
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-plugin-fontawesome-css"
  ],
  
};
