import { useState } from "react";
import localStorageHelper from "../../helpers/localStorageHelper";

const UserMessage = ({message}) => {
    const [avatar, setAvatar] = useState(localStorageHelper.localStorageHelper.getItem("avatar") || "https://cdn.mypanel.link/aa7ed1/di7qklstwrlrl9c4.jpg" )
    console.log(avatar);
    const handleSetAvatar = () => {
        if(avatar === "https://cdn.mypanel.link/aa7ed1/di7qklstwrlrl9c4.jpg") {
            setAvatar("https://cdn.mypanel.link/aa7ed1/oqrwz2e9cs8m1cxt.jpg")
            localStorageHelper.localStorageHelper.setItem("avatar", "https://cdn.mypanel.link/aa7ed1/oqrwz2e9cs8m1cxt.jpg")
        }
        else {
            setAvatar("https://cdn.mypanel.link/aa7ed1/di7qklstwrlrl9c4.jpg")
            localStorageHelper.localStorageHelper.setItem("avatar", "https://cdn.mypanel.link/aa7ed1/di7qklstwrlrl9c4.jpg")
        }

        
    }
    return (
        <div
        
        onClick={handleSetAvatar}
        className="flex items-start gap-3 justify-end max-w-full mx-2 mt-4 hover:cursor-pointer">
            
            <p className="p-3 bg-white text-black rounded-lg font-medium break-words text-wrap  w-user-chat">{message}</p>

            <img className="w-12 h-12 object-cover rounded-full"
                 src={avatar}
                 alt="avatar"/>
        </div>
    )
}

export default UserMessage;
