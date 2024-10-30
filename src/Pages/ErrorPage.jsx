import React from 'react'
import { Link } from 'react-router-dom'
function ErrorPage() {
  return (
      <div className='bg-secondary w-full h-screen flex items-center justify-center'>
          <div className='flex flex-col items-center text-error bg-white p-10 rounded-lg'>
              
          <p className='text-6xl'>404</p>
              <p className='text-xl'>Opps! Page not found</p>
              <Link to={`/`} className='btn btn-outline btn-secondary my-4'>Back to home</Link>
          </div>

    </div>
  )
}

export default ErrorPage
