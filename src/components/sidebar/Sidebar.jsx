import {LuMessageCircle} from "react-icons/lu";
import {MdDelete, MdHistory} from "react-icons/md";
import {FaPen} from "react-icons/fa";

const Sidebar = () => {
    return (
        <div className="h-full">
            {/*new chat*/}
            <div
                className="flex gap-2 items-center px-2 py-1 border-[1px] border-gray-400 rounded-full w-[40%] hover:border-white hover:cursor-pointer transition-all">
                <p className="text-white text-sm font-medium">+ New Chat</p>
            </div>
            {/*    explore Prompt*/}
            <div className="bg-[#171C29] mt-3 rounded-lg px-3 py-2">
                <p className="text-white text-sm font-medium">Explore Prompt</p>
            </div>
            {/*    History*/}
            <div className="bg-[#171C29] rounded-lg mt-4 px-3 py-3">
                <div className="flex items-center gap-2">
                    <MdHistory size={20} className="text-white font-medium" />
                    <p className="text-white text-lg font-medium">Chat History</p>
                </div>

                <p className="text-sm font-normal text-gray-400 py-2">Today</p>
                {/*    item history*/}

                <div className="flex justify-between gap-1 px-3 py-2 bg-[#394053] rounded-full hover:cursor-pointer h-full">
                    <div className="flex items-center gap-1">
                        <LuMessageCircle size={15} className="text-white" />
                        <p className="text-white text-sm font-medium">Your chanlnel</p>
                    </div>
                    <div className="flex items-center gap-2 ">
                        <FaPen size={20} className="hover:bg-[#595F6F] rounded text-white p-1 transition-all " />
                        <MdDelete size={22} className="hover:bg-[#595F6F] rounded text-white p-1 transition-all " />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Sidebar;