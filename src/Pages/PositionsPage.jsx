import React from "react";
import Nav3 from "../Components/Nav3";
import SkillTip from "../Components/SkillTip";
import PositionCard from "../Components/PositionCard";

function PositionsPage() {
  return (
    <div>
      <Nav3 />
      <div className="flex justify-center justify-around mt-5 mb-5  m-8 max-md:flex-col max-md:justify-center max-md:items-center ">
        <div className="flex flex-col w-[70%] h-auto justify-around border shadow-2xl p-6 max-md:w-[90%] ">
          <div className="flex justify-between">
            <h1 className="font-title font-bold text-secondary text-[4vh]">
              Senior Project Manager
            </h1>
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

          <div className="flex flex-col justify-around h-[28vh]">
            <h2 className="font-text ">
              <span className="font-bold font-title text-[2.8vh]">
                Department:{" "}
              </span>
              HR
            </h2>
            <h2 className="font-text ">
              <span className="font-bold font-title text-[2.8vh]">
                Job Type:{" "}
              </span>{" "}
              Full-Time
            </h2>
            <h2 className="font-text ">
              <span className="font-bold font-title text-[2.8vh]">
                Experience:
              </span>{" "}
              2 years
            </h2>
            <h2 className="font-text ">
              <span className="font-bold font-title text-[2.8vh]">
                Estimated Salary:{" "}
              </span>{" "}
              16,000 SR
            </h2>
          </div>
          <h2 className="font-title text-accent text-[3vh]">Job overview</h2>
          <p className="font-text w-[90%]">
            We are looking for a highly skilled and experienced Senior Project
            Manager to lead complex projects from initiation to completion. The
            Senior Project Manager will be responsible for overseeing project
            teams, ensuring that all project objectives are met, managing risks,
            and maintaining communication with stakeholders. This role requires
            exceptional leadership, organizational, and communication skills,
            along with the ability to manage multiple projects simultaneously.
          </p>
          <h1 className="font-title text-accent text-[3vh]">
            Key Responsibilities
          </h1>

          <p className="font-text w-[90%]">
            <span className="font-bold text-[2.3vh]">
              Lead Project Planning:
            </span>
            Define project scope, goals, deliverables, and success criteria.
            Develop detailed project plans, timelines, and budgets.
          </p>
          <p className="font-text w-[90%]">
            <span className="font-bold text-[2.3vh]">
              Stakeholder Management:
            </span>
            Engage with internal and external stakeholders to set expectations,
            provide updates, and manage feedback throughout the project
            lifecycle.
          </p>
          <p className="font-text w-[90%]">
            <span className="font-bold text-[2.3vh]">Resource Management:</span>
            Assign tasks, manage workloads, and ensure optimal utilization of
            team resources.
          </p>
          <p className="font-text w-[90%]">
            <span className="font-bold text-[2.3vh]">Risk Management:</span>{" "}
            Identify project risks, develop mitigation strategies, and implement
            risk control measures to minimize disruptions.
          </p>
          <p className="font-text w-[90%]">
            <span className="font-bold text-[2.3vh]">Monitor Progress: </span>{" "}
            Track project performance, ensuring that milestones are met on time
            and within budget. Adjust plans as necessary to address roadblocks
            or changes in project scope.
          </p>
          <div className="flex flex-wrap my-4 items-center">
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
        <div className="flex flex-col max-md:justify-center max-md:items-center gap-2 m-4 max-md:w-[90%] ">
          <PositionCard />
          <PositionCard />
          <PositionCard />
        </div>
      </div>
    </div>
  );
}

export default PositionsPage;
