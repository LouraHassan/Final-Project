import React from "react";
import SkillTip from "../Components/SkillTip";
import EmpCard from "../Components/EmpCard";
import Nav from "../Components/Nav";
function AdminPositionPage() {
  return (
      <div className="w-fit">
          <Nav></Nav>
      <div className="p-5">
        <p className="font-title text-2xl font-bold">Position Name</p>
        <div className="grid lg:grid-cols-2 m-5">
          <div>
            <div className="">
              <p className="text-accent font-title text-xl font-bold">
                Job description
              </p>
              <p className="font-text text-sm tracking-wide">
                We are looking for a highly skilled and experienced Senior
                Project Manager to lead complex projects from initiation to
                completion. The Senior Project Manager will be responsible for
                overseeing project teams, ensuring that all project objectives
                are met, managing risks, and maintaining communication with
                stakeholders. This role requires exceptional leadership,
                organizational, and communication skills, along with the ability
                to manage multiple projects simultaneously.
              </p>
            </div>
            <div className="my-4">
              <p className="text-accent font-title text-xl font-bold">
                Key Responsibilities
              </p>
              <ul>
                <li className="p-2">
                  <p>
                    <b>Lead Project Planning</b>: Define project scope, goals,
                    deliverables, and success criteria. Develop detailed project
                    plans, timelines, and budgets.
                  </p>
                </li>
                <li className="p-2">
                  <p>
                    <b>Stakeholder Management</b>: Engage with internal and
                    external stakeholders to set expectations, provide updates,
                    and manage feedback throughout the project lifecycle.
                  </p>
                </li>{" "}
                <li className="p-2">
                  <p>
                    <b>Resource Management</b>: Assign tasks, manage workloads,
                    and ensure optimal utilization of team resources.
                  </p>
                </li>{" "}
                <li className="p-2">
                  <p>
                    <b>Risk Management</b>: Identify project risks, develop
                    mitigation strategies, and implement risk control measures
                    to minimize disruptions.
                  </p>
                </li>{" "}
                <li className="p-2">
                  <p>
                    <b>Monitor Progress</b>: Track project performance, ensuring
                    that milestones are met on time and within budget. Adjust
                    plans as necessary to address roadblocks or changes in
                    project scope.
                  </p>
                </li>
              </ul>
            </div>
                  </div>
                  <div className="mx-4 font-title font-semibold bg-white p-5 rounded shadow-md h-fit">
                      <div className=" grid lg:grid-cols-2 h-fit">
                          
                      <p>Department: { }</p>
                      <p>Job Type: { }</p>
                      <p>Experience: { }</p>
                      <p>Expected Salary: { }</p>
                      </div>
                      <div className="flex flex-wrap my-4 items-center">
                          
                          <p>Skills: </p>
                          <SkillTip text='Critical-thinking'></SkillTip>
                          <SkillTip text='team-work'></SkillTip>
                          <SkillTip text='Critical-thinking'></SkillTip>
                          <SkillTip text='Critical-thinking'></SkillTip>
                          <SkillTip text='Critical-thinking'></SkillTip>

                      </div>
                  </div>
              </div>
             
              <p className='text-xl font-title font-bold text-secondary'>Best match employees</p>
              <div className="grid grid-cols-1 self-center lg:grid-cols-3 gap-4 m-4" >
                  
              <EmpCard name='Ahmed Alghamdi' years={4} skills={['Team-work', 'Risk-management', 'Critical-thinking', 'Project-management']}></EmpCard>
                  <EmpCard name='Ahmed Alghamdi' years={4} skills={['Team-work', 'Risk-management']}></EmpCard>
                  <EmpCard name='Ahmed Alghamdi' years={4} skills={['Team-work', 'Risk-management']}></EmpCard>
              

              </div>
      </div>
    </div>
  );
}

export default AdminPositionPage;
