import React, { useState } from "react";
import FlightCard from "../components/FlightCard";

function SearchFlight() {
    const [showModify, setShowModify] = useState(false);

    // const [flights, setFlights] = useState([]);

    // MOCK DATA
    const [flights, setFlights] = useState([
        {
            id: "flight_1",
            start_airport: {
                id: "airport_1",
                name: "airport_name_1",
                city: "The airport's city",
                country: "The airport's country",
                location: "1, A Street, A District, A City, A Country",
            },
            end_airport: {
                id: "airport_2",
                name: "airport_name_2",
                city: "The airport's city",
                country: "The airport's country",
                location: "5, B Street, B District, B City, B Country",
            },
            start_time: "2024-10-30T12:00:00Z",
            end_time: "2024-10-30T14:00:00Z",
            is_available: "true",
            capacity: 100,
            remaining: 99,
            normal_price: 100,
            business_price: 200,
        },
        {
            id: "flight_2",
            start_airport: {
                id: "airport_1",
                name: "airport_name_1",
                city: "The airport's city",
                country: "The airport's country",
                location: "1, A Street, A District, A City, A Country",
            },
            end_airport: {
                id: "airport_2",
                name: "airport_name_2",
                city: "The airport's city",
                country: "The airport's country",
                location: "5, B Street, B District, B City, B Country",
            },
            start_time: "2024-10-30T12:00:00Z",
            end_time: "2024-10-30T14:00:00Z",
            is_available: "true",
            capacity: 100,
            remaining: 99,
            normal_price: 100,
            business_price: 200,
        },
    ]);

    return (
        <div className="max-w-6xl m-auto">
            <h1 className="font-bold text-3xl text-theme-primary w-full text-center">
                SEARCH RESULT
            </h1>
            <div className="h-10"></div>
            <div className="border-2 shadow-md flex p-4 rounded-xl">
                <div className="flex grow justify-center px-2">
                    <div className="flex flex-col items-center ">
                        <h3 className="font-bold text-xl">HAN</h3>
                        <h4 className="">Hanoi</h4>
                    </div>
                    <span className="mx-2 font-bold">{"--------->"}</span>
                    <div className="flex flex-col items-center">
                        <h3 className="font-bold text-xl">SGN</h3>
                        <h4 className="">TP Ho Chi Minh</h4>
                    </div>
                </div>
                <div className="border"></div>
                <div className="flex grow justify-center px-2">
                    <div className="flex flex-col items-center">
                        <h3 className="font-bold text-xl">Depart</h3>
                        <h4 className="">2024-10-30</h4>
                    </div>
                    <div className="w-4"></div>
                    <div className="flex flex-col items-center">
                        <h3 className="font-bold text-xl">Arrive</h3>
                        <h4 className="">2024-10-30</h4>
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
            {showModify && (
                <div className="max-w-6xl m-auto border-2 grid-cols-2 grid px-4 pt-10 pb-4 rounded-xl shadow-md bg-theme-primaryContainer">
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
                </div>
            )}
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
