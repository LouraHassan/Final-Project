import React, { useState } from "react";
import { Link ,useNavigate} from "react-router-dom";
function Nav() {
  const navigate = useNavigate()
  const accountType = localStorage.getItem('accountType')
const [isAdmin, setIsAdmin] = useState(accountType == 'admin')
  console.log(localStorage.getItem('accountType'));
  
  
  const LogoutAction = () => {
    localStorage.removeItem("accountId");
    localStorage.removeItem("accountType");
    localStorage.removeItem("company");
    localStorage.removeItem("token");
    navigate(`/`)
  }
  return (
    <div className="navbar bg-secondary sticky top-0 text-secondary-content z-10">
      <div className="navbar-start">
        <Link to={`/admin`} className="btn btn-ghost text-xl">
          MergeNet
        </Link>
        <ul className="menu menu-horizontal px-1 hidden md:flex">
          <li>
            <Link to={isAdmin?`/admin/${localStorage.getItem('accountId')}`: accountType == 'manager'? `/Manager/${localStorage.getItem('accountId')}`:`/Employee/${localStorage.getItem('accountId')}`}>Dashboard</Link>
          </li>

          {/* <li>
            <a>Managers</a>
          </li>
          <li>
            <a>Employees</a>
          </li> */}
        </ul>
      </div>
      <div className="navbar-center hidden lg:flex"></div>
      <div className="navbar-end">
      

        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost m-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="icon icon-tabler icons-tabler-outline icon-tabler-dots-vertical"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
              <path d="M12 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
              <path d="M12 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-base-100 text-neutral rounded-box z-[1] w-52 p-2 shadow"
          >
            <li>
              <Link onClick={LogoutAction} className="text-error">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="icon icon-tabler icons-tabler-outline icon-tabler-logout"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2" />
                  <path d="M9 12h12l-3 -3" />
                  <path d="M18 15l3 -3" />
                </svg>
                Logout
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Nav;
