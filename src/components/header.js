import * as React from "react"
import { Link } from "gatsby"

const Header = ({ siteTitle }) => (
  <header id="header">
  <Link to="/"><h1><a href="#">Business mentor</a></h1></Link>
  <nav class="links">
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/categories">Categories</Link></li>
      <li><Link to="/main.js">All articles</Link></li>
    </ul>
  </nav>
  <nav class="main">
    <ul>
      <li class="menu">
        <a class="fa-bars" href="#menu">Menu</a>
      </li>
    </ul>
  </nav>
</header>
)

export default Header
