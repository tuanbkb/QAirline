import { fetchUserData } from "../api/api";
import logo from "../assets/image/logo.png";
import DropDownMenu from "./DropDownMenu";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ProfileMenu from "./ProfileMenu";

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [menuType, setMenuType] = useState("");

    const navigate = useNavigate();
    const handleImageClick = () => {
        navigate("/");
    };

    const onHoverNavBar = (type) => {
        setIsMenuOpen(true);
        setMenuType(type);
        setIsProfileMenuOpen(false);
    }

    const [username, setUsername] = useState("");
    const getUserName = async () => {
        const userData = await fetchUserData();
        setUsername(userData.username);
    };

    useEffect(() => {
        getUserName();
    }, []);

    const [arrowDown, setArrowDown] = useState(true);
    const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);

    // const handleUsernameClicked = () => {
    //     setArrowDown(!arrowDown);
    //     setIsProfileMenuOpen(!isProfileMenuOpen);
    // };

    return (
        <>
            <header className="flex justify-between max-w-6xl m-auto pt-4">
                <img
                    className="cursor-pointer"
                    src={logo}
                    onClick={handleImageClick}
                ></img>
                <nav
                    className="text-xl"
                    onMouseEnter={() => setIsMenuOpen(true)}
                >
                    <ul className="flex">
                        <li
                            className="p-4 hover:text-theme-primary cursor-pointer font-bold"
                            onMouseEnter={() => {
                                setIsMenuOpen(true);
                                setMenuType("explore");
                                setIsProfileMenuOpen(false);
                            }}
                        >
                            <Link to="/explore">Explore</Link>
                        </li>
                        <li
                            className="p-4 hover:text-theme-primary cursor-pointer font-bold"
                            onMouseEnter={() => {
                                setIsMenuOpen(true);
                                setMenuType("info");
                                setIsProfileMenuOpen(false);
                            }}
                        >
                            Info
                        </li>
                        <li
                            className="p-4 hover:text-theme-primary cursor-pointer font-bold"
                            onMouseEnter={() => {
                                setIsMenuOpen(true);
                                setMenuType("contact");
                                setIsProfileMenuOpen(false);
                            }}
                        >
                            <Link to="/news">News & Offers</Link>
                        </li>
                    </ul>
                </nav>
                <div className="flex items-center">
                    <h3 className="relative">
                        Welcome,{" "}
                        <strong
                            className="hover:cursor-pointer"
                            onMouseEnter={() => {
                                setArrowDown(false);
                                setIsProfileMenuOpen(true);
                                setIsMenuOpen(false);
                            }}
                        >
                            {username}{" "}
                            <span className="text-xs">
                                {arrowDown ? <>&#9660;</> : <>&#9650;</>}
                            </span>
                        </strong>
                        {isProfileMenuOpen && (
                            <div
                                onMouseLeave={() => {
                                    setIsProfileMenuOpen(false);
                                    setArrowDown(true);
                                }}
                            >
                                <ProfileMenu />
                            </div>
                        )}
                    </h3>
                </div>
            </header>
            {isMenuOpen && (
                <div onMouseLeave={() => setIsMenuOpen(false)}>
                    <DropDownMenu type={menuType} />
                </div>
            )}
        </>
    );
}

export default Header;
