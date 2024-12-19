import { useNavigate } from "react-router-dom";
import {
    formatTime,
    calculateDuration,
    getFormattedDate,
    formatDate,
    getCorrectJSTime,
    calculateDelayedArrivalTime,
} from "../../utils/TimeFormat";
import PlaneIcon from "../PlaneIcon";

function FlightCard({ flight }) {
    const from = flight.originAirport.airportName;
    const to = flight.destinationAirport.airportName;
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
    const availableEconomySeats = flight.availableEconomySeats;
    const availableBusinessSeats = flight.availableBusinessSeats;
    const id = flight.flightNumber;
    const plane = flight.plane.brand + " " + flight.plane.model;

    const navigate = useNavigate();

    return (
        <div className="border-2 rounded-xl shadow-md w-full my-4 flex max-lg:flex-col">
            <div className="p-2 basis-1/3 border-r-2 flex justify-center">
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
            <div className="p-2 basis-1/3 flex flex-col justify-center items-center max-lg:border-t-2">
                <h3 className="">
                    Flight Duration:{" "}
                    <strong>{calculateDuration(departure, arrival)}</strong>
                </h3>
                <h3 className="">
                    {id} by {plane}
                </h3>
            </div>
            <div className="flex basis-1/3">
                <div
                    className={`bg-theme-primary p-2 flex flex-col items-center ${
                        availableEconomySeats !== 0 && "cursor-pointer"
                    } grow ${
                        availableEconomySeats === 0 &&
                        "opacity-50 cursor-not-allowed"
                    }`}
                    onClick={() => {
                        if (availableEconomySeats !== 0)
                            navigate("/shoppingcart", {
                                state: { flight: flight, isEconomy: true },
                            });
                    }}
                >
                    <label className="text-white font-bold text-sm">
                        ECONOMY
                    </label>
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
                    className={`bg-theme-inversePrimary p-2 flex flex-col items-center rounded-r-xl ${
                        availableBusinessSeats !== 0 && "cursor-pointer"
                    } ${
                        availableBusinessSeats === 0 &&
                        "cursor-not-allowed opacity-50"
                    } grow`}
                    onClick={() => {
                        if (availableBusinessSeats !== 0) {
                            navigate("/shoppingcart", {
                                state: { flight: flight, isEconomy: false },
                            });
                        }
                    }}
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
        </div>
    );
}

export default FlightCard;
