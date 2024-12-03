import { Link } from "react-router-dom";

function ProfileMenu() {
    const handleProfileClicked = () => {};
    const handleSignOutClicked = () => {
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
        window.location.reload();
    };

    return (
        <div className="absolute right-0 rounded-xl w-40 border-2">
            <div className="p-2 font-bold hover:bg-theme-primaryContainer hover:cursor-pointer" onClick={handleProfileClicked}>Profile</div>
            <div className="p-2 font-bold hover:bg-theme-primaryContainer hover:cursor-pointer" onClick={handleSignOutClicked}>Sign Out</div>
        </div>
    );
}

export default ProfileMenu;
