import React, { useEffect, useRef } from "react";
import Nav from "../Components/Nav";
import SkillTip from "../Components/SkillTip";
import PositionCard from "../Components/PositionCard";
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import EmpCard from "../Components/EmpCard";
const positionAPI = `http://localhost:3000/position/`;
const allPositionsAPI = `http://localhost:3000/position/department/${sessionStorage.getItem(
  "department"
)}`;
const SkillsOptionsAPI = `http://localhost:3000/skills`;
const deletePositionAPI = `http://localhost:3000/position/`;
const updateAPI = `http://localhost:3000/position/`;
const bestEmpAPI = `http://localhost:3000/chat/`;
function PositionsPage() {
  console.log(sessionStorage.getItem("department"));
  const textareaRef = useRef(null);
  const textareaRef2 = useRef(null);

  const navigate = useNavigate();
  const { id } = useParams();
  const accountType = sessionStorage.getItem("accountType");
  const [isManager, setIsManager] = useState(accountType == "manager");
  const [position, setPosition] = useState([]);
  const [positionArr, setPositionArr] = useState([]);
  const [open, setOpen] = useState(false);
  const [jobType, setJobType] = useState("");
  const [department, setDepartment] = useState("");
  const [experience, setExperience] = useState("");
  const [description, setDescription] = useState("");
  const [salary, setSalary] = useState("");
  const [requirments, setRequirments] = useState("");
  const [editMode, setEditMode] = useState(true);
  const [skillsArr, setSkillsArr] = useState([]);
  const [bestEmp, setBestEmp] = useState([]);
  const [editModeInput, setEditModeInput] = useState(
    "bg-transparent text-black"
  );

  const [editModeSelect, setEditModeSelect] = useState("bg-transparent");
  const [departmentStyle, setDepartmentStyle] = useState("bg-transparent ");
  const [experienceStyle, setExperienceStyle] = useState(
    "bg-transparent w-[2vw]"
  );
  const [descriptionStyle, setDescriptionStyle] = useState("bg-transparent ");
  const [salaryStyle, setSalaryStyle] = useState("bg-transparent w-[6vw]");
  const [requirmentsStyle, setRequirmentsStyle] = useState("bg-transparent ");

  const [skillsOptions, setSkillsOptions] = useState([]);
  const [skillInput, setSkillInput] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getPosition();
    getAllPositions();
    getOptions();
    getBestEmp();
  }, [id]);

  useEffect(() => {
    setJobType(position.jobType);
    setSkillsArr(position.skills);
    setDepartment(position?.department?.name || "");
    setExperience(position.experienceYears || "");
    setDescription(position.description || "");
    setSalary(position.expectedSalary || "");
    setRequirments(position.requirments || "");
  }, [position]);

  const getPosition = () => {
    setLoading(true);
    axios
      .get(positionAPI + id)
      .then((res) => {
        console.log(res);
        setPosition(res.data);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const getAllPositions = () => {
    setLoading(true);
    axios
      .get(allPositionsAPI)
      .then((res) => {
        console.log(res);
        setPositionArr(res.data);
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

  const getBestEmp = () => {
    setLoading(true);
    axios
      .get(bestEmpAPI + id)
      .then((res) => {
        console.log(res);
        setBestEmp(res.data);
      })
      .finally(() => {
        setLoading(false);
      });
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

  const editAction = () => {
    setEditMode(false);
    setEditModeInput("input input-bordered");
    setEditModeSelect("select select-bordered");
    setDepartmentStyle("input input-bordered ");
    setExperienceStyle("input input-bordered");
    setDescriptionStyle("input input-bordered");
    setSalaryStyle("input input-bordered");
    setRequirmentsStyle("input input-bordered");
  };

  const cancelEditAction = () => {
    setEditMode(true);
    setEditModeInput("bg-transparent");
    setEditModeSelect("bg-transparent");
    setDepartmentStyle("bg-transparent ");
    setExperienceStyle("bg-transparent w-[2vw]");
    setDescriptionStyle("bg-transparent");
    setSalaryStyle("bg-transparent w-[6vw]");
    setRequirmentsStyle("bg-transparent");

    setJobType(position.jobType);
    setSkillsArr(position.skills);
    setDepartment(position?.department?.name);
    setExperience(position.experienceYears);
    setDescription(position.description);
    setSalary(position.expectedSalary);
    setRequirments(position.requirments);
  };
  const deleteAction = () => {
    setLoading(true);
    axios
      .delete(
        deletePositionAPI +
          id +
          `?company=${sessionStorage.getItem("company")}`,
        {
          headers: {
            Authorization: sessionStorage.getItem("token"),
          },
        }
      )
      .then((res) => {
        console.log(res);
        navigate(`/Manager/${sessionStorage.getItem("accountId")}`);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  const saveEditAction = () => {
    setLoading(true);
    axios
      .put(
        updateAPI + id + `?company=${sessionStorage.getItem("company")}`,
        {
          jobType: jobType,
          department: department,
          yearsOfExperience: experience,
          description: description,
          expectedSalary: salary,
          requirments: requirments,
          skills: skillsArr,
        },
        {
          headers: {
            Authorization: sessionStorage.getItem("token"),
          },
        }
      )
      .then((res) => {
        console.log(res);
        setEditMode(true);
        setDepartmentStyle("bg-transparent");
        setExperienceStyle("bg-transparent w-[2vw]");
        setDescriptionStyle("bg-transparent");
        setSalaryStyle("bg-transparent w-[6vw]");
        setRequirmentsStyle("bg-transparent");
      })
      .finally(() => {
        setLoading(false);
      });
  };
  console.log(bestEmp);

  const handleDelete2 = (skillToDelete) => {
    setSkillsArr((prevSkills) =>
      prevSkills.filter((skill) => skill !== skillToDelete)
    );
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
      <Nav />
      <div className="flex  justify-around mt-5 mb-5 lg:m-8 md:m-8 max-md:flex-col max-md:justify-center max-md:items-center ">
        <div className="flex flex-col lg:w-[65%] md:w-[65%]  bg-white p-8 h-auto justify-around rounded-lg border shadow-xl max-md:w-[95%] ">
          <div className="flex justify-between">
            <h1 className="font-title font-bold text-secondary text-[4vh]">
              {position.title}
            </h1>
            {isManager ? (
              <svg
                onClick={editAction}
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="icon icon-tabler icons-tabler-outline icon-tabler-pencil text-secondary"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4" />
                <path d="M13.5 6.5l4 4" />
              </svg>
            ) : (
              // <svg
              //   onClick={editAction}
              //   // onClick={() => setOpen(true)}
              //   xmlns="http://www.w3.org/2000/svg"
              //   width="24"
              //   height="24"
              //   viewBox="0 0 24 24"
              //   fill="none"
              //   stroke="currentColor"
              //   stroke-width="2"
              //   stroke-linecap="round"
              //   stroke-linejoin="round"
              //   class="icon icon-tabler icons-tabler-outline icon-tabler-edit"
              // >
              //   <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              //   <path d="M7 7h-1a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-1" />
              //   <path d="M20.385 6.585a2.1 2.1 0 0 0 -2.97 -2.97l-8.415 8.385v3h3l8.385 -8.415z" />
              //   <path d="M16 5l3 3" />
              // </svg>

              <></>
            )}

            {open && (
              <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-60  ">
                <div className="bg-white p-6 rounded-lg w-[45%]">
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
            <h2 className="font-text mt-4 ">
              <span className="font-bold font-title text-[2.8vh]  text-secondary  ">
                Department:{" "}
              </span>
              <input
                placeholder="Not added yet"
                type="text"
                value={department}
                onChange={(e) => {
                  setDepartment(e.target.value);
                }}
                disabled={editMode}
                className={departmentStyle}
                name=""
                id=""
              />
            </h2>
            <h2 className="font-text mt-4">
              <span className="font-bold font-title text-[2.8vh]   text-secondary">
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
            <h2 className="font-text mt-4 ">
              <span className="font-bold font-title text-[2.8vh]  text-secondary ">
                Experience:
              </span>{" "}
              <input
                placeholder="Not added yet"
                type="text"
                value={experience}
                onChange={(e) => {
                  setExperience(e.target.value);
                }}
                disabled={editMode}
                className={experienceStyle}
                name=""
                id=""
              />
              {/* {position.experienceYears}  */}
              years
            </h2>
            <h2 className="font-text  mt-4">
              <span className="font-bold font-title text-[2.8vh]  text-secondary ">
                Estimated Salary:{" "}
              </span>
              <input
                placeholder="Not added yet"
                type="text"
                value={salary}
                onChange={(e) => {
                  setSalary(e.target.value);
                }}
                disabled={editMode}
                className={salaryStyle}
                name=""
                id=""
              />
              {/* {position.expectedSalary}  */}
              SR
            </h2>
          </div>

          <h2 className="font-title  font-bold  text-[2.8vh] mt-[8vh] text-secondary ">
            Job overview:
          </h2>

          <textarea
            placeholder="Not added yet"
            ref={textareaRef}
            rows={4}
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
              textareaHeight();
            }}
            className={descriptionStyle}
            disabled={editMode}
            style={{ resize: "none" }}
          ></textarea>

          {/* <p className="font-text w-[90%]">{position.description}</p> */}
          <h1 className="font-title  font-bold  text-[2.8vh] mt-4  text-secondary">
            Key Responsibilities:
          </h1>
          <textarea
            placeholder="Not added yet"
            ref={textareaRef}
            rows={4}
            value={requirments}
            onChange={(e) => {
              setRequirments(e.target.value);
              textareaHeight2();
            }}
            className={requirmentsStyle}
            disabled={editMode}
            style={{ resize: "none" }}
          ></textarea>

          {/* <p className="font-text w-[90%]">{position.requirments}</p> */}

          <div className="flex flex-wrap my-4 items-center">
            <p>
              <span className="font-bold font-title text-[2.8vh]  text-secondary">
                Skills:
              </span>{" "}
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
              className={
                editMode ? `hidden` : `select select-bordered w-full mb-7 mt-3`
              }
            >
              {skillsOptions.map((skill) => {
                return <option value={skill}>{skill}</option>;
              })}
              <option value="">Select Skills</option>
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
          <div
            className={`self-end ${
              editMode ? "hidden" : " flex justify-around w-[30vh]"
            }`}
          >
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
                <button
                  className="btn btn-outline btn-error"
                  onClick={deleteAction}
                >
                  Delete Position
                </button>
              </div>
            </dialog>
            <button
              onClick={saveEditAction}
              className="btn btn-outline btn-secondary btn-sm"
            >
              Save
            </button>
          </div>
          <br></br>
        </div>
        <div className="flex flex-col max-md:justify-center max-md:items-center gap-3 m-4 max-md:w-[90%] max-sm:w-[95%] px-3">
          {positionArr.map((el, index) => {
            if (!el.status) {
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
            }
          })}
        </div>
      </div>
      {!isManager ? (
        <div className="lg:w-[80vw] p-10">
          <h1 className="font-title font-bold text-[3vh] text-secondary my-6">
            Best match employees
          </h1>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4">
            {bestEmp &&
              bestEmp.map((emp, index) => {
                if (emp) {
                  return (
                    <EmpCard
                      key={index}
                      id={emp?._id}
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
                }
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
