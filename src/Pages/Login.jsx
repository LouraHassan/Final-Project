import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const LoginAPI = `http://localhost:3000/login`;
function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [warningText, setWarningText] = useState("");

  const loginAction = () => {
    if (email == "" || password == "") {
      setWarningText("");
    } else {
      axios
        .post(LoginAPI, {
          email: email,
          password: password,
        })
        .then((res) => {
          console.log(res);
          
          localStorage.setItem("accountId", res.data.id);
          localStorage.setItem("accountType", res.data.accountType);
          localStorage.setItem("company", res.data.company);
          localStorage.setItem("token", res.data.token);
          localStorage.setItem("department", res.data.department._id);

          if (res.data.accountType === "admin") {
            navigate(`/admin/${res.data.id}`);
          } else if (res.data.accountType === 'manager') {
            navigate(`/Manager/${res.data.id}`)
          } else if (res.data.accountType === 'employee') {
            navigate(`/Employee/${res.data.id}`)
          }
        })
    }
  };

  return (
    <div>
      <div className="flex justify-center items-center  bg-[#30475e] w-full h-screen ">
        <div className="flex justify-center items-center justify-around rounded-lg bg-white h-[70%] max-md:h-auto max-sm:h-auto ">
          <div className=" flex justify-center items-center">
            <div className="p-16 flex flex-col items-center relative   ">
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
              <div className="card   bg-white w-96 max-md:w-[100%]">
                <div className="card-body justify-around items-center text-center h-[52vh]">
                  <h1 className="font-title font-bold text-secondary text-[3vh]">
                    Login
                  </h1>
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
                  <h1 className="text-[2vh] flex justify-start w-[70%] hover:text-blue-800">
                    Forgot Password?
                  </h1>
                  <div className="card-actions">
                    <button
                      onClick={loginAction}
                      className="btn  btn-accent text-white w-[30vh]"
                    >
                      Login
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=" flex justify-center w-[40%]  max-md:hidden max-sm:hidden">
            <div>
              <h1 className="font-title font-bold text-secondary text-[6vh] text-center ">
                welcome back
              </h1>
              <img
                src="https://media.discordapp.net/attachments/1294220545696596029/1297877355636981770/p-logo.png?ex=67182eba&is=6716dd3a&hm=b21e374d7163fe7e5d36c904836d176aa422ad745f2516e360326ce2a873ebaf&=&format=webp&quality=lossless&width=980&height=980"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
