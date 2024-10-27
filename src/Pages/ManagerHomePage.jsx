import { useState, useRef, useEffect } from "react";
import PositionCard from "../Components/PositionCard";
import Nav from "../Components/Nav";
import DepCard from "../Components/DepCard";
import EmpList from "../Components/EmpList";
import axios from "axios";
import { useParams } from "react-router-dom";
import SkillTip from "../Components/SkillTip";

import NotificationCard from "../Components/NotificationCard";
const AccountsAPI = `http://localhost:3000/account/`;
const AddPositionAPI = `http://localhost:3000/position?company=${sessionStorage.getItem(
  "company"
)}`;
const SkillsOptionsAPI = `http://localhost:3000/skills`;
const createAccountsAPI = `http://localhost:3000/createAccount/manager?company=${sessionStorage.getItem(
  "company"
)}`;
const updateAPI = `http://localhost:3000/request/`;

function ManagerHomePage() {
  const { id } = useParams();
  const notificationAPI = `http://localhost:3000/getNotifications/${id}`;
  const [user, setUser] = useState([]);
  const textareaRef = useRef();
  const textareaRef2 = useRef();

  const [skillsOptions, setSkillsOptions] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [position, setPosition] = useState("");
  const [notifications, setNotifications] = useState([]);
  const [positions, setPositions] = useState([]);
  const [departments, setDepartments] = useState([]);
  const [experience, setExperience] = useState([]);
  const [newPosition, setNewPosition] = useState("");
  const [newDepartment, setNewDepartment] = useState("");
  const [newExperience, setNewExperience] = useState("");
  const [jobType, setJobType] = useState("");
  const [skillInput, setSkillInput] = useState("");
  const [skills, setSkills] = useState([]);

  const [newSalary, setNewSalary] = useState("");
  const [newKey, setNewKey] = useState("");
  const [newOverview, setNewOverview] = useState("");
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  const [warningText, setWarningText] = useState("");
  const [warningText2, setWarningText2] = useState("");

  const [loading, setLoading] = useState(false);
  const [networkError, setNetworkError] = useState(false);

  useEffect(() => {
    getUser();
    getOptions();
    getNotifications();
  }, []);
  const getUser = () => {
    setLoading(true);
    axios
      .get(AccountsAPI + id + `?company=${sessionStorage.getItem("company")}`, {
        headers: {
          Authorization: sessionStorage.getItem("token"),
        },
      })
      .then((res) => {
        console.log(res);
        setUser(res.data);
        setNetworkError(false)
      }).catch(err => {
        if (!err.response || err.code === 'ERR_CONNECTION_REFUSED' || err.code === "ERR_BAD_RESPONSE") {
            setNetworkError(true)
        }

    })
      .finally(() => {
        setLoading(false);
      });
  };

  const getOptions = () => {
    setLoading(true);
    axios
      .get(SkillsOptionsAPI)
      .then((res) => {
        setSkillsOptions(res.data.skills);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const getNotifications = () => {
    setLoading(true);
    axios
      .get(notificationAPI)
      .then((res) => {
        console.log(res.data);
        setNotifications(res.data);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  console.log(notifications);
  const CreateEmployee = () => {
    
    if (name == "" || email == "" || password == "" || position == "") {
      setWarningText("");
    } else {
      setLoading(true);
      axios
        .post(
          createAccountsAPI,
          {
            name: name,
            positionTitle: position,
            email: email,
            password: password,
            accountType: "employee",
            department: user.department._id,
          },
          {
            headers: {
              Authorization: sessionStorage.getItem("token"),
            },
          }
        )
        .then((res) => {
          setName("");
          setPosition("");
          setEmail("");
          setPassword("");
          console.log(res);
          getUser();
          document.getElementById("employeeAccountDialog").close();
        })
        .finally(() => {
          setLoading(false);
        });
    }
  };
  // const openDialog = (index = null) => {
  //   if (index !== null) {
  //     setNewPosition(positions[index]);
  //     setNewDepartment(departments[index]);
  //     setNewExperience(experience[index]);
  //     setEditIndex(index);
  //   } else {
  //     setNewPosition("");
  //     setNewDepartment("");
  //     setNewExperience("");
  //     setEditIndex(null);
  //   }
  //   setIsDialogOpen(true);
  // };

  // const closeDialog = () => {
  //   setIsDialogOpen(false);
  //   setNewPosition("");
  //   setNewDepartment("");
  //   setNewExperience("");
  //   setNewSalary("");
  //   setNewKey("");
  //   setNewOverview("");
  //   setEditIndex(null);
  // };

  // const handleSubmit = () => {
  //   if (newPosition && newDepartment && newExperience) {
  //     if (editIndex !== null) {
  //       const updatedPositions = [...positions];
  //       const updatedDepartments = [...departments];
  //       const updatedExperience = [...experience];

  //       updatedPositions[editIndex] = newPosition;
  //       updatedDepartments[editIndex] = newDepartment;
  //       updatedExperience[editIndex] = newExperience;

  //       setPositions(updatedPositions);
  //       setDepartments(updatedDepartments);
  //       setExperience(updatedExperience);
  //     } else {
  //       setPositions([...positions, newPosition]);
  //       setDepartments([...departments, newDepartment]);
  //       setExperience([...experience, newExperience]);
  //     }

  const addPositionAction = () => {
    if (
      newPosition == "" ||
      newExperience == "" ||
      newKey == "" ||
      newOverview == "" ||
      newSalary == ""
    ) {
      setWarningText2("you must fill all the fields");
    } else {
      setLoading(true);
      setWarningText2("");
      axios
        .post(
          AddPositionAPI,
          {
            title: newPosition,
            description: newOverview,
            department: user.department._id,
            expectedSalary: newSalary,
            experienceYears: newExperience,
            requirments: newKey,
            jobType: jobType,
            skills: skills,
          },
          {
            headers: {
              Authorization: sessionStorage.getItem("token"),
            },
          }
        )
        .then((res) => {
          console.log(res);
          setNewPosition("");
          setNewExperience("");
          setNewExperience("");
          setNewSalary("");
          setJobType("");
          setNewKey("");
          setNewOverview("");
          setSkills([]);
          document.getElementById("Newposition").close();
          getUser();
        })
        .finally(() => {
          setLoading(false);
        });
    }
  };

  // const addSkillAction = () => {
  //   if (skillInput != "") {
  //     setSkills([skillInput, ...skills]);
  //     setSkillInput("");
  //   }

  // }
  const closeEmpDialog = () => {
    setWarningText2('')
    document.getElementById("Newposition").close();
  };
  const dismissAction = (reqId) => {
    setLoading(true);

    axios
      .put(updateAPI + reqId, {
        accountId: id,
      })
      .then((res) => {
        console.log(res.data);
        getNotifications();
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleDelete2 = (skillToDelete) => {
    setSkills((prevSkills) =>
      prevSkills.filter((skill) => skill !== skillToDelete)
    );
  };

  const textareaHeight = () => {
    const textarea = textareaRef.current;
    if (textarea) {
      (textarea.style.height = "auto"),
        (textarea.style.height = `${textarea.scrollHeight}px`);
    }
  };
  const textareaHeight2 = () => {
    const textarea2 = textareaRef2.current;
    if (textarea2) {
      (textarea2.style.height = "auto"),
        (textarea2.style.height = `${textarea2.scrollHeight}px`);
    }
  };
  const retryAction = () => {
    location.reload()
}
  return (
    <div>
      {loading ? (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="p-4 w-[10vw] flex flex-col items-center justify-center bg-secondary rounded-lg">
            <span className="loading loading-dots bg-accent"></span>
          </div>
        </div>
      ) : null}
       {networkError ? (
        <div className="fixed inset-0 flex items-center justify-center z-40 bg-secondary ">
          <div className="text-center w-[80vw] p-5 md:w-[50vw] lg:w-[30vw] bg-white rounded-lg flex flex-col items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="50"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="icon icon-tabler icons-tabler-outline icon-tabler-wifi-off text-error"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M12 18l.01 0" />
              <path d="M9.172 15.172a4 4 0 0 1 5.656 0" />
              <path d="M6.343 12.343a7.963 7.963 0 0 1 3.864 -2.14m4.163 .155a7.965 7.965 0 0 1 3.287 2" />
              <path d="M3.515 9.515a12 12 0 0 1 3.544 -2.455m3.101 -.92a12 12 0 0 1 10.325 3.374" />
              <path d="M3 3l18 18" />
            </svg>
            <p className="text-error text-lg m-4 font-semibold">Oops! No Internet Connection</p>
                      <p className="text-neutral m-1">We couldn’t connect to the internet.</p>
                      <p className="text-neutral m-1"> Please check your connection and click the button to try again.</p>
                      <button onClick={retryAction} className="btn btn-accent my-5 btn-wide">Retry</button>
          </div>
        </div>
      ) : null}
      <Nav />
      <div className="flex max-md:w-[95%] md:w-[90%] lg:w-[100%]  ">
        <div className="flex  w-[100%] max-md:flex-col max-md:w-full   md:w-full lg:w-[80%] max-sm:w-full ">
          <div className="flex max-md:justify-center max-md:items-center max-md:p-7   lg:flex-col md:flex-col border justify-start items-center  p-15 mt-10 w-auto  max-md:ml-5 max-sm:ml-3 lg:ml-5  shadow-2xl bg-[#30465e] pt-10 rounded-xl lg:h-[51vh] md:h-[51vh] max-sm:w-full   ">
            <div className="flex justify-center items-center bg-slate-200 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="90"
                height="90"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="icon icon-tabler icons-tabler-filled icon-tabler-user text-accent"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M12 2a5 5 0 1 1 -5 5l.005 -.217a5 5 0 0 1 4.995 -4.783z" />
                <path d="M14 14a5 5 0 0 1 5 5v1a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-1a5 5 0 0 1 5 -5h4z" />
              </svg>
            </div>
            <div className="flex flex-col justify-center max-sm:w-[36vh]">
              <h2 className="font-title mt-4 text-center w-[40vh] text-white font-bold text-[4vh]">
                {user?.name}
              </h2>
              <div className="mt-3 ml-3">
                <h1 className="font-text text-accent text-center">
                  {user?.department?.name}
                </h1>
              </div>
            </div>
          </div>

          <div className="flex flex-col lg:w-[90%] lg:mt-10 md:mt-10 max-md:ml-3 max-sm:ml-1 md:w-[72%] max-sm:mt-3 max-sm:w-[100%]">
            {notifications.newManager?.map((el) => {
              if (!el.isClosedByNewManager) {
                const handleDismiss = () => {
                  dismissAction(el._id);
                };

                return (
                  <NotificationCard
                    text={`Employee ${el.employeeName} joined you department as ${el.newPosition}`}
                    onDismiss={handleDismiss}
                    style={"border-info"}
                    icon={
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        className="stroke-info h-6 w-6 shrink-0"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        ></path>
                      </svg>
                    }
                  />
                );
              }
            })}
            {notifications.oldManager?.map((el) => {
              if (!el.isClosedByOldManager) {
                const handleDismiss = () => {
                  dismissAction(el._id);
                };
                return (
                  <NotificationCard
                    text={`Employee ${el.employeeName} is no longer in your department`}
                    onDismiss={handleDismiss}
                    style={"border-warning"}
                    icon={
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 shrink-0 stroke-current text-warning"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                        />
                      </svg>
                    }
                  />
                );
              }
            })}
            <h2 className="font-title font-bold text-[3vh] text-secondary ml-5 mt-3">
              Number of employees: {user?.department?.employees?.length || 0}
            </h2>
            <div className="flex justify-center">
              <div className="overflow-x-auto lg:w-[80vw] bg-slate-100 lg:self-center  max-md:ml-3 lg:m-4 shadow-md shadow-gray-300 rounded-lg">
                <table className="table">
                  <thead>
                    <tr className="font-title text-lg">
                      <th>Employee Name</th>
                      <th>Position</th>
                      <th>Can be reassigned?</th>
                    </tr>
                  </thead>
                  <tbody>
                    {user.department &&
                    user.department.employees &&
                    user.department.employees.length > 0 ? (
                      user.department.employees.map((emp) => {
                        if (emp.accountType != "manager") {
                          return (
                            <EmpList
                              id={emp._id}
                              name={emp.name}
                              position={emp.positionTitle}
                              excess={emp.excess}
                            ></EmpList>
                          );
                        }
                      })
                    ) : (
                      <p>No positions yet</p>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
            <button
              className="btn btn-outline btn-secondary self-start m-5"
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
            </button>{" "}
            <div className="flex justify-around   w-[100%] ">
              <div className="flex flex-col justify-around pt-10 pb-10 w-[96%] max-md:w-[90%]">
                <div className="flex justify-between w-[97%]">
                  <h1 className="font-title font-bold text-[3vh] text-secondary">
                    Posted Positions
                  </h1>

                  <button
                    onClick={() =>
                      document.getElementById("Newposition").showModal()
                    }
                    className=" btn bg-secondary text-white "
                  >
                    New Post
                  </button>
                </div>
                <div className="grid lg:grid-cols-3 justify-around gap-4 mt-4">
                  {}
                  {user.department &&
                  user.department.positions &&
                  user.department.positions.length > 0 ? (
                    user.department.positions.map((position, index) => {
                      if (!position.status) {
                        return (
                          <PositionCard
                            key={index}
                            id={position._id}
                            Position={position.title}
                            Department={user.department.name}
                            Experience={position.experienceYears}
                            skills={position?.skills || ""}
                          />
                        );
                      }
                    })
                  ) : (
                    <p>No positions yet</p>
                  )}
                </div>
              </div>
            </div>
          </div>
          {/* 
          {isDialogOpen && (
            <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-60">
              <div className="bg-white p-6 rounded-lg w-[45%] ">
                <h2 className="font-title font-bold text-secondary text-[4vh]">
                  {editIndex !== null ? "Edit Position" : "Create New Position"}
                </h2> 
                <label className="font-title text-accent font-bold">
                  Position Name:{" "}
                </label>
                <input
                  type="text"
                  value={newPosition}
                  onChange={(e) => setNewPosition(e.target.value)}
                  className="input input-bordered p-2 mt-2 w-full"
                />
               
                <label className="font-title text-accent font-bold">
                  Estimated Salary:
                </label>
                <input
                  type="text"
                  value={newSalary}
                  onChange={(e) => setNewSalary(e.target.value)}

                  className="input input-bordered p-2 mt-2 w-full"

                />
                <label className="font-title text-accent font-bold">
                  Experience Years:
                </label>
                <input
                  type="text"
                  value={newExperience}
                  onChange={(e) => setNewExperience(e.target.value)}

                  className="input input-bordered p-2 mt-2 w-full"

                />
                <div className="flex flex-col justify-around h-[35vh]">
                  <select
                    name=""
                    id=""
                    value={jobType}
                    onChange={(e) => setJobType(e.target.value)}
                    className="select select-bordered"
                  >
                    <option value={"Not-specified"}>Select type</option>
                    <option value={"Full-Time"}> Full-Time</option>
                    <option value={"Part-Time"}>Part-Time</option>
                  </select>
                  <label className="font-title text-accent font-bold">
                    Key Responsibilities:
                  </label>
                  <textarea
                    value={newKey}
                    onChange={(e) => setNewKey(e.target.value)}
                    className="textarea resize-none textarea-bordered  textarea-lg max-w-m"
                  ></textarea>
                  <label className="font-title text-accent font-bold">
                    Job Overview:
                  </label>
                  <textarea
                    value={newOverview}
                    onChange={(e) => setNewOverview(e.target.value)}
                    className="textarea resize-none textarea-bordered  textarea-lg max-w-m"
                  ></textarea>
                  <select name="skills" value={skillInput} onChange={(e) => {
                     const selectedSkill = e.target.value;
                    setSkillInput(selectedSkill)
                    setSkills([selectedSkill, ...skills])
                    setSkillInput('')
                
                  }} className="select select-bordered">
                    {skillsOptions.map(skill => {
                      return (<option value={skill}>{skill}</option>)
                  })}
                    <option value=""></option>
                  </select>
                
                 
                  <div className="flex flex-wrap">
                    
                    {skills.map(el => {
                       const handleDelete = () => {
                        handleDelete2(el);
                      };
                    return(<SkillTip text={el} onDelete={handleDelete}></SkillTip>)
                  })}
                  </div>
                </div>
                <p>{warningText}</p>
                <div className="flex justify-end mt-4">
                  <button
                    className="btn bg-[#30465e] text-white p-4 mr-2"
                    onClick={closeDialog}
                  >
                    Cancel
                  </button>
                  <button
                    className="btn btn-accent text-white p-4"
                    onClick={addPositionAction}
                  >
                   Submit
                  </button>
                </div>
              </div>
            </div>

          )} */}
          <dialog id="employeeAccountDialog" className="modal w-[]">
            {loading ? (
              <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
                <div className="p-4 w-[10vw] flex flex-col items-center  justify-center bg-secondary rounded-lg">
                  <span className="loading loading-dots bg-accent"></span>
                </div>
              </div>
            ) : null}
            <div className="modal-box flex flex-col items-center bg-white w-[58vh] ">
              <form method="dialog">
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                  ✕
                </button>
              </form>

              <h3 className="font-bold text-[3vh] font-title text-secondary ">
                Creating Employee Account
              </h3>

              <div className=" flex flex-col   m-5  ">
                <label className="form-control  max-w-xs">
                  <div className="label">
                    <span className="label-text font-title text-accent font-bold text-[2.5vh]">
                      Name:
                    </span>
                  </div>
                  <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    type="text"
                    className="input input-bordered  "
                  />
                </label>

                <label className="form-control w-full max-w-xs">
                  <div className="label">
                    <span className="label-text font-title text-accent font-bold text-[2.5vh]">
                      Position:
                    </span>
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
                    <span className="label-text font-title text-accent font-bold text-[2.5vh]">
                      Email:
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
                    <span className="label-text font-title text-accent font-bold text-[2.5vh]">
                      Password:
                    </span>
                  </div>
                  <input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    className="input input-bordered w-full max-w-xs"
                  />
                </label>
                <form method="dialog ">
                  <div className="w-[45vh] flex justify-center ">
                    <button
                      onClick={CreateEmployee}
                      className="btn btn-secondary mt-5   "
                    >
                      Create account
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </dialog>
          <dialog id="Newposition" className="modal  ">
            {loading ? (
              <div className="fixed inset-0 flex items-center justify-center  z-50 bg-black bg-opacity-50  ">
                <div className="p-4 w-[10vw] flex flex-col items-center justify-center bg-secondary rounded-lg">
                  <span className="loading loading-dots bg-accent"></span>
                </div>
              </div>
            ) : null}
            <div className="modal-box  flex items-start flex-col justify-around  p-7 bg-white md:w-11/12  md:max-w-2xl">
              <form method="dialog  ">
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                  ✕
                </button>
              </form>
              <h3 className="font-bold self-center text-[3vh] font-title text-secondary mb-4 ">
                Create New Position
              </h3>
              <div className="flex  w-full md:gap-8 flex-col md:flex-row">
                <div className="flex flex-col md:w-full">
                  <label className="font-title text-accent font-bold my-1">
                    Position Name:{" "}
                  </label>
                  <input
                    type="text"
                    value={newPosition}
                    onChange={(e) => setNewPosition(e.target.value)}
                    className="input input-bordered p-2  w-full"
                  />
                </div>

                <div className="flex flex-col md:w-full">
                  <label className="font-title text-accent font-bold my-1">
                    Estimated Salary:
                  </label>
                  <input
                    type="text"
                    value={newSalary}
                    onChange={(e) => setNewSalary(e.target.value)}
                    className="input input-bordered p-2  lg:w-[33vh] w-full"
                  />
                </div>
              </div>

              <div className="flex  w-full md:gap-8 flex-col md:flex-row">
                <div className="flex flex-col md:w-full">
                  <label className="font-title text-accent font-bold my-1 ">
                    Years Of Experience :
                  </label>
                  <input
                    type="text"
                    value={newExperience}
                    onChange={(e) => setNewExperience(e.target.value)}
                    className="input input-bordered p-2  w-full"
                  />
                </div>
                <div className="flex flex-col md:w-full">
                  <label className="font-title text-accent font-bold my-1">
                    Job-Type:
                  </label>
                  <select
                    name=""
                    id=""
                    value={jobType}
                    onChange={(e) => setJobType(e.target.value)}
                    className="select select-bordered lg:w-[33vh] w-full"
                  >
                    <option value={"Not-specified"}>Select type</option>
                    <option value={"Full-Time"}> Full-Time</option>
                    <option value={"Part-Time"}>Part-Time</option>
                  </select>
                </div>
              </div>

              <label className="font-title text-accent font-bold my-1">
                Key Responsibilities:
              </label>
              <textarea
                placeholder="Not added yet"
                ref={textareaRef}
                rows={4}
                value={newKey}
                onChange={(e) => {
                  setNewKey(e.target.value);
                  textareaHeight();
                }}
                className="textarea resize-none textarea-bordered  w-full max-w-m"
              ></textarea>
              <label className="font-title text-accent font-bold my-1">
                Job Overview:
              </label>
              <textarea
                placeholder="Not added yet"
                ref={textareaRef2}
                rows={4}
                value={newOverview}
                onChange={(e) => {
                  setNewOverview(e.target.value);
                  textareaHeight2();
                }}
                className="textarea resize-none textarea-bordered   w-full max-w-m"
              ></textarea>
              <div className="flex flex-col w-full">
                <label className="font-title text-accent font-bold my-1">
                  Skills:
                </label>
                <select
                  name="skills"
                  value={skillInput}
                  onChange={(e) => {
                    const selectedSkill = e.target.value;
                    setSkillInput(selectedSkill);
                    setSkills([selectedSkill, ...skills]);
                    setSkillInput("");
                  }}
                  className="select select-bordered  "
                >
                  {skillsOptions &&
                    skillsOptions.map((skill) => {
                      return <option value={skill}>{skill}</option>;
                    })}
                  <option value="">Select Skills</option>
                </select>
                <div className="flex flex-wrap my-3">
                  {skills.map((el) => {
                    const handleDelete = () => {
                      handleDelete2(el);
                    };
                    return (
                      <SkillTip text={el} onDelete={handleDelete}></SkillTip>
                    );
                  })}
                </div>
              </div>
              <p className="text-error">{warningText2}</p>

              <div className="flex self-end justify-end absulote bottom-2 bg-white mt-6">
                <button
                  className="btn btn-secondary btn-outline text-white p-4 mr-2"
                  onClick={closeEmpDialog}
                >
                  Cancel
                </button>
                <button
                  className="btn btn-secondary  text-white p-4 "
                  onClick={addPositionAction}
                >
                  Post Position
                </button>
              </div>
            </div>
          </dialog>
        </div>
      </div>
    </div>
  );
}

export default ManagerHomePage;
