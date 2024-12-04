import { useState } from "react";
import ShoppingCartItem from "../components/ShoppingCardItem";

function Checkout() {
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
            <h1 className="w-full text-center font-bold text-3xl text-theme-primary">
                CONFIRM YOUR ORDER
            </h1>
            <ShoppingCartItem flight={flights[0]} />
            <ShoppingCartItem flight={flights[1]} />

        </div>
    );
}

export default Checkout;