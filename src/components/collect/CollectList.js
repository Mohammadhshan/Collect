/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Tooltip } from 'react-tooltip'
import 'react-tooltip/dist/react-tooltip.css'
import UnlockIcon from "../../assets/images/unlock-icon.svg";
import TickIcon from "../../assets/images/tick.svg";
import VerticalDotIcon from "../../assets/images/vertical-dot-icon.svg";
import GoogleIcon from "../../assets/images/google-icon.svg";

const CollectList = (props) => {
  const linkData = [
    {"id" : 1, "url":"#", "link_name":"Shareable online video"},
    {"id" : 2, "url":"#", "link_name":"www.spotify.com"},
    {"id" : 3, "url":"#", "link_name":"Shareable online video"},
    {"id" : 4, "url":"#", "link_name":"www.spotify.com"}
  ];
  return (
    <div className="w-full float-left flex-grow flex flex-col overflow-auto">
        <div className="w-full float-left flex-shrink-0 p-2.5">
            <div className="w-full float-left flex justify-between space-x-2 mb-3 group">
                <p className="text-xl font-medium text-[#505051] cursor-default truncate">Entertainment</p>
                <div className="flex flex-shrink-0 items-center space-x-1 transition-opacity opacity-0 group-hover:opacity-100">
                    <div className="w-5 h-5 float-left cursor-pointer flex-shrink-0 flex items-center justify-center hover:bg-[#EEEEEE] rounded">
                    <img src={UnlockIcon} alt="Unlock" />
                    </div>
                    <div className="w-5 h-5 float-left cursor-pointer flex-shrink-0 flex items-center justify-center hover:bg-[#EEEEEE] rounded">
                    <img src={TickIcon} alt="Unlock" />
                    </div>
                    <div className="w-5 h-5 float-left cursor-pointer flex-shrink-0 flex items-center justify-center hover:bg-[#EEEEEE] rounded">
                        <img src={VerticalDotIcon} alt=""/>
                    </div>
                </div>
            </div>
            <div className="w-full float-left">
                <input
                type="text"
                className="search-input"
                placeholder="Search Collection...."
                />
            </div>
        </div>
        <div className="w-full float-left flex-grow overflow-auto">
            <div className="w-full h-full float-left overflow-auto">
            {linkData.map((item)=>(
                <div data-tooltip-content="Click to Open" key={item.id} className="collect-link w-full float-left flex justify-between p-2.5 space-x-2 mb-1 rounded-md group transition-all hover:bg-[#F1E1D5]">
                    <a href={item.url} className="float-left flex items-center cursor-pointer">
                        <img className="w-4 object-cover object-center flex-shrink-0 mr-1.5" src={GoogleIcon} alt="Google"/>
                        <p className="text-sm font-medium text-[#505051] truncate">{item.link_name}</p>
                    </a>
                    <div className="flex flex-shrink-0 items-center space-x-1 transition-opacity opacity-0 group-hover:opacity-100">
                        <div className="w-5 h-5 float-left cursor-pointer flex-shrink-0 flex items-center justify-center hover:bg-[#EEEEEE] rounded">
                        <img src={UnlockIcon} alt="Unlock" />
                        </div>
                        <div className="w-5 h-5 float-left cursor-pointer flex-shrink-0 flex items-center justify-center hover:bg-[#EEEEEE] rounded">
                        <img src={TickIcon} alt="Unlock" />
                        </div>
                        <div className="w-5 h-5 float-left cursor-pointer flex-shrink-0 flex items-center justify-center hover:bg-[#EEEEEE] rounded">
                            <img src={VerticalDotIcon} alt=""/>
                        </div>
                    </div>
                </div>
                ))}
            </div>
        </div>
        <Tooltip anchorSelect=".collect-link" place="right" offset="16" noArrow className="px-2 py-1.5 rounded bg-[#505051] text-xs font-medium font-outfit"/>
    </div>
  );
};

export default CollectList;
