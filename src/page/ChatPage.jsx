import React, {useState, useRef, useEffect} from "react";

import {IoSend} from "react-icons/io5";
import ChatMessage from "../components/message/ChatMessage";
import UserMessage from "../components/message/UserMessage";
import NewChat from "../components/message/NewChat";
import axios from "axios";
import localStorageHelper from "../helpers/localStorageHelper";

const ChatPage = () => {
    const [countChar, setCountChar] = useState(0);
    const [value, setValue] = useState("");
    const [valueLink, setValueLink] = useState("");

    const handleChange = (e) => {
        setCountChar(e.target.value.length);
        setValue(e.target.value);
    };
    const [option, setOption] = useState("advance");
    const [messages, setMessages] = useState([1]);

    const chatContainerRef = useRef(null);
    const [conversions, setConversions] = useState([]);
    const messageContainer = useRef(null);


    useEffect(() => {
        const conversionsFromLocalStorage =
            localStorageHelper.localStorageHelper.getItem("conversions");
        setConversions([...conversionsFromLocalStorage]);
    }, [conversions.length]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setValue("");
        const result = await axios.post(
            "https://namnguyenproduct.com/api/conversion",
            {data: value}
        );

        if (result.status !== 201) return;


        const {metadata} = result?.data;

        const conversion = {
            question: value,
            answer: metadata,
        };

        conversions.push(conversion);
        setConversions([...conversions]);

        setTimeout(() => {
            scrollToBottom();
        }, 500)

        localStorageHelper.localStorageHelper.setItem("conversions", [
            ...conversions,
        ]);

    };

    useEffect(() => {
        scrollToBottom();
    }, [])

    const scrollToBottom = () => {
        const container = messageContainer.current;
        if (container) {
            container.scrollTo({
                top: container.scrollHeight,
                behavior: 'smooth'
            });
        }
    };

    return (
        <div id="form_chat" className="relative h-full w-[90%] mx-auto">
            <div
                ref={messageContainer}
                className="h-chat-message pb-6" style={{overflowY: "scroll"}}
            >
                {conversions.length > 0 ? (
                    conversions.map((conversion, index) => (
                        <React.Fragment key={index}>
                            <UserMessage message={conversion?.question}/>
                            <ChatMessage message={conversion?.answer}/>
                        </React.Fragment>
                    ))
                ) : (
                    <>
                        <NewChat option={option} setOption={setOption}/>
                    </>
                )}
                {/* {messages > 0 ? (
=======
  const scrollToBottom = () => {
    const container =  messageContainer.current;
    if (container) {
      container.scrollTo({
        top: container.scrollHeight,
        behavior: 'smooth'
      });
    }
  };

  const scrollToBottom = () => {
    const container =  messageContainer.current;
    if (container) {
      container.scrollTo({
        top: container.scrollHeight,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div id="form_chat" className="relative h-full w-[90%] mx-auto">
      <div
          ref={messageContainer}
          className=" max-h-[680px] xl:max-h-[690px] overflow-y-scroll no-scrollbar pb-20">
        {messages > 0 ? (
>>>>>>> Stashed changes
          <>
            <UserMessage
              message={"fhsdfjksfhsjkfhsfjksjshdfksdfhskfjshdjkfhsdfsdf"}
            />
            <ChatMessage message={"sdfsdfds"} />
          </>
        ) : (
          <>
            <NewChat option={option} setOption={setOption} />
          </>
<<<<<<< Updated upstream
<<<<<<< Updated upstream
        )} */}

                <div className="chat-container" ref={chatContainerRef}></div>
            </div>

            <div className="absolute bottom-0 left-0 right-0">
                <form
                    onSubmit={handleSubmit}
                    className="relative pt-3 bg-[#121521] w-full"
                >
                    <input
                        max={500}
                        className="bg-[#222838] text-white font-medium py-4 pl-4 pr-28 rounded-lg w-full border-[0.5px] border-[#222838] hover:border-gray-200 outline-1 outline-[#222838] focus:outline-blue-500 transition-all"
                        value={value}
                        onChange={handleChange}
                        placeholder={"Ask me anything..."}
                        type="text"
                    />
                    <div
                        onClick={handleSubmit}
                        className="hover:cursor-pointer absolute top-1/2 -translate-y-1/2 right-4 flex items-center gap-2 mt-2 bg-[#139DFF] hover:bg-[#005CE6] transition-all px-3 py-1 rounded-full"
                    >
                        <IoSend size={12} className="text-white"/>
                        <p className="font-medium text-white text-[16px]">Send</p>
                    </div>
                </form>
                {/* <input
          max={500}
          className="m-0 bg-[#222838] text-white font-medium py-3 pl-4 pr-28 rounded-lg w-[30%] border-[0.5px] border-[#222838] hover:border-gray-200 outline-1 outline-[#222838]"
          value={valueLink}
          onChange={(e) => {
            setValueLink(e.target.value);
          }}
          placeholder={"Link..."}
          type="text"
        /> */}

                <p className="text-right mt-1 text-white text-lg">{countChar} /500</p>
                {/* <p className="text-center text-lg font-normal text-[#BBBCC1] mt-2">
          Please be aware that this is an alpha version of the AI, and as such
          it may not always behave as expected. Use it at your own risk.
        </p> */}
            </div>
        </div>
    );
};

export default ChatPage;
