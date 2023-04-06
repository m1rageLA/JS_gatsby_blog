import * as React from "react"
import { Link } from "gatsby"
import { StaticImage, GatsbyImage } from "gatsby-plugin-image" // добавлен импорт
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"
import "../components/ind.css"



const utmParameters = `?utm_source=starter&utm_medium=start-page&utm_campaign=default-starter`

const ArticlesPage = ({ data }) => (
<Layout>
<div id="wrapper">
      <div id="main">
        {data.allPrismicPost.edges.slice(0, 3).map(post => { return (
        <article class="post" key={post.node.uid}>
          <header>
            <div class="title">
              <h2>{post.node.data.title.text}</h2>
              <p>{post.node.data.description.text}</p>
            </div>
            <div class="meta">
                  <a href="#" class="image featured">
                    <Link to={`/categories/${post.node.uid}`}>
                        <GatsbyImage class="blockImage"
                          image={post.node.data.image.gatsbyImageData}
                          alt={post.node.data.image.alt}/>
                    </Link>
                </a>
            </div>
          </header>
         
          <footer>
            <ul class="actions">
              <li>
              <Link to={`/categories/${post.node.uid}`}><a href="#" class="button big">Reading</a></Link>
              </li>
            </ul>
            <ul class="stats">
              <li><a href="#">{post.node.data.category.text}</a></li>
              <li><a href="#" class="icon fa-heart">{post.node.data.date}</a></li>
            </ul>
          </footer>
        </article>
        )})}
      </div>

      <section id="sidebar">
        <section id="intro">
          <a href="#" class="logo"><StaticImage src="../images/logo.jpg" alt="" /></a>
          <header>
            <h2>BUSINESS MENTOR</h2>
            <p>Another fine responsive site template by <a href="http://html5up.net">HTML5 UP</a></p>
          </header>
      </section>

      {data.allPrismicPost.edges.slice(0, 7).map(post => { return (
          <section key={post.node.id}>
            <ul class="posts">
              <li>
                <article>
                  <header>
                    <h3><a>{post.node.data.title.text}</a></h3>
                    <p>Date: {post.node.data.date}</p>
                  </header>
                  <a href="#" class="image featured">
                    <Link to={`/categories/${post.node.uid}`}>
                        <GatsbyImage class="blockImage"
                          image={post.node.data.image.gatsbyImageData}
                          alt={post.node.data.image.alt}/>
                    </Link>
                </a>
                </article>
              </li>
            </ul>
          </section>
        )})}
      


      <section class="blurb">
        <h2>About</h2>
        <p>Mauris neque quam, fermentum ut nisl vitae, convallis maximus nisl. Sed mattis nunc id lorem euismod amet placerat. Vivamus porttitor magna enim, ac accumsan tortor cursus at phasellus sed ultricies.</p>
        <ul class="actions">
          <li><a href="#" class="button">Learn More</a></li>
        </ul>
      </section>

    </section>
    
</div>
<ul class="actions pagination">
    <li><a href="#" class="button big next">Next Page</a></li>
  </ul>



</Layout>
)
export const pageQuery = graphql`
  query PostsQuery {
    allPrismicPost(sort: { fields: data___date, order: DESC }) {
      edges {
        node {
          uid
          data {
            title {
              text
            }
            date(formatString: "")
            image {
              alt
              gatsbyImageData(layout: FULL_WIDTH)
            }
            content {
              html
            }
            description {
              text
            }
            category {
              text
            }
          }
        }
      }
    }
  }
`
export const Head = () => <Seo title="Home" />
export default ArticlesPage
