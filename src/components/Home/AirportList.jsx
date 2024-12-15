import React, { useState, useEffect } from "react";
import { fetchAllCities } from "../../api/api";
import LoadingNoBg from "../LoadingNoBg";

function AirportList({ chooseAirport, showAirportList }) {
    //NETWORK
    const [cities, setCities] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const getAllCities = async () => {
        setIsLoading(true);
        const cities = await fetchAllCities();
        setIsLoading(false);
        setCities(cities);
    };

    useEffect(() => {
        getAllCities();
    }, []);

    //UI LOGIC
    // const vietnamAirports = [
    //     "Hanoi (HAN)",
    //     "Ho Chi Minh City (SGN)",
    //     "Da Nang (DAD)",
    //     "Nha Trang (CXR)",
    //     "Phu Quoc (PQC)",
    // ];
    // const globalAirports = [
    //     "Bangkok (DMK)",
    //     "Taichung (RMQ)",
    //     "Taipei (TPE)",
    //     "Kaohsiung (KHH)",
    // ];
    // const [airportRegion, setAirportRegion] = useState("Vietnam");

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
            <h2 className="font-bold text-theme-primary text-center text-xl">
                CHOOSE LOCATION
            </h2>
            <ul className="flex flex-col h-96 py-4 overflow-y-scroll">
                {isLoading && <LoadingNoBg />}
                {cities.map((city) => (
                    <li
                        className="h-12 p-2 rounded-md hover:bg-theme-primaryContainer cursor-pointer flex"
                        onClick={() => {
                            chooseAirport(city);
                            showAirportList(false);
                        }}
                    >
                        <h3 className="grow">{city.cityName}</h3>
                        <div className="rounded-md bg-theme-primary text-white font-bold w-10 p-1 text-center">
                            {city.cityCode}
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default AirportList;
