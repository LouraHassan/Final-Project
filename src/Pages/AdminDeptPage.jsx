import React, { useEffect, useState } from "react";
import EmpList from "../Components/EmpList";
import Nav from "../Components/Nav";
import PositionCard from "../Components/PositionCard";
import axios from "axios";
import { useParams } from "react-router-dom";
const DepartmentAPI = `http://localhost:3000/department/id/`;
function AdminDeptPage() {
  const { id } = useParams();
  const [department, setDepartment] = useState([]);
  useEffect(() => {
    getDept();
  }, []);
  const getDept = () => {
    axios
      .get(DepartmentAPI + id, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        console.log(res);
        setDepartment(res.data);
      });
  };
  return (
    <div>
      <Nav></Nav>
      <div className="p-10 flex flex-col items-start">
        <p className="font-title text-2xl font-bold">{department.name}</p>
        <div className="self-center flex flex-col md:flex-row md:justify-between items-center md:w-[80vw] ">
          <div className="m-2 self-start">
            <p className="text-accent font-title text-lg">Manager</p>
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="icon icon-tabler icons-tabler-filled icon-tabler-user text-accent"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M12 2a5 5 0 1 1 -5 5l.005 -.217a5 5 0 0 1 4.995 -4.783z" />
                <path d="M14 14a5 5 0 0 1 5 5v1a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-1a5 5 0 0 1 5 -5h4z" />
              </svg>
              <p className="text-xl m-2 font-semibold">
                {department.manager?.name || "No manager"}
              </p>
            </div>
          </div>
          <div className="flex  self-center text-lg">
            <div className={`flex flex-col items-center m-2`}>
              <p>Employees</p>
              <p>{department.employees?.length || 0}</p>
            </div>
            <div className={`flex flex-col items-center m-2`}>
              <p>Shortage</p>
              <p className="text-error">{department.positions?.length || 0}</p>
            </div>
            <div className={`flex flex-col items-center m-2`}>
              <p>Surplus</p>
              <p className="text-warning">{0}</p>
            </div>
          </div>
        </div>

        <div className="overflow-x-auto w-full md:w-[80vw] bg-white md:self-center md:m-4 shadow-md shadow-gray-300 rounded-lg">
          <table className="table">
            <thead>
              <tr className="font-title text-lg">
                <th>Employee Name</th>
                <th>Position</th>
              </tr>
            </thead>
            <tbody>
              {department.employees?.length > 0 ? (
                department.employees.map((employee) => {
                  return <EmpList key={employee._id} name={employee.name} position={employee.positionTitle || 'position not defined'} />;
                })
              ) : (
                <p>No employees available</p>
              )}
             
            </tbody>
          </table>
        </div>
        <p className="text-xl font-title font-bold text-secondary">
          Needed Positions
        </p>
        <div className="my-4 flex flex-col items-center  self-center">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 lg:w-[80vw]  gap-4">
            {/* <PositionCard></PositionCard>
            <PositionCard></PositionCard>
            <PositionCard></PositionCard>
            <PositionCard></PositionCard> */}
          </div>
        </div>
        <div className="my-8 flex flex-col lg:items-start w-full ">
          <p className="text-xl font-title font-bold text-secondary my-2">
            Employees who may be reassigned
          </p>
          <div className="overflow-x-auto w-full md:w-[80vw] bg-white md:self-center md:m-4 shadow-md shadow-gray-300 rounded-lg">
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
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminDeptPage;

// token for admin,
// all departments, notifications,
