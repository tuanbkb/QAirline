import FillDetailsTextField from "../components/FillDetailsTextField";
import ShoppingCartItem from "../components/ShoppingCardItem";
import { useState } from "react";

function FillDetails() {
    const [flight, setFlight] = useState({
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
    });

    return (
        <div className="max-w-6xl m-auto">
            <h1 className="font-bold text-3xl text-theme-primary w-full text-center">
                ENTER PASSENGER INFORMATION
            </h1>
            <div className="h-10"></div>
            {/* <ShoppingCartItem flight={flight} /> */}
            <div className="w-full rounded-xl shadow-md border-2 p-2">
                <h2 className="text-center font-bold p-2">Your personal information</h2>
                <FillDetailsTextField label="Name*" placeholder="Enter your full name" />
                <FillDetailsTextField label="Date of Birth*" placeholder="dd/mm/yyyy" />
                <FillDetailsTextField label="Email*" placeholder="Enter your email" />
                <FillDetailsTextField label="Phone Number*" placeholder="Enter your phone number" />
                <div className="flex">
                    <div className="grow"></div>
                    <button className="bg-theme-primary text-white font-bold p-2 rounded-xl mr-2 my-4 hover:bg-theme-onSecondaryFixed">Confirm your details</button>
                </div>
            </div>
        </div>
    );
}

export default FillDetails