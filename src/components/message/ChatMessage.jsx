import {BiDislike, BiLike} from "react-icons/bi";
import {MdIosShare, MdOutlineContentCopy} from "react-icons/md";
import Prompt from "./Prompt";

const ChatMessage = () => {

    return (
        <div className="flex items-start gap-3 justify-start max-w-full mx-2 mt-4">
            <img className="w-10 h-10 object-cover rounded-full"
                 src="https://static.vecteezy.com/system/resources/thumbnails/002/128/968/small_2x/phoenix-esports-logo-design-vector.jpg"
                 alt="avatar"/>
            <div>
                <p className="p-4 bg-[#222838] text-white rounded-lg break-words text-wrap max-w-[95%]">;faslkdfjasklfjsakdfljasflksdjflkasdfjsalkdfjsalkdfjsaldkfjasldfjasdlkfjsadlfjsalf;kdjasflksadjflaskdfjsalkfjasflkasjflkdafdsfsafsdf</p>
                {/*Like Share*/}
                <div className="flex justify-between items-center mt-1 max-w-[95%]">
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
    )
}

export default ChatMessage;