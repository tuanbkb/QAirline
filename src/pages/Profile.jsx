import { useEffect, useState } from "react";
import FillDetailsTextField from "../components/FillDetails/FillDetailsTextField";
import { fetchUserData, putUserProfile } from "../api/api";
import { getFormattedDate, convertToSendFormat } from "../utils/TimeFormat";
import Calendar from "react-calendar";
import CalendarPick from "../components/CalendarPick";

function Profile() {
    const [showCalendar, setShowCalendar] = useState(false);

    //USER DATA
    const [name, setName] = useState("");
    const [birthday, setBirthday] = useState("");
    const [address, setAddress] = useState("");
    const [phone, setPhone] = useState("");
    const [nameError, setNameError] = useState("");
    const [birthdayError, setBirthdayError] = useState("");
    const [addressError, setAddressError] = useState("");
    const [phoneError, setPhoneError] = useState("");

    const [succeed, setSucceed] = useState(false);
    const [result, setResult] = useState("");

    const getUserData = async () => {
        const userData = await fetchUserData();
        setName(userData.firstName == null ? "" : userData.firstName);
        setBirthday(userData.dateOfBirth == null ? "" : new Date(userData.dateOfBirth));
        setAddress(userData.address == null ? "" : userData.address);
        setPhone(userData.phone == null ? "" : userData.phone);
    };

    useEffect(() => {
        getUserData();
    }, []);

    const handleConfirmButtonClicked = async () => {
        let error = false;
        setResult("");
        setNameError("");
        setBirthdayError("");
        setAddressError("");
        setPhoneError("");

        if (name.trim() === "") {
            setNameError("Name can't be blank");
            error = true;
        }
        if (getFormattedDate(birthday).trim() === "") {
            setBirthdayError("Birthday can't be blank");
            error = true;
        }
        if (address.trim() === "") {
            setAddressError("Address can't be blank");
            error = true;
        }
        if (phone.trim() === "") {
            setPhoneError("Phone number can't be blank");
            error = true;
        } else if (!/^\d+$/.test(phone)) {
            setPhoneError("Invalid phone number");
            error = true;
        }

        if (error) {
            return;
        }

        // Call API to update user data
        try {
            const result = await putUserProfile({
                firstName: name,
                dateOfBirth: convertToSendFormat(birthday),
                phone: phone,
                address: address,
            });
            setSucceed(true);
            setResult("User data updated successfully");
            console.log(result);
        } catch (error) {
            console.error("Error updating user data:", error);
            setSucceed(false);
            setResult("Error updating user data");
        }
    };

    return (
        <div className="max-w-6xl m-auto">
            <h1 className="font-bold text-3xl text-theme-primary w-full text-center mb-4">
                YOUR INFORMATION
            </h1>
            <h3 className="italic text-center mb-4">
                Your information will automatically be filled when you book a
                flight
            </h3>
            <div className="flex flex-col gap-4 mb-2">
                <div className="flex flex-col">
                    <label className="italic text-sm">Name</label>
                    <input
                        type="text"
                        className="p-2 rounded-lg border"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Enter your name"
                    />
                    <span className="text-theme-error">{nameError}</span>
                </div>
                <div className="flex flex-col">
                    <label className="italic text-sm">Birthday</label>
                    <input
                        type="text"
                        className="p-2 rounded-lg border cursor-pointer"
                        value={getFormattedDate(birthday)}
                        readOnly
                        // onChange={(e) => setBirthday(e.target.value)}
                        onFocus={() => setShowCalendar(true)}
                        placeholder="dd/mm/yyyy"
                    />
                    {showCalendar && (
                        <div className="">
                            <CalendarPick
                                chooseDate={setBirthday}
                                setShowCalendar={setShowCalendar}
                            />
                        </div>
                    )}
                    <span className="text-theme-error">{birthdayError}</span>
                </div>
                <div className="flex flex-col">
                    <label className="italic text-sm">Address</label>
                    <input
                        type="text"
                        className="p-2 rounded-lg border"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        placeholder="Enter your address"
                    />
                    <span className="text-theme-error">{addressError}</span>
                </div>
                <div className="flex flex-col">
                    <label className="italic text-sm">Phone number</label>
                    <input
                        type="text"
                        className="p-2 rounded-lg border"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="Enter your phone number"
                    />
                    <span className="text-theme-error">{phoneError}</span>
                </div>
            </div>
            <div className="mb-4 w-full text-center font-bold">
            {succeed ? (
                <span className="text-theme-primary">{result}</span>
            ) : (
                <span className="text-theme-error">{result}</span>
            )}
            </div>
            <div className="text-center">
                <button
                    className="rounded-xl bg-theme-primary p-2 font-bold text-white hover:bg-theme-onSecondaryFixed"
                    onClick={handleConfirmButtonClicked}
                >
                    Confirm user information
                </button>
            </div>
        </div>
    );
}

export default Profile;
