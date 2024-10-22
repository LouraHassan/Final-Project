import React, { useState } from "react";
import PositionCard from "../Components/PositionCard";
import Nav from "../Components/Nav";
import DepCard from "../Components/DepCard";

function ManagerHomePage() {
  const [positions, setPositions] = useState([]);
  const [departments, setDepartments] = useState([]);
  const [experience, setExperience] = useState([]);
  const [newPosition, setNewPosition] = useState("");

  const [salary, setSalary] = useState([]);
  const [newSalary, setNewSalary] = useState("");

  const [key, setKey] = useState([]);
  const [newKey, setNewKey] = useState("");

  const [overview, setOverview] = useState([]);
  const [newOverview, setNewOverview] = useState("");

  const [newDepartment, setNewDepartment] = useState("");
  const [newExperience, setNewExperience] = useState("");
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const openDialog = () => {
    setIsDialogOpen(true);
  };

  const closeDialog = () => {
    setIsDialogOpen(false);
    setNewPosition("");
    setNewDepartment("");
    setNewExperience("");
    setNewSalary("");
    setNewKey("");
    setNewOverview("");
  };

  const handleSubmit = () => {
    if (newPosition && newDepartment && newExperience) {
      {
        setPositions([...positions, newPosition]);
        setDepartments([...departments, newDepartment]);
        setExperience([...experience, newExperience]);
      }

      closeDialog();
    }
  };
  return (
    <div>
      <Nav />

      <div className="flex h-[30vh]">
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
        <div className="flex flex-col justify-center">
          <h1 className="font-title text-secondary font-bold text-[4vh]">
            Human Resources
          </h1>
          <div className="mt-3 ml-3">
            <h2 className="font-text text-accent font-bold ">Ahmed Almousa</h2>
            <h2 className="font-text text-accent font-bold ">
              Number of employees: 05
            </h2>
          </div>
        </div>
      </div>
      <div className="flex justify-around bg-gray-200">
        <div className="flex flex-col justify-around w-[50%] pt-10 pb-10">
          <div className="flex justify-between w-[100%] ">
            <h1 className="font-title font-bold text-[3vh] text-secondary">
              Posted Positions
            </h1>
            <button
              onClick={openDialog}
              className="bg-secondary text-white p-2"
            >
              New Post
            </button>
          </div>
          <div className="flex flex-wrap justify-around ">
            {positions.map((position, index) => (
              <PositionCard
                key={index}
                Position={position}
                Department={departments[index]}
                Experience={experience[index]}
              />
            ))}
          </div>
        </div>
      </div>

      {isDialogOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-60  ">
          <div className="bg-white p-4 rounded-lg w-[60%]">
            <h2 className="font-title font-bold text-secondary text-[4vh]">
              Create New Position
            </h2>
            <label className="font-title text-accent font-bold">
              position name:{" "}
            </label>
            <input
              type="text"
              value={newPosition}
              onChange={(e) => setNewPosition(e.target.value)}
              placeholder="Enter "
              className="border p-2 mt-2 w-full"
            />
            <label className="font-title text-accent font-bold">
              Department name:
            </label>
            <input
              type="text"
              value={newDepartment}
              onChange={(e) => setNewDepartment(e.target.value)}
              placeholder="Enter "
              className="border p-2 mt-2 w-full"
            />
            <label className="font-title text-accent font-bold">
              Estimated Salary:
            </label>

            <input
              type="text"
              value={newSalary}
              onChange={(e) => setNewSalary(e.target.value)}
              placeholder="Enter "
              className="border p-2 mt-2 w-full"
            />
            <label className="font-title text-accent font-bold">
              Experience years:
            </label>

            <input
              type="text"
              value={newExperience}
              onChange={(e) => setNewExperience(e.target.value)}
              placeholder="Enter "
              className="border p-2 mt-2 w-full"
            />
            <div className="flex flex-col justify-around h-[35vh]">
              <label className="font-title text-accent font-bold">
                Key Responsibilities:
              </label>
              <textarea
                placeholder="Enter"
                value={newKey}
                onChange={(e) => setNewKey(e.target.value)}
                className="textarea textarea-bordered textarea-lg  max-w-m"
              ></textarea>
              <label className="font-title text-accent font-bold">
                Job overview:
              </label>
              <textarea
                value={newOverview}
                placeholder="Enter"
                onChange={(e) => setNewOverview(e.target.value)}
                className="textarea textarea-bordered textarea-lg max-w-m"
              ></textarea>
            </div>

            <div className="flex justify-end mt-4">
              <button
                className="bg-gray-500 text-white p-2 mr-2"
                onClick={closeDialog}
              >
                Cancel
              </button>
              <button
                className="bg-blue-500 text-white p-2"
                onClick={handleSubmit}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      )}

      <footer className="footer text-neutral-content items-center p-4 bg-[#486C90]">
        <aside className="grid-flow-col items-center">
          <svg
            width="36"
            height="36"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            fillRule="evenodd"
            clipRule="evenodd"
            className="fill-current"
          >
            <path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path>
          </svg>
          <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
        </aside>
      </footer>
    </div>
  );
}

export default ManagerHomePage;
