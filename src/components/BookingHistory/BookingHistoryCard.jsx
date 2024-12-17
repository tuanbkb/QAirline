import {
    formatDate,
    formatTime,
    getCorrectJSTime,
} from "../../utils/TimeFormat";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import FillDetailsTextField from "../FillDetails/FillDetailsTextField";
import { putTicket, deleteTicket, postPayTicket } from "../../api/api";
import Checkbox from "../Checkbox";
import PaymentMethodPicker from "../Checkout/PaymentMethodPicker";
import Loading from "../Loading";

function BookingHistoryCard({
    ticket,
    setShowResultDialog,
    setIsSucceed,
    setIsModify,
}) {
    const flight = ticket.flight;
    const fromCity = flight.originAirport.city.cityName;
    const toCity = flight.destinationAirport.city.cityName;
    const departure =
        formatDate(getCorrectJSTime(flight.departureTime)) +
        ", " +
        formatTime(getCorrectJSTime(flight.departureTime));
    const arrival =
        formatDate(getCorrectJSTime(flight.arrivalTime)) +
        ", " +
        formatTime(getCorrectJSTime(flight.arrivalTime));
    const flightNumber = flight.flightNumber;
    const seat = ticket.seat;
    const seatType = ticket.seatType;
    const price = ticket.price;

    const modifyUntil = formatDate(getCorrectJSTime(ticket.allowChangeUntil));
    const canModify = new Date() < getCorrectJSTime(ticket.allowChangeUntil);

    const [optionShow, setOptionShow] = useState(false);
    const [modifyShow, setModifyShow] = useState(false);
    const [confirmShow, setConfirmShow] = useState(false);

    const [name, setName] = useState(ticket.name);
    const [dob, setDob] = useState(ticket.birthday);
    const [address, setAddress] = useState(ticket.address);
    const [id, setId] = useState("");
    const [keepId, setKeepId] = useState(true);
    const [email, setEmail] = useState(ticket.email);
    const [phone, setPhone] = useState(ticket.phone);
    const [changeClass, setChangeClass] = useState(false);
    const [nameError, setNameError] = useState("");
    const [dobError, setDobError] = useState("");
    const [addressError, setAddressError] = useState("");
    const [idError, setIdError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [phoneError, setPhoneError] = useState("");

    const modifyTicket = async () => {
        const result = await putTicket({
            id: ticket.id,
            name: name,
            birthDay: dob,
            address: address,
            phone: phone,
            email: email,
            ...(!keepId && { idCard: id }),
            seat: ticket.seat,
            seatType: changeClass
                ? seatType === "ECONOMY"
                    ? "BUSINESS"
                    : "ECONOMY"
                : seatType,
        });
        return result;
    };

    const cancelTicket = async (id) => {
        const result = await deleteTicket(id);
        return result;
    };

    const payTicket = async (id) => {
        const result = await postPayTicket(id);
        return result;
    };

    const [isLoading, setIsLoading] = useState(false);

    const handleChangeButtonClicked = async () => {
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
        if (!keepId) {
            if (id.trim() === "") {
                setIdError("ID number can't be blank");
                error = true;
            } else if (!/^\d+$/.test(id)) {
                setIdError("Invalid ID");
                error = true;
            }
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

        if (!error) {
            setIsLoading(true);
            try {
                const res = await modifyTicket();
                console.log(seatType);
                if (seatType === "ECONOMY" && changeClass) {
                    console.log("Pay ticket");
                    const payRes = await payTicket(ticket.id);
                    console.log(payRes);
                }
                setIsSucceed(true);
                setIsModify(true);
                setShowResultDialog(true);
                setModifyShow(false);
                setOptionShow(false);
            } catch (error) {
                console.error("Error modifying ticket:", error);
                setIsSucceed(false);
                setIsModify(true);
                setShowResultDialog(true);
            } finally {
                setIsLoading(false);
            }
        }
    };

    const handleCancelButtonClicked = async () => {
        setIsLoading(true);
        try {
            const res = await cancelTicket(ticket.id);
            setIsSucceed(true);
            setIsModify(false);
            setShowResultDialog(true);
        } catch (error) {
            console.error("Error cancelling ticket:", error);
            setIsSucceed(false);
            setIsModify(false);
            setShowResultDialog(true);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="border-2 rounded-xl shadow-md flex flex-col cursor-pointer my-4">
            {isLoading && <Loading />}
            <div
                className="flex p-2 max-lg:flex-col"
                onClick={() => {
                    setOptionShow(!optionShow);
                    setModifyShow(false);
                    setConfirmShow(false);
                }}
            >
                <div className="flex flex-col px-2 border-r-2 grow max-lg:border-r-0">
                    <h3 className="font-bold">{ticket.name}</h3>
                    <h3 className="">{ticket.birthday}</h3>
                    <h3 className="">{ticket.address}</h3>
                    <h3 className="">{ticket.email}</h3>
                    <h3 className="">{ticket.phone}</h3>
                </div>
                <div className="flex flex-col px-2 border-r-2 grow max-lg:border-t-2 max-lg:border-r-0">
                    <h3 className="font-bold">{flightNumber}</h3>
                    <h3 className="font-bold">
                        {fromCity} - {toCity}
                    </h3>
                    <h3 className="">
                        Depart: <strong>{departure}</strong>
                    </h3>
                    <h3 className="">
                        Arrive: <strong>{arrival}</strong>
                    </h3>
                </div>
                <div className="flex flex-col px-2 items-end grow max-lg:border-t-2">
                    <h3 className="">
                        Seat: <strong>{seat}</strong>
                    </h3>
                    <h3 className="font-bold">{seatType}</h3>
                    <h3 className="text-theme-primary font-bold text-xl">
                        {price} USD
                    </h3>
                </div>
            </div>
            {optionShow && (
                <motion.div
                    className="flex-col border-t-2"
                    initial={{ y: -50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -50, opacity: 0 }}
                >
                    <h3 className="p-2">
                        Allow modification & cancellation until{" "}
                        <strong>{modifyUntil}</strong>
                    </h3>
                    <div className="flex border-t-2 font-bold">
                        <button
                            className="grow p-2 text-center text-theme-primary hover:bg-theme-primaryContainer disabled:bg-gray-200 disabled:text-opacity-20 disabled:hover:text-opacity-20 cursor-not-allowed"
                            onClick={() => {
                                setModifyShow(!modifyShow);
                                setConfirmShow(false);
                            }}
                            disabled={!canModify}
                        >
                            MODIFY
                        </button>
                        <button
                            className="grow p-2 text-center bg-theme-error text-white hover:bg-theme-onErrorContainer rounded-br-lg disabled:bg-opacity-20 disabled:hover:bg-theme-error disabled:hover:bg-opacity-20 cursor-not-allowed"
                            onClick={() => {
                                setConfirmShow(!confirmShow);
                                setModifyShow(false);
                            }}
                            disabled={!canModify}
                        >
                            CANCEL
                        </button>
                    </div>
                </motion.div>
            )}
            {modifyShow && (
                <motion.div
                    className="flex flex-col gap-4 px-2 py-4 border-t-2"
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -20, opacity: 0 }}
                >
                    <div className="">
                        <FillDetailsTextField
                            label="Name"
                            value={name}
                            placeholder="Enter your full name"
                            onChange={(e) => setName(e.target.value)}
                        />
                        <span className="text-theme-error">{nameError}</span>
                    </div>
                    <div className="">
                        <FillDetailsTextField
                            label="Date of Birth"
                            value={dob}
                            placeholder="dd/mm/yyyy"
                            onChange={(e) => setDob(e.target.value)}
                        />
                        <span className="text-theme-error">{dobError}</span>
                    </div>
                    <div className="">
                        <FillDetailsTextField
                            label="Address"
                            value={address}
                            placeholder="Enter your address"
                            onChange={(e) => setAddress(e.target.value)}
                        />
                        <span className="text-theme-error">{addressError}</span>
                    </div>
                    <div className="">
                        <FillDetailsTextField
                            label="ID Number"
                            value={id}
                            disabled={keepId}
                            placeholder="Enter your ID number"
                            onChange={(e) => setId(e.target.value)}
                        />
                        <div
                            className="flex p-2"
                            onClick={() => setKeepId(!keepId)}
                        >
                            <Checkbox
                                checked={keepId}
                                onChange={() => setKeepId(!keepId)}
                            />
                            <h3 className="pl-2">Keep old ID number</h3>
                        </div>
                        <span className="text-theme-error">{idError}</span>
                    </div>
                    <div className="">
                        <FillDetailsTextField
                            label="Email"
                            value={email}
                            placeholder="Enter your email"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <span className="text-theme-error">{emailError}</span>
                    </div>
                    <div className="">
                        <FillDetailsTextField
                            label="Phone Number"
                            value={phone}
                            placeholder="Enter your phone number"
                            onChange={(e) => setPhone(e.target.value)}
                        />
                        <span className="text-theme-error">{phoneError}</span>
                    </div>
                    <div
                        className="flex px-2 items-center"
                        onClick={() => setChangeClass(!changeClass)}
                    >
                        <Checkbox
                            checked={changeClass}
                            onChange={() => setChangeClass(!changeClass)}
                        />
                        <h3 className="pl-2">
                            {seatType === "ECONOMY"
                                ? "Upgrade to BUSINESS class"
                                : "Change to ECONOMY class"}
                        </h3>
                    </div>
                    {changeClass && seatType === "ECONOMY" && (
                        <div className="flex flex-col">
                            <h3 className="font-bold pb-2">Payment Method:</h3>
                            <PaymentMethodPicker />
                        </div>
                    )}
                    <div className="flex justify-end p-2">
                        <button
                            className="bg-theme-primary font-bold text-white rounded-xl p-2 hover:bg-theme-onSecondaryFixed"
                            onClick={handleChangeButtonClicked}
                        >
                            Confirm Change
                        </button>
                    </div>
                </motion.div>
            )}
            {confirmShow && (
                <motion.div
                    className="border-t-2 p-2 flex flex-col"
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -20, opacity: 0 }}
                >
                    <h2>
                        Are you sure you want to{" "}
                        <strong className="text-theme-error">CANCEL</strong> the
                        ticket? This action can't be reverted.
                    </h2>
                    <div className="flex justify-end">
                        <button
                            className="bg-theme-error hover:bg-theme-onErrorContainer p-2 text-white font-bold rounded-xl"
                            onClick={() => handleCancelButtonClicked()}
                        >
                            CONFIRM CANCEL
                        </button>
                    </div>
                </motion.div>
            )}
        </div>
    );
}

export default BookingHistoryCard;
