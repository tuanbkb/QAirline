import React, { useState } from "react";

function AirportList({chooseAirport, showAirportList}) {
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
    const [airportRegion, setAirportRegion] = useState("Vietnam");

    return (
        <div className="shadow-md rounded-xl w-96 border px-4 py-2 absolute bg-white">
            <div className="flex">
                <div className="grow"></div>
                <span
                    className="text-2xl cursor-pointer"
                    onClick={() => showAirportList(false)}
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
                    onClick={() => setAirportRegion("Vietnam")}
                >
                    Vietnam
                </li>
                <li
                    className={`font-bold grow text-center py-2 cursor-pointer border-b-2 ${
                        airportRegion === "Global"
                            ? "text-theme-primary border-b-theme-primary"
                            : "text-theme-outline border-b-white"
                    }`}
                    onClick={() => setAirportRegion("Global")}
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
                                chooseAirport(airport);
                                showAirportList(false);
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
                                chooseAirport(airport);
                                showAirportList(false);
                            }}
                        >
                            {airport}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default AirportList;