import React from 'react'
import { Link } from 'react-router-dom'
import logo from '/logo.png'
function HomeNav() {
  return (
    <div className="navbar bg-secondary fixed top-0 text-secondary-content z-30">
    <div className="navbar-start">
      <Link to={`/`} className=" flex items-center m-4">
         <span className='font-title font-semibold mx-1 text-2xl'>MergeNet</span>
          <img src={logo} alt="logo" className='w-[30px]'/>
      </Link>
     
    </div>
      <div className="navbar-center hidden lg:flex">
      <ul className="menu menu-horizontal px-1 hidden lg:flex">
        <li>
          <a href="#about-us">ABOUT US</a>
        </li>

        <li>
          <a href="#how-it-works">HOW IT WORKS</a>
          </li>
          <li>
          <a href="#key-features">KEY FEATURES</a>
          </li>
          <li>
          <a href="#benefits">BENEFITS</a>
          </li>
          <li>
          <a href="#faq">FAQ</a>
        </li>
        <li>
          <a href="#contact-us">CONTACT US</a>
        </li>
      </ul>
    </div>
    <div className="navbar-end">
   
        <Link to={`/Login`} className='btn btn-outline btn-primary mx-2'>Login</Link>
        <Link to={`/signup`} className='btn btn-primary'>Signup</Link>

   
    </div>
  </div>
  )
}

export default HomeNav
