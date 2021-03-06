module.exports = {
  siteMetadata: {
    title: ".Bits"
  },
  plugins: [
    "gatsby-plugin-catch-links",
    "gatsby-plugin-styled-components",
    "gatsby-plugin-offline",
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          "gatsby-remark-prismjs",
          "gatsby-remark-copy-linked-files",
          "gatsby-remark-images"
        ]
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/posts`,
        name: "posts"
      }
    }
  ]
};
