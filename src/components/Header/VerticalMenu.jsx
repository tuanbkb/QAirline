import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

function VerticalMenu({ setIsVerticalMenuOpen, username }) {
    const [exploreSubMenu, setExploreSubMenu] = useState(false);
    const [infoSubMenu, setInfoSubMenu] = useState(false);
    const [newsSubMenu, setNewsSubMenu] = useState(false);
    const [isExploreArrowDown, setIsExploreArrowDown] = useState(true);
    const [isInfoArrowDown, setIsInfoArrowDown] = useState(true);
    const [isNewsArrowDown, setIsNewsArrowDown] = useState(true);

    const [profileSubMenu, setProfileSubMenu] = useState(false);
    const [isProfileArrowDown, setIsProfileArrowDown] = useState(true);

    const navigate = useNavigate();
    const handleBookingHistoryClicked = () => {
        setIsVerticalMenuOpen(false);
        navigate("/bookinghistory");
    };
    const handleProfileClicked = () => {
        setIsVerticalMenuOpen(false);
        navigate("/profile");
    };
    const handleSignOutClicked = () => {
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
        localStorage.removeItem("username");
        window.location.reload();
    };

    return (
        <motion.div
            initial={{ x: 300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 300, opacity: 0 }}
            className={`flex flex-col fixed top-0 right-0 h-full shadow-md bg-white w-96`}
        >
            <div className="flex justify-end">
                <button
                    className="p-2 text-4xl"
                    onClick={() => setIsVerticalMenuOpen(false)}
                >
                    &times;
                </button>
            </div>
            <ul className="p-4 grow overflow-scroll">
                <li
                    className="flex mb-2 border-b-2 py-4"
                    onClick={() => {
                        setIsExploreArrowDown(!isExploreArrowDown);
                        setExploreSubMenu(!exploreSubMenu);
                    }}
                >
                    <Link
                        to="/explore"
                        className="text-theme-primary font-bold cursor-pointer text-2xl"
                        onClick={() => setIsVerticalMenuOpen(false)}
                    >
                        Explore
                    </Link>
                    <div className="grow"></div>
                    <span className="text-theme-primary">
                        {isExploreArrowDown ? <>&#9660;</> : <>&#9650;</>}
                    </span>
                </li>
                {exploreSubMenu && (
                    <motion.div
                        initial={{ y: -20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -20, opacity: 0 }}
                    >
                        <div className="flex flex-col mb-4">
                            <h2 className="font-bold">Destination</h2>
                            <a
                                className="py-2 hover:underline"
                                href="/explore/0"
                            >
                                Ha Noi
                            </a>
                            <a
                                className="py-2 hover:underline"
                                href="/explore/1"
                            >
                                Ho Chi Minh City
                            </a>
                            <a
                                className="py-2 hover:underline"
                                href="/explore/2"
                            >
                                Ha Long Bay
                            </a>
                            <a
                                className="py-2 hover:underline"
                                href="/explore/3"
                            >
                                Hoi An
                            </a>
                            <a
                                className="py-2 hover:underline"
                                href="/explore/11"
                            >
                                Hue
                            </a>
                        </div>
                        <div className="flex flex-col">
                            <h2 className="font-bold">Flight</h2>
                            <a className="py-2 hover:underline" href="">
                                Info
                            </a>
                            <a className="py-2 hover:underline" href="">
                                Info
                            </a>
                            <a className="py-2 hover:underline" href="">
                                Info
                            </a>
                            <a className="py-2 hover:underline" href="">
                                Info
                            </a>
                            <a className="py-2 hover:underline" href="">
                                Info
                            </a>
                        </div>
                    </motion.div>
                )}
                <li
                    className="flex mb-2 border-b-2 py-4"
                    onClick={() => {
                        setIsInfoArrowDown(!isInfoArrowDown);
                        setInfoSubMenu(!infoSubMenu);
                    }}
                >
                    <Link
                        to="/info"
                        className="text-theme-primary font-bold cursor-pointer text-2xl"
                        onClick={() => setIsVerticalMenuOpen(false)}
                    >
                        Travel Information
                    </Link>
                    <div className="grow"></div>
                    <span className="text-theme-primary">
                        {isInfoArrowDown ? <>&#9660;</> : <>&#9650;</>}
                    </span>
                </li>
                {infoSubMenu && (
                    <motion.div
                        initial={{ y: -20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -20, opacity: 0 }}
                    >
                        <div className="flex flex-col mb-4">
                            <h2 className="font-bold">Special Services</h2>
                            <a className="py-2 hover:underline" href="">
                                Info
                            </a>
                            <a className="py-2 hover:underline" href="">
                                Info
                            </a>
                            <a className="py-2 hover:underline" href="">
                                Info
                            </a>
                            <a className="py-2 hover:underline" href="">
                                Info
                            </a>
                            <a className="py-2 hover:underline" href="">
                                Info
                            </a>
                        </div>
                        <div className="flex flex-col">
                            <h2 className="font-bold">Procedure Guide</h2>
                            <a className="py-2 hover:underline" href="">
                                Info
                            </a>
                            <a className="py-2 hover:underline" href="">
                                Info
                            </a>
                            <a className="py-2 hover:underline" href="">
                                Info
                            </a>
                            <a className="py-2 hover:underline" href="">
                                Info
                            </a>
                            <a className="py-2 hover:underline" href="">
                                Info
                            </a>
                        </div>
                    </motion.div>
                )}
                <li
                    className="flex mb-2 border-b-2 py-4"
                    onClick={() => {
                        setIsNewsArrowDown(!isNewsArrowDown);
                        setNewsSubMenu(!newsSubMenu);
                    }}
                >
                    <Link
                        to="/news"
                        className="text-theme-primary font-bold cursor-pointer text-2xl"
                        onClick={() => setIsVerticalMenuOpen(false)}
                    >
                        News & Offers
                    </Link>
                    <div className="grow"></div>
                    <span className="text-theme-primary">
                        {isNewsArrowDown ? <>&#9660;</> : <>&#9650;</>}
                    </span>
                </li>
                {newsSubMenu && (
                    <motion.div
                        initial={{ y: -20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -20, opacity: 0 }}
                    >
                        <div className="flex flex-col mb-4">
                            <h2 className="font-bold">News</h2>
                            <a className="py-2 hover:underline" href="">
                                News
                            </a>
                            <a className="py-2 hover:underline" href="">
                                News
                            </a>
                            <a className="py-2 hover:underline" href="">
                                News
                            </a>
                            <a className="py-2 hover:underline" href="">
                                News
                            </a>
                            <a className="py-2 hover:underline" href="">
                                News
                            </a>
                        </div>
                        <div className="flex flex-col">
                            <h2 className="font-bold">Offers</h2>
                            <a className="py-2 hover:underline" href="">
                                Offer
                            </a>
                            <a className="py-2 hover:underline" href="">
                                Offer
                            </a>
                            <a className="py-2 hover:underline" href="">
                                Offer
                            </a>
                            <a className="py-2 hover:underline" href="">
                                Offer
                            </a>
                            <a className="py-2 hover:underline" href="">
                                Offer
                            </a>
                        </div>
                    </motion.div>
                )}
            </ul>
            <div className="p-4 bg-gray-300">
                <div
                    className="flex py-2 border-b-2 border-black"
                    onClick={() => {
                        setProfileSubMenu(!profileSubMenu);
                        setIsProfileArrowDown(!isProfileArrowDown);
                    }}
                >
                    <h3 className="text-xl grow">
                        Welcome, <strong>{username}</strong>
                    </h3>
                    <span className="">
                        {isProfileArrowDown ? <>&#9660;</> : <>&#9650;</>}
                    </span>
                </div>
                {profileSubMenu && (
                    <motion.div
                        initial={{ y: -20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -20, opacity: 0 }}
                        className="mt-2"
                    >
                        <ul className="text-xl">
                            <li
                                className="font-bold p-2 cursor-pointer hover:bg-slate-200"
                                onClick={handleBookingHistoryClicked}
                            >
                                Booking History
                            </li>
                            <li
                                className="font-bold p-2 cursor-pointer hover:bg-slate-200"
                                onClick={handleProfileClicked}
                            >
                                Profile
                            </li>
                            <li
                                className="font-bold p-2 cursor-pointer hover:bg-slate-200"
                                onClick={handleSignOutClicked}
                            >
                                Sign Out
                            </li>
                        </ul>
                    </motion.div>
                )}
            </div>
        </motion.div>
    );
}
export default VerticalMenu;
