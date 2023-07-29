/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Bio Lanka Exports`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    "gatsby-plugin-sass",
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-omni-font-loader`,
      options: {
        enableListener: true,
        preconnect: [
          `https://fonts.googleapis.com`,
          `https://fonts.gstatic.com`,
        ],
        web: [
          {
            name: `DM Serif Display`,
            file: `https://fonts.googleapis.com/css2?family=DM+Serif+Display&display=swap`,
          },
          {
            name: `DM Sans`,
            file: `https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap`,
          },
        ],
      },
    },
  ],
};
