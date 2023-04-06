import * as React from "react";
import { Link } from "gatsby";
import { StaticImage, GatsbyImage } from "gatsby-plugin-image";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import Seo from "../components/seo";
import * as styles from "../components/index.module.css";
import "../components/ind.css";

const utmParameters = `?utm_source=starter&utm_medium=start-page&utm_campaign=default-starter`;

const IndexPage = ({ data }) => {
  const [postLimit, setPostLimit] = React.useState(3);

  const handleNextPageClick = () => {
    setPostLimit(postLimit + 3);
  };

  return (
    <Layout>
      <div id="wrapper">
        <div id="main">
          {data.allPrismicPost.edges.slice(0, postLimit).map((post) => {
            return (
              <article className="post" key={post.node.uid}>
                <header>
                  <div className="title">
                    <h2>{post.node.data.title.text}</h2>
                    <p>{post.node.data.description.text}</p>
                  </div>
                  <div className="meta">
                    <a href="#" className="image featured">
                      <Link to={`/categories/${post.node.uid}`}>
                        <GatsbyImage
                          className="blockImage"
                          image={post.node.data.image.gatsbyImageData}
                          alt={post.node.data.image.alt}
                        />
                      </Link>
                    </a>
                  </div>
                </header>

                <footer>
                  <ul className="actions">
                    <li>
                      <Link to={`/categories/${post.node.uid}`}>
                        <a href="#" className="button big">
                          Reading
                        </a>
                      </Link>
                    </li>
                  </ul>
                  <ul className="stats">
                    <li>
                      <a href="#">{post.node.data.category.text}</a>
                    </li>
                    <li>
                      <a href="#" className="icon fa-heart">
                        {post.node.data.date}
                      </a>
                    </li>
                  </ul>
                </footer>
              </article>
            );
          })}
          
          {data.allPrismicPost.edges.length > postLimit && (
            <button onClick={handleNextPageClick}>Load More Posts</button>
          )}
        </div>

        <section id="sidebar">
          <section id="intro">
            <a href="#" className="logo">
              <StaticImage src="../images/logo.jpg" alt="" />
            </a>
            <header>
              <h2>BUSINESS MENTOR</h2>
              <p>
                Another fine responsive site template by{" "}
                <a href="http://html5up.net">HTML5 UP</a>
              </p>
            </header>
          </section>

          {data.allPrismicPost.edges.slice(0, 7).map((post) => {
            return (
              
              <section key={post.node.id}>
                
                <ul className="posts">
                  <li>
                    <article>
                      <header>
                        <h3>
                          <a>{post.node.data.title.text}</a>
                        </h3>
                        <time className="published" dateTime="2015-10-20">
                          {post.node.data.date}
                        </time>
                      </header>
                      <Link to={`/categories/${post.node.uid}`}>
                        <GatsbyImage
                          className="featuredImage"
                          image={post.node.data.image.gatsbyImageData}
                          alt={post.node.data.image.alt}
                        />
                      </Link>
                    </article>
                  </li>
                </ul>
                </section>
            );
          })}
        </section>
      </div>
      {postLimit < data.allPrismicPost.edges.length && (
        <button onClick={handleNextPageClick} className={styles.loadMore}>
          Load More
        </button>
      )}
    </Layout>
  );
};

export const query = graphql`
  query IndexQuery {
    allPrismicPost(sort: { fields: data___date, order: DESC }) {
      edges {
        node {
          id
          uid
          data {
            title {
              text
            }
            description {
              text
            }
            category {
              text
            }
            image {
              alt
              gatsbyImageData(layout: FULL_WIDTH)
            }
            date(formatString: "MMMM Do, YYYY")
          }
        }
      }
    }
  }
`;

export default IndexPage;
