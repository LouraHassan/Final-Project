import { useState } from "react";
import EmpList from "../Components/EmpList";
import Select from "react-select";
import EmpCard from "../Components/EmpCard";
import DepCard from "../Components/DepCard";
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
      <div className="py-5 px-16 flex flex-col items-start">
        <p className="font-title text-2xl font-bold text-secondary my-4">Build your company's structure</p>
      
        <p className="font-title text-xl font-bold text-secondary my-4">Departments</p>
              <div className="flex flex-col items-center w-full">
              <div className="grid grid-cols-1 justify-items-center md:grid-cols-2 lg:grid-cols-3 gap-4  lg:w-[80vw]">
             <DepCard Employees={6} Shortage={2} Surplus={0}></DepCard>
                  <DepCard Employees={6} Shortage={2} Surplus={0}></DepCard>
                  <DepCard Employees={6} Shortage={2} Surplus={0}></DepCard>
                  
              </div>
          <button
            className="btn btn-accent m-4"
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
              </div>
              <p className="font-title text-xl font-bold text-secondary my-4">Managers</p>

                  <div className="flex flex-col items-center  w-full md:w-[80vw] self-center">
                  <div className="overflow-x-auto w-full md:w-[80vw] bg-white md:self-center md:m-4 shadow-md shadow-gray-300 rounded-lg" >
          <table className="table">
            <thead>
              <tr className="font-title text-lg">
                <th>Manager Name</th>
                <th>Position</th>
             
              </tr>
            </thead>
            <tbody>
              <EmpList
                id="1"
                name="Ahmed Alghamdi"
                position="Human Resources Manager"
                          ></EmpList>
                           <EmpList
                id="1"
                name="Ahmed Alghamdi"
                position="Business Analyst"
              ></EmpList>
                           <EmpList
                id="1"
                name="Ahmed Alghamdi"
                position="Business Analyst"
              ></EmpList>             <EmpList
              id="1"
              name="Ahmed Alghamdi"
              position="Business Analyst"
            ></EmpList>             <EmpList
            id="1"
            name="Ahmed Alghamdi"
            position="Business Analyst"
          ></EmpList>
            </tbody>
          </table>
                  </div>
                  <button
            className="btn btn-outline btn-secondary self-start my-2"
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
              </div>
                  <p className="font-title text-xl font-bold text-secondary my-4">Employees</p>

                  <div className="flex flex-col items-center w-full md:w-[80vw] self-center">
                  <div className="overflow-x-auto w-full md:w-[80vw] bg-white md:self-center md:m-4 shadow-md shadow-gray-300 rounded-lg" >
          <table className="table">
            <thead>
              <tr className="font-title text-lg">
                <th>Employee Name</th>
                <th>Position</th>
             
              </tr>
            </thead>
            <tbody>
              <EmpList
                id="1"
                name="Ahmed Alghamdi"
                position="Business Analyst"
                          ></EmpList>
                           <EmpList
                id="1"
                name="Ahmed Alghamdi"
                position="Business Analyst"
              ></EmpList>
                           <EmpList
                id="1"
                name="Ahmed Alghamdi"
                position="Business Analyst"
              ></EmpList>             <EmpList
              id="1"
              name="Ahmed Alghamdi"
              position="Business Analyst"
            ></EmpList>             <EmpList
            id="1"
            name="Ahmed Alghamdi"
            position="Business Analyst"
          ></EmpList>
            </tbody>
          </table>
                  </div>
                  <button
            className="btn btn-outline btn-secondary self-start my-2"
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
              </div>
            
        <div>
          

          <dialog id="managerAccountDialog" className="modal">
            <div className="modal-box flex flex-col items-center">
              <form method="dialog">
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                  ✕
                </button>
              </form>
              <h3 className="font-bold text-lg">Creating Manager Account</h3>
              <div className=" flex flex-col items-center m-5 ">
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
        
          <dialog id="employeeAccountDialog" className="modal">
            <div className="modal-box flex flex-col items-center">
              <form method="dialog">
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                  ✕
                </button>
              </form>
              <h3 className="font-bold text-lg">Creating Employee Account</h3>
                          <div className=" flex flex-col items-center m-5 ">
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
        </div>
          <dialog id="createDepartmentDialog" className="modal">
            <div className="modal-box">
              <form method="dialog">
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                  ✕
                </button>
              </form>
              <h3 className="font-bold text-lg">Adding New Department</h3>
              <div className=" flex flex-col items-center m-5 ">
              <label className="form-control w-full max-w-xs">
  <div className="label">
    <span className="label-text">Name</span>
  </div>
  <input value={deptName} onChange={(e) => setDeptName(e.target.value)} type="text" className="input input-bordered w-full " />
 
                  </label>
                  <label className="form-control w-full max-w-xs">
  <div className="label">
    <span className="label-text">Select Manager</span>
  </div>
  <select className="select select-bordered">
    <option disabled selected>select</option>
    <option>Star Wars</option>
    <option>Harry Potter</option>
    <option>Lord of the Rings</option>
   
  </select>
 
</label>
                <select
                  type="text"
                  className="grow select select-bordered  flex items-center gap-2 my-2 "
                  placeholder="Manager"
                              >
                                  <option value="1">manager 1</option>
                                  <option value="2">manager 2</option>
                                  <option value="3">manager 3</option>
                                  <option value="4">manager 4</option>

                                  </select>
                <button className="btn btn-secondary">Add Department</button>
              </div>
            </div>
          </dialog>
        </div>
 
           
    </div>
  );
}
