import React from 'react'
import { Link } from 'react-router-dom'
function DepCard(props) {

  return (
    <Link to={`/admin/department`} className='flex flex-col justify-between p-5 bg-white  shadow-md  rounded-md'>

      <div className='flex flex-col'>
        <h2 className='text-accent'>Department</h2>
        <h1 className='text-secondary font-bold'>Human Resources</h1>
      </div>
      <div className='flex justify-between'>
        <div className='flex flex-col m-4'>
        <h2>Employees</h2>
        <h1 className='text-secondary text-center'>{props.Employees}</h1>
      </div> 
      <div className='flex flex-col m-4'>
        <h2>Shortage</h2>
        <h1 className='text-error text-center'>{props.Shortage}</h1>
      </div> 
      <div className='flex flex-col m-4'>
        <h2>Surplus</h2>
        <h1 className='text-accent text-center'>{props.Surplus}</h1>
      </div> 
      </div>
      <div className='flex flex-col'>
        <h2 className='text-accent'>Manager</h2>
        <div className='flex my-2'>
        <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="icon icon-tabler icons-tabler-filled icon-tabler-user text-accent"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M12 2a5 5 0 1 1 -5 5l.005 -.217a5 5 0 0 1 4.995 -4.783z" />
                <path d="M14 14a5 5 0 0 1 5 5v1a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-1a5 5 0 0 1 5 -5h4z" />
              </svg>
           <h1 className='text-secondary font-bold mx-2'>Saad Almousa</h1>
        </div>
      </div>

    </Link>
  )
}

export default DepCard
