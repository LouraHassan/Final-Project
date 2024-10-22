
import {useEffect, useState} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const signupAPI = `http://localhost:3000/signup`
const companyAPI = `http://localhost:3000/company`
function Signup() {
    const navigate = useNavigate()
    const [name, setName] = useState('')
    const [company , setCompany ] = useState('')
    const [email , setEmail ] = useState('')
    const [password , setPassword ] = useState('')
    const [confirm , setConfirm ] = useState('')
    const [warningText, setWarningText] = useState('')
   
    const signupAction = () => {
        if (name == '' || company == '' || email == '' || password == '' || confirm == '') {
            setWarningText('Please fill all the fields first')             
        } else if (confirm != password) {
            setWarningText("Password doesn't match")             
        } 
        else {
            setWarningText('')
            axios.post(signupAPI, {
                name: name,
                email: email,
                company:company,
                password: password,
                accountType: 'admin'
            }).then(res => {
                console.log(res);
                localStorage.setItem('accountId', res.data.id)
                localStorage.setItem('accountType', 'admin')
                localStorage.setItem('token', res.data.token)
              navigate(`/admin/${res.data.id}`)
            })
        }
    }
    
  return (
    <div className="h-screen w-full flex justify-center items-center bg-secondary">
      <div className="grid lg:grid-cols-2 lg:w-[75vw]  h-fit bg-white rounded-md">
              <div className="p-16 flex flex-col items-center">
                  <div className="flex flex-col items-center ">
                      
        <label className="form-control w-full max-w-xs">
  <div className="label">
    <span className="label-text">Name</span>
  </div>
  <input value={name} onChange={(e) => setName(e.target.value)} type="text" className="input w-full " />
 
                  </label>
                  <label className="form-control w-full max-w-xs">
  <div className="label">
    <span className="label-text">Company name</span>
  </div>
  <input value={company} onChange={(e) => setCompany(e.target.value)} type="text" className="input w-full max-w-xs" />
 
                  </label>
                  <label className="form-control w-full max-w-xs">
  <div className="label">
    <span className="label-text">Email</span>
  </div>
  <input value={email} onChange={(e) => setEmail(e.target.value)} type="text" className="input w-full max-w-xs" />
 
                  </label>
                  <label className="form-control w-full max-w-xs">
  <div className="label">
    <span className="label-text">Password</span>
  </div>
  <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" className="input w-full max-w-xs" />
 
                  </label>
                  <label className="form-control w-full max-w-xs">
  <div className="label">
    <span className="label-text">Confirm password</span>
  </div>
  <input value={confirm} onChange={(e) => setConfirm(e.target.value)} type="password" className="input  w-full max-w-xs" />
 
                  </label>
                  <p className={`text-error text-sm self-start ${warningText != ''? 'p-4' : 'p-2'}`}>{warningText}</p>
                  <button onClick={signupAction} className="btn btn-accent m-2 lg:w-[21vw]">Signup</button>
                  </div>
              </div>
              <div className="flex flex-col justify-center items-center">
                  <div className="flex items-center">
                      
              <p className="text-3xl font-semibold">MergeNet</p>
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
                  <p className="text-accent font-title text-4xl">Manage your employees</p>
              </div>
      </div>
    </div>
  );
}

export default Signup;
