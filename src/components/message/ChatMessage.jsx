import { BiDislike, BiLike } from "react-icons/bi";
import { MdIosShare, MdOutlineContentCopy } from "react-icons/md";
import { useState, useEffect } from "react";
import html2canvas from "html2canvas";
import DOMPurify from "dompurify";
import { v4 as uuidv4 } from "uuid"; // Import hàm tạo UUID từ thư viện uuid
import copy from "copy-to-clipboard";

const ChatMessage = ({
  message,
  isLike = undefined,
  handleFavariteMessage,
}) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    });

    return () => clearTimeout(timer);
  }, []);

  const handleShare = async (uuid) => {
    const element = document.getElementById(`${uuid}`); // id of the element to capture
    console.log(element);
    if (element) {
      // Capture the screenshot
      html2canvas(element, {}).then((canvas) => {
        const imgData = canvas.toDataURL("image/png");
        const link = document.createElement("a");
        link.download = "screenshot-namnguyenproduct.png";
        link.href = imgData;
        link.click();
      });
    }
  };
  const sanitizedMessage = DOMPurify.sanitize(message.replace(/\n/g, "<br/>"));

  const id = uuidv4();
  return (
    <>
      {!isLoading && (
        <div className="flex items-start gap-3 justify-start max-w-full mx-2 mt-4">
          <img
            className="w-12 h-12 object-cover rounded-full"
            src="https://cdn.mypanel.link/aa7ed1/w6z1i225muys4a5u.png"
            alt="avatar"
          />
          <div>
            <p
              className=" text-[14px] sm:text-[16px] p-4 bg-[#6696ff] text-white rounded-lg break-words text-wrap w-auto"
              id={`message-id-${id}`}
            >
              {sanitizedMessage &&
                sanitizedMessage
                  .split("<br/>")
                  .map((line, index) => (
                    <div
                      key={index}
                      dangerouslySetInnerHTML={{ __html: line }}
                    ></div>
                  ))}
            </p>
            {/*Like Share*/}
            <div className="flex justify-between flex-wrap items-center gap-1 mt-1 max-w-[95%]">
              <div className="flex items-center gap-2">
                {isLike === undefined ? (
                  <>
                    <BiLike
                      size={25}
                      className="p-1 rounded-full bg-[#6696ff] text-[#4F566F] hover:cursor-pointer hover:bg-[#6696ff] transition-all"
                      onClick={() => handleFavariteMessage(true)}
                    />
                    <BiDislike
                      size={25}
                      className="p-1 rounded-full bg-[#6696ff] text-[#4F566F] hover:cursor-pointer hover:bg-[#6696ff] transition-all"
                      onClick={() => handleFavariteMessage(false)}
                    />
                  </>
                ) : isLike === false ? (
                  <>
                    <BiDislike
                      style={{ color: "rgb(252, 129, 129)" }}
                      size={25}
                      className="p-1 rounded-full bg-[#6696ff] hover:cursor-pointer hover:bg-[#6696ff] transition-all"
                    />
                  </>
                ) : (
                  <>
                    <BiLike
                      style={{ color: "rgb(80, 213, 122)" }}
                      size={25}
                      className="p-1 rounded-full bg-[#6696ff] hover:cursor-pointer hover:bg-[#6696ff] transition-all"
                    />
                  </>
                )}
              </div>
              <div className="flex items-center gap-2">
                <MdOutlineContentCopy
                  onClick={() => {
                    copy("Text");
                    alert("Đã sao chép vào clipboard!");
                  }}
                  size={25}
                  className="p-1 rounded-full bg-[#6696ff] text-[#4F566F] hover:cursor-pointer hover:bg-[#6696ff] transition-all"
                />
                <p
                  onClick={() => handleShare(`message-id-${id}`)}
                  className="flex items-center gap-1 px-3 py-1 rounded-full  bg-[#6696ff] text-[#4F566F] text-sm font-bold hover:cursor-pointer hover:bg-[#6696ff] transition-all"
                >
                  <MdIosShare size={15} className=" text-[#4F566F]" /> Share
                </p>
              </div>
            </div>
            {/* Prompt   */}
            {/* <Prompt /> */}
          </div>
        </div>
      )}
    </>
  );
};

export default ChatMessage;
