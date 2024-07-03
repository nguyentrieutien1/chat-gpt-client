import {IoMenuSharp} from "react-icons/io5";
import {useEffect, useRef, useState} from "react";

const Menu = () => {

    const [isOpenMenu, setIsOpenMenu] = useState(false);
    const menuRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            const menuSection = document.querySelector('#menu-section-class');
            if (menuRef.current && !menuRef.current.contains(event.target) && !menuSection.contains(event.target)) {
                setIsOpenMenu(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <div className="relative">
            <IoMenuSharp size={35} id="menu-section-class" className="text-white block hover:cursor-pointer xl:hidden"
                         onClick={() => setIsOpenMenu(!isOpenMenu)}
            />
            <div>
                <ul ref={menuRef}
                    className={`${isOpenMenu ? "block" : "hidden"} absolute top-12 right-0 w-[250px] bg-[#1F2437] shadow-lg rounded-lg py-4 border-[1px] border-gray-400 z-50`}>
                    <li>
                        <a href="/"
                           className="block text-white text-lg font-medium pl-3 py-2 hover:bg-gray-500 transition-all">
                            Dashboard
                        </a>
                    </li>
                    <li>
                        <a href="/"
                           className="block text-white text-lg font-medium pl-3 py-2 hover:bg-gray-500 transition-all">
                            Daily Ideas
                        </a>
                    </li>
                    <li>
                        <a href="/"
                           className="block text-white text-lg font-medium pl-3 py-2 hover:bg-gray-500 transition-all">
                            AI Generator
                        </a>
                    </li>
                    <li>
                        <a href="/"
                           className="block text-white text-lg font-medium pl-3 py-2 hover:bg-gray-500 transition-all">
                            Keyword
                        </a>
                    </li>
                    <li>
                        <a href="/"
                           className="block text-white text-lg font-medium pl-3 py-2 hover:bg-gray-500 transition-all">
                            Competitor
                        </a>
                    </li>
                    <li>
                        <a href="/"
                           className="block text-white text-lg font-medium pl-3 py-2 hover:bg-gray-500 transition-all">
                            AI Coaches
                        </a>
                    </li>
                    <li>
                        <a href="/"
                           className="block text-white text-lg font-medium pl-3 py-2 hover:bg-gray-500 transition-all">
                            Upgrade
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Menu;