import React from 'react'
import { Link } from 'react-router-dom'
function HomeNav() {
  return (
    <div className="navbar bg-secondary fixed top-0 text-secondary-content z-20">
    <div className="navbar-start">
      <Link to={`/admin`} className="btn btn-ghost text-xl">
        MergeNet
      </Link>
      <ul className="menu menu-horizontal px-1 hidden lg:flex">
        <li>
          <a>Item 1</a>
        </li>

        <li>
          <a>Item 3</a>
        </li>
      </ul>
    </div>
    <div className="navbar-center hidden lg:flex"></div>
    <div className="navbar-end">
      <div className="dropdown dropdown-end">
        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </div>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
        >
          <li>
            <a>Item 1</a>
          </li>

          <li>
            <a>Item 3</a>
          </li>
        </ul>
      </div>
        <Link to={`/Login`} className='btn btn-ghost'>Login</Link>
        <Link to={`/signup`} className='btn '>Signup</Link>

   
    </div>
  </div>
  )
}

export default HomeNav
