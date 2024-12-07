import { useLocation, useNavigate } from "react-router-dom";
import ShoppingCartItem from "../components/ShoppingCart/ShoppingCardItem";
import { useState } from "react";
import { formatDate, getCorrectJSTime } from "../utils/TimeFormat";

function ShoppingCart() {
    const navigate = useNavigate();
    const location = useLocation();
    const states = location.state;

    const flight = states.flight;
    const isEconomy = states.isEconomy;

    const from = flight.originAirport.airportName;
    const to = flight.destinationAirport.airportName;
    const fromCity = flight.originAirport.cityId;
    const toCity = flight.destinationAirport.cityId;
    const departure = getCorrectJSTime(flight.departureTime);
    const arrival = getCorrectJSTime(flight.arrivalTime);
    const economyPrice = flight.economyPrice;
    const businessPrice = flight.businessPrice;

    // function calculateTotalPrice(priceList) {
    //     var cal = 0;
    //     priceList.forEach(price => {
    //         cal += price;
    //     });

    //     return cal;
    // }

    // const [flights, setFlights] = useState([
    //     {
    //         id: "flight_1",
    //         start_airport: {
    //             id: "airport_1",
    //             name: "airport_name_1",
    //             city: "The airport's city",
    //             country: "The airport's country",
    //             location: "1, A Street, A District, A City, A Country",
    //         },
    //         end_airport: {
    //             id: "airport_2",
    //             name: "airport_name_2",
    //             city: "The airport's city",
    //             country: "The airport's country",
    //             location: "5, B Street, B District, B City, B Country",
    //         },
    //         start_time: "2024-10-30T12:00:00Z",
    //         end_time: "2024-10-30T14:00:00Z",
    //         is_available: "true",
    //         capacity: 100,
    //         remaining: 99,
    //         normal_price: 100,
    //         business_price: 200,
    //     },
    //     {
    //         id: "flight_2",
    //         start_airport: {
    //             id: "airport_1",
    //             name: "airport_name_1",
    //             city: "The airport's city",
    //             country: "The airport's country",
    //             location: "1, A Street, A District, A City, A Country",
    //         },
    //         end_airport: {
    //             id: "airport_2",
    //             name: "airport_name_2",
    //             city: "The airport's city",
    //             country: "The airport's country",
    //             location: "5, B Street, B District, B City, B Country",
    //         },
    //         start_time: "2024-10-30T12:00:00Z",
    //         end_time: "2024-10-30T14:00:00Z",
    //         is_available: "true",
    //         capacity: 100,
    //         remaining: 99,
    //         normal_price: 100,
    //         business_price: 200,
    //     },
    // ]);

    const handleButtonClicked = () => {
        navigate("/filldetails", {
            state: { flight: flight, isEconomy: isEconomy },
        });
    };

    return (
        <div className="max-w-6xl m-auto">
            <h1 className="font-bold text-3xl text-theme-primary w-full text-center">
                YOUR CHOSEN FLIGHT
            </h1>
            <div className="h-10"></div>
            {/* <ShoppingCartItem flight={flights[0]} />
            <ShoppingCartItem flight={flights[1]} /> */}
            <div className="flex max-md:flex-col border-2 rounded-xl shadow-md text-xl">
                <div className="p-2 grow md:border-r-2 max-md:border-b-2">
                    <h3 className="font-bold">Departure Destination:</h3>
                    <div className="pl-2">
                        <p>
                            <em>City: </em>
                            {fromCity}
                        </p>
                        <p>
                            <em>Airport: </em>
                            {from}
                        </p>
                    </div>
                    <h3 className="font-bold">Arrival Destination:</h3>
                    <div className="pl-2">
                        <p>
                            <em>City: </em>
                            {toCity}
                        </p>
                        <p>
                            <em>Airport: </em>
                            {to}
                        </p>
                    </div>
                </div>
                <div className="p-2 grow">
                    <p>
                        <strong>Departure Time: </strong>
                        {formatDate(departure)}
                    </p>
                    <p>
                        <strong>Arrival Time: </strong>
                        {formatDate(arrival)}
                    </p>
                    <p>
                        <em>Plane: </em>
                        {flight.plane.brand} {flight.plane.model}
                    </p>
                    <p>
                        <em>Seat Type: </em>
                        {isEconomy ? "Economy" : "Business"}
                    </p>
                </div>
            </div>
            <div className="h-10"></div>
            <div className="w-full flex flex-col items-end">
                <h2 className="text-xl text-theme-primary">
                    <strong>Price:</strong>{" "}
                    {isEconomy ? economyPrice : businessPrice}{" "}
                    <strong>USD</strong>
                </h2>
                <button
                    className="my-4 max-w-fit bg-theme-primary text-white font-bold p-2 rounded-xl hover:bg-theme-onSecondaryFixed"
                    onClick={handleButtonClicked}
                >
                    Fill passenger details
                </button>
            </div>
        </div>
    );
}

export default ShoppingCart;
