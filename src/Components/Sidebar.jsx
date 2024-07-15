import { FaRegClock } from "react-icons/fa";
import { FiThumbsUp } from "react-icons/fi";
import { GoHome } from "react-icons/go";
import { MdHistory, MdOutlinePlaylistPlay, MdOutlineSubscriptions } from "react-icons/md";
import { RiVideoLine } from "react-icons/ri";
import { SiYoutubeshorts } from "react-icons/si";

const Sidebar = () => {

    const mainElements = [
        {
            icon: GoHome,
            desc: 'Home'
        },
        {
            icon: MdOutlineSubscriptions,
            desc: 'Subscriptions'
        },
        {
            icon: SiYoutubeshorts,
            desc: 'Shorts'
        }
    ]
    const otherElements = [
        {
            icon: MdHistory,
            desc: 'History'
        },
        {
            icon: MdOutlinePlaylistPlay,
            desc: 'Playlist'
        },
        {
            icon: RiVideoLine,
            desc: 'Your Videos'
        },
        {
            icon: FaRegClock,
            desc: 'Watch Later'
        },
        {
            icon: FiThumbsUp,
            desc: 'Liked Videos'
        }
    ]
    return (
        <div className="bg-black w-[15rem] text-white h-screen ">
            <div className="py-3">
                <ul className="p-3">
                    {mainElements.map(({ icon: Icon, desc }) => {
                        return (
                            <a href="." key={desc}>
                                <li key={desc} className="flex flex-row items-center rounded-lg hover:bg-zinc-700">
                                    <Icon className="text-2xl mx-4" />
                                    <span className="m-2">{desc}</span>
                                </li>
                            </a>
                        )
                    })}
                </ul>
            </div>
            <hr className="w-[80%] mx-auto" />
            <div className="py-3">
                <span className="text-xl mx-4 font-bold">You &gt;</span>
                <ul className="p-3">
                    {otherElements.map(({ icon: Icon, desc }) => {
                        return (
                            <a href="." key={desc}><li key={desc} className="flex flex-row items-center rounded-lg hover:bg-zinc-700">
                                <Icon className="text-2xl mx-4" />
                                <span className="m-2">{desc}</span>
                            </li></a>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}

export default Sidebar;