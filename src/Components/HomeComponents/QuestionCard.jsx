import React from 'react'

function QuestionCard(props) {
  return (
    <div className="collapse collapse-arrow bg-base-200 my-4 rounded-lg">
            <input type="radio" name="faq" defaultChecked />
            <div className="collapse-title text-xl font-title font-semibold">
             {props.q}
            </div>
            <div className="collapse-content">
              <p className="font-title text-sm ">
               {props.a}
              </p>
            </div>
          </div>
  )
}

export default QuestionCard
