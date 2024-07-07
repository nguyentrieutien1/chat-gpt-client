import { IoMenuSharp } from "react-icons/io5";
import { useEffect, useRef, useState } from "react";
import Sidebar from "../sidebar/Sidebar";

const Menu = ({ setIsShowSidebar }) => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      const menuSection = document.querySelector("#menu-section-class");
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        !menuSection.contains(event.target)
      ) {
        setIsShowSidebar(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  return (
    <div className="relative">
      <IoMenuSharp
        size={35}
        id="menu-section-class"
        className="text-white hover:cursor-pointer lg:hidden block"
        onClick={() => setIsShowSidebar((prev) => !prev)}
      />
      <div>
        <ul
          ref={menuRef}
          className={`${
            isOpenMenu ? "block" : "hidden"
          } absolute top-12 right-0 w-[250px] bg-[#1F2437] shadow-lg rounded-lg py-4 border-[1px] border-gray-400 z-50`}
        >
          <Sidebar />
        </ul>
      </div>
    </div>
  );
};

export default Menu;
