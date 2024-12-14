import { motion } from "framer-motion";

function ResultDialog({ isSucceed, isModify, setShowResultDialog }) {
    return (
        <motion.div
            className="flex flex-col w-max bg-white rounded-xl min-w-96 border-2 border-theme-primary shadow-md"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3 }}
        >
            <div className="bg-theme-primary flex justify-end rounded-t-md">
                <button
                    className="p-2 text-white font-bold"
                    onClick={() => setShowResultDialog(false)}
                >
                    &times;
                </button>
            </div>
            <div className="p-2">
                {isSucceed ? (
                    <div className="">
                        <h2 className="font-bold text-theme-primary text-xl">
                            SUCCEED
                        </h2>
                        {isModify ? (
                            <p>Your ticket has been modified successfully.</p>
                        ) : (
                            <p>Your ticket has been cancelled successfully.</p>
                        )}
                    </div>
                ) : (
                    <div className="">
                        <h2 className="font-bold text-theme-error text-xl">
                            FAILED
                        </h2>
                        {isModify ? (
                            <p>Failed to modify your ticket.</p>
                        ) : (
                            <p>Failed to cancel your ticket.</p>
                        )}
                        <p>Please try again later</p>
                    </div>
                )}
                <div className="flex justify-end mt-4">
                    <button
                        className="bg-theme-primary rounded-xl hover:bg-theme-onSecondaryFixed p-2 font-bold text-white"
                        onClick={() => setShowResultDialog(false)}
                    >
                        Confirm
                    </button>
                </div>
            </div>
        </motion.div>
    );
}

export default ResultDialog;
