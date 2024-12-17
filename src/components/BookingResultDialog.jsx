import { useNavigate } from "react-router-dom";

function BookingResultDialog({ isSucceed }) {
    const navigate = useNavigate();
    const navigateToHome = () => {
        navigate("/");
    };

    return (
        <div className="border-2 rounded-xl shadow-md p-4">
            {isSucceed ? (
                <div>
                    <h1 className="text-theme-primary text-2xl font-bold">
                        Booking Succeed
                    </h1>
                    <p className="text-wrap">
                        Your booking has been successfully processed. Thank you
                        for choosing us!
                    </p>
                    <div className="flex mt-4">
                        <div className="grow"></div>
                        <button
                            className="bg-theme-primary rounded-xl text-white font-bold hover:bg-theme-onSecondaryFixed p-2"
                            onClick={navigateToHome}
                        >
                            Return to Home Screen
                        </button>
                    </div>
                </div>
            ) : (
                <div>
                    <h1 className="text-theme-error text-2xl font-bold">
                        Booking Failed
                    </h1>
                    <p>Your booking has failed. Please try again later.</p>
                    <div className="flex mt-4">
                        <div className="grow"></div>
                        <button
                            className="bg-theme-primary rounded-xl text-white font-bold hover:bg-theme-onSecondaryFixed p-2"
                            onClick={navigateToHome}
                        >
                            Return to Home Screen
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default BookingResultDialog;
