import {MdHistory} from "react-icons/md";
import {IoMdAdd} from "react-icons/io";
import {GoArrowUpRight} from "react-icons/go";
import {BsMenuUp} from "react-icons/bs";
import GroupItemHistory from "../ChatHistory/GroupItemHistory";
import {useState} from "react";
import ExplorePromptModal from "../modal/ExplorePromptModal";

const Sidebar = ({width}) => {
    const [isOpenModal, setIsOpenModal] = useState(false);
    return (
        <div className="h-full ">
            {/*new chat*/}
            {/* <div
                className={`flex gap-2 items-center px-2 py-1 border-[1px] border-gray-400 rounded-full w-[${width ? width : "100%"}] hover:border-white hover:cursor-pointer transition-all`}>
                <IoMdAdd size={20} className="text-white font-bold"/>
                <p className="text-white text-sm font-medium"> New Chat</p>
            </div> */}
            {/*    explore Prompt*/}
            <button
                className="w-full flex items-center justify-between gap-2 bg-[#171C29] mt-3 rounded-xl px-3 py-2 hover:cursor-pointer hover:bg-[#2D3450] transition-all "
                onClick={() => setIsOpenModal(true)}
            >
                <div className="flex items-center">
                    <BsMenuUp size={20} className="text-white mr-3"/>
                    <p className="text-white text-[16px] font-medium">Explore Prompt</p>
                </div>
                <GoArrowUpRight size={20} className="text-white"/>
            </button>
            {/*    History*/}
            {/* <div className="bg-[#171C29] rounded-lg mt-4 px-3 py-3 h-auto">
                <div className="flex items-center gap-2">
                    <MdHistory size={20} className="text-white font-medium"/>
                    <p className="text-white text-lg font-medium">Chat History</p>
                </div>

                <div className="flex flex-col mt-2">
                    <GroupItemHistory name={"today"}/>
                </div>
            </div> */}
            {
                isOpenModal && <ExplorePromptModal setIsOpenModal={setIsOpenModal}/>
            }
        </div>
    )
}

export default Sidebar;
