import React from 'react'

function BenefitsCard(props) {
  return (
    <div className="p-5 flex flex-col rounded-lg shadow border-2 border-base-200">
    <p className="text-xl font-title tracking-wider font-semibold text-neutral">
     {props.title}
    </p>
   {props.icon}
    <p className="font-text text-sm tracking-wide">
     {props.text}
    </p>
  </div>
  )
}

export default BenefitsCard
