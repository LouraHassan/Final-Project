import React from "react";
import Nav4 from "../Components/Nav4";
import SkillTip from "../Components/SkillTip";
import { useState, useRef } from "react";

function EmployeePage() {
  const [open, setOpen] = useState(false);
  const [editmood, setEditmood] = useState(true);
  const [years, setYears] = useState("3");
  const [about, setAbout] = useState(
    "We are looking for a highly skilled and experienced Senior Project Manager to lead complex projects from initiation to completion. The Senior Project Manager will be responsible for overseeing project teams, ensuring that all project objectives are met, managing risks, and maintaining communication with stakeholders. This role requires exceptional leadership, organizational, and communication skills, the ability to manage multiple projects simultaneously."
  );
  const [education, setEducation] = useState(
    "We are looking for a highly skilled and experienced Senior Project Manager to lead complex projects from initiation to completion. The Senior Project Manager will be responsible for overseeing project teams, ensuring that all project objectives are met, managing risks, and maintaining communication with stakeholders. This role requires exceptional leadership, organizational, and communication skills, along with the ability to manage multiple projects simultaneously."
  );
const textareaRef = useRef(null)
  const [yearsStyle, setYearsStyle] = useState("bg-transparent ");
  const [aboutStyle, setAboutStyle] = useState("bg-transparent ");
  const [educationStyle, setEducationStyle] = useState("bg-transparent ");

  const editaction = () => {
    setEditmood(false);
    setYearsStyle("input input-bordered");
    setAboutStyle("textarea textarea-bordered");
    setEducationStyle("textarea textarea-bordered");
  };
const textareaHeight = () => {
  const textarea = textareaRef.current;
  if(textarea){
    textarea.style.height = 'auto',
textarea.style.height = `${textarea.scrollHeight}px`
  }
}
  return (
    <div>
      <Nav4 />

      <div className="flex  justify-center p-5 ">
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

        <div className="flex flex-col border justify-start  items-center p-12  w-auto mr-3 shadow-2xl bg-[#30465e] pt-10 rounded-xl h-[60vh]">
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
              Ahmed Almousa
            </h2>
            <h1 className="font-text font-bold text-accent text-center ">
              Human Resources
            </h1>
            <div className="mt-3 ml-3">
              <h2 className="font-text text-center text-accent">
                <span className=" font-title font-bold text-accent text-[2.8vh]">
                  Manager:{" "}
                </span>
                Saad Almousa
              </h2>
            </div>
          </div>
        </div>

        <div className="flex flex-col w-[70%] bg-white h-auto justify-around border shadow-2xl p-6 max-md:w-[90%] ">
          <div className="flex justify-between">
            <h1 className="font-title font-bold text-secondary text-[4vh]">
              Ahmed Almousa
            </h1>
            <svg
              onClick={editaction}
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
            {open && (
              <div className="fixed inset-0  flex items-center justify-center bg-black bg-opacity-70 z-50">
                <div className="flex flex-col gap-2  bg-white p-10 rounded-lg shadow-lg max-w-md w-full">
                  <h1 className="font-title text-secondary font-bold text-[3.5vh]">
                    Edit profile
                  </h1>
                  <label className="font-title text-accent font-bold">
                    Estimated Salary:
                  </label>
                  <input type="text" className="input input-bordered w-full " />
                  <label className="font-title text-accent font-bold">
                    skills:
                  </label>
                  <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn m-1 w-full ">
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
            <h2 className="font-text mt-5">
              <span className="font-bold font-title text-[2.8vh] ">
                Manager:{" "}
              </span>
              Saad Almousa
            </h2>
            <h2 className="font-text ">
              <span className="font-bold font-title text-[2.8vh] ">
                Department:{" "}
              </span>
              HR
            </h2>

            <h2 className="font-text mb-4 ">
              <span className="font-bold font-title text-[2.8vh]">
                Experience:
              </span>{" "}
              <input
                type="text"
                value={years}
                onChange={(e) => {
                  setYears(e.target.value);
                }}
                disabled={editmood}
                className={yearsStyle}
                name=""
                id=""
              />
            </h2>
          </div>
          <h2 className="font-title text-accent text-[3vh]">About me</h2>
          <textarea
          ref={textareaRef}
          rows={4}
            value={about}
            onChange={(e) => {
              setAbout(e.target.value)
              textareaHeight()
            }
          }
            className={aboutStyle}
            disabled={editmood}
            style={{ resize:'none'}}
          ></textarea>

          <h2 className="font-title text-accent text-[3vh]">Education</h2>
          <textarea
            value={education}
            onChange={(e) => setEducation(e.target.value)}
            className={educationStyle}
            disabled={editmood}
          ></textarea>

          <div className="flex flex-wrap my-4 items-center mt-7">
            <p>
              <span className="font-bold font-title text-[2.8vh]">Skills:</span>{" "}
            </p>
            <SkillTip text="Critical-thinking"></SkillTip>
            <SkillTip text="team-work"></SkillTip>
            <SkillTip text="Critical-thinking"></SkillTip>
            <SkillTip text="Critical-thinking"></SkillTip>
            <SkillTip text="Critical-thinking"></SkillTip>
          </div>

          <br></br>
        </div>
      </div>
    </div>
  );
}

export default EmployeePage;
