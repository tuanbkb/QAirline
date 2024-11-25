import { useState } from "react";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import ForgotPassword from "./pages/ForgotPassword";

function App() {
    return (
        <>
            <Routes>
                <Route path="/*" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/forgotpassword" element={<ForgotPassword />}/>
            </Routes>
        </>
    );
}

export default App;
