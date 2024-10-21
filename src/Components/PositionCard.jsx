import React from 'react'

function PositionCard(props) {
  return (
    <div className='flex flex-col justify-around w-[45vh] h-[46vh] p-5  shadow-xl'>
      <h1 className='text-secondary font-bold'>{props.Position}</h1>
      <div className='flex flex-col justify-around h-[20vh]'>
      <h2>Department:{props.Department}</h2>
      <h2>Experience:{ props.Experience }years</h2>
      <h2 >Skills</h2>
      <div className=''>
      <h2 className='border border-secondary inline p-1 '>Decision-making</h2>
      </div>

      </div>

      <button className='bg-accent text-white p-2'>View more</button>

      
    </div>
  )
}

export default PositionCard
