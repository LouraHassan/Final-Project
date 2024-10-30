import {useState} from 'react'
import SkillTip from './SkillTip'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
const AssignEmpAPI = `https://final-project-backend-bqbl.onrender.com/fillPosition?company=${sessionStorage.getItem("company")}`
function EmpCard(props) {
  const navigate = useNavigate()
  const [skills, setSkills] = useState(props.skills)
  const [loading, setLoading] = useState(false);



  const assignAction = () => {
    setLoading(true)
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
        document.getElementById("confirmDialog").close();
        navigate(`/admin/${sessionStorage.getItem('accountId')}`)
    }).finally(() => {
      setLoading(false);
    });
  }
  return (
    <>
      <div className='bg-secondary text-secondary-content p-4 rounded-lg flex flex-col justify-between '>
      {loading ? (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="p-4 w-[10vw] flex flex-col items-center justify-center bg-secondary rounded-lg">
            <span className="loading loading-dots bg-accent"></span>
          </div>
        </div>
      ) : null}
       <div className="flex items-center gap-3 ">
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
            <p className="font-bold text-xl">{props.name}</p>
      </div>
      <p className='font-title my-2 '>Experience: {props.years} years</p>
      <div className='flex flex-wrap'>
        <p className='font-title my-2'>Skills: </p>
        {skills &&skills.map(skill => {
          return ( <SkillTip text={skill} editMode={true}></SkillTip>)
        })}
       

      </div>
      <button className='btn btn-accent my-2' onClick={() =>
                  document.getElementById("confirmDialog").showModal()}>Assign</button>

    </div>
   
        <dialog id='confirmDialog' className="modal">
           {loading ? (
              <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
                <div className="p-4 w-[10vw] flex flex-col items-center justify-center bg-secondary rounded-lg">
                  <span className="loading loading-dots bg-accent"></span>
                </div>
              </div>
            ) : null}
          <div className="modal-box flex flex-col items-center bg-white">
          <form method="dialog">
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                  ✕
                </button>
              </form>
            <h3 className="font-bold text-xl text-secondary font-title">
              Employee Assignment Confirmation
            </h3>
            <div className='flex items-center w-full justify-around'>

            <div className="self-start flex flex-col my-4 font-semibold text-md font-title">
              <p className="text-accent">Employee: </p>
              <p className="text-accent">Previous position: </p>
              <p className="text-accent">New position: </p>
              <p className="text-accent">Department: </p>
              <p className="text-accent">Manager: </p>
            </div>
            <div className="self-start flex flex-col my-4 font-semibold text-md font-title">
              <p className="text-neutral">{props.name}</p>
              <p className="text-neutral">{props.pPosition}</p>
              <p className="text-neutral">{props.nPosition}</p>
              <p className="text-neutral">{props.department}</p>
              <p className="text-neutral">{props.manager}</p>
            </div>
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
      
      </>
  )
}

export default EmpCard
