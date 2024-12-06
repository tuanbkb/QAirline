import { formatDate, formatTime, calculateDuration } from "../../utils/TimeFormat"

function ShoppingCartItem({ flight }) {
    return (
        <div className="w-full border-2 rounded-xl shadow-md my-4 mx-2 flex flex-col p-2">
            <div className="border-b-2 py-2 bg-theme-primaryContainer">
                <h3 className=""><strong>{flight.start_airport.city}</strong> to <strong>{flight.end_airport.city}</strong> - <strong>{formatDate(flight.start_time)}</strong></h3>
            </div>
            <div className="py-2 flex">
                <div className="basis-1/2 border-r-2 p-2 flex justify-center">
                    <div className="flex flex-col items-center justify-center">
                        <div className="font-bold">{formatTime(flight.start_time)}</div>
                        <div className="">{flight.start_airport.name}</div>
                    </div>
                    <div className="flex flex-col justify-center p-4">
                        <span className="text-theme-primary font-bold">
                            {"--------->"}
                        </span>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <div className="font-bold">{formatTime(flight.end_time)}</div>
                        <div className="">{flight.end_airport.name}</div>
                    </div>
                </div>
                <div className="basis-1/2 justify-center flex-col flex p-2">
                    <h3 className="">
                        Flight Duration:{" "}
                        <span className="font-bold">{calculateDuration(flight.start_time, flight.end_time)}</span>
                    </h3>
                    <h3 className="">

                    </h3>
                </div>
            </div>
        </div>
    );
}

export default ShoppingCartItem