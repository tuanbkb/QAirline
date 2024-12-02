import logo from "../assets/image/logo.png";
import DropDownMenu from "./DropDownMenu";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [menuType, setMenuType] = useState("");

  const navigate = useNavigate();
  const handleImageClick = () => {
    navigate("/");
  };

  return (
    <>
      <header className="flex justify-between max-w-6xl m-auto pt-4">
        <img
          className="cursor-pointer"
          src={logo}
          onClick={handleImageClick}
        ></img>
        <nav className="text-xl" onMouseEnter={() => setIsMenuOpen(true)}>
          <ul className="flex">
            <li
              className="p-4 hover:text-theme-primary cursor-pointer font-bold"
              onMouseEnter={() => {
                setIsMenuOpen(true);
                setMenuType("explore");
              }}
            >
              <Link to="/explore">Explore</Link>
            </li>
            <li
              className="p-4 hover:text-theme-primary cursor-pointer font-bold"
              onMouseEnter={() => {
                setIsMenuOpen(true);
                setMenuType("info");
              }}
            >
              Info
            </li>
            <li
              className="p-4 hover:text-theme-primary cursor-pointer font-bold"
              onMouseEnter={() => {
                setIsMenuOpen(true);
                setMenuType("contact");
              }}
            >
              <Link to="/news">News & Offers</Link>
            </li>
          </ul>
        </nav>
        <div className="flex items-center">
          <Link
            to="/login"
            className="font-bold hover:text-theme-primary cursor-pointer"
          >
            Login
          </Link>
          <div className="border-theme-onSurface border h-6 m-2"></div>
          <Link
            to="/signup"
            className="font-bold hover:text-theme-primary cursor-pointer"
          >
            Sign Up
          </Link>
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
