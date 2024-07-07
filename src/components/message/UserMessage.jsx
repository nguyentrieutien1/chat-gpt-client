const UserMessage = ({message}) => {
    return (
        <div className="flex items-start gap-3 justify-end max-w-full mx-2 mt-4">
            <p className="p-3 bg-white text-black rounded-lg font-medium break-words text-wrap  w-user-chat">{message}</p>

            <img className="w-12 h-12 object-cover rounded-full"
                 src="https://cdn.mypanel.link/aa7ed1/oqrwz2e9cs8m1cxt.jpg"
                 alt="avatar"/>
        </div>
    )
}

export default UserMessage;
