/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";
import Sidebar from "../sidebar/Sidebar";
import CollectList from "../collect/CollectList";

const Layout = (props) => {
  return (
    <div className="collect-container">
        <div className="w-full h-full flex float-left">
            <Sidebar/>
            <div className="h-full float-left py-3 px-2">
                <div className="w-72 h-full float-left flex flex-col justify-between">
                   <CollectList/>
                   <div className="w-full float-left flex-shrink-0">
                      <label className="chkbox-switch float-left flex min-h-[36px] cursor-pointer items-center">
                        <input type="checkbox" className="peer hidden" />
                        <span className="chkbox-slider peer-checked:bg-ab-green bg-[#E6E9F3] relative float-left mr-1.5 h-4 w-6 flex-shrink-0 rounded-full"></span>
                        <p className="text-black font-medium text-xs">Auto Sync</p>
                      </label>
                   </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Layout;
