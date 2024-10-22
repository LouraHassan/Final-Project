import React from "react";
import Nav from "../Components/Nav";
import PositionCard from "../Components/PositionCard";

function PositionsPage() {
  return (
    <div>
      <Nav />
      <div className="flex justify-center justify-around">
        <div className="flex flex-col">
          <PositionCard />
          <PositionCard />
          <PositionCard />
        </div>

        <div className="flex flex-col w-[50%] h-[110vh] justify-around">
          <h1 className="font-title font-bold text-secondary text-[4vh]">
            Senior Project Manager
          </h1>
          <h2 className="font-title text-accent text-[3vh]">Job overview</h2>
          <p className="font-text w-[80%]">
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

          <p className="font-text w-[80%]">
            <span className="font-bold text-[2.3vh]">
              Lead Project Planning:
            </span>
            Define project scope, goals, deliverables, and success criteria.
            Develop detailed project plans, timelines, and budgets.
          </p>
          <p className="font-text w-[80%]">
            <span className="font-bold text-[2.3vh]">
              Stakeholder Management:
            </span>
            Engage with internal and external stakeholders to set expectations,
            provide updates, and manage feedback throughout the project
            lifecycle.
          </p>
          <p className="font-text w-[80%]">
            <span className="font-bold text-[2.3vh]">Resource Management:</span>
            Assign tasks, manage workloads, and ensure optimal utilization of
            team resources.
          </p>
          <p className="font-text w-[80%]">
            <span className="font-bold text-[2.3vh]">Risk Management:</span>{" "}
            Identify project risks, develop mitigation strategies, and implement
            risk control measures to minimize disruptions.
          </p>
          <p className="font-text w-[80%]">
            <span className="font-bold text-[2.3vh]">Monitor Progress: </span>{" "}
            Track project performance, ensuring that milestones are met on time
            and within budget. Adjust plans as necessary to address roadblocks
            or changes in project scope.
          </p>

          <br></br>
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
          <h2 className="font-text ">
            <span className="font-bold font-title text-[2.8vh]">Skills:</span>
          </h2>
        </div>
      </div>
    </div>
  );
}

export default PositionsPage;
