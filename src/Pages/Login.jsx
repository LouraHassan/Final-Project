import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "/logo.png";

const LoginAPI = `https://final-project-backend-bqbl.onrender.com/login`;
const emailAPI = `http://localhost:3000/temporaryPassword`;
function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [sendEmail, setSendEmail] = useState("");
  const [warningText, setWarningText] = useState("");
  const [warningText2, setWarningText2] = useState("");

  const [loading, setLoading] = useState(false);

  const loginAction = () => {
    setLoading(true);
    if (email == "" || password == "") {
      setWarningText("Please fill al the fields");
    } else {
      setWarningText("");

      axios
        .post(LoginAPI, {
          email: email,
          password: password,
        })
        .then((res) => {
          console.log(res);
          sessionStorage.setItem("accountId", res.data.id);
          sessionStorage.setItem("accountType", res.data.accountType);
          sessionStorage.setItem("company", res.data.company);
          sessionStorage.setItem("token", res.data.token);
          sessionStorage.setItem("department", res.data.department?._id);

          if (res.data.accountType === "admin") {
            navigate(`/admin/${res.data.id}`);
          } else if (res.data.accountType === "manager") {
            navigate(`/Manager/${res.data.id}`);
          } else if (res.data.accountType === "employee") {
            navigate(`/Employee/${res.data.id}`);
          }
        })
        .catch((err) => {
          setWarningText(err.response.data.msg);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  };

  const SendEmailAction = () => {
    if (sendEmail != "") {
      setLoading(true);
      setWarningText2("");
      axios
        .post(emailAPI, {
          email: sendEmail,
        })
        .then((res) => {
          console.log(res);
          setWarningText2("");
          setSendEmail("");
          document.getElementById("changepassword").close();
        })
        .catch((err) => {
          setWarningText2(err.response.data.msg);
        })
        .finally(() => {
          setLoading(false);
        });
    }
    setWarningText2("Enter your email");
  };
  return (
    <div>
      {loading ? (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="p-4 w-[10vw] flex flex-col items-center justify-center bg-secondary rounded-lg">
            <span className="loading loading-dots bg-accent"></span>
          </div>
        </div>
      ) : null}
      <div className="w-full justify-center h-screen flex items-center lg:flex-col md:justify-end md:items-end lg:items-end p-10">
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

        <div className="z-10 flex justify-end my-10 md:absolute md:top-28 ">
          <div className="card bg-secondary  p-10 flex w-[60vw] max-sm:w-[70vw] md:w-[60vw] lg:w-[40vw] flex-col  ">
            <div className="flex flex-col items-center gap-3 ">
              <div className="flex flex-col gap-3  w-full lg:w-[20vw] max-sm:flex-col ">
                <h1 className="font-title font-bold max-sm:text-center  self-start text-white mb-4 text-[5vh]">
                  Log in
                </h1>
                <label className="input input-bordered flex items-center gap-2">
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
                <label className="input input-bordered flex items-center gap-2">
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
                <h1
                  onClick={() =>
                    document.getElementById("changepassword").showModal()
                  }
                  className="   text-[2vh] flex text-white justify-start cursor-pointer hover:text-accent"
                >
                  Forgot Password?
                </h1>
                <p className="text-error">{warningText}</p>
                <button
                  onClick={loginAction}
                  className="btn font-title font-bold text-lg btn-accent my-2 w-full "
                >
                  Log in
                </button>
              </div>

              <dialog id="changepassword" className="modal ">
                {loading ? (
                  <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
                    <div className="p-4 w-[10vw] flex flex-col items-center justify-center bg-secondary rounded-lg">
                      <span className="loading loading-dots bg-accent"></span>
                    </div>
                  </div>
                ) : null}
                <div className="modal-box w-[60vh] max-sm:w-[50vh] p-10 flex flex-col bg-white justify-center items-center">
                  <form method="dialog">
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                      ✕
                    </button>
                  </form>
                  <h3 className="font-title font-bold text-lg text-secondary">
                    Password Reset
                  </h3>
                  <label className="font-title text-accent my-3">
                    Enter your email to receive the new password
                  </label>

                  <input
                    value={sendEmail}
                    onChange={(e) => setSendEmail(e.target.value)}
                    type="Email"
                    className="input input-bordered w-full max-w-xs"
                  />
                  <p className="text-error text-sm">{warningText2}</p>
                  <button
                    onClick={SendEmailAction}
                    className=" btn btn-secondary text-white mt-3 "
                  >
                    Send Email
                  </button>
                </div>
              </dialog>
            </div>
          </div>
        </div>
        <Link
          to={`/admin/${sessionStorage.getItem("accountId")}`}
          className="hidden md:flex items-center m-4 self-start mx-6 my-10 max-md:self-center md:self-center absolute  lg:left-10   lg:bottom-14 max-md:left-14 max-md:bottom-2 md:left-14 md:bottom-10 z-20"
        >
          <span className="font-title font-semibold mx-1 text-5xl text-white ">
            MergeNet
          </span>
          <img src={logo} alt="logo" className="w-[30px]" />
        </Link>
        <div className="custom-shape-divider-bottom-1729943384 hidden  md:block">
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

export default Login;
