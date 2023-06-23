import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Wesley Junior | Visual Effects Compositor and Motion Designer`,
    siteUrl: `https://wesleyvfx.com.br`,
    description: `I am a Nuke Compositor and Motion Designer with a passion for bringing fantasy to life`,
  },
  graphqlTypegen: true,
  plugins: ["gatsby-plugin-postcss", "gatsby-plugin-image", "gatsby-plugin-sitemap", "gatsby-plugin-sharp", "gatsby-transformer-sharp", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Montserrat\:400,500,700` 
        ],
        display: 'swap'
      }
    }
  ]
};

export default config;
