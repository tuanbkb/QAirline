import { useState } from "react";
import backgroundImage from "../../assets/image/background.jpg";
import logo from "../../assets/image/QAirlineLogoFinal.png";
import { Link, useNavigate } from "react-router-dom";
import { loginApi } from "../../api/api";

function Login() {
    const navigate = useNavigate();
    // const handleImageClick = () => {
    //   navigate("/");
    // };

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [loginError, setLoginError] = useState("");

    // TODO: Implement this motherfucker
    const handleLoginButtonClicked = async (e) => {
        setEmailError("");
        setPasswordError("");
        setLoginError("");

        if (email.trim() === "" || password.trim() === "") {
            setEmailError(email.trim() === "" ? "Email can't be blank" : "");
            setPasswordError(
                password.trim() === "" ? "Password can't be blank" : ""
            );
            return;
        }

        // TODO: Login user
        // setLoginError("No user. Are you dumb?");
        try {
            const { results } = await loginApi(email, password);
            console.log("Logged in");
            console.log(`access token: ${results.jwtToken}`);
            localStorage.setItem("accessToken", results.jwtToken);
            localStorage.setItem("refreshToken", results.refreshToken);
            navigate("/");
        } catch (e) {
            console.log("Error: " + e);
            setLoginError("Invalid user!");
        }
    };

    return (
        <>
            <div
                className="flex items-center justify-center w-screen h-screen bg-cover bg-center"
                style={{ backgroundImage: `url(${backgroundImage})` }}
            >
                <div className="p-8 drop-shadow-xl max-w-max h-max bg-white rounded-xl">
                    <div className="pb-8 w-full">
                        <img
                            className="m-auto cursor-pointer h-[4rem]"
                            src={logo}
                            // onClick={handleImageClick}
                        ></img>
                    </div>
                    <h2 className="pb-4 text-center text-3xl font-bold">
                        Login
                    </h2>
                    <div className="py-2 flex flex-col">
                        <div className="py-2">Username or Email</div>
                        <input
                            className="p-2 w-96 border-solid border-gray-500 border rounded-lg"
                            type="text"
                            placeholder="Enter your username/email"
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
                    <div className="flex py-6">
                        <div className="grow"></div>
                        <Link
                            className="text-theme-primary italic underline hover:text-theme-tertiary"
                            to="/forgotpassword"
                        >
                            Forget your password?
                        </Link>
                    </div>
                    <button
                        className="bg-theme-primary text-theme-onPrimary font-bold text-center w-96 p-4 rounded-lg my-2"
                        onClick={handleLoginButtonClicked}
                    >
                        Login
                    </button>
                    <div className="text-theme-error w-full text-center">
                        {loginError}
                    </div>
                    <div className="my-4 text-center">
                        Don't have an account?{" "}
                        <Link
                            className="underline italic text-theme-primary"
                            to="/signup"
                        >
                            Sign up here
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Login;
