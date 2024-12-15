import React, { useState } from "react";
import backgroundImage from "../../assets/image/background.jpg";
import logo from "../../assets/image/QAirlineLogoFinal.png";
import { Link, useNavigate } from "react-router-dom";
import { signUpApi } from "../../api/api";
import Loading from "../../components/Loading";

function SignUp() {
    const navigate = useNavigate();
    // const handleImageClick = () => {
    //     navigate("/");
    // };

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [usernameError, setUsernameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [confirmPasswordError, setConfirmPasswordError] = useState("");

    const [isClicked, setIsClicked] = useState(false);
    const [isSucceed, setIsSucceed] = useState(true);
    const [isLoading, setIsLoading] = useState(false);

    const handleSignUpButtonClicked = async () => {
        setUsernameError("");
        setEmailError("");
        setPasswordError("");
        setConfirmPasswordError("");
        let error = false;

        if (username.trim() === "" || email.trim() === "" || password.trim() === "") {
            setUsernameError(username.trim() === "" ? "Username can't be blank" : "");
            setEmailError(email.trim() === "" ? "Email can't be blank" : "");
            setPasswordError(
                password.trim() === "" ? "Password can't be blank" : ""
            );
            error = true;
        }

        if (password !== confirmPassword) {
            setConfirmPasswordError("Passwords don't match");
            error = false;
        }

        if (error) {
            return;
        }

        setIsLoading(true);
        //TODO: Sign up user
        try {
            const result = await signUpApi(username, password, email);
            console.log("Signed up");
            setIsClicked(true);
            setIsSucceed(true);
        } catch {
            console.log("Error signing up");
            setIsClicked(true);
            setIsSucceed(false);
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <>
            <div
                className="flex items-center justify-center w-screen h-screen bg-cover bg-center"
                style={{ backgroundImage: `url(${backgroundImage})` }}
            >
                {isLoading && <Loading />}
                <div className="flex flex-col p-8 drop-shadow-xl max-w-max h-max bg-white rounded-xl">
                    <div className="pb-8 w-full">
                        <img
                            className="m-auto h-[4rem]"
                            src={logo}
                        // onClick={handleImageClick}
                        ></img>
                    </div>
                    {!isClicked ? <>
                        <h2 className="pb-4 text-center text-3xl font-bold">
                            Sign Up
                        </h2>
                        <div className="py-2 flex flex-col">
                            <div className="py-2">Username</div>
                            <input
                                className="p-2 w-96 border-solid border-gray-500 border rounded-lg"
                                type="text"
                                placeholder="Enter your name"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            ></input>
                        </div>
                        <span className="text-theme-error">{usernameError}</span>
                        <div className="py-2 flex flex-col">
                            <div className="py-2">Email</div>
                            <input
                                className="p-2 w-96 border-solid border-gray-500 border rounded-lg"
                                type="text"
                                placeholder="Enter your email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            ></input>
                        </div>
                        <span className="text-theme-error">{emailError}</span>
                        <div className="py-2 flex flex-col">
                            <div className="py-2">Password</div>
                            <input
                                className="p-2 w-96 border-solid border-gray-500 border rounded-lg"
                                type="password"
                                placeholder="Enter your password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            ></input>
                        </div>
                        <span className="text-theme-error">{passwordError}</span>
                        <div className="py-2 flex flex-col">
                            <div className="py-2">Confirm Password</div>
                            <input
                                className="p-2 w-96 border-solid border-gray-500 border rounded-lg"
                                type="password"
                                placeholder="Confirm your password"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                            ></input>
                        </div>
                        <span className="text-theme-error">
                            {confirmPasswordError}
                        </span>
                        <button
                            className="bg-theme-primary text-theme-onPrimary font-bold text-center w-96 p-4 rounded-lg my-2"
                            onClick={handleSignUpButtonClicked}
                        >
                            Sign Up
                        </button>
                        <div className="my-4 text-center">
                            Already have an account?{" "}
                            <Link
                                className="underline italic text-theme-primary"
                                to="/login"
                            >
                                Login here
                            </Link>
                        </div>
                    </> : <>
                        {isSucceed ? <>
                            <div className="flex flex-col items-center">
                                <h1 className="text-theme-primary text-2xl font-bold">
                                    Sign Up Succeed
                                </h1>
                                <p className="text-wrap my-4">
                                    Your have successfully signed up.
                                </p>
                                <div className="flex mt-4">
                                    <div className="grow"></div>
                                    <button
                                        className="bg-theme-primary rounded-xl text-white font-bold hover:bg-theme-onSecondaryFixed p-2"
                                        onClick={() => navigate("/login")}
                                    >
                                        Return to Login Screen
                                    </button>
                                </div>
                            </div>
                        </> : <>
                            <div className="flex flex-col items-center">
                                <h1 className="text-theme-error text-2xl font-bold">
                                    Sign Up Failed
                                </h1>
                                <p className="text-wrap my-4">
                                    Your sign up failed. Please try again.
                                </p>
                                <div className="flex mt-4">
                                    <div className="grow"></div>
                                    <button
                                        className="bg-theme-primary rounded-xl text-white font-bold hover:bg-theme-onSecondaryFixed p-2"
                                        onClick={() => navigate("/signup")}
                                    >
                                        Return to Sign Up Screen
                                    </button>
                                </div>
                            </div>
                        </>}
                    </>}
                </div>
            </div>
        </>
    );
}

export default SignUp;
