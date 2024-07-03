import {HiOutlineCheck} from "react-icons/hi";
import {AiOutlineLoading3Quarters} from "react-icons/ai";

const LoadingMessage = ({isSuccess}) => {
    return (
        <div className="my-3 text-white flex flex-col items-center justify-center ">
            <div className="flex items-center justify-center gap-1 my-3">
                <div className="w-1 h-[2px] bg-[#878fad] rounded"></div>
                <div className="w-2 h-[2px] bg-[#878fad] rounded"></div>
                <div className="w-10 h-[2px] bg-[#878fad] rounded"></div>
                <div className="w-2 h-[2px] bg-[#878fad] rounded"></div>
                <div className="w-1 h-[2px] bg-[#878fad] rounded"></div>
            </div>
            <div className="my-3 flex items-center justify-center gap-1">
                {isSuccess ?
                    <AiOutlineLoading3Quarters size={20}
                                               className="text-whitetransition-all animate-spin"/>
                    :
                    <HiOutlineCheck size={20} className=" text-green-500 transition-all"/>
                }
                <p className="text-sm text-[#878fad] font-medium">Thinking about your question...</p>
            </div>
            <div className="flex items-center justify-center gap-1 my-3">
                <div className="w-1 h-[2px] bg-[#878fad] rounded"></div>
                <div className="w-2 h-[2px] bg-[#878fad] rounded"></div>
                <div className="w-10 h-[2px] bg-[#878fad] rounded"></div>
                <div className="w-2 h-[2px] bg-[#878fad] rounded"></div>
                <div className="w-1 h-[2px] bg-[#878fad] rounded"></div>
            </div>
        </div>
    )
}

export default LoadingMessage;