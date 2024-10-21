import React from 'react'

function DepCard({Employees,Shortage,Surplus}) {
  console.log({Employees,Shortage,Surplus});

  return (
    <div className='flex flex-col justify-between w-[43vh] h-[31vh] p-5  shadow-xl'>

      <div className='flex flex-col  '>
        <h2 className='text-accent'>Department</h2>
        <h1 className='text-secondary font-bold'>Human Resources</h1>
      </div>
      <div className='flex justify-between'>
        <div className='flex flex-col'>
        <h2>Employees</h2>
        <h1 className='text-secondary text-center'>{Employees}</h1>
      </div> 
      <div className='flex flex-col'>
        <h2>Shortage</h2>
        <h1 className='text-error text-center'>{Shortage}</h1>
      </div> 
      <div className='flex flex-col'>
        <h2>Surplus</h2>
        <h1 className='text-accent text-center'>{Surplus}</h1>
      </div> 
      </div>
      <div className='flex flex-col'>
        <h2 className='text-accent'>Manager</h2>
        <div className='flex'>
        <svg  xmlns="http://www.w3.org/2000/svg" 
              width="24" 
              height="24"  
              viewBox="0 0 24 24"  
              fill="none"  
              stroke="currentColor"  
              stroke-width="2"  
              stroke-linecap="round"  
              stroke-linejoin="round"  
              className="icon icon-tabler icons-tabler-outline icon-tabler-user-circle">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
              <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
              <path d="M12 10m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
              <path d="M6.168 18.849a4 4 0 0 1 3.832 -2.849h4a4 4 0 0 1 3.834 2.855" />
        </svg>
           <h1 className='text-secondary font-bold'>Saad Almousa</h1>
        </div>
      </div>

    </div>
  )
}

export default DepCard
