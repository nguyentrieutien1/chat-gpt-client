import { useState } from "react";
import Header from "../components/header/Header";
import Sidebar from "../components/sidebar/Sidebar";
import Menu from "../components/header/Menu";
import SidebarModal from "../components/modal/SidebarModal";

const ChatLayout = ({ children }) => {
  const [isShowSidebar, setIsShowSidebar] = useState(false);
  return (
    <div className="bg-[#4680ff] w-screen h-screen">
      <div className="px-[3%] sm:px-6"><Menu setIsShowSidebar={setIsShowSidebar} /></div>
       
       {isShowSidebar && <SidebarModal setIsShowSidebar={setIsShowSidebar}/>}
      <div className="px-[3%] sm:px-6  grid grid-cols-12 w-full mx-auto sm:gap-8 xl:gap-2 h-chat-form">
       
        <div className="hidden  lg:col-span-3 xl:col-span-2 lg:block">
          <Sidebar width={"50%"}/>
        </div>
        <div className="col-span-12  lg:col-span-9 xl:col-span-10 w-full">
          {children}
        </div>
      </div>
    </div>
  );
};

export default ChatLayout;
