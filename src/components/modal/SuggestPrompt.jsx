import {IoChevronDown, IoChevronUp, IoDiamondOutline} from "react-icons/io5";
import {useState} from "react";
import { questions } from "../../page/ChatPage";

const SuggestPrompt = ({title, listPrompts}) => {
    const [prompts, setPrompts] = useState(questions);
    const [isExpand, setIsExpand] = useState(false);

    return (
        <div className="flex flex-col items-center justify-start gap-2 w-[100%] h-auto max-h-[550px] mb-3 overflow-y-scroll">
            <div className="w-full text-white flex items-center justify-center gap-2 ">
                <IoDiamondOutline size={15} className=""/>
                <p className="text-[17px] font-medium ">{title}</p>
            </div>

            {(isExpand && prompts.length > 2) ? (
                prompts.map((prompt, index) => (
                    <div
                        key={index} // Add a unique key for each element
                        className="w-full text-white flex items-center justify-center  p-2 border-white border-[1px] border-white rounded-lg text-center ">
                        <IoDiamondOutline size={15} className=" mr-2 hidden sm:block"/>
                        <p className="text-[14px] sm:text-[16px] font-normal break-words text-wrap overflow-hidden w-max py-2">
                            {prompt}
                        </p>
                    </div>
                ))
            ) : (
                // Render only the first two elements if isExpand is false
                <>
                    {prompts.slice(0, 2).map((prompt, index) => (
                        <div
                            key={index} // Add a unique key for each element
                            className="w-full text-white flex items-center justify-center p-2 rounded-lg text-center border-[1px] border-white ">
                            <IoDiamondOutline size={15} className="block mr-2 "/>
                            <p className="text-[16px] font-normal break-words text-wrap overflow-hidden w-max">
                                {prompt}
                            </p>
                        </div>
                    ))}
                </>
            )}

            {/* Render the expand/collapse button */}
            {
                prompts.length > 2 && (
                    <div
                        className="w-full text-white flex items-center justify-center px-6 bg-[#94b5ff] py-2 rounded-full text-center hover:cursor-pointer "
                        onClick={() => setIsExpand(!isExpand)}
                    >
                        {
                            isExpand ?
                                <IoChevronUp/>
                                :
                                <IoChevronDown/>
                        }
                    </div>
                )
            }
        </div>
    )
}

export default SuggestPrompt;
