import React from 'react'
import EmpList from '../Components/EmpList'
import Nav from '../Components/Nav'
function AdminDeptPage() {
  return (
    <div>
      <Nav></Nav>
      <div className='p-5 flex flex-col items-start'>

        <p className='font-title text-2xl font-bold'>Department Name</p>
        <div className='self-center flex justify-between items-center lg:w-[80vw] border-2 border-black'>

          <div className='m-2 self-start'>
            <p className='text-accent font-title text-lg'>Manager</p>
            <div className='flex items-center'>
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
            <p className='text-xl m-2 font-semibold'>manager name</p>
            </div>
          </div>
          <div className='flex border-2 border-black self-center text-lg'>
            <div className={`flex flex-col items-center m-2`}>
              <p>Employees</p>
              <p>{10}</p>
            </div>
            <div className={`flex flex-col items-center m-2`}>
              <p>Employees</p>
              <p>{10}</p>
            </div>
            <div className={`flex flex-col items-center m-2`}>
              <p>Employees</p>
              <p>{10}</p>
            </div>
          </div>
                </div>

        <div className="overflow-x-auto lg:w-[80vw] bg-slate-100 lg:self-center lg:m-4 shadow-md shadow-gray-300 rounded-lg" >
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
              ></EmpList>             <EmpList
              id="1"
              name="Ahmed Alghamdi"
              position="Business Analyst"
            ></EmpList>             <EmpList
            id="1"
            name="Ahmed Alghamdi"
            position="Business Analyst"
          ></EmpList>
            </tbody>
          </table>
        </div>
        <div className='my-4'>
          <p className='text-xl font-title font-bold text-secondary'>Needed Positions</p>
          <div className='grid lg:grid-cols-4'>

          </div>
        </div>
        <div className='my-4 flex flex-col lg:items-start lg:w-full'>
          <p className='text-xl font-title font-bold text-secondary'>Employees who may be reassigned</p>
          <div className="overflow-x-auto lg:w-[80vw] bg-slate-100 lg:self-center lg:m-4 shadow-md shadow-gray-300 rounded-lg" >
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
  )
}

export default AdminDeptPage


// token for admin, 
// all departments, notifications, 