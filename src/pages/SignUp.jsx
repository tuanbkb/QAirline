import React, { useState } from "react";
import backgroundImage from "../assets/image/background.jpg";
import logo from "../assets/image/QAirlineLogoFinal.png";
import { Link, useNavigate } from "react-router-dom";

function SignUp() {
  const navigate = useNavigate();
  const handleImageClick = () => {
    navigate("/");
  };

  // const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");

  function handleSignUpButtonClicked() {
    setEmailError("");
    setPasswordError("");
    setConfirmPasswordError("");
    let error = false;

    if (email.trim() === "" || password.trim() === "") {
      setEmailError(email.trim() === "" ? "Email can't be blank" : "");
      setPasswordError(password.trim() === "" ? "Password can't be blank" : "");
      error = true;
    }

    if (password !== confirmPassword) {
      setConfirmPasswordError("Passwords don't match");
      error = false;
    }

    if (error) {
      return;
    }

    //TODO: Sign up user
  }

  return (
    <>
      <div
        className="flex items-center justify-center w-screen h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="flex flex-col p-8 drop-shadow-xl max-w-max h-max bg-white rounded-xl">
          <div className="pb-8 w-full">
            <img
              className="m-auto cursor-pointer h-[70px]"
              src={logo}
              // onClick={handleImageClick}
            ></img>
          </div>
          <h2 className="pb-4 text-center text-3xl font-bold">Sign Up</h2>
          {/* <div className="py-2 flex flex-col">
                        <div className="py-2">Name</div>
                        <input
                            className="p-2 w-96 border-solid border-gray-500 border rounded-lg"
                            type="text"
                            placeholder="Enter your name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        ></input>
                    </div> */}
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
          <span className="text-theme-error">{confirmPasswordError}</span>
          <button
            className="bg-theme-primary text-theme-onPrimary font-bold text-center w-96 p-4 rounded-lg my-2"
            onClick={handleSignUpButtonClicked}
          >
            Sign Up
          </button>
          <div className="my-4 text-center">
            Already have an account?{" "}
            <Link className="underline italic text-theme-primary" to="/login">
              Login here
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignUp;
