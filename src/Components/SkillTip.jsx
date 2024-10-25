import React from "react";

function SkillTip(props) {
  return (
    <div className="flex items-center">
      <p className="p-2 w-fit rounded-full text-secondary m-1 bg-base-100 text-xs flex items-center">
              {props.text}
              {props.editMode ? (
        <></>
      ) : (
        <>
          <button onClick={props.onDelete} className="ml-2 text-error text-xs">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="icon icon-tabler icons-tabler-outline icon-tabler-trash"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M4 7l16 0" />
              <path d="M10 11l0 6" />
              <path d="M14 11l0 6" />
              <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
              <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
            </svg>
          </button>
        </>
      )}
      </p>
   
    </div>
  );
}

export default SkillTip;
