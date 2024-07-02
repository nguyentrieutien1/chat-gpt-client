import Header from "../components/header/Header";
import Sidebar from "../components/sidebar/Sidebar";

const ChatLayout = ({children}) => {
    return (
        <div className="bg-[#121521] w-screen h-screen">
            <Header/>
            <div className="px-6 py-1 grid grid-cols-12 w-full mx-auto gap-8 ">
                <div className="col-span-3 md:col-span-2 hidden lg:block min-w-[260px]"><Sidebar/></div>
                <div className="col-span-12 md:col-span-7  lg:col-span-10 w-full">{children}</div>
            </div>
        </div>
    )
}

export  default ChatLayout;