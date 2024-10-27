import { useEffect, useState } from "react";
import EmpList from "../Components/EmpList";
import Select from "react-select";
import EmpCard from "../Components/EmpCard";
import DepCard from "../Components/DepCard";
import Nav from "../Components/Nav";
import { useParams } from "react-router-dom";
import axios from "axios";

const AccountsAPI = `http://localhost:3000/account/`;
const createAccountsAPI = `http://localhost:3000/createAccount?company=${sessionStorage.getItem(
  "company"
)}`;
const managersAPI = `http://localhost:3000/account/type/manager?company=${sessionStorage.getItem(
  "company"
)}`;
const employeeAPI = `http://localhost:3000/account/type/employee?company=${sessionStorage.getItem(
  "company"
)}`;
const CreateDeptAPI = `http://localhost:3000/department?company=${sessionStorage.getItem(
  "company"
)}`;
const DepartmentsAPI = `http://localhost:3000/department?company=${sessionStorage.getItem(
  "company"
)}`;
export default function AdminHomePage() {
  const { id } = useParams();
  const [user, setUser] = useState();
  const [managerArr, setManagerArr] = useState([]);
  const [employeeArr, setEmployeeArr] = useState([]);
  const [departmentArr, setDepartmentsArr] = useState([]);
  const [loading, setLoading] = useState(false);

  //? for creating manager account
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [position, setPosition] = useState("");
  const [department, setDepartment] = useState();
  const [warningText, setWarningText] = useState("");
  const [warningText2, setWarningText2] = useState("");
  const [warningText3, setWarningText3] = useState("");

  const [deptName, setDeptName] = useState("");
  const [manager, setManager] = useState("");
  useEffect(() => {
    getUser();
  }, []);
  useEffect(() => {
    getManagers();
    getEmployee();
    getDepartments();
  }, []);

  useEffect(() => {
    console.log(manager);
  }, [manager]);
    const getUser = () => {
        setLoading(true);
    axios
      .get(AccountsAPI + id + `?company=${sessionStorage.getItem("company")}`, {
        headers: {
          Authorization: sessionStorage.getItem("token"),
        },
      })
      .then((res) => {
        setUser(res.data);
        console.log(res);
      }).finally(() => {
        setLoading(false);
      });
  };
    const getManagers = () => {
        setLoading(true);
    axios
      .get(managersAPI, {
        headers: {
          Authorization: sessionStorage.getItem("token"),
        },
      })
      .then((res) => {
        console.log(res);
        setManagerArr(res.data);
      }).finally(() => {
        setLoading(false);
      });
  };

    const getEmployee = () => {
        setLoading(true);
    axios
      .get(employeeAPI, {
        headers: {
          Authorization: sessionStorage.getItem("token"),
        },
      })
      .then((res) => {
        console.log(res);
        setEmployeeArr(res.data);
      }).finally(() => {
        setLoading(false);
      });
  };
    const getDepartments = () => {
        setLoading(true);
    axios
      .get(DepartmentsAPI, {
        headers: {
          Authorization: sessionStorage.getItem("token"),
        },
      })
      .then((res) => {
        console.log(res);
        setDepartmentsArr(res.data);
      }).finally(() => {
        setLoading(false);
      });
  };
  const createDeptAction = () => {
      if (manager == "Not selected" || deptName == "" || manager == "") {
          setWarningText("you have to select manager");
        }
        setWarningText("");
        setLoading(true);
    axios
      .post(
        CreateDeptAPI,
        {
          name: deptName,
          manager: manager,
        },
        {
          headers: {
            Authorization: sessionStorage.getItem("token"),
          },
        }
      )
      .then((res) => {
        console.log(res);
          document.getElementById("createDepartmentDialog").close();
          setDeptName('')
          setManager('')
          getDepartments()
      })
      .catch((err) => {
        console.log(err.response);
        setWarningText(err.response.data.msg);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const CreateManager = () => {
      if (name == "" || email == "" || password == "") {
          setWarningText2("You have to fill all the fields");
        } else {
            setWarningText2("");
            setLoading(true);

      axios
        .post(
          createAccountsAPI,
          {
            name: name,
            email: email,
            password: password,
            accountType: "manager",
          },
          {
            headers: {
              Authorization: sessionStorage.getItem("token"),
            },
          }
        )
        .then((res) => {
          setName("");
          setEmail("");
          setPassword("");
          console.log(res);
            document.getElementById("managerAccountDialog").close();
            getManagers()
        })
        .catch((err) => {
          setWarningText2(err.response.data.msg);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  };

  const CreateEmployee = () => {
      if (name == "" || email == "" || password == "" || position == "") {
          setWarningText3("You have to fill all the fields");
        } else {
            setWarningText3("");
            setLoading(true);
      axios
        .post(
          createAccountsAPI,
          {
            name: name,
            department: department,
            positionTitle: position,
            email: email,
            password: password,
            accountType: "employee",
          },
          {
            headers: {
              Authorization: sessionStorage.getItem("token"),
            },
          }
        )
        .then((res) => {
          setName("");
          setEmail("");
            setPassword("");
            setPosition('')
            setDepartment('')
          console.log(res);
            document.getElementById("employeeAccountDialog").close();
            getEmployee()
            getDepartments()
        })
        .catch((err) => {
          setWarningText3(err.response.data.err);
        })
        .finally(() => {
          setLoading(false);
        });
    }
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
      <Nav></Nav>
          <div className="mx-5 py-5 md:px-16 flex flex-col items-start">
                  <p className="text-xl text-secondary font-semibold">Welcome <span className="text-accent">{user?.name}</span></p>
              
              {!managerArr || managerArr.length == 0 ? 
              
              <div>
                  
        <p className="font-title text-3xl font-bold text-secondary my-4">
          Build your company's structure
              </p>
              <p className="font-title text-2xl font-bold text-accent my-4">
          Start by creating managers' accounts
              </p>
              </div>
              : <></>}
              {!managerArr || managerArr.length == 0 ? <></> : 
                <>
                <div className="flex items-center justify-between w-full">    
                <p className="font-title text-xl font-bold text-secondary my-4">
                Departments
                </p>
                <button
                      disabled={!managerArr || managerArr.length == 0}
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
        <div className="flex flex-col items-center w-full">
          <div className="grid grid-cols-1 justify-items-center md:grid-cols-2 lg:grid-cols-3 gap-4  lg:w-[80vw]">
            {departmentArr.map((dept) => {
                return (
                    <DepCard
                    id={dept._id}
                    name={dept.name}
                    manager={dept.manager?.name || "No manager"}
                    employees={dept.employees?.length || 0}
                    shortage={
                        dept.positions
                        ? dept.positions.filter(
                            (position) => position.status === false
                        ).length
                        : 0
                    }
                    surplus={dept.surplusCount || 0}
                    ></DepCard>
                );
            })}
          </div>
                 
              </div>
            </>
      }
              <div className="flex items-center justify-between w-full mt-10">
                  
        <p className="font-title text-xl font-bold text-secondary my-4">
          Managers
                  </p>
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
              {!managerArr || managerArr.length == 0 ? <></> : 

        <div className="flex flex-col items-center  w-full md:w-[80vw] self-center">
          <div className="overflow-x-auto w-full md:w-[80vw] bg-white md:self-center md:m-4 shadow-md shadow-gray-300 rounded-lg">
            <table className="table">
              <thead>
                <tr className="font-title text-lg">
                  <th>Manager Name</th>
                  <th>Department</th>
                </tr>
              </thead>
              <tbody>
                {managerArr.map((manager) => {
                  return (
                    <EmpList
                      id={manager._id}
                      name={manager.name}
                      position={"manager"}
                      ></EmpList>
                    );
                })}
              </tbody>
            </table>
          </div>
              </div>

            }
              {managerArr.length == 0 || departmentArr.length == 0 ? <></> : 
              
             <> <div className="flex items-center justify-between w-full">
                  
        <p className="font-title text-xl font-bold text-secondary my-4">
          Employees
                  </p>
                  <button
                      disabled={!departmentArr || departmentArr.length == 0}
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

        <div className="flex flex-col items-center w-full md:w-[80vw] self-center">
          <div className="overflow-x-auto w-full md:w-[80vw] bg-white md:self-center md:m-4 shadow-md shadow-gray-300 rounded-lg">
            <table className="table">
              <thead>
                <tr className="font-title text-lg">
                  <th>Employee Name</th>
                  <th>Position</th>
                </tr>
              </thead>
              <tbody>
                {employeeArr.map((emp) => {
                    return (
                        <EmpList
                        id={emp._id}
                        name={emp.name}
                        position={emp.positionTitle}
                        ></EmpList>
                    );
                })}
              </tbody>
            </table>
          </div>
                 
                      </div>
                      </>
        }

        <div>
                  <dialog id="managerAccountDialog" className="modal">
                  {loading ? (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="p-4 w-[10vw] flex flex-col items-center justify-center bg-secondary rounded-lg">
        <span className="loading loading-dots bg-accent"></span>
      </div>
    </div>
  ) : null}
            <div className="modal-box flex flex-col items-center bg-white">
              <form method="dialog">
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                  ✕
                </button>
              </form>
              <h3 className="font-bold text-xl text-secondary">Creating Manager Account</h3>
              <div className=" flex flex-col items-center m-5 ">
                <label className="form-control w-full max-w-xs">
                  <div className="label">
                  <span className="label-text font-title text-accent font-bold text-lg">
                  Name
                </span>
                  </div>
                  <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    type="text"
                    className="input input-bordered w-full "
                  />
                </label>

                <label className="form-control w-full max-w-xs">
                  <div className="label">
                  <span className="label-text font-title text-accent font-bold text-lg">
                  Email
                </span>
                  </div>
                  <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="text"
                    className="input input-bordered w-full max-w-xs"
                  />
                </label>
                <label className="form-control w-full max-w-xs">
                  <div className="label">
                  <span className="label-text font-title text-accent font-bold text-lg">
                  Password
                </span>
                  </div>
                  <form method="dialog">
                    <input
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      type="password"
                      className="input input-bordered w-full max-w-xs"
                    />
                  </form>
                </label>
                <p className="text-error text-sm m-4">{warningText2}</p>

                <button
                  onClick={CreateManager}
                  className="btn btn-secondary btn-wide m-4"
                >
                  Create account
                </button>
              </div>
            </div>
          </dialog>

                  <dialog id="employeeAccountDialog" className="modal">
                  {loading ? (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="p-4 w-[10vw] flex flex-col items-center justify-center bg-secondary rounded-lg">
        <span className="loading loading-dots bg-accent"></span>
      </div>
    </div>
  ) : null}
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
                  <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    type="text"
                    className="input input-bordered w-full "
                  />
                </label>

                <label className="form-control w-full max-w-xs">
                  <div className="label">
                    <span className="label-text">Position</span>
                  </div>
                  <input
                    value={position}
                    onChange={(e) => setPosition(e.target.value)}
                    type="text"
                    className="input input-bordered w-full max-w-xs"
                  />
                </label>
                <label className="form-control w-full max-w-xs">
                  <div className="label">
                    <span className="label-text">Department</span>
                  </div>
                  <select
                    value={department}
                    onChange={(e) => setDepartment(e.target.value)}
                    type="text"
                    className="select select-bordered w-full max-w-xs"
                  >
                    <option value={"not selected"}>Select department</option>
                    {departmentArr &&
                      departmentArr.map((dept) => {
                        return <option value={dept._id}>{dept.name}</option>;
                      })}
                  </select>
                </label>
                <label className="form-control w-full max-w-xs">
                  <div className="label">
                    <span className="label-text">Email</span>
                  </div>
                  <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="text"
                    className="input input-bordered w-full max-w-xs"
                  />
                </label>
                <label className="form-control w-full max-w-xs">
                  <div className="label">
                    <span className="label-text">Password</span>
                  </div>
                  <input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    className="input input-bordered w-full max-w-xs"
                  />
                </label>
                <p className="text-error text-sm m-4">{warningText3}</p>

                <button
                  onClick={CreateEmployee}
                  className="btn btn-secondary btn-wide m-4"
                >
                  Create account
                </button>
              </div>
            </div>
          </dialog>
        </div>
              <dialog id="createDepartmentDialog" className="modal">
              {loading ? (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="p-4 w-[10vw] flex flex-col items-center justify-center bg-secondary rounded-lg">
        <span className="loading loading-dots bg-accent"></span>
      </div>
    </div>
  ) : null}
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
                <input
                  value={deptName}
                  onChange={(e) => setDeptName(e.target.value)}
                  type="text"
                  className="input input-bordered w-full "
                />
              </label>
              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text">Select Manager</span>
                </div>
                <select
                  value={manager}
                  onChange={(e) => setManager(e.target.value)}
                  className="select select-bordered"
                >
                  <option value={"Not selected"}>Select manager</option>
                  {managerArr.map((manager) => {
                    return <option value={manager._id}>{manager.name}</option>;
                  })}
                </select>
              </label>
              <p className="text-error text-sm m-4">{warningText}</p>
              <button
                onClick={createDeptAction}
                className="btn btn-secondary my-2"
              >
                Add Department
              </button>
            </div>
          </div>
        </dialog>
      </div>
    </div>
  );
}
