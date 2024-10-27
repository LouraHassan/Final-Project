import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const signupAPI = `http://localhost:3000/signup`;
const companyAPI = `http://localhost:3000/company`;
function Signup() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [warningText, setWarningText] = useState("");

  const signupAction = () => {
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
        });
    }
  };

  return (
    <div className="h-screen w-full flex justify-center items-center bg-secondary  ">
      <div className="grid   max-sm:justify-center max-sm:items-center  lg:grid-cols-2 lg:w-[55vw] h-fit bg-white rounded-lg ">
        <div className="p-10 flex flex-col items-center relative  ">
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
              className="icon  icon-tabler icons-tabler-outline icon-tabler-chevron-left text-secondary absolute top-4 left-4"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M15 6l-6 6l6 6" />
            </svg>
          </Link>

          <h1 className="font-title font-bold text-secondary mb-4 text-[5vh]">
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
            {/* <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">Name</span>
              </div>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                className="input w-full "
              />
            </label> */}

            <label className="input input-bordered flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70"
              >
                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
              </svg>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                className="grow"
                placeholder="Name"
              />
            </label>

            <label className="input input-bordered flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70"
              >
                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
              </svg>
              <input
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                type="text"
                className="grow"
                placeholder="Company name"
              />
            </label>

            {/* <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">Company name</span>
              </div>
              <input
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                type="text"
                className="input w-full max-w-xs"
              />
            </label> */}
            {/* <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">Email</span>
              </div>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="text"
                className="input w-full max-w-xs"
              />
            </label> */}

            <label className="input input-bordered flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70"
              >
                <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
              </svg>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="text"
                className="grow"
                placeholder="Email"
              />
            </label>
            {/* <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">Password</span>
              </div>
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                className="input w-full max-w-xs"
              />
            </label> */}
            <label className="input input-bordered flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
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
                className="grow"
                placeholder="password"
              />
            </label>
            <label className="input input-bordered flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
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
                className="grow"
                placeholder="Confirm password"
              />
            </label>
            {/* <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">Confirm password</span>
              </div>
              <input
                value={confirm}
                onChange={(e) => setConfirm(e.target.value)}
                type="password"
                className="input  w-full max-w-xs"
              />
            </label> */}

            <button
              onClick={signupAction}
              className="btn btn-accent m-2 lg:w-full max-md:w-full max-sm:w-full sm:w-full  "
            >
              Signup
            </button>
          </div>
        </div>
        <div className="flex justify-center items-center pr-10">
          <div className="flex flex-col justify-items-center  max-md:hidden md:hidden lg:block ">
            <img
              src="https://cdn.discordapp.com/attachments/1277202818746552463/1299678355548930098/p-logo.png?ex=671ebc0a&is=671d6a8a&hm=cfcb643f2de85682c93756919f3ff0b863fba2bdd98527f64d08a3d1cfe70eb0&"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
