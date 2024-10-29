import axios from "axios";
import { useEffect, useState } from "react";

const updateExcessAPI = `http://localhost:3000/account/excess/`
function EmpList(props) {
  const [editMode, setEditMode] = useState(false);
    const [isReassignible, setIsReassignible] = useState(props.excess ? 'Yes' : 'No')
  
    const accountType = sessionStorage.getItem('accountType')
    const [isManager, setIsManager] = useState(accountType == 'manager')
 

  const editAction = () => {
    setEditMode(true);
  };
  const cancelEdit = () => {
    setEditMode(false);
  };
    const saveAction = () => { 
        axios.put(updateExcessAPI + props.id, {
            excess: isReassignible == 'Yes'? true : false
        }, {
            headers: {
                Authorization: sessionStorage.getItem("token"),
              },
        }).then(res => {
            console.log(res);
            setEditMode(false)
        })
    };
    
    const changeExcess = (e) => {
        setIsReassignible(e.target.checked ? 'Yes' : 'No');
    }
  return (
    <tr>
      <td className="p-2 md:p-4">
        <div className="flex items-center gap-3 my-2">
          <div className="avatar">
           
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="icon icon-tabler icons-tabler-filled icon-tabler-user text-accent"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M12 2a5 5 0 1 1 -5 5l.005 -.217a5 5 0 0 1 4.995 -4.783z" />
                <path d="M14 14a5 5 0 0 1 5 5v1a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-1a5 5 0 0 1 5 -5h4z" />
              </svg>
         
          </div>
          <div>
            <div className="font-bold text-neutral">{props.name}</div>
          </div>
        </div>
      </td>
      <td className="p-2 md:p-4">
        <p className="font-text">{props.position}</p>
          </td>
          
          <td className={`flex items-center flex-col md:flex-row ${isManager ? '' : 'hidden'}`}>{isReassignible}
              {editMode?  <input type="checkbox" className="toggle m-2 toggle-accent"  onChange={changeExcess} 
      checked={isReassignible === 'Yes'} /> : <></>}
        
      </td>
      <th className={isManager? 'p-2 md:p-4': 'hidden'}>
        <button
          onClick={editAction}
          className={`btn btn-sm md:btn-md btn-ghost ${editMode ? "hidden" : ""}`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="icon icon-tabler icons-tabler-outline icon-tabler-pencil text-base-300"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4" />
            <path d="M13.5 6.5l4 4" />
          </svg>
        </button>
        <button
          onClick={cancelEdit}
          className={`btn btn-sm md:btn-md btn-ghost ${editMode ? "" : "hidden"}`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="icon icon-tabler icons-tabler-outline icon-tabler-x text-error"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M18 6l-12 12" />
            <path d="M6 6l12 12" />
          </svg>
        </button>
        <button
          onClick={saveAction}
          className={`btn btn-sm md:btn-md btn-ghost ${editMode ? "" : "hidden"}`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="icon icon-tabler icons-tabler-outline icon-tabler-check text-success"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M5 12l5 5l10 -10" />
          </svg>
        </button>
      </th>
    </tr>
  );
}

export default EmpList;
