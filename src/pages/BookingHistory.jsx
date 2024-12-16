import { useEffect, useState } from "react";
import { fetchAllTickets } from "../api/api";
import BookingHistoryCard from "../components/BookingHistory/BookingHistoryCard";
import ResultDialog from "../components/BookingHistory/ResultDialog";
import LoadingNoBg from "../components/LoadingNoBg";

function BookingHistory() {
    const [tickets, setTickets] = useState([]);

    const [isLoading, setIsLoading] = useState(false);

    const getTickets = async () => {
        setIsLoading(true);
        const tickets = await fetchAllTickets();
        setIsLoading(false);
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
            {isLoading && <LoadingNoBg />}
            {tickets.map((ticket) => (
                <BookingHistoryCard
                    ticket={ticket}
                    setIsModify={setIsModify}
                    setIsSucceed={setIsSucceed}
                    setShowResultDialog={setShowResultDialog}
                />
            ))}
            {!isLoading && tickets.length === 0 && <h2 className="font-bold text-center text-2xl text-theme-primary">You haven't made any purchase.</h2>}
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
