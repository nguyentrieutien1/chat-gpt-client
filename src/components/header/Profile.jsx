import {GoChevronDown} from "react-icons/go";
import {useEffect, useRef, useState} from "react";
import { FaHeartbeat } from "react-icons/fa";

const Profile = () => {
    const [isOpenProfile, setIsOpenProfile] = useState(false);
    const profileRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            const profileSection = document.querySelector('#profile-section-class');
            if (
                profileRef.current &&
                !profileRef.current.contains(event.target) &&
                !profileSection.contains(event.target)
            ) {
                setIsOpenProfile(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [isOpenProfile]);
    return (
        <div className="relative">
            <div id="profile-section-class" className="flex items-center gap-1 hover:cursor-pointer"
                 onClick={(event) => {
                     event.stopPropagation();
                     setIsOpenProfile(!isOpenProfile);
                 }}
            >
                <FaHeartbeat size={40} className="hover:bg-[#595F6F] rounded text-white p-1 transition-all " />
                <GoChevronDown size={20} className="text-white"/>
            </div>
            <div ref={profileRef}
                 className={`${isOpenProfile ? "opacity-100 block" : "opacity-0 hidden"} absolute top-12 right-0 w-[300px] bg-[#1F2437] shadow-lg rounded-lg pt-4 border-[1px] border-gray-400 z-50`}>
                <div className="border-b-[1px] border-gray-400 pb-2">
                    <h2 className="px-3 text-lg text-[#f7f7f7]">Channels</h2>
                    <div className="px-3 flex items-center justify-between gap-2 mt-2">
                        <div className="flex items-center gap-2">
                            <img className="w-8 h-8 object-cover rounded-full"
                                 src="https://img-cdn.pixlr.com/image-generator/history/65bb506dcb310754719cf81f/ede935de-1138-4f66-8ed7-44bd16efc709/medium.webp"
                                 alt="avartar"/>
                            <h3 className="text-lg text-[#f7f7f7] font-medium">John Doe</h3>
                        </div>
                        <p className="text-lg text-[#f7f7f7] font-medium">0</p>
                    </div>
                    <p className="block text-[#f7f7f7] text-lg font-medium pl-3 py-2 mt-2 hover:bg-gray-500 hover:cursor-pointer transition-all">Channel
                        Settings</p>
                </div>
                <div className="border-b-[1px] border-gray-400 pb-2 mt-3">
                    <h2 className="px-3 text-lg text-[#f7f7f7]">Extras</h2>

                    <p className="block text-[#f7f7f7] text-lg font-medium pl-3 py-2 mt-2 hover:bg-gray-500 hover:cursor-pointer transition-all">Refer-a-Friend</p>
                    <p className="block text-[#f7f7f7] text-lg font-medium pl-3 py-2 mt-2 hover:bg-gray-500 hover:cursor-pointer transition-all">vidIQ
                        Academy</p>
                    <p className="block text-[#f7f7f7] text-lg font-medium pl-3 py-2 mt-2 hover:bg-gray-500 hover:cursor-pointer transition-all">Affiliate
                        Center</p>
                </div>
                <div className="pb-2 mt-3">
                    <h2 className="px-3 text-lg text-[#f7f7f7]">Settings</h2>

                    <p className="block text-[#f7f7f7] text-lg font-medium pl-3 py-2 mt-2 hover:bg-gray-500 hover:cursor-pointer transition-all">Account
                        settings</p>
                    <p className="block text-[#f7f7f7] text-lg font-medium pl-3 py-2 mt-2 hover:bg-gray-500 hover:cursor-pointer transition-all">Dark
                        theme</p>
                    <p className="block text-[#f7f7f7] text-lg font-medium pl-3 py-2 mt-2 hover:bg-gray-500 hover:cursor-pointer transition-all">Logout</p>
                </div>
            </div>
        </div>
    );
}

export default Profile;
