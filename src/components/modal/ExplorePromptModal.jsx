import {
  IoChevronDown,
  IoChevronUp,
  IoChevronUpOutline,
  IoCloseSharp,
  IoDiamondOutline,
} from "react-icons/io5";
import { useState } from "react";
import SuggestPrompt from "./SuggestPrompt";
const ExplorePromptModal = ({ isOpenModal, setIsOpenModal }) => {
  return (
    <>
      <div
        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
        onClick={() => setIsOpenModal(false)}
      >
        <div className="relative w-auto my-16 mx-auto max-w-3xl">
          {/*content*/}
          <div
            className="border-0 rounded-2xl shadow-lg relative flex flex-col w-full bg-[#6696ff] outline-none focus:outline-none max-h-[90%]"
            onClick={(e) => e.stopPropagation()}
          >
            {/*header*/}
            <div className="flex items-center justify-between px-5 py-2 border-b border-solid border-white rounded-t">
              <h3 className="text-[18px] text-white font-semibold">
                Explore Prompts
              </h3>
              <button
                className="p-1 ml-auto border-0 text-white float-right hover:bg-gray-500 rounded-lg transition-all"
                onClick={() => setIsOpenModal(false)}
              >
                <IoCloseSharp size={30} className="" />
              </button>

            </div>
            {/*body*/}
            <div className="relative px-6 py-3 flex-auto overflow-y-scroll no-scrollbar">
              <SuggestPrompt title={"Most Popular"} />
            </div>
          </div>
        </div>
      </div>
      <div
        className="opacity-70 fixed inset-0 z-40 bg-black"
        onClick={() => setIsOpenModal(false)}
      ></div>
    </>
  );
};

export default ExplorePromptModal;
