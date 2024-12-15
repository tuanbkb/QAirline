import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";
import AirportList from "./AirportList";
import CalendarPick from "../CalendarPick";
import { useNavigate } from "react-router-dom";
import { fetchAllCities } from "../../api/api";
import { getFormattedDate } from "../../utils/TimeFormat";

function BookFlight() {
  //UI LOGIC
  const navigate = useNavigate();
  const [menuOption, setMenuOption] = useState("Book");

  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [depart, setDepart] = useState("");
  const [bookingError, setBookingError] = useState("");

  function handleSwitchFromTo() {
    if (from === "" || to === "") return;
    const temp = from;
    setFrom(to);
    setTo(temp);
  }

  // AIRPORT LIST FUNCTIONS
  const [showAirportListFrom, setShowAirportListFrom] = useState(false);
  const [showAirportListTo, setShowAirportListTo] = useState(false);

  // CALENDAR FUNCTIONS
  const [showCalendar, setShowCalendar] = useState(false);

  // BUTTON FUNCTIONS
  const onSearchFlightButtonClicked = () => {
    setBookingError("");
    let error = false;
    if (depart === "") {
      setBookingError("Departing date can't be blank");
      error = true;
    }
    if (to === "") {
      setBookingError("Destination city can't be blank");
      error = true;
    }
    if (from === "") {
      setBookingError("Destination city can't be blank");
      error = true;
    }

    if (!error) navigate("/searchflight", { state: { from, to, depart } });
  };

  return (
    <div className="max-w-4xl m-auto">
      <div className="shadow-md bg-theme-primary rounded-xl border">
        <h2 className="font-bold text-white text-xl text-center p-3">
          Search flight
        </h2>
        <div className="p-4 bg-white rounded-b-lg">
          {/* {menuOption === "Book" ? ( */}
          <div className="flex gap-5 max-lg:flex-col">
            <ul className="flex grow gap-2 items-center max-lg:flex-col">
              <li className="flex flex-col border-gray-400 border p-2 grow max-lg:w-full rounded-md">
                <label className="text-theme-outline">From</label>
                <input
                  type="text"
                  value={from.cityName}
                  readOnly
                  placeholder="Hanoi"
                  onChange={(e) => setFrom(e.target.value)}
                  onFocus={() => {
                    setShowAirportListFrom(true);
                    setShowAirportListTo(false);
                    setShowCalendar(false);
                  }}
                ></input>
                <div className="relative top-1">
                  {showAirportListFrom && (
                    <AirportList
                      chooseAirport={setFrom}
                      showAirportList={setShowAirportListFrom}
                    />
                  )}
                </div>
              </li>
              <button
                className="bg-theme-inversePrimary rounded-full h-min px-2 py-1"
                onClick={handleSwitchFromTo}
              >
                &#8644;
              </button>
              <li className="flex flex-col grow border-gray-400 border rounded-md p-2 max-lg:w-full">
                <label className="text-theme-outline">To</label>
                <input
                  type="text"
                  value={to.cityName}
                  readOnly
                  placeholder="Saigon"
                  onChange={(e) => setTo(e.target.value)}
                  onFocus={() => {
                    setShowAirportListTo(true);
                    setShowAirportListFrom(false);
                    setShowCalendar(false);
                  }}
                ></input>
                <div className="relative top-1">
                  {showAirportListTo && (
                    <AirportList
                      chooseAirport={setTo}
                      showAirportList={setShowAirportListTo}
                    />
                  )}
                </div>
              </li>
              <li className="flex flex-col grow border-gray-400 border p-2 max-lg:w-full rounded-md">
                <label className="text-theme-outline">Depart</label>
                <input
                  type="text"
                  value={getFormattedDate(depart)}
                  readOnly
                  placeholder="dd/mm/yyyy"
                  onFocus={() => {
                    setShowCalendar(true);
                    setShowAirportListFrom(false);
                    setShowAirportListTo(false);
                  }}
                ></input>
                <div className="relative top-1">
                  {showCalendar && (
                    <CalendarPick
                      chooseDate={setDepart}
                      setShowCalendar={setShowCalendar}
                    />
                  )}
                </div>
              </li>
            </ul>
            <button
              className="bg-theme-primary text-theme-onPrimary font-bold rounded-xl p-4 px-6 border-[#69548D] border-2 transition-all ease-in-out hover:bg-white hover:text-theme-primary "
              onClick={onSearchFlightButtonClicked}
            >
              Search flight
            </button>
          </div>
          <span className="text-theme-error">{bookingError}</span>
        </div>
      </div>
    </div>
  );
}

export default BookFlight;
