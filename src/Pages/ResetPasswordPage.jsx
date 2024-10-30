import {useState} from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import axios from 'axios';
const updatePasswordAPI = `https://final-project-backend-bqbl.onrender.com/changePassword`;
function ResetPasswordPage() {
  const {token} = useParams()
  const navigate = useNavigate()
const [password , setPassword] = useState()
const [confirm , setConfirm] = useState()
const [warningText , setWarningText] = useState()
const [loading, setLoading] = useState(false);
const [networkError, setNetworkError] = useState(false);

 
  const resetAction = () => {
    setLoading(true);
    if (password == "" || confirm == "") {
    setWarningText('Please fill all the fields')
    } else if (confirm != password) {
      setWarningText("Password doesn't match")
    }
    else {
      setWarningText("")

    axios
      .post(
        updatePasswordAPI,
        {
          id: token,
          password: password,
        },
        {
          headers: {
            Authorization: sessionStorage.getItem("token"),
          },
        }
      )
      .then((res) => {
        console.log(res);
        navigate(`/Login`)
      })
      .finally(() => {
        setLoading(false);
      });
  }
  }
  return (
    <div className='w-full bg-secondary h-screen flex items-center justify-center'>
       {loading ? (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="p-4 w-[10vw] flex flex-col items-center justify-center bg-secondary rounded-lg">
            <span className="loading loading-dots bg-accent"></span>
          </div>
        </div>
      ) : null}

      <div className='bg-white max-sm:w-[80vw] sm:w-[60vw]  md:w-[50vw] lg:w-[35vw]  p-10 rounded-lg flex flex-col items-center '>
        <p className='text-xl font-semibold text-secondary'>Reset Password</p>
        <div className=" flex flex-col items-center ">

                <label className="form-control w-full">
                  <div className="label">
                    <span className="label-text font-title text-accent font-bold text-lg">
                      New password
                    </span>
                  </div>
                  <input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    className="input input-bordered w-full "
                  />
                </label>
                <label className="form-control w-full ">
                  <div className="label">
                    <span className="label-text font-title text-accent font-bold text-lg">
                      Confirm password
                    </span>
                  </div>
                  <form method="dialog">
                    <input
                      value={confirm}
                      onChange={(e) => setConfirm(e.target.value)}
                      type="password"
                      className="input input-bordered w-full"
                    />
                  </form>
                </label>
                <p className="text-error text-sm m-4">{warningText}</p>

                <button
                  onClick={resetAction}
                  className="btn btn-secondary btn-wide "
                >
                 Reset Password
                </button>
              </div>
      </div>
    </div>
  )
}

export default ResetPasswordPage
