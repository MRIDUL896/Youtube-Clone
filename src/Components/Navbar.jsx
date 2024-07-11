import { GiHamburgerMenu } from "react-icons/gi";
import { FaRegBell, FaRegCircle, FaYoutube } from "react-icons/fa6";
import { FaMicrophone } from "react-icons/fa";
import { PiVideoCameraBold } from "react-icons/pi";

const Navbar = () => {
    return (
        <div className="flex flex-row justify-between items-center bg-black w-screen">
            <div className="flex flex-row text-white items-center justify-between">
                <a href=".">
                    <div className="p-4 text-2xl hover:bg-zinc-700 hover:rounded-full ">
                        <GiHamburgerMenu />
                    </div>
                </a>
                <a href="https://www.youtube.com/">
                    <div className="flex flex-row items-center justify-between">
                        <div className="p-1 text-3xl text-red-600 bg-black"><FaYoutube /> </div>
                        <span className="text-xl font-bold">Youtube</span>
                    </div>
                </a>
            </div>
            <div className="flex flex-row text-white items-center">
                <div className="flex flex-row text-white">
                    <form action="search">
                        <input type="text" placeholder="Search" className="h-10 w-[40rem] p-3 m-3 rounded-r-full rounded-l-full border-2 bg-inherit " />
                    </form>
                </div>
                <a href="."><div className="p-4 text-base bg-zinc-800 rounded-full hover:bg-zinc-700 hover:rounded-full">
                    <FaMicrophone />
                </div></a>
            </div>
            <div className="flex flex-row text-white">
                <a href="."><div className="p-4 text-xl hover:bg-zinc-700 hover:rounded-full"><PiVideoCameraBold /></div></a>
                <a href="."><div className="p-4 text-xl hover:bg-zinc-700 hover:rounded-full"><FaRegBell /></div></a>
                <a href="."><div className="p-4 text-xl hover:bg-zinc-700 hover:rounded-full"><FaRegCircle /></div></a>
            </div>
        </div>
    )
}

export default Navbar;