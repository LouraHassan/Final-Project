import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const signupAPI = `http://localhost:3000/signup`;
const companyAPI = `http://localhost:3000/company`;
import logo from "/logo.png";

function Signup() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [warningText, setWarningText] = useState("");
  const [loading, setLoading] = useState(false);
  const signupAction = () => {
    setLoading(true);
    if (
      name == "" ||
      company == "" ||
      email == "" ||
      password == "" ||
      confirm == ""
    ) {
      setWarningText("Please fill all the fields first");
    } else if (confirm != password) {
      setWarningText("Password doesn't match");
    } else {
      setWarningText("");
      axios
        .post(signupAPI, {
          name: name,
          email: email,
          company: company,
          password: password,
          accountType: "admin",
        })
        .then((res) => {
          console.log(res);
          sessionStorage.setItem("accountId", res.data.id);
          sessionStorage.setItem("accountType", "admin");
          sessionStorage.setItem("token", res.data.token);
          sessionStorage.setItem("company", res.data.company._id);
          navigate(`/admin/${res.data.id}`);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  };

  return (
    <div>
      <div className=" lg:w-full h-screen flex max-sm:justify-center  lg:flex-col justify-center items-center lg:items-end ">
        <Link to={`/`}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="icon  icon-tabler icons-tabler-outline icon-tabler-chevron-left text-secondary absolute top-7 left-7"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M15 6l-6 6l6 6" />
          </svg>
        </Link>

        <div className="z-10 flex justify-end md:absolute sm:absolute my-10  max-md:top-1 max-md:right-6 sm:top-1 sm:right-10 md:top-1 md:right-10 lg:top-[5vh] lg:right-[5vh] max-sm:right-16 max-sm:top-10   lg:w-full ">
          <div className="card bg-secondary  p-10 flex max-sm:w-[37vh] lg:flex-col  relative sm:w-[67vh] max-md:w-[67vh] md:w-[76vh] lg:w-[96vh]  ">
            <h1 className="font-title font-bold max-sm:ml-5  lg:ml-7  text-white mb-4 text-[5vh]">
              Signup
            </h1>
            <p
              className={`text-error text-sm self-start ${
                warningText != "" ? "p-4" : "p-2"
              }`}
            >
              {warningText}
            </p>
            <div className="flex flex-col items-center gap-3">
              <div className="flex gap-3">
                <label className="input input-bordered flex items-center gap-2  ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="gray"
                    className="h-4 w-4 opacity-70 "
                  >
                    <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                  </svg>
                  <input
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    type="text"
                    className="grow lg:w-[69vh] max-lg:w-[80vh] max-sm:w-[20vh] max-md:w-[50vh]  md:w-[57vh] "
                    placeholder="Company name"
                  />
                </label>
              </div>

              <div className="flex max-sm:flex-col  gap-3">
                <label className="input input-bordered flex items-center gap-2 ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="gray"
                    className="h-4 w-4 opacity-70"
                  >
                    <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                  </svg>
                  <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    type="text"
                    className="grow max-sm:w-[20vh] lg:w-[30vh] max-md:w-[20vh] md:w-[23vh]"
                    placeholder="Name"
                  />
                </label>

                <label className="input input-bordered flex items-center gap-2  ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="gray"
                    className="h-4 w-4 opacity-70"
                  >
                    <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                    <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                  </svg>
                  <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="text"
                    className="grow max-sm:w-[20vh] lg:w-[30vh] max-md:w-[20vh] md:w-[23vh]"
                    placeholder="Email"
                  />
                </label>
              </div>
              <div className="flex gap-3  max-sm:flex-col">
                <label className="input input-bordered flex items-center gap-2 ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="gray"
                    className="h-4 w-4 opacity-70"
                  >
                    <path
                      fillRule="evenodd"
                      d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    className="grow max-sm:w-[20vh] lg:w-[30vh] max-md:w-[20vh] md:w-[23vh]"
                    placeholder="password"
                  />
                </label>

                <label className="input input-bordered flex items-center gap-2  ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="gray"
                    className="h-4 w-4 opacity-70"
                  >
                    <path
                      fillRule="evenodd"
                      d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <input
                    value={confirm}
                    onChange={(e) => setConfirm(e.target.value)}
                    type="password"
                    className="grow max-sm:w-[20vh]  lg:w-[30vh] max-md:w-[20vh] md:w-[23vh]"
                    placeholder="Confirm password"
                  />
                </label>
              </div>

              <button
                onClick={signupAction}
                className="btn font-title font-bold text-lg btn-accent m-2  lg:w-[30vh] max-md:w-[30vh] md:w-[30vh] max-sm:w-[30vh] sd:w-[30vh]  "
              >
                Signup
              </button>
            </div>
          </div>
        </div>
        <Link
          to={`/admin/${sessionStorage.getItem("accountId")}`}
          className=" flex items-center m-4 self-start mx-6 my-10 max-md:self-center md:self-center absolute max-sm:hidden lg:left-10   lg:bottom-14 max-md:left-14 max-md:bottom-2 md:left-14 md:bottom-10 z-20"
        >
          <span className="font-title font-semibold mx-1 text-5xl text-white ">
            MergeNet
          </span>
          <img src={logo} alt="logo" className="w-[30px]" />
        </Link>

        <div className="custom-shape-divider-bottom-1729943384 max-sm:hidden max-md:block md:block">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M598.97 114.72L0 0 0 120 1200 120 1200 0 598.97 114.72z"
              class="shape-fill"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  );
}

export default Signup;
