import React from "react";
import { IoCloseSharp } from "react-icons/io5";
import Sidebar from "../sidebar/Sidebar";

export default function SidebarModal({setIsShowSidebar}) {
  return (
    <>
            <div
                className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                onClick={() => setIsShowSidebar(false)}
            >
                <div className="relative w-full sm:w-full lg:w-1/2 xl:w-4/5 my-16 mx-auto max-w-3xl">
                    {/*content*/}
                    <div
                        className="border-0 rounded-2xl shadow-lg relative flex flex-col w-full bg-[#6696ff] outline-none focus:outline-none max-h-[90%]"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/*header*/}
                        <div
                            className="flex items-center justify-between px-5 py-2 border-b border-solid border-gray-500 rounded-t">
                            <h3 className="text-[18px] text-white font-semibold">
                                Chat history
                            </h3>
                            <button
                                className="p-1 ml-auto border-0 text-white float-right hover:bg-gray-500 rounded-lg transition-all"
                                onClick={() => setIsShowSidebar(false)}
                            >
                                <IoCloseSharp size={30} className=""/>
                            </button>
                        </div>
                        {/*body*/}
                        <div className="relative px-6 py-3 flex-auto overflow-y-scroll no-scrollbar">
                          <Sidebar width={"50%"}/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="opacity-70 fixed inset-0 z-40 bg-black"
                 onClick={() => setIsShowSidebar(false)}
            ></div>
        </>
  );
}
