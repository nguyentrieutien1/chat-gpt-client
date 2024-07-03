import {BiDislike, BiLike} from "react-icons/bi";
import {MdIosShare, MdOutlineContentCopy} from "react-icons/md";
import Prompt from "./Prompt";
import LoadingMessage from "../loading/LoadingMessage";
import {useState, useEffect} from "react"

const ChatMessage = ({message}) => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {

        const timer = setTimeout(() => {
            setIsLoading(false)
        }, 2000)

        return () => clearTimeout(timer)
    }, [])

    return (
        <>
            {
                <LoadingMessage isSuccess={isLoading}/>
            }
            {
                !isLoading &&
                <div className="flex items-start gap-3 justify-start max-w-full mx-2 mt-4">
                    <img className="w-12 h-12 object-cover rounded-full"
                         src="https://static.vecteezy.com/system/resources/thumbnails/002/128/968/small_2x/phoenix-esports-logo-design-vector.jpg"
                         alt="avatar"/>
                    <div>
                        <p className="p-4 bg-[#222838] text-white rounded-lg break-words text-wrap w-auto font-medium">{message}</p>
                        {/*Like Share*/}
                        <div className="flex justify-between items-center gap-1 mt-1 max-w-[95%]">
                            <div className="flex items-center gap-2">
                                <BiLike size={25}
                                        className="p-1 rounded-full bg-[#222838] text-[#4F566F] hover:cursor-pointer hover:bg-[#2D3450] transition-all"/>
                                <BiDislike size={25}
                                           className="p-1 rounded-full bg-[#222838] text-[#4F566F] hover:cursor-pointer hover:bg-[#2D3450] transition-all"/>
                            </div>
                            <div className="flex items-center gap-2">
                                <MdOutlineContentCopy size={25}
                                                      className="p-1 rounded-full bg-[#222838] text-[#4F566F] hover:cursor-pointer hover:bg-[#2D3450] transition-all"/>
                                <p className="flex items-center gap-1 px-3 py-1 rounded-full bg-[#222838] text-gray-300 text-sm font-bold hover:cursor-pointer hover:bg-[#2D3450] transition-all">
                                    <MdIosShare size={15} className="text-gray-300"/> Share</p>
                            </div>
                        </div>
                        {/* Prompt   */}
                        <Prompt/>
                    </div>
                </div>
            }
        </>
    )
}

export default ChatMessage;