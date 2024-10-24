import React from "react";
import SkillTip from "./SkillTip";
import { Link } from "react-router-dom";

function PositionCard({ Position, Department, Experience, onEdit }) {
  return (
    <div className="flex flex-col justify-around  p-5 bg-white rounded-md shadow-md">
      <div className="flex justify-between">
        <h1 className="text-secondary font-bold text-[3vh] ">
          {Position || "Senior Project Manager"} {/* عرض اسم الوظيفة */}
        </h1>
        {/* إضافة زر التعديل */}
        <svg
          onClick={onEdit} // استدعاء دالة التعديل
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="cursor-pointer"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M7 7h-1a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-1" />
          <path d="M20.385 6.585a2.1 2.1 0 0 0 -2.97 -2.97l-8.415 8.385v3h3l8.385 -8.415z" />
          <path d="M16 5l3 3" />
        </svg>
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
          <SkillTip text="Critical-thinking"></SkillTip>
          <SkillTip text="team-work"></SkillTip>
          <SkillTip text="Critical-thinking"></SkillTip>
        </div>
        <br />

        <Link to="/Position">
          <button className="btn btn-accent w-[100%] text-white font-text p-2">
            View more
          </button>
        </Link>
      </div>
    </div>
  );
}

export default PositionCard;
