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

  const [yearsStyle, setYearsStyle] = useState("bg-transparent");
  const [aboutStyle, setAboutStyle] = useState("bg-transparent ");
  const [educationStyle, setEducationStyle] = useState("bg-transparent ");
  const [skillsArr, setSkillsArr] = useState([]);
  const [skillsOptions, setSkillsOptions] = useState([]);
  const [skillInput, setSkillInput] = useState("");
  const [passwordChanged, setPasswordChanged] = useState();
  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(false);
  const [networkError, setNetworkError] = useState(false);

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

  useEffect(() => {
    textareaHeight()
    textareaHeight2()
  },[about])
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
    setYearsStyle("bg-transparent ");
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

      <div className="flex gap-6 flex-col justify-center p-8 items-center lg:flex-row lg:items-start">
      

        <div className="flex w-full flex-col justify-start items-start lg:justify-center lg:items-center lg:w-[30vw] p-5  shadow-xl bg-secondary  rounded-lg  h-fit  ">
          <div className="flex items-start lg:flex-col lg:items-center">
            
          <div className="flex justify-center items-center bg-slate-100  rounded-full">
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
          <div className="flex flex-col justify-start px-5 lg:text-center lg:my-4">
            <h2 className="font-title  text-white font-bold text-xl">
              {user.name}
            </h2>

            <h1 className="font-text font-semibold text-accent">
              {user.positionTitle}
            </h1>
            <h1 className="font-text  text-accent ">
              {user?.department?.name}
            </h1>
            <div className="my-2">
              <h2 className="font-text text-accent">
                <span className=" font-title font-bold  text-white text-sm">
                  Manager{" "}
                </span>
                <br></br>
                {user?.department?.manager?.name}
              </h2>
            </div>
            </div>
          </div>

        
        </div>

        <div className="flex flex-col w-full ">
       
          {!passwordChanged ? (
            <div
              role="alert"
              className="alert rounded-lg flex flex-col lg:flex-row lg:items-center lg:justify-between items-start border-2 border-warning lg:my-2 bg-white "
            >
              <div className="flex items-start">

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
              <span className="text-left mx-2">You must update your password and add your data bellow</span>
              </div>
              <button
                className="btn btn-ghost text-secondary self-end"
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
            <div className="modal-box flex flex-col items-center bg-white">
              <form method="dialog">
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                  ✕
                </button>
              </form>
              <h3 className="font-bold text-xl text-secondary ">
                Update your password
              </h3>
              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text font-title text-accent font-bold text-lg ">Enter new password:</span>
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
                  <span className="label-text font-title text-accent font-bold text-lg">Confirm password:</span>
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
              {!editMode ? <></> :
              
              <svg
              onClick={editaction}
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

}
             
            </div>

            <h2 className="font-text  ">
                <span className="font-bold font-title text-secondary text-lg">
                  Experience
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
                 
                />
                
              </h2>
        
        

            <h2 className="font-bold font-title text-secondary text-lg mt-2 ">
              About me
            </h2>
            <textarea
              placeholder="Not added yet"
              ref={textareaRef}
             
              value={about}
              onChange={(e) => {
                setAbout(e.target.value);
                textareaHeight();
              }}
              className={aboutStyle}
              disabled={editMode}
              style={{ resize: "none" }}
              ></textarea>
             

     

            <h2 className="font-bold font-title text-secondary text-lg mt-2 ">
              Education
            </h2>
            <textarea
              placeholder="Not added yet"
              ref={textareaRef2}
              
              value={education}
              onChange={(e) => {
                setEducation(e.target.value);
                textareaHeight2();
              }}
              className={educationStyle}
              disabled={editMode}
              style={{ resize: "none" }}
              ></textarea>
          

            <div className="flex flex-wrap  items-center my-2 ">
              <p>
                <span className="font-bold font-title text-secondary text-lg">
                  Skills
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
                className="btn  btn-secondary btn-sm"
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
