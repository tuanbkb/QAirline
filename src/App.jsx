import { useState } from "react";
import Login from "./pages/auth/Login";
import SignUp from "./pages/auth/SignUp";
import Home from "./pages/Home";
import { Routes, Route, Navigate } from "react-router-dom";
import ForgotPassword from "./pages/auth/ForgotPassword";
import ResetPassword from "./pages/auth/ResetPassword";

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
    return (
        <>
            <Routes>
                <Route path="/*" element={
                    <ProtectedRoute>
                        <Home />
                    </ProtectedRoute>
                } />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/forgotpassword" element={<ForgotPassword />} />
                <Route path="/resetpassword" element={<ResetPassword />} />
            </Routes>
        </>
    );
}

export default App;
