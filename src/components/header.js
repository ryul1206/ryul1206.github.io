import React from "react"
import { Link } from "gatsby"

const Header = () => (
  <div className="">
    <ul className="nav_styles">
      <li className="float_right">
        {/* eslint-disable-next-line */}
        <a
          href="https://github.com/ryul1206/"
          target="_blank"
          rel="noopener noreferrer"
          className="menu_link"
        >
          GitHub
        </a>
        <li className="float_right">
          <Link to="/" className="menu_link">
            Home
          </Link>
        </li>
        <li className="float_right">
          <Link to="/404" className="menu_link">
            404
          </Link>
        </li>
      </li>
    </ul>
  </div>
)

export default Header
