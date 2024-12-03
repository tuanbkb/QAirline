import React from "react";
import { useState } from "react";
import Calendar from "react-calendar";

function CalendarPick({ chooseDate, setShowCalendar }) {
    const [date, setDate] = useState(new Date());

    const onChange = (date) => {
        chooseDate(date);
        setDate(date);
        setShowCalendar(false);
    };

    const isSameMonth = (date1, date2) => {
        return (
            date1.getMonth() === date2.getMonth() &&
            date1.getFullYear() === date2.getFullYear()
        );
    };

    return (
        <div className="absolute w-6xl" >
            <div className="border shadow-md p-2 w-96 bg-white rounded-xl">
                <div className="flex px-2">
                    <div className="grow"></div>
                    <span
                        className="text-2xl cursor-pointer"
                        onClick={() => setShowCalendar(false)}
                    >
                        &times;
                    </span>
                </div>
                <h2 className="text-theme-primary font-bold text-xl text-center">CHOOSE DATE</h2>
                <Calendar
                    onChange={onChange}
                    value={date}
                    className="custom-calendar"
                    // tileClassName={({ date: tileDate, view }) => {
                    //     if (!isSameMonth(date, tileDate)) return "opacity-30";
                    //     return "";
                    // }}
                />
            </div>
        </div>
    );
}

export default CalendarPick;
