import React from 'react'

function Home() {
  return (
    <div className='w-full'>
          <div className='lg:w-full h-screen bg-cover flex justify-center items-center' style={{backgroundImage: "url('https://images.pexels.com/photos/3183183/pexels-photo-3183183.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')"}}>
              <div className='z-0 absolute inset-0 bg-black opacity-60'></div>
              <div className='z-10 flex flex-col items-center'>
              <p className='text-7xl text-white'>Manage your Employees</p>
              <p className='text-4xl text-white'>Manage your Employees</p>
<button className='btn my-10 btn-secondary btn-lg'>Start Now!</button>
              </div>

          </div>

          <div className='p-20 bg-secondary'>
              <p className='text-primary font-title font-bold tracking-wider text-xl border-b-4 border-accent inline-block'>ABOUT US</p>
          </div>
          <div className='p-20 bg-base-100'>
              <p className='text-secondary font-title font-bold tracking-wider text-xl border-b-4 border-accent inline-block'>HOW IT WORKS</p>
          </div>
          <div className='p-20 bg-base-200'>
              <p className='text-secondary font-title font-bold tracking-wider text-xl border-b-4 border-accent inline-block'>KEY FEATURES</p>
              <div className='grid lg:grid-cols-3 gap-5'>
                  <div className='p-5 bg-secondary text-secondary-content flex flex-col items-center'>
                      <p className='text-'>Smart Role Matching</p>
                      <p className='text-sm'>Automatically match employees based on their experience and skills.</p>
                  </div>
              </div>
          </div>
          <div className='p-20 bg-base-100'>
              <p className='text-secondary font-title font-bold tracking-wider text-xl border-b-4 border-accent inline-block'>BENEFITS</p>
          </div>
          <div className='p-10 bg-secondary'></div>

    </div>
  )
}

export default Home
