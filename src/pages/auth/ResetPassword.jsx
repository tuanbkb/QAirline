import { useNavigate } from "react-router-dom";
import backgroundImage from "../../assets/image/background.jpg";
import logo from "../../assets/image/logo.png";
import { useState } from "react";

function ResetPassword() {
    const navigate = useNavigate();
    const handleImageClick = () => {
        navigate("/");
    };

    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [newPasswordError, setNewPasswordError] = useState("");
    const [confirmPasswordError, setConfirmPasswordError] = useState("");

    const [isClicked, setIsClicked] = useState(false);
    const [isSucceed, setIsSucceed] = useState(true);

    const handleResetButtonClick = () => {
        setNewPasswordError("");
        setConfirmPasswordError("");

        if (newPassword.trim() === "" || confirmPassword.trim() === "") {
            setNewPasswordError(
                newPassword.trim() === "" ? "Password can't be blank" : ""
            );
            setConfirmPasswordError(
                confirmPassword.trim() === ""
                    ? "Confirm Password can't be blank"
                    : ""
            );
            return;
        }

        if (newPassword !== confirmPassword) {
            setConfirmPasswordError("Password doesn't match");
            return;
        }

        setIsClicked(true);
        //RESET PASSWORD
        setIsSucceed(true);
    };

    const handleReturnToLoginButtonClick = () => {
        navigate("/login");
    }

    return (
        <>
            <div
                className="flex items-center justify-center w-screen h-screen bg-cover bg-center"
                style={{ backgroundImage: `url(${backgroundImage})` }}
            >
                <div className="p-8 drop-shadow-xl max-w-max h-max bg-white rounded-xl flex flex-col">
                    <div className="pb-8 w-full">
                        <img
                            className="m-auto cursor-pointer"
                            src={logo}
                            // onClick={handleImageClick}
                        ></img>
                    </div>
                    {!isClicked ? (
                        <>
                            <h2 className="pb-4 text-center text-3xl font-bold">
                                Reset Password
                            </h2>
                            <div className="py-2 flex flex-col">
                                <div className="py-2">New Password</div>
                                <input
                                    className="p-2 w-96 border-solid border-gray-500 border rounded-lg"
                                    type="text"
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
                                <div className="py-2">Confirm new Password</div>
                                <input
                                    className="p-2 w-96 border-solid border-gray-500 border rounded-lg"
                                    type="password"
                                    placeholder="Enter your password"
                                    value={confirmPassword}
                                    onChange={(e) =>
                                        setConfirmPassword(e.target.value)
                                    }
                                ></input>
                            </div>
                            <span className="text-theme-error">
                                {confirmPasswordError}
                            </span>
                            <div className="h-6"></div>
                            <button
                                className="bg-theme-primary text-theme-onPrimary font-bold text-center w-96 p-4 rounded-lg my-2"
                                onClick={handleResetButtonClick}
                            >
                                Reset your password
                            </button>
                        </>
                    ) : (
                        <>
                            {isSucceed ? (
                                <div className="flex flex-col items-center">
                                    <h1 className="text-theme-primary text-2xl font-bold">
                                        Reset Password Succeed
                                    </h1>
                                    <p className="text-wrap my-4">
                                        Your password has been successfully
                                        reset.
                                    </p>
                                    <div className="flex mt-4">
                                        <div className="grow"></div>
                                        <button
                                            className="bg-theme-primary rounded-xl text-white font-bold hover:bg-theme-onSecondaryFixed p-2"
                                            onClick={handleReturnToLoginButtonClick}
                                        >
                                            Return to Login Screen
                                        </button>
                                    </div>
                                </div>
                            ) : (
                                <div className="flex flex-col items-center">
                                    <h1 className="text-theme-error text-2xl font-bold">
                                        Reset Password Failed
                                    </h1>
                                    <p className="text-wrap my-4">
                                        Reset password failed. Please try again
                                        later.
                                    </p>
                                    <div className="flex mt-4">
                                        <div className="grow"></div>
                                        <button
                                            className="bg-theme-primary rounded-xl text-white font-bold hover:bg-theme-onSecondaryFixed p-2"
                                            onClick={handleReturnToLoginButtonClick}
                                        >
                                            Return to Login Screen
                                        </button>
                                    </div>
                                </div>
                            )}
                        </>
                    )}
                </div>
            </div>
        </>
    );
}

export default ResetPassword;
