import React from 'react'

function SectionTitle(props) {
  return (
    <p className={`md:self-start font-title font-bold tracking-wider text-xl border-b-4 border-accent inline-block mb-5 ${props.color}`}>
         {props.title}
        </p>
  )
}

export default SectionTitle
