import { useNavigate } from "react-router-dom";
import FillDetailsTextField from "../components/FillDetails/FillDetailsTextField";
import ShoppingCartItem from "../components/ShoppingCart/ShoppingCardItem";
import { useEffect, useState } from "react";
import { fetchUserData } from "../api/api";
import { getFormattedDate } from "../utils/TimeFormat";

function FillDetails() {
    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [dob, setDob] = useState("");
    const [address, setAddress] = useState("");
    const [id, setId] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [nameError, setNameError] = useState("");
    const [dobError, setDobError] = useState("");
    const [addressError, setAddressError] = useState("");
    const [idError, setIdError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [phoneError, setPhoneError] = useState("");

    const getUserData = async () => {
        const userData = await fetchUserData();
        setName(userData.firstName == null ? "" : userData.firstName);
        setDob(userData.dateOfBirth == null ? "" : getFormattedDate(new Date(userData.dateOfBirth)));
        setEmail(userData.email == null ? "" : userData.email);
        setAddress(userData.address == null ? "" : userData.address);
        setPhone(userData.phone == null ? "" : userData.phone);
    };

    useEffect(() => {
        getUserData();
    }, [])

    const handleToCheckoutButtonClicked = () => {
        setNameError("");
        setDobError("");
        setAddressError("");
        setIdError("");
        setEmailError("");
        setPhoneError("");
        let error = false;
        if (name.trim() === "") {
            setNameError("Name can't be blank");
            error = true;
        }
        if (dob.trim() === "") {
            setDobError("Date of birth can't be blank");
            error = true;
        } else if (!/^\d{2}\/\d{2}\/\d{4}$/.test(dob)) {
            setDobError("Invalid date format");
            error = true;
        }
        if (address.trim() === "") {
            setAddressError("Address can't be blank");
            error = true;
        }
        if (id.trim() === "") {
            setIdError("ID can't be blank");
            error = true;
        } else if (!/^\d+$/.test(id)) {
            setIdError("Invalid ID");
            error = true;
        }
        if (email.trim() === "") {
            setEmailError("Email can't be blank");
            error = true;
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            setEmailError("Invalid email format");
            error = true;
        }
        if (phone.trim() === "") {
            setPhoneError("Phone number can't be blank");
            error = true;
        } else if (!/^\d+$/.test(phone)) {
            setPhoneError("Invalid phone number");
            error = true;
        }

        if (!error) navigate("/checkout");
    };

    return (
        <div className="max-w-6xl m-auto">
            <h1 className="font-bold text-3xl text-theme-primary w-full text-center">
                ENTER PASSENGER INFORMATION
            </h1>
            <div className="h-10"></div>
            <div className="w-full rounded-xl shadow-md border-2 p-4">
                <h2 className="text-center font-bold p-2">
                    Your personal information
                </h2>
                <div className="mb-4">
                    <FillDetailsTextField
                        label="Name"
                        value={name}
                        placeholder="Enter your full name"
                        onChange={(e) => setName(e.target.value)}
                    />
                    <span className="text-theme-error">{nameError}</span>
                </div>
                <div className="mb-4">
                    <FillDetailsTextField
                        label="Date of Birth"
                        value={dob}
                        placeholder="dd/mm/yyyy"
                        onChange={(e) => setDob(e.target.value)}
                    />
                    <span className="text-theme-error">{dobError}</span>
                </div>
                <div className="mb-4">
                    <FillDetailsTextField
                        label="Address"
                        value={address}
                        placeholder="Enter your address"
                        onChange={(e) => setAddress(e.target.value)}
                    />
                    <span className="text-theme-error">{addressError}</span>
                </div>
                <div className="mb-4">
                    <FillDetailsTextField
                        label="ID Number"
                        value={id}
                        placeholder="Enter your ID number"
                        onChange={(e) => setId(e.target.value)}
                    />
                    <span className="text-theme-error">{idError}</span>
                </div>
                <div className="mb-4">
                    <FillDetailsTextField
                        label="Email"
                        value={email}
                        placeholder="Enter your email"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <span className="text-theme-error">{emailError}</span>
                </div>
                <div className="mb-4">
                    <FillDetailsTextField
                        label="Phone Number"
                        value={phone}
                        placeholder="Enter your phone number"
                        onChange={(e) => setPhone(e.target.value)}
                    />
                    <span className="text-theme-error">{phoneError}</span>
                </div>
                <div className="flex">
                    <div className="grow"></div>
                    <button
                        className="bg-theme-primary text-white font-bold p-2 rounded-xl mr-2 my-4 hover:bg-theme-onSecondaryFixed"
                        onClick={handleToCheckoutButtonClicked}
                    >
                        To Checkout
                    </button>
                </div>
            </div>
        </div>
    );
}

export default FillDetails;
