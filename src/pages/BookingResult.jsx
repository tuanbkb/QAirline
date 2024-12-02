import BookingResultDialog from "../components/BookingResultDialog";

function BookingResult() {
    const isSucceed = true;

    return (
        <div className="w-max m-auto">
            <BookingResultDialog isSucceed={isSucceed}/>
        </div>
    );
}

export default BookingResult;