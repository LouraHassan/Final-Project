import React from "react";
import { Link } from "react-router-dom";
import SkillTip from "./SkillTip";
function PositionCard(props) {
  return (
    <div className="flex flex-col justify-around  p-5 bg-white rounded-md shadow-md">
      <div className="flex justify-between">
        <h1 className="text-secondary font-bold text-[3vh] ">
          Senior Project Manager
        </h1>
      </div>

      <div className="flex flex-col justify-around h-[20vh]">
        <h2 className="text-[2vh]">
          <span className="font-text text-[2vh] font-bold">Department:</span>{" "}
          Project Management
        </h2>
        <h2 className="text-[2vh]">
          <span className="font-text text-[2vh] font-bold">Experience: </span>2
          years
        </h2>
        <div className="flex flex-wrap items-center">
          
          <span className="font-text text-[2vh] font-bold">Skills:</span>{" "}
          <SkillTip text='Team-work'></SkillTip>
          <SkillTip text='Team-work'></SkillTip>
          
       </div>
      </div>
      <Link to="/Position">
        <button className=" btn bg-accent w-[100%] text-white font-text p-2  hover:bg-[#486C90]">
          View more
        </button>
      </Link>
    </div>
  );
}

export default PositionCard;
