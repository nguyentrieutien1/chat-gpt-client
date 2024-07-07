import React, { useState, useRef, useEffect } from "react";

import { IoSend } from "react-icons/io5";
import ChatMessage from "../components/message/ChatMessage";
import UserMessage from "../components/message/UserMessage";
import NewChat from "../components/message/NewChat";
import axios from "axios";
import localStorageHelper from "../helpers/localStorageHelper";
import LoadingMessage from "../components/loading/LoadingMessage";
import Prompt from "../components/message/Prompt";

const ChatPage = () => {
  const [countChar, setCountChar] = useState(0);
  const [value, setValue] = useState("");
  const [isBotAnswering, setIsBotAnswering] = useState(false);
  const handleChange = (e) => {
    setCountChar(e.target.value.length);
    setValue(e.target.value);
  };
  const [option, setOption] = useState("advance");

  const [conversions, setConversions] = useState([]);
  const messageContainer = useRef(null);

  useEffect(() => {
    const conversionsFromLocalStorage =
      localStorageHelper.localStorageHelper.getItem("conversions");
    setConversions([...conversionsFromLocalStorage]);
  }, []);

  useEffect(() => {
    const clearLocalStorageArray = () => {
        localStorage.setItem('conversions', JSON.stringify([]));
        console.log('Array cleared at:', new Date());
        setConversions([])

    };
    // Đặt hàm này để chạy mỗi 30 phút
    const intervalId = setInterval(clearLocalStorageArray, 360 * 60 * 1000); // 30 phút = 30 * 60 * 1000 milliseconds

    // Làm sạch interval khi component unmount
    return () => clearInterval(intervalId);
}, []);


  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      var link = "Nếu câu hỏi của tôi bằng tiếng gì thì hãy trả lời theo tiếng đó nhé, câu hỏi của tôi là : "
      // if(localStorageHelper.localStorageHelper.getItem("link").length > 0) {
      //   link = `${localStorageHelper.localStorageHelper.getItem("link")}, `
      // }
      conversions.push({
        role: "user",
        parts: [{ text: value }],
      });
      setConversions([...conversions]);
      scrollToBottomFunction();
      setValue("");
      setIsBotAnswering(true);
      const result = await axios.post(
        "https://namnguyenproduct.com/api/conversion",
        { data: link.concat(value).concat(""), history: conversions }
      );

      if (result.status !== 201) return;

      const { metadata } = result?.data;

      const userConversions = {
        role: "user",
        parts: [{ text: value }],
      };

      const modelConversions = {
        role: "model",
        parts: [{ text: metadata }],
      };

      conversions.splice(conversions.length - 1, 1);

      conversions.push(userConversions);

      conversions.push(modelConversions);

      setConversions([...conversions]);

      scrollToBottomFunction();

      localStorageHelper.localStorageHelper.setItem("conversions", [
        ...conversions,
      ]);
      setIsBotAnswering(false);
    } finally {
      setIsBotAnswering(false);
    }
  };

  console.log(conversions);

  const scrollToBottomFunction = () => {
    setTimeout(() => {
      scrollToBottom();
    }, 500);
  };

  useEffect(() => {
    scrollToBottomFunction();
  }, []);

  const scrollToBottom = () => {
    const container = messageContainer.current;
    if (container) {
      container.scrollTo({
        top: container.scrollHeight,
        behavior: "smooth",
      });
    }
  };

  return (
    <div id="form_chat" className="relative h-full w-[90%] mx-auto">
      <div
        ref={messageContainer}
        className="h-chat-message pb-6"
        style={{ overflowY: "scroll" }}
      >
        {conversions.length > 0 ? (
          conversions.map((conversion, index) => {
            return (
              <React.Fragment key={index}>
                {conversion?.role == "user" ? (
                  <UserMessage message={conversion.parts[0].text} />
                ) : (
                  conversion.parts[0] && (
                    <ChatMessage message={conversion.parts[0]?.text.replace(/\*\*/g, "")} />
                  )
                )}
              </React.Fragment>
            );
          })
        ) : (
          <>
            <NewChat option={option} setOption={setOption} />
          </>
        )}

        {isBotAnswering && <LoadingMessage isSuccess={isBotAnswering} />}
        {!isBotAnswering && <Prompt handleReplaceValue={(text) => setValue(text)} />}
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
            <IoSend size={12} className="text-white" />
            <p className="font-medium text-white text-[16px]">Send</p>
          </div>
        </form>

        <p className="text-right mt-1 text-white text-lg">{value.length} /500</p>
        {/* <p className="text-center text-lg font-normal text-[#BBBCC1] mt-2">
          Please be aware that this is an alpha version of the AI, and as such
          it may not always behave as expected. Use it at your own risk.
        </p> */}
      </div>
    </div>
  );
};

export default ChatPage;
