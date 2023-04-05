import { graphql, Link } from "gatsby"
import * as React from "react"

import Layout from "../components/layout"


const Post = ({ data }) => {
  if (!data || !data.prismicPost) return null
  const post = data.prismicPost

  return (
    <Layout>
      
      <div id="wrapper">

  <section id="menu">
  <p className="post-content" dangerouslySetInnerHTML={{ __html: post.data.content.html }} />
      <section>
        <form class="search" method="get" action="#">
          <input type="text" name="query" placeholder="Search" />
        </form>
      </section>

      <section>
        <ul class="links">
          <li>
            <a href="#">
              <h3>Lorem ipsum</h3>
              <p>Feugiat tempus veroeros dolor</p>
            </a>
          </li>
          <li>
            <a href="#">
              <h3>Dolor sit amet</h3>
              <p>Sed vitae justo condimentum</p>
            </a>
          </li>
          <li>
            <a href="#">
              <h3>Feugiat veroeros</h3>
              <p>Phasellus sed ultricies mi congue</p>
            </a>
          </li>
          <li>
            <a href="#">
              <h3>Etiam sed consequat</h3>
              <p>Porta lectus amet ultricies</p>
            </a>
          </li>
        </ul>
      </section>

      <section>
        <ul class="actions vertical">
          <li><a href="#" class="button big fit">Log In</a></li>
        </ul>
      </section>

  </section>

  <div id="main">

      <article class="post">
        <header>
          <div class="title">
          <h3>
            <a>{post.data.title.text}</a>
          </h3>
            <p>Lorem ipsum dolor amet nullam consequat etiam feugiat</p>
          </div>
          <div class="meta">
          <p>Date: {post.data.date}</p>
            <a href="#" class="author"><span class="name">Jane Doe</span><img src="images/avatar.jpg" alt="" /></a>
          </div>
        </header>
        <span class="image featured"><img src="images/pic01.jpg" alt="" /></span>
        <div dangerouslySetInnerHTML={{ __html: post.data.content.html }}/>
        <footer>
          <ul class="stats">
            <li><a href="#">General</a></li>
            <li><a href="#" class="icon fa-heart">28</a></li>
            <li><a href="#" class="icon fa-comment">128</a></li>
          </ul>
        </footer>
      </article>

  </div>

  <section id="footer">
    <ul class="icons">
      <li><a href="#" class="fa-twitter"><span class="label">Twitter</span></a></li>
      <li><a href="#" class="fa-facebook"><span class="label">Facebook</span></a></li>
      <li><a href="#" class="fa-instagram"><span class="label">Instagram</span></a></li>
      <li><a href="#" class="fa-rss"><span class="label">RSS</span></a></li>
      <li><a href="#" class="fa-envelope"><span class="label">Email</span></a></li>
    </ul>
   
  </section>

</div>

    </Layout>
    
  )
}

export const pageQuery = graphql`
  query PostByUid($uid: String!) {
    prismicPost(uid: { eq: $uid }) {
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
`

export default Post