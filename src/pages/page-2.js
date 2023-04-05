import { graphql, Link } from "gatsby"
import * as React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"
import "../components/categories.css"


const MainPage = ({ data }) => (
  <Layout>
    <Seo title="Main" />
    <h1>Categories page</h1>
    {data.allPrismicPost.edges.map(post => {
      return (
                
        <article key={post.node.uid}>
        <header>
          <div class="title">
            <h2><a href="#">Magna sed adipiscing</a></h2>
            <p>Lorem ipsum dolor amet nullam consequat etiam feugiat</p>
          </div>
          <div class="meta">
            <time class="published" datetime="2015-11-01"><p>Date: {post.node.data.date}</p></time>
            <a href="#" class="author"><span class="name">Jane Doe</span>
            <GatsbyImage class="blockImage"
            image={post.node.data.image.gatsbyImageData}
            alt={post.node.data.image.alt}/>
            </a>
          </div>
        </header>
        <a href="#" class="image featured">
        <GatsbyImage class="blockImage"
            image={post.node.data.image.gatsbyImageData}
            alt={post.node.data.image.alt}
          />
        </a>
        <p>Mauris neque quam, fermentum ut nisl vitae, ac accumsan tortor cursus at. Phasellus sed ultricies mi non congue ullam corper. Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla.</p>
        <footer>
          <ul class="actions">
            <li><Link to="page-2"><a href="#" class="button big">Continue Reading</a></Link></li>
          </ul>
          <ul class="stats">
            <li><a href="#">General</a></li>
            <li><a href="#" class="icon fa-heart">28</a></li>
            <li><a href="#" class="icon fa-comment">128</a></li>
          </ul>
        </footer>



            
          <h3>{post.node.data.title.text}</h3>
          <GatsbyImage class="blockImage"
            image={post.node.data.image.gatsbyImageData}
            alt={post.node.data.image.alt}
          />
          <Link to={`${post.node.uid}`}>Открыть</Link>

          <hr />
        </article>
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
          date(formatString: "DD.MM.YYYY")
          image {
            alt
            gatsbyImageData(layout: FULL_WIDTH)
          }
        }
      }
    }
  }
}
`
export const Head = () => <Seo title="Page two" />
export default MainPage