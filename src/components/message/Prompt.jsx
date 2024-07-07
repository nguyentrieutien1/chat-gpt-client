import { IoDiamondOutline } from "react-icons/io5";

const Prompt = ({ type = "basic", handleReplaceValue = () => {} }) => {
  const prompts = [
    "What is idea for next video of channel.",
    "How to have more views to my videos.",
    "Suggest me some improvements for channel.",
  ];
  return (
    <div className="flex">
      <div class="flex items-start gap-3 justify-start max-w-full mx-2 mt-4">
        <div style={{display: "flex", flexDirection: "column"}}>
          {prompts.map((prompt, index) => (
            <p
            onClick={() => handleReplaceValue(prompt)}
              key={index}
              className="my-2 inline text-[#878FA1] text-sm font-medium px-2 py-1 border-[1px] border-gray-400 rounded-full hover:border-white hover:text-gray-100 hover:cursor-pointer transition-all"
            >
              <div className="font-bold flex items-center justify-start gap-2">
                {type !== "basic" && <IoDiamondOutline size={15} />}
                {prompt}
              </div>
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Prompt;
