import ItemHistory from "./ItemHistory";

const GroupItemHistory = ({name}) => {
    return (
        <div>
            <p className="text-sm font-normal text-gray-400 py-2 capitalize">{name}</p>
            {/*    item history*/}

            <div className="flex flex-col gap-5">
                <ItemHistory/>
                <ItemHistory/>
                <ItemHistory/>
            </div>

        </div>
    )
}

export default GroupItemHistory;