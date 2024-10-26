import React, { useEffect } from 'react'

function NotificationCard(props) {
   
  return (
      <div role="alert" className={`alert border-2 bg-white m-2 flex justify-between ${props.style}`}>
          <div className='flex items-center'>
              
  {props.icon}
          
  <span className='mx-2'>{props.text}</span>
          </div>
  <div>
    <button onClick={props.onDismiss} className="btn btn-sm btn-ghost text-error">Dismiss</button>
  </div>
</div>
  )
}

export default NotificationCard
