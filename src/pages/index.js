import React from "react"
import "./index.css"

export default function Home() {
  return (
    <div>
      <h2>Hello world!</h2>
      <div className="min-h-screen bg-white p-4 flex items-center">
        <div className="space-x-2 bg-blue-50 p-4 rounded flex items-start text-blue-600 my-4 shadow-lg mx-auto max-w-2xl">
          <div className="text-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="fill-current w-5 pt-1"
              viewBox="0 0 24 24"
            >
              <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.5 5h3l-1 10h-1l-1-10zm1.5 14.25c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25 1.25.56 1.25 1.25-.56 1.25-1.25 1.25z" />
            </svg>
          </div>
          <h3 className="text-blue-800 tracking-wider flex-1">
            Lorem ipsum is placeholder text commonly used
          </h3>
          <div className="inline-flex items-center space-x-2">
            <p className="hover:underline hover:cursor-pointer">Details</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="fill-current h-4 pt-1"
              viewBox="0 0 24 24"
            >
              <path d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  )
}
