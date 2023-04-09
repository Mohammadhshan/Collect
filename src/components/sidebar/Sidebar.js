import React from "react";
import { Tooltip } from 'react-tooltip'
import 'react-tooltip/dist/react-tooltip.css'
import EntertainmentIcon from "../../assets/images/entertainment-icon.svg";
import SidebarIcon2 from "../../assets/images/sidebar-icon2.svg";

const Sidebar = (props) => {
  return (
    <div className="w-full h-full flex float-left">
        <div className="h-full float-left p-3">
            <div className="h-full float-left flex flex-col space-y-3 overflow-auto">
                <div data-tooltip-content="Entertainment" className="sidemenu-collect w-9 h-9 flex-shrink-0 rounded-md flex items-center justify-center cursor-pointer transition-all hover:bg-[#E6E9F3] bg-[#E6E9F3]">
                    <img src={EntertainmentIcon} alt="Entertainment"/>
                </div>
                <div data-tooltip-content="Entertainment" className="sidemenu-collect w-9 h-9 flex-shrink-0 rounded-md flex items-center justify-center cursor-pointer transition-all hover:bg-[#E6E9F3]">
                    <img src={SidebarIcon2} alt=""/>
                </div>
                <div data-tooltip-content="Add New" className="sidemenu-collect w-9 h-9 flex-shrink-0 rounded-md flex items-center justify-center cursor-pointer transition-all hover:bg-[#E6E9F3]">
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.00001 1.20001V16.8M1.20001 9.00001H16.8" stroke="#BABBBD" strokeWidth="2"/>
                    </svg>
                </div>
            </div>
        </div>
        <Tooltip anchorSelect=".sidemenu-collect" place="right" offset="10" className="px-2 py-1.5 rounded bg-[#505051] text-xs font-medium font-outfit"/>
    </div>
  );
};

export default Sidebar;
