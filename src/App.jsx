import { useEffect, useState } from "react";
import Login from "./pages/auth/Login";
import SignUp from "./pages/auth/SignUp";
import Home from "./pages/Home";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import ForgotPassword from "./pages/auth/ForgotPassword";
import ResetPassword from "./pages/auth/ResetPassword";
import ChangePassword from "./pages/auth/ChangePassword";
import { use } from "react";

const isAuthenticated = () => {
    return (
        localStorage.getItem("accessToken") !== undefined &&
        localStorage.getItem("accessToken") !== null
    );
};

function ProtectedRoute({ children }) {
    return isAuthenticated() ? children : <Navigate to="/login" />;
}

function App() {
    const location = useLocation();

    useEffect(() => {
        const routeTitles = {
            "/login": "Login",
            "/signup": "Sign Up",
            "/forgotpassword": "Forgot Password",
            "/resetpassword": "Reset Password",
            "/changepassword": "Change Password",
            "/": "QAirline",
        };

        const currentTitle = routeTitles[location.pathname] || "QAirline";
        document.title = currentTitle;
    }, [location]);

    return (
        <>
            <Routes>
                <Route
                    path="/*"
                    element={
                        <ProtectedRoute>
                            <Home />
                        </ProtectedRoute>
                    }
                />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/forgotpassword" element={<ForgotPassword />} />
                <Route path="/resetpassword" element={<ResetPassword />} />
                <Route
                    path="/changepassword"
                    element={
                        <ProtectedRoute>
                            <ChangePassword />
                        </ProtectedRoute>
                    }
                />
            </Routes>
        </>
    );
}

export default App;
