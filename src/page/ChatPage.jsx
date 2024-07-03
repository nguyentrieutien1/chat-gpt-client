import {useState, useRef} from "react";
import {IoDiamondOutline, IoSend} from "react-icons/io5";
import ChatMessage from "../components/message/ChatMessage";
import UserMessage from "../components/message/UserMessage";
import Prompt from "../components/message/Prompt";
import LoadingMessage from "../components/loading/LoadingMessage";
import NewChat from "../components/message/NewChat";

const ChatPage = () => {

    const [countChar, setCountChar] = useState(0);
    const [value, setValue] = useState("");

    const handleChange = (e) => {
        setCountChar(e.target.value.length);
        setValue(e.target.value);
    }
    const [option, setOption] = useState("advance");
    const [messages, setMessages] = useState([1]);


    return (
        <div id="form_chat" className="relative h-full w-[90%] mx-auto">
            <div className=" max-h-[680px] xl:max-h-[690px] overflow-y-scroll no-scrollbar">
                {
                    messages > 0 ?
                        <>
                            <UserMessage message={"fhsdfjksfhsjkfhsfjksjshdfksdfhskfjshdjkfhsdfsdf"}/>
                            <ChatMessage message={"sdfsdfds"}/>
                        </>
                        :
                        <>
                            <NewChat option={option} setOption={setOption}/>
                        </>
                }


            </div>


            <div className="absolute bottom-0 left-0 right-0">
                <div className="relative pt-3 bg-[#121521]">
                    <input max={500}
                           className="bg-[#222838] text-white font-medium py-4 pl-4 pr-28 rounded-lg w-full border-[0.5px] border-[#222838] hover:border-gray-200 outline-1 outline-[#222838] focus:outline-blue-500 transition-all"
                           value={value}
                           onChange={handleChange}
                           placeholder={"Ask me anything..."}
                           type="text"/>
                    <div
                        className="absolute top-1/2 -translate-y-1/2 right-4 flex items-center gap-2 mt-2 bg-[#139DFF] hover:bg-[#005CE6] transition-all px-3 py-1 rounded-full">
                        <IoSend size={12} className="text-white"/>
                        <p className="font-medium text-white text-[16px]">Send</p>
                    </div>
                </div>

                <p className="text-right mt-1 text-white text-lg">{countChar} /500</p>
                <p className="text-center text-lg font-normal text-[#BBBCC1] mt-2">Please be aware that this is an alpha
                    version of the AI, and as such it may not always behave as expected. Use it at your own risk.</p>

            </div>
        </div>
    );
}

export default ChatPage;