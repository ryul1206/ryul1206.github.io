import React from "react"
import { Link } from "gatsby"

const Header = () => (
  <header>
    <Link to="/" aria-label="Back to home">
      Home
    </Link>
    <Link to="/about" aria-label="About">
      About
    </Link>
  </header>
)

export default Header
