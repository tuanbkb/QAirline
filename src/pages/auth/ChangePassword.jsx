import { useState } from "react";
import backgroundImage from "../../assets/image/background.jpg";
import logo from "../../assets/image/QAirlineLogoFinal.png";
import { changePasswordApi } from "../../api/api";
import { useNavigate } from "react-router-dom";

function ChangePassword() {
    const navigate = useNavigate();
    const [oldPassword, setOldPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [oldPasswordError, setOldPasswordError] = useState("");
    const [newPasswordError, setNewPasswordError] = useState("");
    const [confirmPasswordError, setConfirmPasswordError] = useState("");

    const [changePasswordError, setChangePasswordError] = useState("");

    const [changed, setChanged] = useState(false);
    const handleChangePasswordButtonClicked = async () => {
        setOldPasswordError("");
        setNewPasswordError("");
        setConfirmPasswordError("");
        setChangePasswordError("");
        let error = false;

        if (oldPassword.trim() === "") {
            setOldPasswordError("Old password can't be blank");
            error = true;
        }
        if (newPassword.trim() === "") {
            setNewPasswordError("New password can't be blank");
            error = true;
        }
        if (confirmPassword.trim() === "") {
            setConfirmPasswordError("Confirm password can't be blank");
            error = true;
        } else if (newPassword !== confirmPassword) {
            setConfirmPasswordError("Password doesn't match");
            error = true;
        }

        if (error) {
            return;
        }

        try {
            const response = await changePasswordApi({
                oldPassword: oldPassword,
                newPassword: newPassword,
            });
            console.log(response);
            setChanged(true);
        } catch (error) {
            setChangePasswordError("Your old password is incorrect!");
        }
    };

    const handleBackToLoginClicked = () => {
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
        localStorage.removeItem("username");
        window.location.reload();
    };

    return (
        <>
            <div
                className="flex items-center justify-center w-screen h-screen bg-cover bg-center"
                style={{ backgroundImage: `url(${backgroundImage})` }}
            >
                <div className="p-8 flex flex-col drop-shadow-xl max-w-max h-max bg-white rounded-xl">
                    <div className="pb-8 w-full">
                        <img
                            className="m-auto h-[4rem]"
                            src={logo}
                            // onClick={handleImageClick}
                        ></img>
                    </div>
                    {!changed ? (
                        <>
                            <h2 className="pb-4 text-center text-3xl font-bold">
                                Change Password
                            </h2>
                            <div className="py-2 flex flex-col">
                                <div className="py-2">Old Password</div>
                                <input
                                    className="p-2 w-96 border-solid border-gray-500 border rounded-lg"
                                    type="password"
                                    placeholder="Enter your old password"
                                    value={oldPassword}
                                    onChange={(e) =>
                                        setOldPassword(e.target.value)
                                    }
                                ></input>
                            </div>
                            <span className="text-theme-error">
                                {oldPasswordError}
                            </span>
                            <div className="py-2 flex flex-col">
                                <div className="py-2">New Password</div>
                                <input
                                    className="p-2 w-96 border-solid border-gray-500 border rounded-lg"
                                    type="password"
                                    placeholder="Enter your new password"
                                    value={newPassword}
                                    onChange={(e) =>
                                        setNewPassword(e.target.value)
                                    }
                                ></input>
                            </div>
                            <span className="text-theme-error">
                                {newPasswordError}
                            </span>
                            <div className="py-2 flex flex-col">
                                <div className="py-2">Confirm Password</div>
                                <input
                                    className="p-2 w-96 border-solid border-gray-500 border rounded-lg"
                                    type="password"
                                    placeholder="Confirm your new password"
                                    value={confirmPassword}
                                    onChange={(e) =>
                                        setConfirmPassword(e.target.value)
                                    }
                                ></input>
                            </div>
                            <span className="text-theme-error">
                                {confirmPasswordError}
                            </span>
                            {/* <div className="flex py-6">
                                <div className="grow"></div>
                                <Link
                                    className="text-theme-primary italic underline hover:text-theme-tertiary"
                                    to="/forgotpassword"
                                >
                                    Forget your password?
                                </Link>
                            </div> */}
                            <button
                                className="bg-theme-primary text-theme-onPrimary font-bold text-center w-96 p-4 rounded-lg my-2"
                                onClick={handleChangePasswordButtonClicked}
                            >
                                Change Password
                            </button>
                            <div className="text-theme-error w-full text-center">
                                {changePasswordError}
                            </div>
                        </>
                    ) : (
                        <>
                            <div className="flex flex-col">
                                <h3 className="">
                                    Password changed successfully!
                                </h3>
                                <div className="">
                                    <button
                                        className="bg-theme-primary text-theme-onPrimary font-bold text-center w-96 p-4 rounded-lg my-2"
                                        onClick={() => {
                                            handleBackToLoginClicked();
                                        }}
                                    >
                                        Go back to login
                                    </button>
                                </div>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </>
    );
}

export default ChangePassword;
