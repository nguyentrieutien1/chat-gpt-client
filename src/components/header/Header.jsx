import { useEffect, useState } from "react";
import localStorageHelper from "../../helpers/localStorageHelper";
import Menu from "./Menu";
import Profile from "./Profile";

const Header = () => {
  const [link, setLink] = useState("");

  useEffect(() => {
    setLink(localStorageHelper.localStorageHelper.getItem("link"));
  }, []);
  return (
    <div className="">
       {/* <Menu /> */}
      {/* <div className="flex items-center gap-5 mx-5 ">
        <div className="ml-10 ">
          <a
            href="/"
            className="block text-white text-lg font-medium max-w-[200px] overflow-hidden"
          >
            <img
              className="py-1 h-12 w-40 object-cover"
              src="https://cdn.mypanel.link/aa7ed1/1q9o7rppeius8h1q.png"
              alt="logo"
            />
          </a>
        </div>
      </div> */}
      <div className="flex items-center gap-4 p-3">
        {/* <input
          max={500}
          className="bg-[#94b5ff] text-white font-medium py-4 pl-4 pr-6 rounded-lg w-full border-[0.5px] border-[#94b5ff] hover:border-gray-200 outline-1 outline-[#94b5ff] focus:outline-blue-500 transition-all"
          placeholder={"Enter your link"}
          value={link}
          onChange={(e) => {
            setLink(e.target.value);
            localStorageHelper.localStorageHelper.setItem(
              "link",
              e.target.value
            );
          }}
          type="text"
        /> */}
        {/* <button className="hidden sm:block px-4 py-2 text-white font-medium bg-[#139DFF] hover:bg-[#005CE6] rounded-full transition-all">
          Download Extension
        </button> */}

        {/*Profile*/}
        {/* <Profile /> */}
        {/*Menu*/}
        {/* <Menu /> */}
      </div>
    </div>
  );
};

export default Header;
