import { useLocation, useNavigate } from "react-router-dom";
import ShoppingCartItem from "../components/ShoppingCart/ShoppingCardItem";
import { useState } from "react";
import { formatDate, formatTime, getCorrectJSTime, calculateDelayedArrivalTime } from "../utils/TimeFormat";

function ShoppingCart() {
    const navigate = useNavigate();
    const location = useLocation();
    const states = location.state;

    const flight = states.flight;
    const isEconomy = states.isEconomy;

    const from = flight.originAirport.airportName;
    const to = flight.destinationAirport.airportName;
    const fromCity = flight.originAirport.city.cityName;
    const toCity = flight.destinationAirport.city.cityName;
    const departure = getCorrectJSTime(
            flight.delayed ? flight.delayedDepartureTime : flight.departureTime
        );
        const arrival = flight.delayed
            ? calculateDelayedArrivalTime(
                  getCorrectJSTime(flight.departureTime),
                  getCorrectJSTime(flight.delayedDepartureTime),
                  getCorrectJSTime(flight.arrivalTime)
              )
            : getCorrectJSTime(flight.arrivalTime);
    const economyPrice = flight.economyPrice;
    const businessPrice = flight.businessPrice;

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
                        {formatDate(departure) + ", " + formatTime(departure)}
                    </p>
                    <p>
                        <strong>Arrival Time: </strong>
                        {formatDate(arrival) + ", " + formatTime(arrival)}
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
