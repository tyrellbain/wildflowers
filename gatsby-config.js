module.exports = {
  siteMetadata: {
    siteUrl: `http://www.wildflowers.ca`,
    title: `Wildflowers Toronto Florist Studio`,
    description: `Wildflowers & Co. is a Toronto florist specializing in wedding flowers, chuppahs, wedding centrepieces, bridal bouquets and flower arrangements for events.`,
    author: `Tyrell Bain`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/data/images`,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-153160129-1",
      },
    },
    {
      resolve: `gatsby-source-instagram`,
      options: {
        username: `wildflowersandco`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `data/images/site/favicon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "data",
        path: `${__dirname}/data`,
      },
    },
    `gatsby-transformer-json`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-offline`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
