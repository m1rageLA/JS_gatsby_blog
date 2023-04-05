/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const pages = await graphql(`
    {
      allPrismicPost {
        nodes {
          id
          uid
        }
      }
    }
  `)

  const template = path.resolve("src/templates/post.js")

  pages.data.allPrismicPost.nodes.forEach(post => {
    createPage({
      path: `/categories/${post.uid}`,
      component: template,
      context: {
        uid: post.uid,
      },
    })
  })
}