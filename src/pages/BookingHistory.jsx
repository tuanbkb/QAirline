import { useEffect, useState } from "react";
import { fetchAllTickets } from "../api/api";
import BookingHistoryCard from "../components/BookingHistory/BookingHistoryCard";
import ResultDialog from "../components/BookingHistory/ResultDialog";

function BookingHistory() {
    const [tickets, setTickets] = useState([]);

    const getTickets = async () => {
        const tickets = await fetchAllTickets();
        console.log(tickets);
        setTickets(tickets);
    };

    const [showResultDialog, setShowResultDialog] = useState(false);
    const [isSucceed, setIsSucceed] = useState(true);
    const [isModify, setIsModify] = useState(true);

    useEffect(() => {
        getTickets();
    }, [showResultDialog]);

    return (
        <div className="max-w-6xl m-auto">
            <h1 className="w-full text-center font-bold text-3xl text-theme-primary">
                YOUR BOOKING HISTORY
            </h1>
            <div className="h-10"></div>
            {tickets.map((ticket) => (
                <BookingHistoryCard
                    ticket={ticket}
                    setIsModify={setIsModify}
                    setIsSucceed={setIsSucceed}
                    setShowResultDialog={setShowResultDialog}
                />
            ))}
            {showResultDialog && (
                <div className="fixed flex justify-center items-center z-10 bg-black bg-opacity-50 inset-0">
                    <ResultDialog
                        isSucceed={isSucceed}
                        isModify={isModify}
                        setShowResultDialog={setShowResultDialog}
                    />
                </div>
            )}
        </div>
    );
}

export default BookingHistory;
