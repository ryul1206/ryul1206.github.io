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
        // <> == <React.Fragment>
        <>
          <Header />
          <div className=" tw-mt-16 tw-mb-0 tw-mx-auto tw-p-5 tw-max-w-screen-sm">
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
