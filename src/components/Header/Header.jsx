import logo from "../../assets/image/QAirlineLogoFinal.png";
import DropDownMenu from "./DropDownMenu";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ProfileMenu from "./ProfileMenu";
import { fetchUserData } from "../../api/api";
import VerticalMenu from "./VerticalMenu";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [menuType, setMenuType] = useState("");

  const [isVerticalMenuOpen, setIsVerticalMenuOpen] = useState(false);

  const navigate = useNavigate();
  const handleImageClick = () => {
    navigate("/");
  };

  // const onHoverNavBar = (type) => {
  //   setIsMenuOpen(true);
  //   setMenuType(type);
  //   setIsProfileMenuOpen(false);
  // };

  const [username, setUsername] = useState("");
  const getUserName = async () => {
    if (localStorage.getItem("username") === null) {
      const userData = await fetchUserData();
      setUsername(userData.username);
      localStorage.setItem("username", userData.username);
    } else {
      setUsername(localStorage.getItem("username"));
    }
  };

  useEffect(() => {
    getUserName();
  }, []);

  const [arrowDown, setArrowDown] = useState(true);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);

  return (
    <>
      <header className="flex items-center justify-between max-w-6xl m-auto pt-4 px-2 border-b border-gray-400">
        <div
          className="cursor-pointer h-[2.5rem] flex items-center justify-center"
          onClick={handleImageClick}
        >
          <img className="h-full" src={logo}></img>
        </div>
        <nav
          className="text-xl max-lg:hidden"
          onMouseEnter={() => setIsMenuOpen(true)}
        >
          <ul className="flex">
            <li
              className="p-4 hover:text-theme-primary cursor-pointer"
              onMouseEnter={() => {
                setIsMenuOpen(true);
                setMenuType("explore");
                setIsProfileMenuOpen(false);
              }}
            >
              <Link to="/explore">Explore</Link>
            </li>
            <li
              className="p-4 hover:text-theme-primary cursor-pointer"
              onMouseEnter={() => {
                setIsMenuOpen(true);
                setMenuType("info");
                setIsProfileMenuOpen(false);
              }}
            >
              <Link to="/info">Travel Information</Link>
            </li>
            <li
              className="p-4 hover:text-theme-primary cursor-pointer"
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
        <div className="flex items-center max-lg:hidden">
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
        <div
          className="lg:hidden flex flex-col gap-2 justify-center mr-6 cursor-pointer"
          onClick={() => setIsVerticalMenuOpen(true)}
        >
          <span className="border-2 border-theme-primary w-10"></span>
          <span className="border-2 border-theme-primary w-10"></span>
          <span className="border-2 border-theme-primary w-10"></span>
        </div>
      </header>
      {/* {isMenuOpen && (
        <div onMouseLeave={() => setIsMenuOpen(false)}>
          <DropDownMenu type={menuType} />
        </div>
      )} */}
      {isVerticalMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-10 lg:hidden">
          <VerticalMenu
            setIsVerticalMenuOpen={setIsVerticalMenuOpen}
            username={username}
          />
        </div>
      )}
    </>
  );
}

export default Header;
