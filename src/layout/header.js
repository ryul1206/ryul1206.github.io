import React from "react"
import { Link } from "gatsby"

import DarkModeToggle from "../components/dark-mode-toggle"

const Header = () => {
  return (
    <header className="navbar">
      <Link to="/" aria-label="Back to home">
        Home
      </Link>
      <Link to="/about" aria-label="About">
        About
      </Link>
      <DarkModeToggle />
    </header>
  )
}

export default Header
