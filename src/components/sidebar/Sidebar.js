import React from "react";
import EntertainmentIcon from "../../assets/images/entertainment-icon.svg";
import SidebarIcon2 from "../../assets/images/sidebar-icon2.svg";

const Sidebar = (props) => {
  return (
    <div className="w-full h-full flex float-left">
        <div className="h-full float-left p-3">
            <div className="h-full float-left flex flex-col space-y-3 overflow-auto">
                <div className="w-9 h-9 flex-shrink-0 rounded-md flex items-center justify-center cursor-pointer transition-all hover:bg-[#E6E9F3] bg-[#E6E9F3]">
                    <img src={EntertainmentIcon} alt="Entertainment"/>
                </div>
                <div className="w-9 h-9 flex-shrink-0 rounded-md flex items-center justify-center cursor-pointer transition-all hover:bg-[#E6E9F3]">
                    <img src={SidebarIcon2} alt=""/>
                </div>
                <div className="w-9 h-9 flex-shrink-0 rounded-md flex items-center justify-center cursor-pointer transition-all hover:bg-[#E6E9F3]">
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.00001 1.20001V16.8M1.20001 9.00001H16.8" stroke="#BABBBD" strokeWidth="2"/>
                    </svg>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Sidebar;
