import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "/logo.png";
import NotificationCard from "./NotificationCard";
import axios from "axios";
const updateAPI = `http://localhost:3000/request/`;

function Nav() {
  const navigate = useNavigate();
  const accountType = sessionStorage.getItem("accountType");
  const accountId = sessionStorage.getItem("accountId");

  const [isAdmin, setIsAdmin] = useState(accountType == "admin");

  console.log(sessionStorage.getItem("accountType"));
  console.log(sessionStorage.getItem("accountId"));
  const [notifications, setNotifications] = useState([]);

  const LogoutAction = () => {
    sessionStorage.removeItem("accountId");
    sessionStorage.removeItem("accountType");
    sessionStorage.removeItem("company");
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("department");

    navigate(`/`);
  };

  useEffect(() => {
    const notificationAPI = `http://localhost:3000/getNotifications/${accountId}`;
    getNotifications(notificationAPI);
  }, [accountId]);
  const getNotifications = (api) => {
    // setLoading(true);
    axios
      .get(api)
      .then((res) => {
        console.log(res.data);
        setNotifications(res.data);
      })
      .finally(() => {
        // setLoading(false);
      });
  };
  const dismissAction = (reqId) => {
    // setLoading(true);
    axios
      .put(updateAPI + reqId, {
        accountId: accountId,
      })
      .then((res) => {
        console.log(res.data);
        getNotifications(notificationAPI);
      })
      .finally(() => {
        // setLoading(false);
      });
  };
  return (
    <div className="navbar bg-secondary sticky top-0 text-secondary-content z-10 w-full">
      <div className="navbar-start">
        <Link
          to={
            isAdmin
              ? `/admin/${sessionStorage.getItem("accountId")}`
              : accountType == "manager"
              ? `/Manager/${sessionStorage.getItem("accountId")}`
              : `/Employee/${sessionStorage.getItem("accountId")}`
          }
          className=" flex items-center m-4"
        >
          <span className="font-title font-semibold mx-1 text-2xl">
            MergeNet
          </span>
          <img src={logo} alt="logo" className="w-[30px]" />
        </Link>
        <ul className="menu menu-horizontal px-1 hidden md:flex">
          <li>
            <Link
              to={
                isAdmin
                  ? `/admin/${sessionStorage.getItem("accountId")}`
                  : accountType == "manager"
                  ? `/Manager/${sessionStorage.getItem("accountId")}`
                  : `/Employee/${sessionStorage.getItem("accountId")}`
              }
            >
              Dashboard
            </Link>
          </li>
        </ul>
      </div>
      <div className="navbar-center hidden lg:flex"></div>
      <div className="navbar-end">
        {isAdmin ? <></> :
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-sm btn-ghost md:m-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="icon icon-tabler icons-tabler-filled icon-tabler-bell text-accent"
              >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M14.235 19c.865 0 1.322 1.024 .745 1.668a3.992 3.992 0 0 1 -2.98 1.332a3.992 3.992 0 0 1 -2.98 -1.332c-.552 -.616 -.158 -1.579 .634 -1.661l.11 -.006h4.471z" />
              <path d="M12 2c1.358 0 2.506 .903 2.875 2.141l.046 .171l.008 .043a8.013 8.013 0 0 1 4.024 6.069l.028 .287l.019 .289v2.931l.021 .136a3 3 0 0 0 1.143 1.847l.167 .117l.162 .099c.86 .487 .56 1.766 -.377 1.864l-.116 .006h-16c-1.028 0 -1.387 -1.364 -.493 -1.87a3 3 0 0 0 1.472 -2.063l.021 -.143l.001 -2.97a8 8 0 0 1 3.821 -6.454l.248 -.146l.01 -.043a3.003 3.003 0 0 1 2.562 -2.29l.182 -.017l.176 -.004z" />
            </svg>
            <span className="indicator-item badge badge-secondary">
              {notifications && accountType == "employee"
                ? notifications.employees?.filter(el => !el.isClosedByEmployee).length
                : notifications.newManager?.filter(el => !el.isClosedByNewManager).length +
                  notifications.oldManager?.filter(el => !el.isClosedByOldManager).length}
            </span>
          </div>
          <div
            tabIndex={0}
            className="dropdown-content menu w-[95vw] md:w-[80vw] rounded-box z-[1] bg-white p-6 shadow gap-2"
            >
            {(notifications && notifications.newManager?.length > 0) ||
            notifications.oldManager?.length > 0 ||
            notifications.employees?.length > 0 ? (
              <>
                {notifications.newManager?.map((el) => {
                  if (!el.isClosedByNewManager) {
                    const handleDismiss = () => {
                      dismissAction(el._id);
                    };
                    
                    return (
                      <NotificationCard
                      text={`Employee ${el.employeeName} joined you department as ${el.newPosition}`}
                      onDismiss={handleDismiss}
                      style={"border-info"}
                      icon={
                          <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          className="stroke-info h-6 w-6 shrink-0"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                            ></path>
                          </svg>
                        }
                        />
                    );
                  }
                })}
                {notifications.oldManager?.map((el) => {
                  if (!el.isClosedByOldManager) {
                    const handleDismiss = () => {
                      dismissAction(el._id);
                    };
                    return (
                      <NotificationCard
                      text={`Employee ${el.employeeName} is no longer in your department`}
                      onDismiss={handleDismiss}
                      style={"border-warning"}
                      icon={
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 shrink-0 stroke-current text-warning"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                              />
                          </svg>
                        }
                        />
                    );
                  }
                })}
                {notifications.employees?.map((el) => {
                  if (!el.isClosedByEmployee) {
                    const handleDismiss = () => {
                      dismissAction(el._id);
                    };
                    return (
                      <NotificationCard
                      text={`Your position has been update to ${el.newPosition}`}
                        onDismiss={handleDismiss}
                        style={"border-info"}
                        icon={
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            className="stroke-info h-6 w-6 shrink-0"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                              ></path>
                          </svg>
                        }
                      />
                    );
                  }
                })}
              </>
            ) : (
              <p className="text-neutral">No notifications yet</p>
            )}
          </div>
        </div>
          }
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-sm btn-ghost md:m-1">
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
            <li className="md:hidden">
              <Link
                to={
                  isAdmin
                    ? `/admin/${sessionStorage.getItem("accountId")}`
                    : accountType == "manager"
                    ? `/Manager/${sessionStorage.getItem("accountId")}`
                    : `/Employee/${sessionStorage.getItem("accountId")}`
                }
                className="font-semibold text-secondary"
              >
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
                  className="icon icon-tabler icons-tabler-outline icon-tabler-home text-secondary"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M5 12l-2 0l9 -9l9 9l-2 0" />
                  <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" />
                  <path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6" />
                </svg>
                Dashboard
              </Link>
            </li>

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
