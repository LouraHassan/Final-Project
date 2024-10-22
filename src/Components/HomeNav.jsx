import React from 'react'
import { Link } from 'react-router-dom'
function HomeNav() {
  return (
    <div className="navbar bg-secondary fixed top-0 text-secondary-content z-20">
    <div className="navbar-start">
      <Link to={`/admin`} className="btn btn-ghost text-xl">
        MergeNet
      </Link>
     
    </div>
      <div className="navbar-center hidden lg:flex">
      <ul className="menu menu-horizontal px-1 hidden lg:flex">
        <li>
          <a>ABOUT US</a>
        </li>

        <li>
          <a>HOW IT WORKS</a>
          </li>
          <li>
          <a>KEY FEATURES</a>
          </li>
          <li>
          <a>HOW IT WORKS</a>
          </li>
          <li>
          <a>BENEFITS</a>
          </li>
          <li>
          <a>FAQ</a>
        </li>
        <li>
          <a>CONTACT US</a>
        </li>
      </ul>
    </div>
    <div className="navbar-end">
   
        <Link to={`/Login`} className='btn btn-ghost'>Login</Link>
        <Link to={`/signup`} className='btn '>Signup</Link>

   
    </div>
  </div>
  )
}

export default HomeNav
