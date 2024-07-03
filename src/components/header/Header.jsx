import Menu from "./Menu";
import Profile from "./Profile";

const Header = () => {
    return (
        <div className="h-[56px] flex items-center justify-between">
            <div className="flex items-center gap-5 mx-5 ">
                <div className="ml-10 ">
                    <a href="/" className="block text-white text-lg font-medium max-w-[200px] overflow-hidden">
                        <img className="py-1 h-12 w-40 object-cover" src="https://cdn.mypanel.link/aa7ed1/1q9o7rppeius8h1q.png" alt="logo"/>
                    </a>
                </div>
                <ul className="h-full hidden xl:flex  lg:items-center lg:justify-start lg:gap-5  ">
                    <li>
                        <a href="/" className="text-white text-lg font-medium">
                            Dashboard
                        </a>
                    </li>
                    <li>
                        <a href="/" className="text-white text-lg font-medium">
                            Daily Ideas
                        </a>
                    </li>
                    <li>
                        <a href="/" className="text-white text-lg font-medium">
                            AI Generator
                        </a>
                    </li>
                    <li>
                        <a href="/" className="text-white text-lg font-medium">
                            Keyword
                        </a>
                    </li>
                    <li>
                        <a href="/" className="text-white text-lg font-medium">
                            Competitor
                        </a>
                    </li>
                    <li>
                        <a href="/" className="text-[#1263F1] text-lg font-medium">
                            AI Coaches
                        </a>
                    </li>
                    <li>
                        <a href="/"
                           className="bg-gradient-to-r from-[#8876ed] to-[#0e8bff] text-transparent bg-clip-text text-lg font-medium">
                            Upgrade
                        </a>
                    </li>
                </ul>
            </div>
            <div className="flex items-center gap-4">
                <button
                    className="hidden sm:block px-4 py-2 text-white font-medium bg-[#139DFF] hover:bg-[#005CE6] rounded-full transition-all">Download
                    Extension
                </button>

                {/*Profile*/}
                <Profile/>
                {/*Menu*/}
                <Menu/>
            </div>
        </div>
    )
}

export default Header;