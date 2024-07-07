import {LuMessageCircle} from "react-icons/lu";
import {FaPen} from "react-icons/fa";
import {MdDelete} from "react-icons/md";
import {useState} from "react";
import {HiOutlineCheck} from "react-icons/hi";
import {HiXMark} from "react-icons/hi2";

const ItemHistory = () => {
    const [isEdit, setIsEdit] = useState(false);
    const [chanelName, setChanelName] = useState("Your channel");
    const [oldChanelName, setOldChanelName] = useState(chanelName);
    const [newChanelName, setNewChanelName] = useState(chanelName);

    return (
        <div
            className="relative flex justify-between gap-1 px-3 py-2 bg-[#394053] rounded-full hover:cursor-pointer">
            <div className="flex items-center gap-1 overflow-hidden">
                <LuMessageCircle size={15} className="text-white"/>
                {isEdit ? <input type="text"
                                 className="max-w-full bg-[#394053] text-white text-[16px] font-normal outline-none border-none "
                                 value={newChanelName} onChange={(e) => setNewChanelName(e.target.value)}/> :
                    <p className="max-w-full text-white text-[16px] font-normal text-nowrap truncate">{chanelName}</p>
                }
            </div>
            {isEdit ?
                <div className="absolute top-1/2 -translate-y-1/2 right-1 flex items-center gap-2 px-1 bg-[#394053]">
                    <HiOutlineCheck size={20} className="hover:bg-[#595F6F] rounded text-white p-1 transition-all "
                                    onClick={() => {
                                        setIsEdit(!isEdit)
                                        setChanelName(newChanelName)
                                    }}
                    />
                    <HiXMark size={22} className="hover:bg-[#595F6F] rounded text-white p-1 transition-all "
                             onClick={() => {
                                 setIsEdit(!isEdit)
                                 setChanelName(oldChanelName)
                             }}
                    />
                </div> :
                <div className="absolute top-1/2 -translate-y-1/2 right-1 flex items-center gap-2 px-1 bg-[#394053]">
                    <FaPen size={20} className="hover:bg-[#595F6F] rounded text-white p-1 transition-all "
                           onClick={() => setIsEdit(!isEdit)}
                    />
                    <MdDelete size={22} className="hover:bg-[#595F6F] rounded text-white p-1 transition-all "/>
                </div>
            }
        </div>
    )
}

export default ItemHistory
