import {IoDiamondOutline} from "react-icons/io5";

const Prompt = ({type = "basic"}) => {
    const prompts = []
    return (
        <div className="flex gap-2 flex-wrap mt-2 ">{
            prompts.map((prompt, index) => (
                <p key={index} className="inline text-[#878FA1] text-sm font-medium px-2 py-1 border-[1px] border-gray-400 rounded-full hover:border-white hover:text-gray-100 hover:cursor-pointer transition-all">
                    <div className="flex items-center justify-start gap-2">
                        {type !== "basic" && <IoDiamondOutline
                            size={15}/>}
                        {prompt}
                    </div>
                </p>
            ))
        }
        </div>
    )
}

export default Prompt;