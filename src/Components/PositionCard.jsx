import React from "react";
import SkillTip from "./SkillTip";
import { Link } from "react-router-dom";

function PositionCard(props) {
  return (
    <div className="flex flex-col justify-around bg-slate-100 w-[45vh] h-auto p-5  shadow-lg max-md:w-[100%]">
      <div className="flex justify-between">
        <h1 className="text-secondary font-bold text-[3vh] ">
          Senior Project Manager
        </h1>
      </div>
      <br />

      <div className="flex flex-col justify-around  h-auto">
        <h2 className="text-[2vh] mb-2">
          <span className="font-text text-[2vh] font-bold ">Department:</span>{" "}
          Project Management
        </h2>
        <h2 className="text-[2vh]">
          <span className="font-text text-[2vh] font-bold">Experience: </span>2
          years
        </h2>
        <div className="flex flex-wrap my-4 items-center">
          <p>Skills: </p>
          <SkillTip text="Critical-thinking"></SkillTip>
          <SkillTip text="team-work"></SkillTip>
          <SkillTip text="Critical-thinking"></SkillTip>
          <SkillTip text="Critical-thinking"></SkillTip>
        </div>
      </div>
      <Link to="/Position">
        <button className=" btn btn-accent w-[100%] text-white font-text p-2  ">
          View more
        </button>
      </Link>
    </div>
  );
}

export default PositionCard;
