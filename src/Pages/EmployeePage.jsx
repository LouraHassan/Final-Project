import React from "react";
import Nav4 from "../Components/Nav4";
import SkillTip from "../Components/SkillTip";

function EmployeePage() {
  return (
    <div>
      <Nav4 />

      <div className="flex flex-col h-[30vh]">
        <div className="flex justify-center items-center">
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
        <div className="flex flex-col justify-center items-center ">
          <h1 className="font-title text-secondary font-bold text-[4vh]">
            Ahmed Almousa
          </h1>
          <h2 className="font-text text-accent font-bold mb-3 ">
              Business Analyst
            </h2>

        </div>
<div className="flex flex-col justify-center items-center ">
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
        <div className="flex flex-wrap my-4 items-center justify-center w-[60vh]">
          <p>
            <span className="font-bold font-title text-[2.8vh]">Skills:</span>{" "}
          </p>
          <SkillTip text="Critical-thinking"></SkillTip>
          <SkillTip text="team-work"></SkillTip>
          <SkillTip text="Critical-thinking"></SkillTip>
          <SkillTip text="Critical-thinking"></SkillTip>
          <SkillTip text="Critical-thinking"></SkillTip>
        </div>
</div>


</div>

      </div>

  );
}

export default EmployeePage;
