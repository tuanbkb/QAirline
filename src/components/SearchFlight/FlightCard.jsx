import { useNavigate } from "react-router-dom";
import {
    formatTime,
    calculateDuration,
    getFormattedDate,
    formatDate,
    getCorrectJSTime,
} from "../../utils/TimeFormat";

function FlightCard({ flight }) {
    const from = flight.originAirport.airportName;
    const to = flight.destinationAirport.airportName;
    const departure = getCorrectJSTime(flight.departureTime);
    const arrival = getCorrectJSTime(flight.arrivalTime);
    const economyPrice = flight.economyPrice;
    const businessPrice = flight.businessPrice;
    const availableEconomySeats = flight.availableEconomySeats;
    const availableBusinessSeats = flight.availableBusinessSeats;
    const id = flight.flightNumber;
    const plane = flight.plane.brand + " " + flight.plane.model;

    const navigate = useNavigate();

    return (
        <div className="border-2 rounded-xl shadow-md w-full my-4 flex">
            <div className="p-2 basis-1/3 border-r-2 flex justify-center">
                <div className="flex flex-col items-center justify-center">
                    <div className="">{getFormattedDate(departure)}</div>
                    <div className="font-bold">{formatTime(departure)}</div>
                    <div className="">{from}</div>
                </div>
                <div className="flex flex-col justify-center p-4">
                    <span className="text-theme-primary font-bold">
                        {"--------->"}
                    </span>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <div className="">{getFormattedDate(arrival)}</div>
                    <div className="font-bold">{formatTime(arrival)}</div>
                    <div className="">{to}</div>
                </div>
            </div>
            <div className="p-2 basis-1/3 flex flex-col justify-center items-center">
                <h3 className="">
                    Flight Duration:{" "}
                    <strong>{calculateDuration(departure, arrival)}</strong>
                </h3>
                <h3 className="">
                    {id} by {plane}
                </h3>
            </div>
            <div
                className="bg-theme-primary p-2 basis-1/6 flex flex-col items-center cursor-pointer"
                onClick={() =>
                    navigate("/shoppingcart", {
                        state: { flight: flight, isEconomy: true },
                    })
                }
            >
                <label className="text-white font-bold text-sm">ECONOMY</label>
                <div className="h-2"></div>
                <h3 className="text-white font-bold text-4xl">
                    {economyPrice}
                </h3>
                <h4 className="text-white font-bold">USD</h4>
                <h4 className="text-white text-sm">
                    <strong>{availableEconomySeats}</strong> remaining
                </h4>
            </div>
            <div
                className="bg-theme-inversePrimary p-2 basis-1/6 flex flex-col items-center rounded-r-xl cursor-pointer"
                onClick={() =>
                    navigate("/shoppingcart", {
                        state: { flight: flight, isEconomy: false }
                    })
                }
            >
                <label className="font-bold text-sm">BUSINESS</label>
                <div className="h-2"></div>
                <h3 className="font-bold text-4xl">{businessPrice}</h3>
                <h4 className="font-bold">USD</h4>
                <h4 className="text-sm">
                    <strong>{availableBusinessSeats}</strong> remaining
                </h4>
            </div>
        </div>
    );
}

export default FlightCard;
