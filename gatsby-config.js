/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  plugins: ['gatsby-transformer-remark','gatsby-transformer-sharp','gatsby-plugin-sharp',
  {
    resolve:`gatsby-source-filesystem`,
    options:{
      name:`notes2`,
      path:`${__dirname}/src/notes2/`
    }
  },{
    resolve:`gatsby-source-filesystem`,
    options:{
      name:`images`,
      path:`${__dirname}/src/images/`
    }
  }],
  siteMetadata:{
    title:"Prince Sharma",
    description:"wbe dev portfolio",
    copyright:"2023 prince sharma",
    contact:"ps789650@gmail.com"
  }
}
