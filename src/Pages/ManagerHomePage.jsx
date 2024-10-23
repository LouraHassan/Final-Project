import React, { useState } from "react";
import PositionCard from "../Components/PositionCard";
import Nav2 from "../Components/Nav2";
import DepCard from "../Components/DepCard";
import EmpList from "../Components/EmpList";

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
      <Nav2 />
      <div className="flex justify-center">
        <div className="flex flex-col justify-center items-center w-[80%]">
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
                <h2 className="font-text text-accent font-bold ">
                  Ahmed Almousa
                </h2>
                <h2 className="font-text text-accent font-bold ">
                  Number of employees: 05
                </h2>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="overflow-x-auto  lg:w-[80vw] bg-slate-100 lg:self-center lg:m-4 shadow-md shadow-gray-300 rounded-lg">
              <table className="table">
                <thead>
                  <tr className="font-title text-lg">
                    <th>Employee Name</th>
                    <th>Position</th>
                  </tr>
                </thead>
                <tbody>
                  <EmpList
                    id="1"
                    name="Ahmed Alghamdi"
                    position="Business Analyst"
                  ></EmpList>
                  <EmpList
                    id="1"
                    name="Ahmed Alghamdi"
                    position="Business Analyst"
                  ></EmpList>
                  <EmpList
                    id="1"
                    name="Ahmed Alghamdi"
                    position="Business Analyst"
                  ></EmpList>{" "}
                  <EmpList
                    id="1"
                    name="Ahmed Alghamdi"
                    position="Business Analyst"
                  ></EmpList>{" "}
                  <EmpList
                    id="1"
                    name="Ahmed Alghamdi"
                    position="Business Analyst"
                  ></EmpList>
                </tbody>
              </table>
            </div>
          </div>
          <div className="flex justify-around bg-gray-200 w-[100%] p-6  ">
            <div className="flex flex-col justify-around pt-10 pb-10   ">
              <div className="flex justify-between   ">
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
              <div className="grid lg:grid-cols-3 justify-around gap-4 mt-4 ">
                {positions.map((position, index) => (
                  <PositionCard
                    key={index}
                    Position={position}
                    Department={departments[index]}
                    Experience={experience[index]}
                  />
                ))}
                <PositionCard />
                <PositionCard />
                <PositionCard />
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
        </div>
      </div>
    </div>
  );
}

export default ManagerHomePage;
