import {useState} from 'react'
import SkillTip from './SkillTip'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
const AssignEmpAPI = `http://localhost:3000/fillPosition?company=${sessionStorage.getItem("company")}`
function EmpCard(props) {
  const navigate = useNavigate()
  const [skills, setSkills] = useState(props.skills)
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  


  const assignAction = () => {
    axios.post(AssignEmpAPI, {
      employeeId: props.id,
      positionId: props.positionId
    },
      {
      headers: {
        Authorization: sessionStorage.getItem("token"),
      },
      }).then(res => {
      console.log(res);
        setIsDialogOpen(false);
        navigate(`/admin/${sessionStorage.getItem('accountId')}`)
    })
  }
  return (
    <>
    <div className='bg-secondary text-secondary-content p-4 rounded-lg flex flex-col justify-between'>
       <div className="flex items-center gap-3">
          <div className="avatar">
           
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="56"
                height="56"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="icon icon-tabler icons-tabler-filled icon-tabler-user text-accent"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M12 2a5 5 0 1 1 -5 5l.005 -.217a5 5 0 0 1 4.995 -4.783z" />
                <path d="M14 14a5 5 0 0 1 5 5v1a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-1a5 5 0 0 1 5 -5h4z" />
              </svg>
         
          </div>
            <div className="font-bold text-xl">{props.name}</div>
      </div>
      <p className='font-text my-2'>Experience: {props.years} years</p>
      <div className='flex flex-wrap'>
        <p className='font-text my-2'>Skills: </p>
        {skills &&skills.map(skill => {
          return ( <SkillTip text={skill} editMode={true}></SkillTip>)
        })}
       

      </div>
      <button className='btn btn-accent btn-wide self-end' onClick={() => setIsDialogOpen(true)}>Assign</button>

    </div>
    {isDialogOpen && (
        <dialog open className="modal">
          <div className="modal-box flex flex-col items-center">
            <button
              className="btn text-neutral btn-sm btn-circle btn-ghost absolute right-2 top-2"
              onClick={() => setIsDialogOpen(false)}
            >
              ✕
            </button>
            <h3 className="font-bold text-xl text-neutral font-title">
              Employee Assignment Confirmation
            </h3>
            <div className="self-start flex flex-col my-4 font-semibold text-lg font-title">
              <p className="text-neutral">Employee: {props.name}</p>
              <p className="text-neutral">Previous position: {props.pPosition}</p>
              <p className="text-neutral">New position: {props.nPosition}</p>
              <p className="text-neutral">Department: {props.department}</p>
              <p className="text-neutral">Manager: {props.manager}</p>
            </div>
            <div className="flex">
              <button
                className="btn btn-outline btn-accent lg:w-[10vw] m-2"
                onClick={() => setIsDialogOpen(false)}
              >
                Cancel
              </button>
              <button
                onClick={assignAction}
                className="btn btn-secondary lg:w-[10vw] m-2"
              >
                Confirm
              </button>
            </div>
          </div>
        </dialog>
      )}
      </>
  )
}

export default EmpCard
