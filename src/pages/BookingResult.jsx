import { useLocation } from "react-router-dom";
import BookingResultDialog from "../components/BookingResultDialog";

function BookingResult() {
    const location = useLocation();
    const states = location.state;
    const isSucceed = states.isSucceed;

    return (
        <div className="w-max max-w-full m-auto">
            <BookingResultDialog isSucceed={isSucceed}/>
        </div>
    );
}

export default BookingResult;