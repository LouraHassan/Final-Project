import React from "react";
import { Link } from "react-router-dom";

function PositionCard(props) {
  return (
    <div className="flex flex-col justify-around w-[45vh] h-[40vh] p-5  shadow-xl">
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
        <h2 className="text-[2vh]">
          <span className="font-text text-[2vh] font-bold">Skills:</span>{" "}
        </h2>
        <div className="">
          <h2 className="border border-secondary inline p-1 ">
            Decision-making
          </h2>
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
