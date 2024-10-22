import { useState } from "react";
import EmpList from "../Components/EmpList";
import Select from "react-select";
import EmpCard from "../Components/EmpCard";
import Nav from "../Components/Nav";
export default function AdminHomePage() {
    const [user, setUser] = useState()
    const [selectedEmployees, setSelectedEmployees] = useState([]);
    
    //? for creating manager account 
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const [deptName, setDeptName] = useState('')
  const employeeOptions = [
    { value: "1", label: "Employee 1" },
    { value: "2", label: "Employee 2" },
    { value: "3", label: "Employee 3" },
    { value: "4", label: "Employee 4" },
    { value: "5", label: "Employee 5" },
  ];

  const handleSelectChange = (selectedOptions) => {
    setSelectedEmployees(selectedOptions || []);
    };
    console.log(localStorage.getItem('token'));
    
  return (
      <div>
          <Nav></Nav>
      <div className="p-5 flex flex-col items-start">
        <p className="font-title text-2xl font-bold text-secondary my-4">Build your company's structure</p>
        <p className="font-title text-xl font-bold text-secondary my-4">
          Start creating accounts for managers and employees
        </p>
        <div>
          <button
            className="btn btn-secondary"
            onClick={() =>
              document.getElementById("managerAccountDialog").showModal()
            }
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
              className="icon icon-tabler icons-tabler-outline icon-tabler-user-plus"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
              <path d="M16 19h6" />
              <path d="M19 16v6" />
              <path d="M6 21v-2a4 4 0 0 1 4 -4h4b" />
            </svg>
            Create Manager account
          </button>

          <dialog id="managerAccountDialog" className="modal">
            <div className="modal-box">
              <form method="dialog">
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                  ✕
                </button>
              </form>
              <h3 className="font-bold text-lg">Creating Manager Account</h3>
              <div className=" flex flex-col items-center m-5 border-2 border-black">
              <label className="form-control w-full max-w-xs">
  <div className="label">
    <span className="label-text">Name</span>
  </div>
  <input value={name} onChange={(e) => setName(e.target.value)} type="text" className="input input-bordered w-full " />
 
                  </label>
                
                  <label className="form-control w-full max-w-xs">
  <div className="label">
    <span className="label-text">Email</span>
  </div>
  <input value={email} onChange={(e) => setEmail(e.target.value)} type="text" className="input input-bordered w-full max-w-xs" />
 
                  </label>
                  <label className="form-control w-full max-w-xs">
  <div className="label">
    <span className="label-text">Password</span>
  </div>
  <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" className="input input-bordered w-full max-w-xs" />
 
                  </label>
                <button className="btn btn-secondary btn-wide m-4">Create account</button>
              </div>
            </div>
          </dialog>
          <button
            className="btn btn-outline btn-secondary"
            onClick={() =>
              document.getElementById("employeeAccountDialog").showModal()
            }
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
              className="icon icon-tabler icons-tabler-outline icon-tabler-user-plus"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
              <path d="M16 19h6" />
              <path d="M19 16v6" />
              <path d="M6 21v-2a4 4 0 0 1 4 -4h4" />
            </svg>
            Create Employee account
          </button>
          <dialog id="employeeAccountDialog" className="modal">
            <div className="modal-box">
              <form method="dialog">
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                  ✕
                </button>
              </form>
              <h3 className="font-bold text-lg">Creating Employee Account</h3>
              <div className=" flex flex-col">
                <label className="input input-bordered border-secondary flex items-center gap-2 my-2 w-[20vw]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="h-4 w-4 opacity-70 text-secondary"
                  >
                    <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                  </svg>
                  <input type="text" className="grow" placeholder="Name" />
                </label>
                <label className="input input-bordered border-secondary flex items-center gap-2 my-2 w-[20vw]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="h-4 w-4 opacity-70 text-secondary"
                  >
                    <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                    <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                  </svg>
                  <input type="text" className="grow" placeholder="Email" />
                </label>
                <label className="input input-bordered border-secondary flex items-center gap-2 my-2 w-[20vw]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="h-4 w-4 opacity-70 text-secondary"
                  >
                    <path
                      fillRule="evenodd"
                      d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <input
                    type="password"
                    className="grow"
                    placeholder="password"
                  />
                              </label>
                              <label className="input input-bordered border-secondary flex items-center gap-2 my-2 w-[20vw]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="h-4 w-4 opacity-70 text-secondary"
                  >
                    <path
                      fillRule="evenodd"
                      d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <input
                    type="text"
                    className="grow"
                    placeholder="Position"
                  />
                </label>
                <button className="btn btn-secondary">Create account</button>
              </div>
            </div>
          </dialog>
        </div>
        <p className="font-title text-xl font-bold text-secondary my-4">Departments</p>
        <div>
          <button
            className="btn btn-accent"
            onClick={() =>
              document.getElementById("createDepartmentDialog").showModal()
            }
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
              class="icon icon-tabler icons-tabler-outline icon-tabler-table-plus"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M12.5 21h-7.5a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v7.5" />
              <path d="M3 10h18" />
              <path d="M10 3v18" />
              <path d="M16 19h6" />
              <path d="M19 16v6" />
            </svg>
            Add Department
          </button>
          <dialog id="createDepartmentDialog" className="modal">
            <div className="modal-box">
              <form method="dialog">
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                  ✕
                </button>
              </form>
              <h3 className="font-bold text-lg">Adding New Department</h3>
              <div className=" flex flex-col">
                <label className="input input-bordered border-secondary flex items-center gap-2 my-2 w-[20vw]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="h-4 w-4 opacity-70 text-secondary"
                  >
                    <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                  </svg>
                  <input
                    type="text"
                    className="grow"
                    placeholder="Department name"
                  />
                </label>

                <select
                  type="text"
                  className="grow select select-bordered border-secondary flex items-center gap-2 my-2 w-[20vw]"
                  placeholder="Manager"
                              >
                                  <option value="1">manager 1</option>
                                  <option value="2">manager 2</option>
                                  <option value="3">manager 3</option>
                                  <option value="4">manager 4</option>

                                  </select>

                <Select
                  isMulti
                  options={employeeOptions}
                  value={selectedEmployees}
                  onChange={handleSelectChange}
                  placeholder="Search and select employees"
                />
                {/* Display selected employees */}
                <div style={{ marginTop: "20px" }}>
                  <h4>Department's Employees:</h4>
                  {selectedEmployees.map((employee) => (
                    <p key={employee.value}>{employee.label}</p>
                  ))}
                </div>
                <button className="btn btn-secondary">Add Department</button>
              </div>
            </div>
          </dialog>
        </div>
 
              <div className="grid grid-cols-1 self-center lg:grid-cols-3 gap-4">
             

              </div>
      </div>
    </div>
  );
}
