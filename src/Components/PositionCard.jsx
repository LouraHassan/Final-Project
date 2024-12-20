import React, { useState } from "react";
import SkillTip from "./SkillTip";
import { Link } from "react-router-dom";

function PositionCard({ Position, Department, Experience, onEdit, id, skills }) {
  const [skillsArr , setSkillsArr] = useState()
  return (
    <div className="flex flex-col justify-around  p-5 bg-white rounded-lg shadow-md">
      <div className="flex justify-between">
        <h1 className="text-secondary font-bold text-2xl ">
          {Position} 
        </h1>
      
       
      </div>
      <br />

      <div className="flex flex-col justify-around  h-auto">
        <h2 className=" font-title text-lg my-1">
          <span className="  font-bold ">Department:</span>{" "}
          {Department} 
        </h2>
        <h2 className=" font-title text-lg my-1">
          <span className=" font-bold">Experience: </span>
          {Experience} 
        </h2>

        <div className="flex flex-wrap  items-center">
          <p className="font-title text-lg my-1 font-bold">Skills: </p>
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
