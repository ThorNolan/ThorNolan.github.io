module.exports = {
  siteMetadata: {
    title: `THOR NOLAN PORTFOLIO`,
    description: `Thor Nolan Portfolio | Full stack Developer & Creative Web Designer`,
    author: `Thor Nolan <tnolan5764@gmail.com>`,
    siteUrl: 'https://thornolan.com',
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-plugin-cname`,
    {
      resolve: `gatsby-plugin-scroll-reveal`,
      options: {
          threshold: 0.18,
          once: true,
          disable: false,
          animateClassName: 'sal-animate',
      },
    },
    {
      resolve: `gatsby-plugin-transition-link`,
      options: {
        layout: require.resolve(`${__dirname}/src/components/Wrapper/layout.js`),
      },
    },
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        implementation: require("node-sass"),
        additionalData: `@import "./src/scss/main.scss";`,
      },
    },
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `THOR NOLAN PORTFOLIO`,
        short_name: `Thor Nolan | Portfolio`,
        start_url: `/`,
        background_color: `#170D07`,
        theme_color: `#170D07`,
        display: `standalone`,
        icon: `src/images/tn-logo.png`,
      },
    },
    `react-tsparticles`,
    `parallax-js`,
    `gsap`,
    `smooth-scroll`,
    `styled-components`,
    `node-sass`,
    `@material-ui/core`,
    `@material-ui/icons`,
    `gh-pages`,
    `gatsby-plugin-gatsby-cloud`,
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        precachePages: [`./*`],
      },
    },
  ],
}
