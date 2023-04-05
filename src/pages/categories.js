import { graphql, Link } from "gatsby"
import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

const CategoriesPage = ({ data }) => (
  <Layout>
    <Seo title="Blog" />
    <h1>Blog page</h1>
    {data.allPrismicPost.edges.map(post => {
      return (
        <div key={post.node.uid}>
          <h3>{post.node.data.title.text}</h3>
          <br />
          <Link to={`${post.node.uid}`}>Открыть</Link>
          <br />
          <br />
          <hr />
        </div>
      )
    })}
  </Layout>
)

export const pageQuery = graphql`
  query PostsQuery {
    allPrismicPost {
      edges {
        node {
          uid
          data {
            title {
              text
            }
          }
        }
      }
    }
  }
`

export default CategoriesPage