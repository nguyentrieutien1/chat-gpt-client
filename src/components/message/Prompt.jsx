import { IoDiamondOutline } from "react-icons/io5";

const Prompt = ({ type = "basic", handleReplaceValue = () => {}, oldQuestion }) => {
  return (
    <div className="flex">
      <div class="flex items-start gap-3 justify-start max-w-full mx-2 mt-4">
      <img
            className="w-12 h-12 object-cover rounded-full opacity-0 hidden sm:block "
            src="https://cdn.mypanel.link/aa7ed1/w6z1i225muys4a5u.png"
            alt="avatar"
          />
        <div style={{display: "flex", flexDirection: "column"}}>
          {oldQuestion.map((prompt, index) => (
            <p
            onClick={() => handleReplaceValue(prompt)}
              key={index}
              className="mt-2 inline text-[#878FA1] text-sm font-medium w-fit p-1 sm:p-2 border-[1px] border-white rounded-lg hover:border-white hover:text-gray-100 hover:cursor-pointer transition-all"
            >
              <div className="font-bold flex items-center justify-start gap-2 text-white">
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
