import React, { useEffect, useState } from "react";
import FlightCard from "../components/SearchFlight/FlightCard";
import { AnimatePresence, motion } from "framer-motion";
import { useLocation, useNavigate } from "react-router-dom";
import {
    formatDate,
    getEndOfDay,
    getFormattedDate,
    getStartOfDay,
} from "../utils/TimeFormat";
import { fetchFilteredFlights } from "../api/api";
import AirportList from "../components/Home/AirportList";
import CalendarPick from "../components/CalendarPick";
import Loading from "../components/Loading";
import LoadingNoBg from "../components/LoadingNoBg";

function SearchFlight() {
    //UI LOGIC
    const navigate = useNavigate();
    const [showModify, setShowModify] = useState(false);
    const [showAirportListFrom, setShowAirportListFrom] = useState(false);
    const [showAirportListTo, setShowAirportListTo] = useState(false);
    const [showCalendar, setShowCalendar] = useState(false);

    //STATE MANAGEMENT
    const location = useLocation();
    const states = location.state;

    const [flights, setFlights] = useState([]);
    const [buttonClicked, setButtonClicked] = useState(false);

    //DATA
    const [from, setFrom] = useState("");
    const [to, setTo] = useState("");
    const [depart, setDepart] = useState("");
    const [fromError, setFromError] = useState("");
    const [toError, setToError] = useState("");
    const [departError, setDepartError] = useState("");

    const fromCityCode = states.from.cityCode;
    const fromCityName = states.from.cityName;
    const toCityCode = states.to.cityCode;
    const toCityName = states.to.cityName;
    const departDate = states.depart;

    // console.log(fromCityCode + " " + fromCityName + " " + toCityCode + " " + toCityName + " " + getStartOfDay(departDate) + " " + getEndOfDay(departDate));
    console.log(
        states.from.id,
        states.to.id,
        getStartOfDay(states.depart),
        getEndOfDay(states.depart)
    );

    const [isLoading, setIsLoading] = useState(false);

    const getFlights = async () => {
        setIsLoading(true);
        const flightsList = await fetchFilteredFlights(
            states.from.id,
            states.to.id,
            getStartOfDay(departDate),
            getEndOfDay(departDate)
        );
        setIsLoading(false);
        setFlights(flightsList);
    };

    useEffect(() => {
        getFlights();

        if (buttonClicked) {
            navigate("/searchflight", { state: { from, to, depart } });
            setButtonClicked(false);
            setShowAirportListFrom(false);
            setShowAirportListTo(false);
            setShowCalendar(false);
        }
    }, [buttonClicked]);

    const handleChangeButtonClicked = () => {
        console.log("clicked");
        console.log(from, to, depart);
        let error = false;
        setFromError("");
        setToError("");
        setDepartError("");
        if (from === "") {
            setFromError("Please choose a city");
            error = true;
        }
        if (to === "") {
            setToError("Please choose a city");
            error = true;
        }
        if (depart === "") {
            setDepartError("Please choose a date");
            error = true;
        }

        if (error) return;
        setButtonClicked(true);
        // try {
        //     navigate("/search", {
        //         state: {
        //             from: from,
        //             to: to,
        //             depart: depart,
        //         },
        //     });
        // } catch (error) {
        //     console.log(error);
        // }
    };

    return (
        <div className="max-w-6xl m-auto">
            <h1 className="font-bold text-3xl text-theme-primary w-full text-center">
                SEARCH RESULT
            </h1>
            <div className="h-10"></div>
            <div className="border-2 shadow-md flex p-4 rounded-xl max-sm:flex-col">
                <div className="flex grow justify-center px-2 border-r-2 max-sm:border-r-0 max-sm:border-b-2">
                    <div className="flex flex-col items-center">
                        <h3 className="font-bold text-xl">{fromCityCode}</h3>
                        <h4 className="">{fromCityName}</h4>
                    </div>
                    <span className="mx-2 font-bold">{"--------->"}</span>
                    <div className="flex flex-col items-center">
                        <h3 className="font-bold text-xl">{toCityCode}</h3>
                        <h4 className="">{toCityName}</h4>
                    </div>
                </div>
                <div className="flex grow justify-center px-2">
                    <div className="flex flex-col items-center">
                        <h3 className="font-bold text-xl">Depart</h3>
                        <h4 className="">{formatDate(departDate)}</h4>
                    </div>
                </div>
            </div>
            <div className="absolute left-0 right-0">
                <div className="w-full flex justify-center">
                    <button
                        className="rounded-b-3xl py-2 px-10 bg-theme-primary text-white font-bold"
                        onClick={() => setShowModify(!showModify)}
                    >
                        Modify
                    </button>
                </div>
            </div>
            <AnimatePresence>
                {showModify && (
                    <motion.div
                        className="w-full"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.2 }}
                    >
                        <div className="m-auto border-x-2 border-b-2 px-4 pt-10 pb-4 rounded-xl shadow-md">
                            <div className="flex max-lg:flex-col">
                                <div className="flex flex-col p-2 grow">
                                    <label className="">From</label>
                                    <input
                                        type="text"
                                        value={from.cityName}
                                        readOnly
                                        onFocus={() => {
                                            setShowAirportListFrom(true);
                                            setShowAirportListTo(false);
                                            setShowCalendar(false);
                                        }}
                                        className="p-1 border-2 rounded-lg"
                                    ></input>
                                    <div className="relative">
                                        {showAirportListFrom && (
                                            <AirportList
                                                chooseAirport={setFrom}
                                                showAirportList={
                                                    setShowAirportListFrom
                                                }
                                            />
                                        )}
                                    </div>
                                    <span className="text-theme-error">
                                        {fromError}
                                    </span>
                                </div>
                                <div className="flex flex-col p-2 grow">
                                    <label className="">To</label>
                                    <input
                                        type="text"
                                        value={to.cityName}
                                        readOnly
                                        onFocus={() => {
                                            setShowAirportListTo(true);
                                            setShowAirportListFrom(false);
                                            setShowCalendar(false);
                                        }}
                                        className="p-1 border-2 rounded-lg"
                                    ></input>
                                    <div className="relative">
                                        {showAirportListTo && (
                                            <AirportList
                                                chooseAirport={setTo}
                                                showAirportList={
                                                    setShowAirportListTo
                                                }
                                            />
                                        )}
                                    </div>
                                    <span className="text-theme-error">
                                        {toError}
                                    </span>
                                </div>
                                <div className="flex flex-col p-2 grow">
                                    <label className="">Depart</label>
                                    <input
                                        type="text"
                                        value={getFormattedDate(depart)}
                                        readOnly
                                        onFocus={() => {
                                            setShowCalendar(true);
                                            setShowAirportListTo(false);
                                            setShowAirportListFrom(false);
                                        }}
                                        className="p-1 border-2 rounded-lg"
                                    ></input>
                                    <div className="relative">
                                        {showCalendar && (
                                            <CalendarPick
                                                chooseDate={setDepart}
                                                setShowCalendar={
                                                    setShowCalendar
                                                }
                                            />
                                        )}
                                    </div>
                                    <span className="text-theme-error">
                                        {departError}
                                    </span>
                                </div>
                            </div>
                            <div className="flex justify-end p-2">
                                <button
                                    className="bg-theme-primary shadow-md rounded-xl text-white font-bold p-2 hover:bg-theme-onSecondaryFixed"
                                    onClick={handleChangeButtonClicked}
                                >
                                    Confirm Change
                                </button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
            <div className="mt-20">
                {isLoading && <LoadingNoBg />}
                {flights.map((flight) => (
                    <FlightCard flight={flight}></FlightCard>
                ))}
                {!isLoading && flights.length === 0 && (
                    <h2 className="font-bold text-theme-primary text-2xl text-center">Sorry, there's no flight available.</h2>
                )}
            </div>
        </div>
    );
}

export default SearchFlight;
