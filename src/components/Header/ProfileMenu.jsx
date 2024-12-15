import { Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

function ProfileMenu() {
    const navigate = useNavigate();
    const handleBookingHistoryClicked = () => {
        navigate("/bookinghistory");
    };
    const handleProfileClicked = () => {
        navigate("/profile");
    };
    const handleChangePasswordClicked = () => {
        navigate("/changepassword");
    };
    const handleSignOutClicked = () => {
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
        localStorage.removeItem("username");
        window.location.reload();
    };

    return (
        <AnimatePresence>
            <motion.div
                className="absolute right-0 rounded-xl w-40 border-2 bg-white z-10"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.2 }}
            >
                <div
                    className="p-2 font-bold hover:bg-theme-primaryContainer hover:cursor-pointer"
                    onClick={handleBookingHistoryClicked}
                >
                    Booking History
                </div>
                <div
                    className="p-2 font-bold hover:bg-theme-primaryContainer hover:cursor-pointer"
                    onClick={handleProfileClicked}
                >
                    Profile
                </div>
                <div
                    className="p-2 font-bold hover:bg-theme-primaryContainer hover:cursor-pointer"
                    onClick={handleChangePasswordClicked}
                >
                    Change Password
                </div>
                <div
                    className="p-2 font-bold hover:bg-theme-primaryContainer hover:cursor-pointer"
                    onClick={handleSignOutClicked}
                >
                    Sign Out
                </div>
            </motion.div>
        </AnimatePresence>
    );
}

export default ProfileMenu;
