import React from "react";
// import { Outlet } from "react-router-dom";
import Sidebar from "../sidebar/Sidebar";
import UnlockIcon from "../../assets/images/unlock-icon.svg";
import TickIcon from "../../assets/images/tick.svg";
import VerticalDotIcon from "../../assets/images/vertical-dot-icon.svg";
import GoogleIcon from "../../assets/images/google-icon.svg";

const Layout = (props) => {
  const linkData = ["Shareable online video", "www.spotify.com"];
  return (
    <div className="collect-container">
        <div className="w-full h-full flex float-left">
            <Sidebar/>
            <div className="h-full float-left py-3 px-2">
                <div className="w-72 h-full float-left flex flex-col justify-between">
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
                              <div key={item} className="w-full float-left flex justify-between p-2.5 space-x-2 mb-1 rounded-md group transition-all hover:bg-[#F1E1D5]">
                                  <div className="float-left flex items-center">
                                    <img className="w-4 object-cover object-center flex-shrink-0 mr-1.5" src={GoogleIcon} alt="Google"/>
                                    <p className="text-sm font-medium text-[#505051] cursor-default truncate">Shareable online video</p>
                                  </div>
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
                   </div>
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
