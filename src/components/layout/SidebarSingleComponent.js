import React from "react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const SidebarSingleComponent = ({ open, title, inner,chev, setArrow, arrow, setMasterArrow, masterArrow }) => {
  const { pathname } = useLocation();
  const [list,setList]=useState(false)
const rotateHandler=()=>{
  // if(pathname==='/ticketings'){
  //   setArrow(!arrow)
  //   setList(!list)
  // }
   if(pathname==='/masters'){
    setArrow(!arrow)
    setList(!list)
  }
 
}
  return (
    <Link to={`/${title.toLowerCase()}`} >
      <li
        className={`flex  cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center space-x-2 
       ${pathname === `/${title.toLowerCase()}` && "bg-light-white"} ${list&&'transition-all duration-500 ease-in-out'}`}
       onClick={rotateHandler}
      >
        <span className="bg-white rounded-full h-6 w-6 relative">
          <span className="absolute text-[#2E5077] font-bold top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            {title.charAt(0)}
          </span>
        </span>
        <span className={`${!open && "hidden"} origin-left duration-200`}>
          {title}
        </span>
        <span className="flex ">
          <button >{chev}</button>
        </span>
      </li>

      {list&& (
        <div className="px-2 mt-4 mb-4 cursor-pointer  text-slate-500 text-sm items-center gap-x-4 transition-all duration-500">
          {inner}
        </div>
      )}
    </Link>
  );
};

export default SidebarSingleComponent;
