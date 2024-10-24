import React, { useEffect, useState } from "react";
import PositionCard from "../Components/PositionCard";
import Nav from "../Components/Nav";
import DepCard from "../Components/DepCard";
import EmpList from "../Components/EmpList";
import axios from "axios";
import { useParams } from "react-router-dom";
const AccountsAPI = `http://localhost:3000/account/`;
const AddPositionAPI = `http://localhost:3000/position?company=${localStorage.getItem(
  "company"
)}`;
function ManagerHomePage() {
  const { id } = useParams();
  const [user, setUser] = useState([]);

  useEffect(() => {
    getUser();
  }, []);
  const getUser = () => {
    axios
      .get(AccountsAPI + id + `?company=${localStorage.getItem("company")}`, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        console.log(res);
        setUser(res.data);
      });
  };

  const [positions, setPositions] = useState([]);
  const [departments, setDepartments] = useState([]);
  const [experience, setExperience] = useState([]);
  const [newPosition, setNewPosition] = useState("");
  const [newDepartment, setNewDepartment] = useState("");
  const [newExperience, setNewExperience] = useState("");
  const [jobType, setJobType] = useState("");
const [skills, setSkills] = useState([])
  const [newSalary, setNewSalary] = useState("");
  const [newKey, setNewKey] = useState("");
  const [newOverview, setNewOverview] = useState("");
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  const [warningText, setWarningText] = useState("");
  const openDialog = (index = null) => {
    if (index !== null) {
      setNewPosition(positions[index]);
      setNewDepartment(departments[index]);
      setNewExperience(experience[index]);
      setEditIndex(index);
    } else {
      setNewPosition("");
      setNewDepartment("");
      setNewExperience("");
      setEditIndex(null);
    }
    setIsDialogOpen(true);
  };

  const closeDialog = () => {
    setIsDialogOpen(false);
    setNewPosition("");
    setNewDepartment("");
    setNewExperience("");
    setNewSalary("");
    setNewKey("");
    setNewOverview("");
    setEditIndex(null);
  };

  const handleSubmit = () => {
    if (newPosition && newDepartment && newExperience) {
      if (editIndex !== null) {
        const updatedPositions = [...positions];
        const updatedDepartments = [...departments];
        const updatedExperience = [...experience];

        updatedPositions[editIndex] = newPosition;
        updatedDepartments[editIndex] = newDepartment;
        updatedExperience[editIndex] = newExperience;

        setPositions(updatedPositions);
        setDepartments(updatedDepartments);
        setExperience(updatedExperience);
      } else {
        setPositions([...positions, newPosition]);
        setDepartments([...departments, newDepartment]);
        setExperience([...experience, newExperience]);
      }

      closeDialog();
    }
  };
  console.log(jobType);

  const addPositionAction = () => {
    if (
      newPosition == "" ||
      newExperience == "" ||
      newKey == "" ||
      newOverview == "" ||
      newSalary == ""
    ) {
      setWarningText("you must fill all the fields");
    } else {
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
          },
          {
            headers: {
              Authorization: localStorage.getItem("token"),
            },
          }
        )
        .then((res) => {
          console.log(res);
        });
    }
  };
  return (
    <div>
      <Nav />
      <div className="flex">
        <div className="flex w-[100%]">
          <div className="flex flex-col border justify-start items-center p-15 mt-10 w-auto ml-5 shadow-2xl bg-[#30465e] pt-10 rounded-xl h-[51vh]">
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
            <div className="flex flex-col justify-center">
              <h2 className="font-title mt-4 text-center w-[40vh] text-white font-bold text-[4vh]">
                {user.name}
              </h2>
              <div className="mt-3 ml-3">
                <h1 className="font-text text-accent text-center">
                  {user.department.name}
                </h1>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-[75%] mt-10">
            <h2 className="font-title font-bold text-[3vh] text-secondary ml-5">
              Number of employees:{user.department.employees?.length || 0}
            </h2>
            <div className="flex justify-center">
              <div className="overflow-x-auto lg:w-[80vw] bg-slate-100 lg:self-center lg:m-4 shadow-md shadow-gray-300 rounded-lg">
                <table className="table">
                  <thead>
                    <tr className="font-title text-lg">
                      <th>Employee Name</th>
                      <th>Position</th>
                    </tr>
                  </thead>
                  <tbody>
                    {user.department.employees.map(emp => {
                      return(<EmpList id={emp._id} name={emp.name}></EmpList>)
                    })}
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
                    ></EmpList>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="flex justify-around   w-[100%] ">
              <div className="flex flex-col justify-around pt-10 pb-10 w-[96%] max-md:w-[90%]">
                <div className="flex justify-between w-[97%]">
                  <h1 className="font-title font-bold text-[3vh] text-secondary">
                    Posted Positions
                  </h1>
                  <button
                    onClick={() => openDialog(null)}
                    className=" btn bg-secondary text-white "
                  >
                    New Post
                  </button>
                </div>
                <div className="grid lg:grid-cols-3 justify-around gap-4 mt-4">
                  {user.department &&
                  user.department.positions &&
                  user.department.positions.length > 0 ? (
                    user.department.positions.map((position, index) => (
                      <PositionCard
                        key={index}
                        Position={position.title}
                        Department={user.department.name}
                        Experience={position.experienceYears}
                      />
                    ))
                  ) : (
                    <p>No positions available</p>
                  )}
                </div>
              </div>
            </div>
          </div>

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
                  Department Name:
                </label>
                <input
                  type="text"
                  value={newDepartment}
                  onChange={(e) => setNewDepartment(e.target.value)}
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
                    {editIndex !== null ? "Update" : "Submit"}
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ManagerHomePage;
