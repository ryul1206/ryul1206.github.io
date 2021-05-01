import React from "react"

import Layout from "../components/layout"
import Container from "../components/container"

export default function Home() {
  return (
    <Layout>
      <Container>
        <h2>Hello world!</h2>
      </Container>

      <div className="tw-min-h-screen tw-bg-white tw-p-4 tw-flex tw-items-center">
        <div className="tw-space-x-2 tw-bg-blue-50 tw-p-4 tw-rounded tw-flex tw-items-start tw-text-blue-600 tw-my-4 tw-shadow-lg tw-mx-auto tw-max-w-2xl">
          <div className="tw-text-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="tw-fill-current tw-w-5 tw-pt-1"
              viewBox="0 0 24 24"
            >
              <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.5 5h3l-1 10h-1l-1-10zm1.5 14.25c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25 1.25.56 1.25 1.25-.56 1.25-1.25 1.25z" />
            </svg>
          </div>
          <h3 className="tw-text-blue-800 tw-tracking-wider tw-flex-1">
            Lorem ipsum is placeholder text commonly used
          </h3>
          <div className="tw-inline-flex tw-items-center tw-space-x-2">
            <p className="hover:tw-underline hover:tw-cursor-pointer">
              Details
            </p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="tw-fill-current tw-h-4 tw-pt-1"
              viewBox="0 0 24 24"
            >
              <path d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z" />
            </svg>
          </div>
        </div>
      </div>
    </Layout>
  )
}
