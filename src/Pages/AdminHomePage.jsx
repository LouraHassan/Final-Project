import { useEffect, useState } from "react";
import EmpList from "../Components/EmpList";
import Select from "react-select";
import EmpCard from "../Components/EmpCard";
import DepCard from "../Components/DepCard";
import Nav from "../Components/Nav";
import { useParams } from "react-router-dom";
import axios from "axios";

const AccountsAPI = `http://localhost:3000/account/`
const createAccountsAPI = `http://localhost:3000/createAccount?company=${localStorage.getItem('company')}`
const managersAPI = `http://localhost:3000/account/type/manager?company=${localStorage.getItem('company')}`
const employeeAPI = `http://localhost:3000/account/type/employee?company=${localStorage.getItem('company')}`
const CreateDeptAPI = `http://localhost:3000/department?company=${localStorage.getItem('company')}`
const DepartmentsAPI = `http://localhost:3000/department?company=${localStorage.getItem('company')}`
export default function AdminHomePage() {

    const {id} = useParams()
    const [user, setUser] = useState()
    const [managerArr, setManagerArr] = useState([])
    const [employeeArr, setEmployeeArr] = useState([])
    const [departmentArr, setDepartmentsArr] = useState([])

    const [selectedEmployees, setSelectedEmployees] = useState([]);
    
    //? for creating manager account 
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [position, setPosition] = useState('')

const [warningText, setWarningText] = useState('')
    const [deptName, setDeptName] = useState('')
const [manager , setManager] = useState('')
    useEffect(() => {
        getUser()
    }, [])
    useEffect(() => {
        getManagers()
        getEmployee()
        getDepartments()
    }, [])
    
    useEffect(() => {
        console.log(manager);
        
    },[manager])
    const getUser = () => {
        axios.get(AccountsAPI + id + `?company=${localStorage.getItem('company')}`, {
            headers: {
                'Authorization': localStorage.getItem('token')
              }
        }).then(res => {
            setUser(res.data)
            console.log(res);
            
        })
    }
    const getManagers = () => {
        axios.get(managersAPI, {
            headers: {
                'Authorization': localStorage.getItem('token')
              }
        }).then(res => {
            console.log(res);
            setManagerArr(res.data)
        })
    }

    const getEmployee = () => {
        axios.get(employeeAPI, {
            headers: {
                'Authorization': localStorage.getItem('token')
              }
        }).then(res => {
            console.log(res);
            setEmployeeArr(res.data)
            
        })
    }
    const getDepartments = () => {
        axios.get(DepartmentsAPI, {
            headers: {
                'Authorization': localStorage.getItem('token')
              }
        }).then(res => {
            console.log(res);
            setDepartmentsArr(res.data)
        })
    }
    const createDeptAction = () => {
        axios.post(CreateDeptAPI, {
            name: deptName,
            manager: manager
        }, {
            headers: {
                'Authorization': localStorage.getItem('token')
              }  
        }).then(res => {
            console.log(res);
            
        })
    }
  const employeeOptions = [
    { value: "1", label: "Employee 1" },
    { value: "2", label: "Employee 2" },
    { value: "3", label: "Employee 3" },
    { value: "4", label: "Employee 4" },
    { value: "5", label: "Employee 5" },
    ];
    
    const CreateManager = () => {
        if (name == '' || email == '' || password == '') {
            setWarningText('')
        } else {
            axios.post(createAccountsAPI, {
                name: name,
                email: email,
                password: password,
                accountType: 'manager'
            }, {
                headers: {
                    'Authorization': localStorage.getItem('token')
                  }
            }).then(res => {
                setName('')
                setEmail('')
                setPassword('')
                console.log(res);  
            })
        }
    }

    const CreateEmployee = () => {
        if (name == '' || email == '' || password == '' || position == '') {
            setWarningText('')
        } else {
            axios.post(createAccountsAPI, {
                name: name,
                positionTitle: position,
                email: email,
                password: password,
                accountType: 'employee'
            }, {
                headers: {
                    'Authorization': localStorage.getItem('token')
                  }
            }).then(res => {
                setName('')
                setEmail('')
                setPassword('')
                console.log(res);  
            })
        }
 }
    
  return (
      <div>
          <Nav></Nav>
      <div className="py-5 px-16 flex flex-col items-start">
        <p className="font-title text-2xl font-bold text-secondary my-4">Build your company's structure</p>
      
        <p className="font-title text-xl font-bold text-secondary my-4">Departments</p>
              <div className="flex flex-col items-center w-full">
                  <div className="grid grid-cols-1 justify-items-center md:grid-cols-2 lg:grid-cols-3 gap-4  lg:w-[80vw]">
                      {departmentArr.map(dept => {
                          return(<DepCard id={dept._id} name={dept.name} manager={dept.manager?.name || 'No manager'} employees={dept.employees?.length || 0} shortage={dept.positions?.length || 0} surplus={dept.neededEmployees?.length || 0}></DepCard>)
                      })}
           
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
                <th>Department</th>
             
              </tr>
            </thead>
                          <tbody>
                              {managerArr.map(manager => {
                                  return(<EmpList id={manager._id} name={manager.name} position={'manager'}></EmpList>)
                              })}
                    
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
                              {employeeArr.map(emp => {
                                  return(<EmpList id={emp._id} name={emp.name} position={emp.positionTitle}></EmpList>)
                              })}
            
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
                                  <form method="dialog">
  <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" className="input input-bordered w-full max-w-xs" />
      </form>
 
                  </label>
                <button onClick={CreateManager} className="btn btn-secondary btn-wide m-4">Create account</button>
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
    <span className="label-text">Position</span>
  </div>
  <input value={position} onChange={(e) => setPosition(e.target.value)} type="text" className="input input-bordered w-full max-w-xs" />
 
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
                              <form method="dialog">
                <button onClick={CreateEmployee} className="btn btn-secondary btn-wide m-4">Create account</button>
      </form>
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
                              <select value={manager} onChange={(e) => setManager(e.target.value)} className="select select-bordered">
                                  {managerArr.map(manager => {
                                      if (manager.department == null) {
                                          
                                          return (<option value={manager._id}>{manager.name}</option>)
                                        }
                                  })}
   
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
                <button onClick={createDeptAction} className="btn btn-secondary">Add Department</button>
              </div>
            </div>
              </dialog>
              
              <EmpCard name='Ahmad' years={4} skills={['team', 'management' ]}></EmpCard>
        </div>
 
           
    </div>
  );
}
