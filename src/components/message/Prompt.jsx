const Prompt = () => {
    const prompts = ["Can you suggest ways to improve viewer engagement on my channel?", "to improve viewer engagement on my channel?", "engagement on my channel?"]
    return (
        <div className="flex gap-2 flex-wrap mt-2 ">{
            prompts.map((prompt, index) => (
                <p key={index} className="inline text-[#878FA1] text-sm font-medium px-2 py-1 border-[1px] border-gray-400 rounded-full hover:border-white hover:text-gray-100 hover:cursor-pointer transition-all">
                    {prompt}
                </p>
            ))
        }
        </div>
    )
}

export default Prompt;