import React from "react";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <footer className="p-20 bg-neutral text-neutral-content">
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="flex items-center">
          <p className="text-2xl">MergeNet</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="icon icon-tabler icons-tabler-filled icon-tabler-circles text-accent rotate-90 m-2"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M6.5 12a5 5 0 1 1 -4.995 5.217l-.005 -.217l.005 -.217a5 5 0 0 1 4.995 -4.783z" />
            <path d="M17.5 12a5 5 0 1 1 -4.995 5.217l-.005 -.217l.005 -.217a5 5 0 0 1 4.995 -4.783z" />
            <path d="M12 2a5 5 0 1 1 -4.995 5.217l-.005 -.217l.005 -.217a5 5 0 0 1 4.995 -4.783z" />
          </svg>
        </div>
        <ul className="menu menu-horizontal font-semibold tracking-wide">
          <li>
            <Link>Home</Link>
          </li>
          <li>
            <p>Login</p>
          </li>
          <li>
            <p>Signup</p>
          </li>
          <li>
            <p>Contact</p>
          </li>
        </ul>
        <p>All copy rights reserved</p>
      </div>
    </footer>
  );
}

export default Footer;
