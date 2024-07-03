const UserMessage = ({message}) => {
    return (
        <div className="flex items-start gap-3 justify-end max-w-full mx-2 mt-4">
            <p className="p-3 bg-white text-black rounded-lg font-medium break-words text-wrap  w-user-chat">{message}</p>

            <img className="w-12 h-12 object-cover rounded-full"
                 src="https://static.vecteezy.com/system/resources/thumbnails/002/128/968/small_2x/phoenix-esports-logo-design-vector.jpg"
                 alt="avatar"/>
        </div>
    )
}

export default UserMessage;