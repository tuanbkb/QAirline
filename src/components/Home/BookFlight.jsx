import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";
import AirportList from "./AirportList";
import CalendarPick from "../CalendarPick";
import { useNavigate } from "react-router-dom";
import { fetchAllCities } from "../../api/api";
import { getFormattedDate } from "../../utils/TimeFormat";

function BookFlight() {
    // //NETWORK
    // const [cities, setCities] = useState([]);
    // const getAllCities = async () => {
    //     const cities = await fetchAllCities();
    //     setCities(cities);
    // };

    // useEffect(() => {
    //     getAllCities();
    // }, []);

    //UI LOGIC
    const navigate = useNavigate();
    const [menuOption, setMenuOption] = useState("Book");

    const [from, setFrom] = useState("");
    const [to, setTo] = useState("");
    const [depart, setDepart] = useState("");
    const [bookingError, setBookingError] = useState("");
    // const [returnDate, setReturnDate] = useState("");
    const [ticketNumber, setTicketNumber] = useState("");
    const [lastName, setLastName] = useState("");

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
    const [showAirportList, setShowAirportList] = useState(false);
    const [isCurrentAirportInputFrom, setIsCurrentAirportInputFrom] =
        useState(false);

    function handleAirportChosen(airport) {
        if (isCurrentAirportInputFrom === true) setFrom(airport);
        else setTo(airport);
    }

    // CALENDAR FUNCTIONS
    const [showCalendar, setShowCalendar] = useState(false);
    const [isCurrentDateInputDepart, setIsCurrentDateInputDepart] =
        useState(true);

    function handleDateChosen(date) {
        if (isCurrentDateInputDepart === true) setDepart(date);
        else setReturnDate(date);
    }

    // function getFormattedDate(date) {
    //     if (!(date instanceof Date)) return "";
    //     let day = date.getDate();
    //     let month = date.getMonth() + 1;
    //     let year = date.getFullYear();
    //     return `${day}/${month}/${year}`;
    // }

    // BUTTON FUNCTIONS
    const onSearchFlightButtonClicked = () => {
        setBookingError("");
        let error = false;
        if (depart === "") {
            setBookingError("Departing date can't be blank");
            error = true;
        }
        if (to === "") {
            setBookingError("Destination city can't be blank");
            error = true;
        }
        if (from === "") {
            setBookingError("Destination city can't be blank");
            error = true;
        }

        if (!error) navigate("/searchflight", { state: { from, to, depart } });
    };

    return (
        <div className="max-w-6xl m-auto">
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
                                <li className="flex flex-col border p-2 grow">
                                    <label className="text-theme-outline">
                                        From
                                    </label>
                                    <input
                                        type="text"
                                        value={from.cityName}
                                        readOnly
                                        placeholder="Hanoi"
                                        onChange={(e) =>
                                            setFrom(e.target.value)
                                        }
                                        onFocus={() => {
                                            setShowAirportList(true);
                                            setIsCurrentAirportInputFrom(true);
                                            setShowCalendar(false);
                                        }}
                                    ></input>
                                </li>
                                <button
                                    className="bg-theme-inversePrimary rounded-full h-min px-2 py-1"
                                    onClick={handleSwitchFromTo}
                                >
                                    &#8644;
                                </button>
                                <li className="flex flex-col grow border p-2">
                                    <label className="text-theme-outline">
                                        To
                                    </label>
                                    <input
                                        type="text"
                                        value={to.cityName}
                                        readOnly
                                        placeholder="Saigon"
                                        onChange={(e) => setTo(e.target.value)}
                                        onFocus={() => {
                                            setShowAirportList(true);
                                            setIsCurrentAirportInputFrom(false);
                                            setShowCalendar(false);
                                        }}
                                    ></input>
                                </li>
                                <li className="flex flex-col grow border p-2">
                                    <label className="text-theme-outline">
                                        Depart
                                    </label>
                                    <input
                                        type="text"
                                        value={getFormattedDate(depart)}
                                        readOnly
                                        placeholder="dd/mm/yyyy"
                                        onFocus={() => {
                                            setShowCalendar(true);
                                            setIsCurrentDateInputDepart(true);
                                            setShowAirportList(false);
                                        }}
                                    ></input>
                                </li>
                                {/* <li className="flex flex-col border grow p-2">
                                    <label className="text-theme-outline">
                                        Return
                                    </label>
                                    <input
                                        type="text"
                                        value={getFormattedDate(returnDate)}
                                        readOnly
                                        placeholder="dd/mm/yyyy"
                                        onFocus={() => {
                                            setShowCalendar(true);
                                            setIsCurrentDateInputDepart(false);
                                            setShowAirportList(false);
                                        }}
                                    ></input>
                                </li> */}
                            </ul>
                            <button
                                className="bg-theme-secondary text-theme-onSecondary font-bold rounded-xl p-4 hover:bg-theme-onSecondaryFixed"
                                onClick={onSearchFlightButtonClicked}
                            >
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
                                        Last name
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
                    <span className="text-theme-error">{bookingError}</span>
                </div>
            </div>

            {/* AIRPORT LIST -------------------------------------------------------------------------------------------------------------*/}
            {showAirportList && (
                <AirportList
                    chooseAirport={handleAirportChosen}
                    showAirportList={setShowAirportList}
                ></AirportList>
            )}

            {/* CALENDAR -------------------------------------------------------------------------------------------------------------*/}
            {showCalendar && (
                <CalendarPick
                    chooseDate={handleDateChosen}
                    setShowCalendar={setShowCalendar}
                />
            )}
        </div>
    );
}

export default BookFlight;
