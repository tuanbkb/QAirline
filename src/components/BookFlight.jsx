import React, { useState } from "react";

function BookFlight() {
    const [menuOption, setMenuOption] = useState("Book");

    const [from, setFrom] = useState("");
    const [to, setTo] = useState("");
    const [depart, setDepart] = useState("");
    const [returnDate, setReturnDate] = useState("");
    const [ticketNumber, setTicketNumber] = useState("");
    const [lastName, setLastName] = useState("");

    const [showCalendar, setShowCalendar] = useState(false);
    const [showAirportList, setShowAirportList] = useState(false);
    const [isCurrentAirportInputFrom, setIsCurrentAirportInputFrom] =
        useState(false);

    function handleMenuOptionClicked(option) {
        setMenuOption(option);
    }

    function handleSwitchFromTo() {
        if (from === "" || to === "") return;
        const temp = from;
        setFrom(to);
        setTo(temp);
    }

    // AIRPORT LIST FUNCTIONS
    const [airportRegion, setAirportRegion] = useState("Vietnam");

    function handleAirportOptionClicked(region) {
        setAirportRegion(region);
    }

    const vietnamAirports = [
        "Hanoi (HAN)",
        "Ho Chi Minh City (SGN)",
        "Da Nang (DAD)",
        "Nha Trang (CXR)",
        "Phu Quoc (PQC)",
    ];
    const globalAirports = [
        "Bangkok (DMK)",
        "Taichung (RMQ)",
        "Taipei (TPE)",
        "Kaohsiung (KHH)",
    ];

    function handleAirportChosen(airport) {
        if (isCurrentAirportInputFrom === true) setFrom(airport);
        else setTo(airport);
    }

    return (
        <div className="relative max-w-6xl m-auto">
            <div className="shadow-md bg-theme-primary rounded-xl border">
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
                            <ul className="flex grow gap-2 items-center">
                                <li className="flex flex-col border grow p-2">
                                    <label className="text-theme-outline">
                                        From
                                    </label>
                                    <input
                                        type="text"
                                        value={from}
                                        readOnly
                                        onChange={(e) =>
                                            setFrom(e.target.value)
                                        }
                                        onFocus={() => {
                                            setShowAirportList(true);
                                            setIsCurrentAirportInputFrom(true);
                                        }}
                                    ></input>
                                </li>
                                <button
                                    className="bg-theme-inversePrimary rounded-full h-min px-2 py-1"
                                    onClick={handleSwitchFromTo}
                                >
                                    &#8644;
                                </button>
                                <li className="flex flex-col border grow p-2">
                                    <label className="text-theme-outline">
                                        To
                                    </label>
                                    <input
                                        type="text"
                                        value={to}
                                        readOnly
                                        onChange={(e) => setTo(e.target.value)}
                                        onFocus={() => {
                                            setShowAirportList(true);
                                            setIsCurrentAirportInputFrom(false);
                                        }}
                                    ></input>
                                </li>
                                <li className="flex flex-col border grow p-2">
                                    <label className="text-theme-outline">
                                        Depart
                                    </label>
                                    <input
                                        type="text"
                                        value={depart}
                                        readOnly
                                    ></input>
                                </li>
                                <li className="flex flex-col border grow p-2">
                                    <label className="text-theme-outline">
                                        Return
                                    </label>
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
                        <div className="flex gap-5">
                            <ul className="flex grow gap-2 items-center">
                                <li className="border flex flex-col grow p-2">
                                    <label className="text-theme-outline">
                                        Ticket number
                                    </label>
                                    <input
                                        type="text"
                                        value={ticketNumber}
                                        onChange={(e) =>
                                            setTicketNumber(e.target.value)
                                        }
                                    ></input>
                                </li>
                                <li className="border flex flex-col grow p-2">
                                    <label className="text-theme-outline">
                                        Ticket number
                                    </label>
                                    <input
                                        type="text"
                                        value={lastName}
                                        onChange={(e) =>
                                            setLastName(e.target.value)
                                        }
                                    ></input>
                                </li>
                            </ul>
                            <button className="bg-theme-secondary text-theme-onSecondary font-bold rounded-xl p-4 hover:bg-theme-onSecondaryFixed">
                                Search
                            </button>
                        </div>
                    )}
                </div>
            </div>

            {/* AIRPORT LIST -------------------------------------------------------------------------------------------------------------*/}
            {showAirportList && (
                <div className="shadow-md rounded-xl w-96 border px-4 py-2 absolute bg-white">
                    <div className="flex">
                        <div className="grow"></div>
                        <span
                            className="text-2xl cursor-pointer"
                            onClick={() => setShowAirportList(false)}
                        >
                            &times;
                        </span>
                    </div>
                    <ul className="flex">
                        <li
                            className={`font-bold grow text-center py-2 cursor-pointer border-b-2 ${
                                airportRegion === "Vietnam"
                                    ? "text-theme-primary border-b-theme-primary"
                                    : "text-theme-outline border-b-white"
                            }`}
                            onClick={() =>
                                handleAirportOptionClicked("Vietnam")
                            }
                        >
                            Vietnam
                        </li>
                        <li
                            className={`font-bold grow text-center py-2 cursor-pointer border-b-2 ${
                                airportRegion === "Global"
                                    ? "text-theme-primary border-b-theme-primary"
                                    : "text-theme-outline border-b-white"
                            }`}
                            onClick={() => handleAirportOptionClicked("Global")}
                        >
                            Global
                        </li>
                    </ul>
                    {airportRegion === "Vietnam" ? (
                        <ul className="flex flex-col h-96 py-4">
                            {vietnamAirports.map((airport) => (
                                <li
                                    className="h-12 p-2 rounded-md hover:bg-theme-primaryContainer cursor-pointer"
                                    onClick={() => {
                                        handleAirportChosen(airport);
                                        setShowAirportList(false);
                                    }}
                                >
                                    {airport}
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <ul className="flex flex-col h-96 py-4">
                            {globalAirports.map((airport) => (
                                <li
                                    className="h-12 p-2 rounded-md hover:bg-theme-primaryContainer cursor-pointer"
                                    onClick={() => {
                                        handleAirportChosen(airport);
                                        setShowAirportList(false);
                                    }}
                                >
                                    {airport}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            )}
        </div>
    );
}

export default BookFlight;
