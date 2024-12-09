import { useState } from "react";
import ShoppingCartItem from "../components/ShoppingCart/ShoppingCardItem";
import { useLocation, useNavigate } from "react-router-dom";
import PaymentMethodPicker from "../components/Checkout/PaymentMethodPicker";
import { postPayTicket, postTicket } from "../api/api";
import { convertToSendFormat } from "../utils/TimeFormat";

function Checkout() {
    const navigate = useNavigate();
    const location = useLocation();
    const states = location.state;

    const flight = states.flight;
    const isEconomy = states.isEconomy;
    const name = states.name;
    const dob = states.dob;
    const address = states.address;
    const id = states.id;
    const email = states.email;
    const phone = states.phone;

    console.log(dob);

    const handleButtonClicked = async () => {
        try {
            const result = await postTicket({
                flight: flight.id,
                name: name,
                birthDay: dob,
                address: address,
                phone: phone,
                email: email,
                // ticketShoppingCart: "string",
                idCard: id,
                // seat: "string",
                seatType: isEconomy ? "ECONOMY" : "BUSINESS",
            });
            console.log(result);
            const ticketId = result.id;
            console.log(ticketId);
            const paidResult = await postPayTicket(ticketId);
            navigate("/bookingresult", { state: { isSucceed: true } });
        } catch (error) {
            console.error(error);
            navigate("/bookingresult", { state: { isSucceed: false } });
        }
    };

    return (
        <div className="max-w-6xl m-auto">
            <h1 className="w-full text-center font-bold text-3xl text-theme-primary">
                CONFIRM YOUR ORDER
            </h1>
            <div className="h-10"></div>
            <div className="text-xl p-2">
                <h3 className="font-bold">
                    <em>Personal Information:</em>
                </h3>
                <div className="">
                    <p>
                        <em>Name: </em>
                        {name}
                    </p>
                    <p>
                        <em>Date of Birth: </em>
                        {dob}
                    </p>
                    <p>
                        <em>Address: </em>
                        {address}
                    </p>
                    <p>
                        <em>ID: </em>
                        {id}
                    </p>
                    <p>
                        <em>Email: </em>
                        {email}
                    </p>
                    <p>
                        <em>Phone: </em>
                        {phone}
                    </p>
                </div>
            </div>
            <ShoppingCartItem flight={flight} isEconomy={isEconomy} />
            <div className="my-4">
                <h3 className="font-bold my-2">Payment Method:</h3>
                <PaymentMethodPicker />
            </div>
            <div className="w-full flex flex-col items-end">
                <h2 className="text-xl text-theme-primary">
                    <strong>Price:</strong>{" "}
                    {isEconomy ? flight.economyPrice : flight.businessPrice}{" "}
                    <strong>USD</strong>
                </h2>
                <button
                    className="my-4 max-w-fit bg-theme-primary text-white font-bold p-2 rounded-xl hover:bg-theme-onSecondaryFixed"
                    onClick={handleButtonClicked}
                >
                    Place Order
                </button>
            </div>
        </div>
    );
}

export default Checkout;
