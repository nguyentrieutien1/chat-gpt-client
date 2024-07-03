import {IoChevronDown, IoChevronUp, IoDiamondOutline} from "react-icons/io5";
import {useState} from "react";

const SuggestPrompt = ({title, listPrompts}) => {
    const [prompts, setPrompts] = useState(["Based on my channel, what video ideas do you have for me?", "What's the best way to promote these video ideas?", "How can I engage my audience with these video concepts?", "How can I optimize these video ideas for maximum reach?"]);
    const [isExpand, setIsExpand] = useState(false);

    return (
        <div className="flex flex-col items-center justify-start gap-2 w-[440px] mb-3">
            <div className="w-full text-white flex items-center justify-center gap-2 ">
                <IoDiamondOutline size={15}/>
                <p className="text-[17px] font-medium ">{title}</p>
            </div>

            {(isExpand && prompts.length > 2) ? (
                prompts.map((prompt, index) => (
                    <div
                        key={index} // Add a unique key for each element
                        className="w-full text-white flex items-center justify-center gap-2 px-6 bg-[#222838] py-2 rounded-full text-center ">
                        <IoDiamondOutline size={15} className="block mr-2"/>
                        <p className="text-[16px] font-normal break-words text-wrap overflow-hidden w-max">
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
                            className="w-full text-white flex items-center justify-center gap-2 px-6 bg-[#222838] py-2 rounded-full text-center ">
                            <IoDiamondOutline size={15} className="block mr-2"/>
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
                        className="w-full text-white flex items-center justify-center px-6 bg-[#222838] py-2 rounded-full text-center hover:cursor-pointer "
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