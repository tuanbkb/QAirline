import { useState } from "react";
import PurchaseTypeBox from "./PurchaseTypeBox";

function PaymentMethodPicker() {
    const [type, setType] = useState("visa");
    const handleTypeClick = (type) => {
        setType(type);
        console.log(type);
    };
    return (
        <>
            <div className="flex gap-2">
                <div
                    className={`border-x-2 border-t-2 rounded-t-xl w-20 h-15 cursor-pointer ${
                        type === "visa" ? "bg-theme-primaryContainer" : ""
                    }`}
                    onClick={() => handleTypeClick("visa")}
                >
                    <img
                        src="https://img.icons8.com/ios/452/visa.png"
                        alt="Visa"
                    />
                </div>
                <div
                    className={`border-x-2 border-t-2 rounded-t-xl w-20 h-15 cursor-pointer ${
                        type === "mastercard" ? "bg-theme-primaryContainer" : ""
                    }`}
                    onClick={() => handleTypeClick("mastercard")}
                >
                    <img
                        src="https://img.icons8.com/ios/452/mastercard.png"
                        alt="Mastercard"
                    />
                </div>
                <div
                    className={`border-x-2 border-t-2 rounded-t-xl w-20 h-15 cursor-pointer ${
                        type === "paypal" ? "bg-theme-primaryContainer" : ""
                    }`}
                    onClick={() => handleTypeClick("paypal")}
                >
                    <img
                        src="https://img.icons8.com/ios/452/paypal.png"
                        alt="Paypal"
                    />
                </div>
            </div>
            <div className="border-2 rounded-xl rounded-t-none shadow-md">
                {type === "visa" || type === "mastercard" ? (
                    <div className="p-2 flex flex-col gap-1">
                        <div className="flex flex-col">
                            <label className="italic">Card Number</label>
                            <input className="p-2 rounded-xl border-2" type="text" placeholder="Enter your card number" />
                        </div>
                        <div className="flex flex-col">
                            <label className="italic">Name</label>
                            <input className="p-2 rounded-xl border-2" type="text" placeholder="Enter your card's owner" />
                        </div>
                        <div className="flex flex-col">
                            <label className="italic">Expiry Date</label>
                            <input className="p-2 rounded-xl border-2" type="text" placeholder="MM/YY" />
                        </div>
                        <div className="flex flex-col">
                            <label className="italic">CVV/CVC</label>
                            <input className="p-2 rounded-xl border-2" type="text" placeholder="123" />
                        </div>
                    </div>
                ) : type === "paypal" ? (
                    <div className="p-2">
                        <a href="https://www.paypal.com" target="_blank" className="italic underline text-theme-primary cursor-pointer">Go to Paypal</a>
                    </div>
                ) : null}
            </div>
        </>
    );
}

export default PaymentMethodPicker;
