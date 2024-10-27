import React from "react";
import logo from '/logo.png'

import { Link } from "react-router-dom";
function Footer() {
  return (
    <footer className="p-10 bg-neutral text-neutral-content">
      <div className="flex flex-col  items-center justify-between">
      <Link to={`/`} className=" flex items-center m-4">
         <span className='font-title font-semibold mx-1 text-2xl'>MergeNet</span>
          <img src={logo} alt="logo" className='w-[30px]'/>
      </Link>
        <ul className="menu menu-horizontal font-semibold tracking-wide">
        
        </ul>
        <p>&copy; All rights reserved to MergeNet</p>      </div>
    </footer>
  );
}

export default Footer;
