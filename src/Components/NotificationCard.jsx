import React from 'react'

function NotificationCard(props) {
   
  return (
      <div role="alert" className={`alert rounded-lg border-2 bg-white flex justify-between ${props.style}`}>
          <div className='flex items-center'>
              
  {props.icon}
          
  <span className='mx-2 text-left'>{props.text}</span>
          </div>
  <div>
    <button onClick={props.onDismiss} className="btn btn-sm btn-ghost text-error">Dismiss</button>
  </div>
</div>
  )
}

export default NotificationCard
