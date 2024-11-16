import React, { useState } from "react";

function BookFlight() {
    const [menuOption, setMenuOption] = useState("Book");
    const [from, setFrom] = useState("");
    const [to, setTo] = useState("");
    const [depart, setDepart] = useState("");
    const [returnDate, setReturnDate] = useState("");
    const [showCalendar, setShowCalendar] = useState(false);

    function handleMenuOptionClicked(option) {
        setMenuOption(option);
    }

    return (
        <>
            <div className="shadow-md max-w-6xl m-auto bg-theme-primary rounded-xl border">
                <ul className="flex">
                    <li
                        className={`cursor-pointer text-theme-onPrimary font-bold flex-1 text-center text-xl p-4 ${
                            menuOption === "Book"
                                ? "bg-theme-onPrimary text-theme-primary"
                                : "text-theme-onPrimary"
                        }`}
                        onClick={() => handleMenuOptionClicked("Book")}
                    >
                        Book
                    </li>
                    <li
                        className={`cursor-pointer text-theme-onPrimary font-bold flex-1 text-center text-xl p-4 ${
                            menuOption === "MyBooking"
                                ? "bg-theme-onPrimary text-theme-primary"
                                : "text-theme-onPrimary"
                        }`}
                        onClick={() => handleMenuOptionClicked("MyBooking")}
                    >
                        My Booking
                    </li>
                </ul>
                <div className="p-4 bg-white">
                    {menuOption === "Book" ? (
                        <div className="flex gap-5">
                            <ul className="flex flex-1 gap-2">
                                <li className="flex flex-col border grow">
                                    <label className="">From</label>
                                    <input
                                        type="text"
                                        value={from}
                                        onChange={(e) =>
                                            setFrom(e.target.value)
                                        }
                                    ></input>
                                </li>
                                <button className="bg-theme-inversePrimary rounded-full h-min px-2 py-1">&#8644;</button>
                                <li className="flex flex-col border grow">
                                    <label className="">To</label>
                                    <input
                                        type="text"
                                        value={to}
                                        onChange={(e) => setTo(e.target.value)}
                                    ></input>
                                </li>
                                <li className="flex flex-col border grow">
                                    <label className="">Depart</label>
                                    <input
                                        type="text"
                                        value={depart}
                                        readOnly
                                    ></input>
                                </li>
                                <li className="flex flex-col border grow">
                                    <label className="">Return</label>
                                    <input
                                        type="text"
                                        value={returnDate}
                                        readOnly
                                    ></input>
                                </li>
                            </ul>
                            <button className="bg-theme-secondary text-theme-onSecondary font-bold rounded-xl p-4 hover:bg-theme-onSecondaryFixed">
                                Search Flight
                            </button>
                        </div>
                    ) : (
                        <></>
                    )}
                </div>
            </div>
        </>
    );
}

export default BookFlight;
