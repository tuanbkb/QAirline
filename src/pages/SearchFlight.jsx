import React, { useEffect, useState } from "react";
import FlightCard from "../components/FlightCard";
import { AnimatePresence, motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import { formatDate, getEndOfDay, getStartOfDay } from "../utils/TimeFormat";
import { fetchFilteredFlights } from "../api/api";

function SearchFlight() {
    const [showModify, setShowModify] = useState(false);

    // const [flights, setFlights] = useState([]);
    const location = useLocation();
    const states = location.state;

    // MOCK DATA
    const [flights, setFlights] = useState([]);

    //GET REAL DATA
    const fromCityCode = states.from.cityCode;
    const fromCityName = states.from.cityName;
    const toCityCode = states.to.cityCode;
    const toCityName = states.to.cityName;
    const departDate = states.depart;

    console.log(fromCityCode + " " + fromCityName + " " + toCityCode + " " + toCityName + " " + getStartOfDay(departDate) + " " + getEndOfDay(departDate));

    const getFlights = async () => {
        const flightsList = await fetchFilteredFlights({
            departureCity: states.from.id,
            destinationCity: states.to.id,
            departureTimeStart: getStartOfDay(states.depart),
            departureTimeEnd: getEndOfDay(states.depart),
        });
        setFlights(flightsList);
    }

    useEffect(() => {
        getFlights();
    }, []);

    return (
        <div className="max-w-6xl m-auto">
            <h1 className="font-bold text-3xl text-theme-primary w-full text-center">
                SEARCH RESULT
            </h1>
            <div className="h-10"></div>
            <div className="border-2 shadow-md flex p-4 rounded-xl">
                <div className="flex grow justify-center px-2">
                    <div className="flex flex-col items-center ">
                        <h3 className="font-bold text-xl">{fromCityCode}</h3>
                        <h4 className="">{fromCityName}</h4>
                    </div>
                    <span className="mx-2 font-bold">{"--------->"}</span>
                    <div className="flex flex-col items-center">
                        <h3 className="font-bold text-xl">{toCityCode}</h3>
                        <h4 className="">{toCityName}</h4>
                    </div>
                </div>
                <div className="border"></div>
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
                        className="max-w-6xl m-auto border-x-2 border-b-2 grid-cols-2 grid px-4 pt-10 pb-4 rounded-xl shadow-md"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                    >
                        <div className="flex flex-col p-2">
                            <label className="">From</label>
                            <input
                                type="text"
                                className="p-1 border-2 rounded-lg"
                            ></input>
                        </div>
                        <div className="flex flex-col p-2">
                            <label className="">To</label>
                            <input
                                type="text"
                                className="p-1 border-2 rounded-lg"
                            ></input>
                        </div>
                        <div className="flex flex-col p-2">
                            <label className="">Depart</label>
                            <input
                                type="text"
                                className="p-1 border-2 rounded-lg"
                            ></input>
                        </div>
                        <div className="flex flex-col p-2">
                            <label className="">Arrive</label>
                            <input
                                type="text"
                                className="p-1 border-2 rounded-lg"
                            ></input>
                        </div>
                        <div className="col-start-2 flex justify-end p-2">
                            <button className="bg-theme-primary shadow-md rounded-xl text-white font-bold p-2 hover:bg-theme-onSecondaryFixed">
                                Confirm Change
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
            <div className="h-4"></div>
            <div className="mt-10">
                {flights.map((flight) => (
                    <FlightCard flight={flight}></FlightCard>
                ))}
            </div>
        </div>
    );
}

export default SearchFlight;
