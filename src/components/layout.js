import React from "react"
import { StaticQuery, graphql } from "gatsby"
import PropTypes from "prop-types"

import Header from "./header"

export default function Layout({ children }) {
  return (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={data => (
        <>
          <Header />
          <div className="">
            <main>{children}</main>
          </div>
        </>
      )}
    />
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}
