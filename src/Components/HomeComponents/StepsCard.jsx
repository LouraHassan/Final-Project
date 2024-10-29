import React from 'react'

function StepsCard(props) {
  return (
    <div>
    <div className="flex items-center">
              <p className="font-bold text-2xl m-4 text-accent">{props.number}</p>
     {props.icon}
    </div>
    <p className="m-4 font-text">{props.text}</p>
  </div>
  )
}

export default StepsCard
