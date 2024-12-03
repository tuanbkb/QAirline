import { useNavigate, Link } from "react-router-dom";
import backgroundImage from "../../assets/image/background.jpg";
import logo from "../../assets/image/logo.png";
import { useState } from "react";

function ForgotPassword() {
    const navigate = useNavigate();

    const [submitted, setSubmitted] = useState(false);

    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");
    function handleSubmitButtonClicked() {
        setEmailError("");
        if (email.trim() === "") {
            setEmailError("Email can't be blank");
            return;
        }

        //TODO: Implement
        setSubmitted(true);

    }

    return (
        <>
            <div
                className="flex items-center justify-center w-screen h-screen bg-cover bg-center"
                style={{ backgroundImage: `url(${backgroundImage})` }}
            >
                <div className="p-8 drop-shadow-xl max-w-max h-max bg-white rounded-xl">
                    <div className="pb-8 w-full">
                        <img
                            className="m-auto cursor-pointer"
                            src={logo}
                            // onClick={() => navigate("/")}
                        ></img>
                    </div>
                    {!submitted ? (<>
                    <h2 className="pb-4 text-center text-3xl font-bold">
                        Forgot your Password?
                    </h2>
                    <p className="text-center italic">
                        Please enter your registered account's email
                    </p>
                    <div className="py-2 flex flex-col">
                        <div className="py-2">Registered email</div>
                        <input
                            className="p-2 w-96 border-solid border-gray-500 border rounded-lg"
                            type="text"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        ></input>
                        <span className="text-theme-error py-2">{emailError}</span>
                    </div>
                    <button
                        className="bg-theme-primary text-theme-onPrimary font-bold text-center w-96 p-4 rounded-lg my-2"
                        onClick={() => handleSubmitButtonClicked()}
                    >
                        Submit
                    </button>
                    <div className="my-4 text-center">
                        Suddenly remember your password?{" "}
                        <Link
                            className="underline italic text-theme-primary"
                            to="/login"
                        >
                            Back to login
                        </Link>
                    </div>
                    </>) : (<>
                        <p className="text-center py-2">
                            We just sent you an email with instructions <br/>to reset your password.
                        </p>
                        <button
                        className="bg-theme-primary text-theme-onPrimary font-bold text-center w-96 p-4 rounded-lg my-2"
                        onClick={() => navigate("/login")}
                    >
                        Back to Login
                    </button>
                    </>)}
                </div>
            </div>
        </>
    );
}

export default ForgotPassword;
