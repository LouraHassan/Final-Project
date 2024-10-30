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
    "bg-transparent w-fit"
  );
  const [descriptionStyle, setDescriptionStyle] = useState("bg-transparent ");
  const [salaryStyle, setSalaryStyle] = useState("bg-transparent w-fit");
  const [requirmentsStyle, setRequirmentsStyle] = useState("bg-transparent ");

  const [skillsOptions, setSkillsOptions] = useState([]);
  const [skillInput, setSkillInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [networkError, setNetworkError] = useState(false);

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

  useEffect(() => {
    textareaHeight();
    textareaHeight2();
  }, [description]);
  const getPosition = () => {
    setLoading(true);

    axios
      .get(positionAPI + id)
      .then((res) => {
        console.log(res);
        setPosition(res.data);
        setNetworkError(false);
      })
      .catch((err) => {
        if (
          !err.response ||
          err.code === "ERR_CONNECTION_REFUSED" ||
          err.code === "ERR_BAD_RESPONSE"
        ) {
          setNetworkError(true);
        }
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
        setEditModeSelect("bg-transparent");
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
  const retryAction = () => {
    location.reload();
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
            <p className="text-error text-lg m-4 font-semibold">
              Oops! No Internet Connection
            </p>
            <p className="text-neutral m-1">
              We couldn’t connect to the internet.
            </p>
            <p className="text-neutral m-1">
              {" "}
              Please check your connection and click the button to try again.
            </p>
            <button
              onClick={retryAction}
              className="btn btn-accent my-5 btn-wide"
            >
              Retry
            </button>
          </div>
        </div>
      ) : null}
      <Nav />
      <div className="flex flex-col p-8 md:px-16 justify-center items-center ">
        <div className="flex flex-col md:flex-col  lg:flex-row w-full md:justify-between md:w-[80vw] gap-4">
          <div className="flex flex-col  bg-white p-8 lg:w-[60vw] md:w-full  gap-4 justify-around rounded-lg shadow-lg ">
            <div className="flex justify-between">
              <h1 className="font-title font-bold text-secondary text-2xl">
                {position.title}
              </h1>
              {isManager && editMode ? (
                <svg
                  onClick={editAction}
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="icon icon-tabler icons-tabler-outline icon-tabler-pencil text-base-300 hover:cursor-pointer"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4" />
                  <path d="M13.5 6.5l4 4" />
                </svg>
              ) : (
                <></>
              )}
            </div>

            <div className="flex flex-col  ">
              <h2 className="font-text  my-2">
                <span className="font-bold font-title text-lg  text-secondary  ">
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
              <h2 className="font-text my-2">
                <span className="font-bold font-title text-lg   text-secondary">
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
              <h2 className="font-text my-2">
                <span className="font-bold font-title text-lg  text-secondary ">
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
              <h2 className="font-text my-2">
                <span className="font-bold font-title text-lg  text-secondary ">
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

            <h2 className="font-title  font-bold  text-lg my-2 text-secondary ">
              Job overview:
            </h2>

            <textarea
              placeholder="Not added yet"
              ref={textareaRef}
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
            <h1 className="font-title font-bold  text-lg mt-4  text-secondary">
              Requirements:
            </h1>
            <textarea
              placeholder="Not added yet"
              ref={textareaRef2}
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
                <span className="font-bold font-title text-lg  text-secondary">
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
                    setSkillsArr((prevSkills) => [
                      selectedSkill,
                      ...prevSkills,
                    ]);
                    setSkillInput("");
                  }
                }}
                className={
                  editMode ? `hidden` : `select select-bordered w-full my-2`
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
            <div className={`md:self-end ${editMode ? "hidden" : " flex "}`}>
              <button
                onClick={cancelEditAction}
                className="btn btn-outline btn-accent btn-sm mx-2"
              >
                cancel
              </button>
              {!position.status ? (
                <button
                  onClick={() =>
                    document.getElementById("deletePositionDialog").showModal()
                  }
                  className="btn btn-outline btn-error btn-sm mx-2"
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
                  <h3 className="font-bold text-xl text-secondary">
                    Deleting Position
                  </h3>
                  <p className="py-4">
                    Are you sure from deleting this position?
                  </p>
                  <button className="btn  btn-error" onClick={deleteAction}>
                    Delete Position
                  </button>
                </div>
              </dialog>
              <button
                onClick={saveEditAction}
                className="btn  btn-secondary btn-sm mx-2"
              >
                Save
              </button>
            </div>
            <br></br>
          </div>
          {!isManager ? (
            <div className="flex flex-col  lg:w-[30vw]">
              <h1 className="font-title font-bold text-xl border-2 text-secondary my-2">
                Best match employees
              </h1>
              <div className="grid gap-4 my-4">
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
            <div className="w-full lg:w-[30vw] md:w-[45vh] flex flex-col items-center ">
              <p className="self-start text-2xl font-title font-bold text-secondary my-2">
                Other open positions
              </p>
              <div className="grid  gap-3  max-md:w-full">
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
          )}
        </div>

        {!isManager ? (
          <div className="w-full md:w-[80vw] flex flex-col items-center my-4">
            <p className="self-start text-xl font-title font-bold text-secondary my-2">
              Other open positions
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 ">
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
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}

export default PositionsPage;
