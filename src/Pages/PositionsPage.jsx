import React, { useEffect } from "react";
import Nav from "../Components/Nav";
import SkillTip from "../Components/SkillTip";
import PositionCard from "../Components/PositionCard";
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import EmpCard from "../Components/EmpCard";
const positionAPI = `http://localhost:3000/position/`;
const allPositionsAPI = `http://localhost:3000/position/department/${localStorage.getItem(
  "department"
)}`;
const SkillsOptionsAPI = `http://localhost:3000/skills`;
const deletePositionAPI = `http://localhost:3000/position/`;
const updateAPI = `http://localhost:3000/position/`;
const bestEmpAPI = `http://localhost:3000/chat/`;
function PositionsPage() {
  console.log(localStorage.getItem("department"));

  const navigate = useNavigate();
  const { id } = useParams();
  const accountType = localStorage.getItem("accountType");
  const [isManager, setIsManager] = useState(accountType == "manager");
  const [position, setPosition] = useState([]);
  const [positionArr, setPositionArr] = useState([]);
  const [open, setOpen] = useState(false);
  const [jobType, setJobType] = useState("");
  const [editMode, setEditMode] = useState(true);
  const [skillsArr, setSkillsArr] = useState([]);
  const [bestEmp, setBestEmp] = useState([]);
  const [editModeInput, setEditModeInput] = useState(
    "bg-transparent text-black"
  );
  const [editModeSelect, setEditModeSelect] = useState("bg-transparent");
  const [skillsOptions, setSkillsOptions] = useState([]);
  const [skillInput, setSkillInput] = useState("");

  useEffect(() => {
    getPosition();
    getAllPositions();
    getOptions();
    getBestEmp();
  }, [id]);

  useEffect(() => {
    setJobType(position.jobType);
    setSkillsArr(position.skills);
  }, [position]);
  const getPosition = () => {
    axios.get(positionAPI + id).then((res) => {
      console.log(res);
      setPosition(res.data);
    });
  };

  const getAllPositions = () => {
    axios.get(allPositionsAPI).then((res) => {
      console.log(res);
      setPositionArr(res.data);
    });
  };

  const getOptions = () => {
    axios.get(SkillsOptionsAPI).then((res) => {
      setSkillsOptions(res.data.skills);
    });
  };

  const getBestEmp = () => {
    axios.get(bestEmpAPI + id).then((res) => {
      console.log(res);
      setBestEmp(res.data);
    });
  };
  const editAction = () => {
    setEditMode(false);
    setEditModeInput("input input-bordered");
    setEditModeSelect("select select-bordered");
  };

  const cancelEditAction = () => {
    setEditMode(true);
    setEditModeInput("bg-transparent");
    setEditModeSelect("bg-transparent");
    setJobType(position.jobType);
    setSkillsArr(position.skills);
  };
  const deleteAction = () => {
    axios
      .delete(
        deletePositionAPI + id + `?company=${localStorage.getItem("company")}`,
        {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        }
      )
      .then((res) => {
        console.log(res);
        navigate(`/Manager/${localStorage.getItem("accountId")}`);
      });
  };
  const saveEditAction = () => {
    axios
      .put(
        updateAPI + id + `?company=${localStorage.getItem("company")}`,
        {
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
        setEditMode(true);
      });
  };

  const handleDelete2 = (skillToDelete) => {
    setSkillsArr((prevSkills) =>
      prevSkills.filter((skill) => skill !== skillToDelete)
    );
  };
  return (
    <div>
      <Nav />
      <div className="flex  justify-around mt-5 mb-5  m-8 max-md:flex-col max-md:justify-center max-md:items-center ">
        <div className="flex flex-col w-[70%] bg-white h-auto justify-around border shadow-2xl p-6 max-md:w-[90%] ">
          <div className="flex justify-between">
            <h1 className="font-title font-bold text-secondary text-[4vh]">
              {position.title}
            </h1>
            {isManager ? (
              <svg
                onClick={editAction}
                // onClick={() => setOpen(true)}
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="icon icon-tabler icons-tabler-outline icon-tabler-edit"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M7 7h-1a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-1" />
                <path d="M20.385 6.585a2.1 2.1 0 0 0 -2.97 -2.97l-8.415 8.385v3h3l8.385 -8.415z" />
                <path d="M16 5l3 3" />
              </svg>
            ) : (
              <></>
            )}

            {open && (
              <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-60  ">
                <div className="bg-white p-6 rounded-lg w-[45%] h-[%]">
                  <h2 className="font-title font-bold text-secondary text-[4vh]">
                    Edit Position
                  </h2>

                  <label className="font-title text-accent font-bold">
                    position name:{" "}
                  </label>
                  <input type="text" className="border p-2 mt-2 w-full" />

                  <label className="font-title text-accent font-bold">
                    Department name:
                  </label>
                  <input type="text" className="border p-2 mt-2 w-full" />

                  <label className="font-title text-accent font-bold">
                    Estimated Salary:
                  </label>

                  <input type="text" className="border p-2 mt-2 w-full" />

                  <label className="font-title text-accent font-bold">
                    Experience years:
                  </label>

                  <input type="text" className="border p-2 mt-2 w-full" />

                  <div className="flex flex-col justify-around h-[35vh]">
                    <label className="font-title text-accent font-bold">
                      Key Responsibilities:
                    </label>
                    <textarea className="textarea textarea-bordered bg-white textarea-lg  max-w-m"></textarea>
                    <label className="font-title text-accent font-bold">
                      Job overview:
                    </label>
                    <textarea className="textarea textarea-bordered bg-white textarea-lg max-w-m"></textarea>
                  </div>

                  <div className="flex justify-end mt-4 ">
                    <button
                      className="btn bg-[#30465e] text-white p-4 mr-2"
                      onClick={() => setOpen(false)}
                    >
                      Cancel
                    </button>
                    <button className="btn  btn-accent text-white p-4">
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="flex flex-col justify-around h-[28vh]">
            <h2 className="font-text ">
              <span className="font-bold font-title text-[2.8vh]">
                Department:{" "}
              </span>
              {position?.department?.name}
            </h2>
            <h2 className="font-text ">
              <span className="font-bold font-title text-[2.8vh]">
                Job Type:{" "}
              </span>
              <select
                name=""
                id=""
                value={jobType}
                onChange={(e) => setJobType(e.target.value)}
                className={editModeSelect}
                disabled={editMode}
                style={
                  editMode
                    ? {
                        color: "black",
                        opacity: 1,
                        appearance: "none",
                        WebkitAppearance: "none",
                        MozAppearance: "none",
                        background: "none",
                        paddingRight: "1rem",
                      }
                    : {}
                }
              >
                <option value={"Not-specified"}>Select type</option>
                <option value={"Full-Time"}> Full-Time</option>
                <option value={"Part-Time"}>Part-Time</option>
              </select>
            </h2>
            <h2 className="font-text ">
              <span className="font-bold font-title text-[2.8vh]">
                Experience:
              </span>{" "}
              {position.experienceYears} years
            </h2>
            <h2 className="font-text ">
              <span className="font-bold font-title text-[2.8vh]">
                Estimated Salary:{" "}
              </span>{" "}
              {position.expectedSalary} SR
            </h2>
          </div>
          <h2 className="font-title text-accent text-[3vh]">Job overview</h2>
          <p className="font-text w-[90%]">{position.description}</p>
          <h1 className="font-title text-accent text-[3vh]">
            Key Responsibilities
          </h1>

          <p className="font-text w-[90%]">{position.requirments}</p>

          <div className="flex flex-wrap my-4 items-center">
            <p>
              <span className="font-bold font-title text-[2.8vh]">Skills:</span>{" "}
            </p>
            <select
              name="skills"
              value={skillInput}
              onChange={(e) => {
                const selectedSkill = e.target.value;
                setSkillInput(selectedSkill);

                if (selectedSkill) {
                  setSkillsArr((prevSkills) => [selectedSkill, ...prevSkills]);
                  setSkillInput("");
                }
              }}
              className={editMode ? `hidden` : `select select-bordered`}
            >
              {skillsOptions.map((skill) => {
                return <option value={skill}>{skill}</option>;
              })}
              <option value=""></option>
            </select>
            {skillsArr &&
              skillsArr.map((skill) => {
                const handleDelete = () => {
                  handleDelete2(skill);
                };

                return (
                  <SkillTip
                    text={skill}
                    onDelete={handleDelete}
                    editMode={editMode}
                  ></SkillTip>
                );
              })}
          </div>
          <div className={`self-end ${editMode ? "hidden" : ""}`}>
            <button
              onClick={cancelEditAction}
              className="btn btn-outline btn-accent btn-sm"
            >
              cancel
            </button>
            {!position.status ? (
              <button
                onClick={() =>
                  document.getElementById("deletePositionDialog").showModal()
                }
                className="btn btn-outline btn-error btn-sm"
              >
                Delete
              </button>
            ) : (
              <></>
            )}
            {/* <button
              onClick={()=>document.getElementById('deletePositionDialog').showModal()}
              className="btn btn-outline btn-error btn-sm"
            >
              Delete
            </button> */}
            <dialog id="deletePositionDialog" className="modal">
              <div className="modal-box">
                <form method="dialog">
                  <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                    ✕
                  </button>
                </form>
                <h3 className="font-bold text-lg">Deleting Position</h3>
                <p className="py-4">
                  Are you sure from deleting this position?
                </p>
                <button className="btn btn-error" onClick={deleteAction}>
                  Delete Position
                </button>
              </div>
            </dialog>
            <button
              onClick={saveEditAction}
              className="btn btn-secondary btn-sm"
            >
              Save
            </button>
          </div>
          <br></br>
        </div>
        <div className="flex flex-col max-md:justify-center max-md:items-center gap-3 m-4 max-md:w-[90%] px-3">
          {positionArr.map((el, index) => {
            if (el._id != position._id) {
              return (
                <PositionCard
                  key={index}
                  id={el._id}
                  Position={el.title}
                  Department={el.department.name}
                  Experience={el.experienceYears}
                  skills={el?.skills || ""}
                ></PositionCard>
              );
            }
          })}
        </div>
      </div>
      {!isManager ? (
        <div className="lg:w-[80vw] p-10">
          <p>Best match employees</p>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4">
            {bestEmp &&
              bestEmp.map((emp, index) => {
                return (
                  <EmpCard
                    key={index}
                    id={emp._id}
                    positionId={position?._id}
                    name={emp.name}
                    years={emp.yearsOfExperience}
                    skills={emp.skills}
                    pPosition={emp.positionTitle}
                    nPosition={position.title}
                    department={position?.department?.name}
                    manager={position?.department?.manager?.name}
                  ></EmpCard>
                );
              })}
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}

export default PositionsPage;
