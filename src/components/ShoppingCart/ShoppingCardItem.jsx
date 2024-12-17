import { formatDate, formatTime, calculateDuration, getCorrectJSTime, getFormattedDate } from "../../utils/TimeFormat"
import PlaneIcon from "../PlaneIcon";

function ShoppingCartItem({ flight, isEconomy }) {
    const from = flight.originAirport.airportName;
    const to = flight.destinationAirport.airportName;
    const departure = getCorrectJSTime(flight.departureTime);
    const arrival = getCorrectJSTime(flight.arrivalTime);
    const fromCity = flight.originAirport.city.cityName;
    const toCity = flight.destinationAirport.city.cityName;
    const economyPrice = flight.economyPrice;
    const businessPrice = flight.businessPrice;
    const availableEconomySeats = flight.availableEconomySeats;
    const availableBusinessSeats = flight.availableBusinessSeats;
    const id = flight.flightNumber;
    const plane = flight.plane.brand + " " + flight.plane.model;

    return (
        <div className="w-full border-2 rounded-xl shadow-md my-4 flex flex-col">
            <div className="border-b-2 py-2 bg-theme-primaryContainer p-2 rounded-t-md text-center">
                <h3 className=""><strong>{fromCity}</strong> to <strong>{toCity}</strong> - {isEconomy ? "Economy" : "Business"}</h3>
            </div>
            <div className="py-2 flex max-sm:flex-col">
                <div className="basis-1/2 border-r-2 p-2 flex justify-center max-sm:border-b-2">
                    <div className="flex flex-col items-center justify-center text-center">
                        <div className="">{getFormattedDate(departure)}</div>
                        <div className="font-bold">{formatTime(departure)}</div>
                        <div className="">{from}</div>
                    </div>
                    <div className="flex flex-col justify-center p-4">
                        <PlaneIcon />
                    </div>
                    <div className="flex flex-col items-center justify-center text-center">
                        <div className="">{getFormattedDate(arrival)}</div>
                        <div className="font-bold">{formatTime(arrival)}</div>
                        <div className="">{to}</div>
                    </div>
                </div>
                <div className="basis-1/2 justify-center flex-col flex p-2 items-center">
                    <h3 className="">
                        Flight Duration:{" "}
                        <span className="font-bold">{calculateDuration(departure, arrival)}</span>
                    </h3>
                    <h3 className="">
                        Flight Number: {id}
                    </h3>
                    <h3 className="">
                        Plane: {plane}
                    </h3>
                </div>
            </div>
        </div>
    );
}

export default ShoppingCartItem