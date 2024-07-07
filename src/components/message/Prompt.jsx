import { IoDiamondOutline } from "react-icons/io5";

const Prompt = ({ type = "basic", handleReplaceValue = () => {}, oldQuestion }) => {
  return (
    <div className="flex">
      <div class="flex items-start gap-3 justify-start max-w-full mx-2 mt-4">
        <div style={{display: "flex", flexDirection: "column"}}>
          {oldQuestion.map((prompt, index) => (
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
