import {IoDiamondOutline} from "react-icons/io5";
import Prompt from "./Prompt";

const NewChat = ({option , setOption}) => {


    return (
        <>
            <div className="flex flex-col items-center">
                <div
                    className="max-w-[280px] grid grid-cols-2 gap-1 p-1 rounded-full border-[1px] border-gray-400">
                    <div
                        className={`${option === "advance" ? "bg-gradient-to-r from-[#8876ed] to-[#0e8bff] rounded-full " : "text-[#878fad] hover:text-white"} flex flex-col px-4 py-1 hover:cursor-pointer text-center transition-all`}
                        onClick={() => setOption("advance")}
                    >
                        <p className="flex items-center justify-center gap-1 text-lg font-medium">
                            <IoDiamondOutline
                                size={15}/> Advance</p>
                        <p className="text-sm font-medium leading-none">social mode</p>
                    </div>
                    <div
                        className={`${option !== "advance" ? "bg-gradient-to-r from-[#8876ed] to-[#0e8bff] rounded-full " : "text-[#878fad] hover:text-white"} flex flex-col px-4 py-1 hover:cursor-pointer text-center transition-all`}
                        onClick={() => setOption("basic")}
                    >
                        <p className="text-lg font-medium">Basic</p>
                        <p className="text-sm font-medium leading-none">Fast</p>
                    </div>
                </div>
                <div className="flex items-center justify-center gap-1 my-3">
                    <div className="w-1 h-[2px] bg-[#878fad] rounded"></div>
                    <div className="w-2 h-[2px] bg-[#878fad] rounded"></div>
                    <div className="w-10 h-[2px] bg-[#878fad] rounded"></div>
                    <div className="w-2 h-[2px] bg-[#878fad] rounded"></div>
                    <div className="w-1 h-[2px] bg-[#878fad] rounded"></div>
                </div>
            </div>
            <div className="">
                <p className="text-lg font-bold text-white">Try asking about</p>
            </div>
        </>

    )
}

export default NewChat;
