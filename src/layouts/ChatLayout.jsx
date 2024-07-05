import Header from "../components/header/Header";
import Sidebar from "../components/sidebar/Sidebar";

const ChatLayout = ({children}) => {
    return (
        <div className="bg-[#121521] w-screen h-screen">
            <Header/>
            <div className="px-6 py-4 grid grid-cols-12 w-full mx-auto gap-8 xl:gap-2 h-chat-form">
                <div className="hidden  lg:col-span-3 xl:col-span-2 lg:block"><Sidebar/></div>
                <div className="col-span-12  lg:col-span-9 xl:col-span-10 w-full">{children}</div>
            </div>
        </div>
    )
}

export  default ChatLayout;
