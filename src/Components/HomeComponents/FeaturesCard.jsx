import React from 'react'

function FeaturesCard(props) {
  return (
    <div className="p-5 bg-secondary text-secondary-content flex flex-col items-center rounded shadow justify-between ">
   {props.icon}
    <p className="text-md font-title font-bold m-2 text-center">
      {props.title}
    </p>
    <p className="text-xs font-text m-2 text-center tracking-wider">
     {props.text}
    </p>
  </div>
  )
}

export default FeaturesCard
