import React from "react";
import Nav from "../Components/Nav";
import NotificationCard from "../Components/NotificationCard";
import SkillTip from "../Components/SkillTip";
import { useState, useRef, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
const AccountsAPI = `http://localhost:3000/account/`;
const SkillsOptionsAPI = `http://localhost:3000/skills`;
const updatePasswordAPI = `http://localhost:3000/account/changepassword/`;
const updateEmpAPI = `http://localhost:3000/account/`;
const updateAPI = `http://localhost:3000/request/`;

function EmployeePage() {
  const { id } = useParams();
  const notificationAPI = `http://localhost:3000/getNotifications/${id}`;
  const [user, setUser] = useState([]);
  const [open, setOpen] = useState(false);
  const [editMode, seteditMode] = useState(true);
  const [years, setYears] = useState("");
  const [about, setAbout] = useState(
    "We are looking for a highly skilled and experienced Senior Project Manager to lead complex projects from initiation to completion. The Senior Project Manager will be responsible for overseeing project teams, ensuring that all project objectives are met, managing risks, and maintaining communication with stakeholders. This role requires exceptional leadership, organizational, and communication skills, the ability to manage multiple projects simultaneously."
  );
  const [education, setEducation] = useState(
    "We are looking for a highly skilled and experienced Senior Project Manager to lead complex projects from initiation to completion. The Senior Project Manager will be responsible for overseeing project teams, ensuring that all project objectives are met, managing risks, and maintaining communication with stakeholders. This role requires exceptional leadership, organizational, and communication skills, along with the ability to manage multiple projects simultaneously."
  );
  const textareaRef = useRef(null);
  const textareaRef2 = useRef(null);
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [yearsStyle, setYearsStyle] = useState("bg-transparent w-[2vh] ");
  const [aboutStyle, setAboutStyle] = useState("bg-transparent ");
  const [educationStyle, setEducationStyle] = useState("bg-transparent ");
  const [skillsArr, setSkillsArr] = useState([]);
  const [skillsOptions, setSkillsOptions] = useState([]);
  const [skillInput, setSkillInput] = useState("");
  const [passwordChanged, setPasswordChanged] = useState();
  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getUser();
    getOptions();
    getNotifications();
  }, []);

  useEffect(() => {
    setYears(user.yearsOfExperience || "");
    setAbout(user.aboutMe || "");
    setEducation(user.education || "");
    setSkillsArr(user.skills || []);
    setPasswordChanged(user.passwordChanged);
  }, [user]);

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

  const editaction = () => {
    seteditMode(false);
    setYearsStyle("input input-bordered ");
    setAboutStyle("textarea textarea-bordered");
    setEducationStyle("textarea textarea-bordered");
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

  const cancelEditAction = () => {
    seteditMode(true);
    setYearsStyle("bg-transparent w-[2vh]");
    setAboutStyle("bg-transparent");
    setEducationStyle("bg-transparent");
    setYears(user.yearsOfExperience || "");
    setAbout(user.aboutMe || "");
    setEducation(user.education || "");
    setSkillsArr(user.skills || []);
  };
  const saveEditAction = () => {
    setLoading(true);
    axios
      .put(
        updateEmpAPI + id,
        {
          yearsOfExperience: years,
          aboutMe: about,
          education: education,
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
        seteditMode(true);
        setYearsStyle("bg-transparent w-[2vh]");
        setAboutStyle("bg-transparent");
        setEducationStyle("bg-transparent");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleDelete2 = (skillToDelete) => {
    setSkillsArr((prevSkills) =>
      prevSkills.filter((skill) => skill !== skillToDelete)
    );
  };

  const updatePasswordAction = () => {
    setLoading(true);
    if (newPassword == "" || confirmPassword == "") {
    } else {
      axios
        .put(
          updatePasswordAPI + id,
          {
            user_password: newPassword,
          },
          {
            headers: {
              Authorization: sessionStorage.getItem("token"),
            },
          }
        )
        .then((res) => {
          console.log(res);
          document.getElementById("passwordDialog").close();
          getUser();
        })
        .finally(() => {
          setLoading(false);
        });
    }
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

      <div className="flex  justify-center p-5  max-sm:flex-col max-sm:justify-center">
        {/* <div className="flex flex-col h-[30vh] p-10">
        <div className="flex ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100"
            height="100"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="icon icon-tabler icons-tabler-outline icon-tabler-user"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
            <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
          </svg>
        </div>
        <div className="flex flex-col  ">
          <h1 className="font-title text-secondary font-bold text-[4vh]">
            Ahmed Almousa
          </h1>
          <h2 className="font-text text-accent font-bold mb-3 ">
            Business Analyst
          </h2>
        </div>
        <div className="flex flex-col  ">
          <h2 className="font-text ">
            <span className="font-bold font-title text-[2.8vh]">
              Department:{" "}
            </span>
            Human Resources
          </h2>
          <h2 className="font-text ">
            <span className="font-bold font-title text-[2.8vh]">Manager: </span>
            Saad Almousa
          </h2>
          <h2 className="font-text ">
            <span className="font-bold font-title text-[2.8vh]">
              Experience:
            </span>{" "}
            2 years
          </h2>
          <div className="flex flex-wrap my-4 items-center justify-center w-[60vh]">
            <p>
              <span className="font-bold font-title text-[2.8vh]">Skills:</span>{" "}
            </p>
            <SkillTip text="Critical-thinking"></SkillTip>
            <SkillTip text="team-work"></SkillTip>
            <SkillTip text="Critical-thinking"></SkillTip>
            <SkillTip text="Critical-thinking"></SkillTip>
            <SkillTip text="Critical-thinking"></SkillTip>
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
              class="icon icon-tabler icons-tabler-outline icon-tabler-edit"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M7 7h-1a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-1" />
              <path d="M20.385 6.585a2.1 2.1 0 0 0 -2.97 -2.97l-8.415 8.385v3h3l8.385 -8.415z" />
              <path d="M16 5l3 3" />
            </svg>
          </div>
        </div>
      </div>   */}

        <div className="flex flex-col max-sm:flex  border justify-start  items-center p-12  w-auto mr-3 shadow-xl bg-[#30465e] pt-10 rounded-lg  h-fit max-sm:justify-center max-sm:w-[100%] max-sm:mb-3 ">
          <div className="flex justify-center items-center bg-slate-200  rounded-full">
            <div>
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
          </div>
          <div className="flex flex-col justify-center  ">
            <h2 className="font-title mt-4 text-center  text-white font-bold text-[4vh]">
              {user.name}
            </h2>

            <h1 className="font-text font-semibold text-accent text-center">
              {user.positionTitle}
            </h1>
            <h1 className="font-text  text-accent text-center ">
              {user?.department?.name}
            </h1>
            <div className="mt-3 ml-3">
              <h2 className="font-text text-center text-accent">
                <span className=" font-title font-bold  text-white text-[2.3vh]">
                  Manager{" "}
                </span>
                <br></br>
                {user?.department?.manager?.name}
              </h2>
            </div>
          </div>
        </div>

        <div className="flex flex-col w-full ">
          {notifications.employees?.map((el) => {
            if (!el.isClosedByEmployee) {
              const handleDismiss = () => {
                dismissAction(el._id);
              };
              return (
                <NotificationCard
                  text={`Your position has been update to ${el.newPosition}`}
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
          {!passwordChanged ? (
            <div
              role="alert"
              className="alert border-2 border-warning m-2 bg-white "
            >
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
              <span>You must update you password and add your data down</span>
              <button
                className="btn btn-ghost text-secondary"
                onClick={() =>
                  document.getElementById("passwordDialog").showModal()
                }
              >
                Update password
              </button>
            </div>
          ) : (
            <></>
          )}

          <dialog id="passwordDialog" className="modal">
            <div className="modal-box flex flex-col items-center bg-white w-[58vh]">
              <form method="dialog">
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                  ✕
                </button>
              </form>
              <h3 className=" font-bold text-[3vh] font-title text-secondary mb-4">
                Update your password
              </h3>
              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text font-title text-accent font-bold text-[2.5vh] ">Enter new password:</span>
                </div>
                <input
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  type="password"
                  className="input input-bordered w-full max-w-xs"
                />
              </label>
              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text font-title text-accent font-bold text-[2.5vh]">Confirm password:</span>
                </div>
                <input
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  type="password"
                  className="input input-bordered w-full max-w-xs"
                />
              </label>

              <button className="btn btn-secondary mt-5 " onClick={updatePasswordAction}>
                Update password
              </button>
            </div>
          </dialog>
          <div className="flex flex-col w-full rounded-lg bg-white h-auto justify-around border shadow-xl p-6 max-md:w-[100%] ">
            <div className="flex justify-between">
              <h1 className="font-title font-bold text-accent text-[4vh]">
                {user.name}
              </h1>
              <svg
                onClick={editaction}
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

              {open && (
                <div className="fixed inset-0  flex items-center justify-center bg-black bg-opacity-70 z-50">
                  <div className="flex flex-col gap-2  bg-white p-10 rounded-lg shadow-lg max-w-md w-full">
                    <h1 className="font-title text-secondary font-bold text-[3.5vh]">
                      Edit profile
                    </h1>
                    <label className="font-title text-accent font-bold">
                      Estimated Salary:
                    </label>
                    <input
                      type="text"
                      className="input input-bordered w-full "
                    />
                    <label className="font-title text-accent font-bold">
                      skills:
                    </label>
                    <div className="dropdown">
                      <div
                        tabIndex={0}
                        role="button"
                        className="btn m-1 w-full "
                      >
                        {" "}
                        Define your skills
                      </div>
                      <ul
                        tabIndex={0}
                        className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
                      >
                        <li>
                          <a>Item 1</a>
                        </li>
                        <li>
                          <a>Item 2</a>
                        </li>
                      </ul>
                    </div>
                    <div className="flex justify-end gap-2 ">
                      <button
                        onClick={() => setOpen(false)}
                        className="btn bg-[#30465e] text-white mt-3 w-[12vh] "
                      >
                        Cancel
                      </button>
                      <button className="btn btn-accent text-white mt-3 w-[12vh] ">
                        Save
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="flex flex-col justify-around h-auto gap-3">
              <h2 className="font-text mb-4 ">
                <span className="font-bold font-title text-secondary text-[2.8vh]">
                  Experience:
                </span>{" "}
                <input
                  placeholder="Not added yet"
                  type="text"
                  value={years}
                  onChange={(e) => {
                    setYears(e.target.value);
                  }}
                  disabled={editMode}
                  className={yearsStyle}
                  name=""
                  id=""
                />{" "}
                years
              </h2>
            </div>
            <h2 className="font-bold font-title text-secondary text-[2.8vh]">
              About me:
            </h2>
            <textarea
              placeholder="Not added yet"
              ref={textareaRef}
              rows={4}
              value={about}
              onChange={(e) => {
                setAbout(e.target.value);
                textareaHeight();
              }}
              className={aboutStyle}
              disabled={editMode}
              style={{ resize: "none" }}
            ></textarea>

            <h2 className="font-bold font-title text-secondary text-[2.8vh] ">
              Education:
            </h2>
            <textarea
              placeholder="Not added yet"
              ref={textareaRef2}
              rows={4}
              value={education}
              onChange={(e) => {
                setEducation(e.target.value);
                textareaHeight2();
              }}
              className={educationStyle}
              disabled={editMode}
              style={{ resize: "none" }}
            ></textarea>

            <div className="flex flex-wrap my-4 items-center mt-7 ">
              <p>
                <span className="font-bold font-title text-secondary text-[2.8vh]">
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
                  editMode ? `hidden` : `select select-bordered w-full mb-3`
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
              {/* <SkillTip text="Critical-thinking"></SkillTip>
            <SkillTip text="team-work"></SkillTip>
            <SkillTip text="Critical-thinking"></SkillTip>
            <SkillTip text="Critical-thinking"></SkillTip>
            <SkillTip text="Critical-thinking"></SkillTip> */}
            </div>

            <br></br>

            <div
              className={`self-end ${
                editMode ? "hidden" : "flex justify-around w-[20vh]"
              }`}
            >
              <button
                onClick={cancelEditAction}
                className="btn btn-outline btn-accent btn-sm"
              >
                cancel
              </button>

              <button
                onClick={saveEditAction}
                className="btn btn-outline btn-secondary btn-sm"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EmployeePage;
