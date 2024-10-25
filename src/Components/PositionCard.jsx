import React, { useState } from "react";
import SkillTip from "./SkillTip";
import { Link } from "react-router-dom";

function PositionCard({ Position, Department, Experience, onEdit, id, skills }) {
  const [skillsArr , setSkillsArr] = useState()
  return (
    <div className="flex flex-col justify-around  p-5 bg-white rounded-md shadow-md">
      <div className="flex justify-between">
        <h1 className="text-secondary font-bold text-[3vh] ">
          {Position} {/* عرض اسم الوظيفة */}
        </h1>
        {/* إضافة زر التعديل */}
       
      </div>
      <br />

      <div className="flex flex-col justify-around  h-auto">
        <h2 className="text-[2vh] mb-2">
          <span className="font-text text-[2vh] font-bold ">Department:</span>{" "}
          {Department || "Project Management"} {/* عرض القسم */}
        </h2>
        <h2 className="text-[2vh]">
          <span className="font-text text-[2vh] font-bold">Experience: </span>
          {Experience || "2 years"} {/* عرض الخبرة */}
        </h2>

        <div className="flex flex-wrap my-4 items-center">
          <p>Skills: </p>
          {skills && skills.map(skill => {
            return (<SkillTip text={skill}   editMode={true}></SkillTip>)
          })}
        
        </div>
        <br />

        <Link to={`/Position/${id}`}>
          <button className="btn btn-accent w-[100%] text-white font-text p-2">
            View more
          </button>
        </Link>
      </div>
    </div>
  );
}

export default PositionCard;
