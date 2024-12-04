import {formatTime, calculateDuration} from "../utils/TimeFormat";

function FlightCard({ flight }) {
    // function formatTime(time) {
    //     const t = new Date(time);
    //     var h = t.getHours();
    //     var min = t.getMinutes();

    //     var res = h + ":";
    //     res += min < 10 ? "0" + min : min;
    //     return res;
    // }

    // function formatDuration(duration) {
    //     const durationInMins = Math.floor(duration / (1000 * 60));
    //     const h = Math.floor(durationInMins / 60);
    //     const m = Math.floor(durationInMins - h * 60);

    //     var res = "";
    //     res += h > 10 ? h : "0" + h;
    //     res += ":";
    //     res += m > 10 ? m : "0" + m;
    //     return res;
    // }

    // function calculateDuration(start, end) {
    //     const startTime = new Date(start);
    //     const endTime = new Date(end);
    //     const duration = endTime - startTime;
    //     return formatDuration(duration);
    // }

    return (
        <div className="border-2 rounded-xl shadow-md w-full my-4 flex">
            <div className="p-2 basis-1/3 border-r-2 flex justify-center">
                <div className="flex flex-col items-center justify-center">
                    <div className="">{formatTime(flight.departureTime)}</div>
                    <div className="">{flight.originAirport.airportName}</div>
                </div>
                <div className="flex flex-col justify-center p-4">
                    <span className="text-theme-primary font-bold">
                        {"--------->"}
                    </span>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <div className="">{formatTime(flight.arrivalTime)}</div>
                    <div className="">{flight.destinationAirport.airportName}</div>
                </div>
            </div>
            <div className="p-2 basis-1/3 flex flex-col justify-center items-center">
                <h3 className="">
                    Flight Duration:{" "}
                    {calculateDuration(flight.departureTime, flight.arrivalTime)}
                </h3>
                <h3 className="">
                    
                </h3>
            </div>
            <div className="bg-theme-primary p-2 basis-1/6 flex flex-col items-center">
                <label className="text-white font-bold text-sm">ECONOMY</label>
                <div className="h-2"></div>
                <h3 className="text-white font-bold text-4xl">
                    {flight.economyPrice}
                </h3>
                <h4 className="text-white font-bold">USD</h4>
                <h4 className="text-white text-sm"><strong>{flight.availableEconomySeats}</strong> remaining</h4>
            </div>
            <div className="bg-theme-inversePrimary p-2 basis-1/6 flex flex-col items-center">
                <label className="font-bold text-sm">BUSINESS</label>
                <div className="h-2"></div>
                <h3 className="font-bold text-4xl">{flight.businessPrice}</h3>
                <h4 className="font-bold">USD</h4>
                <h4 className="text-sm"><strong>{flight.availableBusinessSeats}</strong> remaining</h4>
            </div>
        </div>
    );
}

export default FlightCard;
