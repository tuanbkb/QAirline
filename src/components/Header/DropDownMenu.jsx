import { AnimatePresence, motion } from "motion/react";
import React from "react";
import { Link } from "react-router-dom";

function DropDownMenu(props) {
  if (props.type === "info")
    return (
      <AnimatePresence>
        <motion.div
          className="z-50 absolute rounded-lg shadow-md bg-white w-screen "
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.1 }}
        >
          <div className="flex justify-center gap-20">
            <div className="flex flex-col">
              <Link className="font-bold hover:underline" to="/info/check-in">
                Check-in
              </Link>
              <Link
                className="py-2 hover:underline"
                to="/info/check-in/673cba65a356542ade3804cc"
              >
                Online check-in
              </Link>
              <Link
                className="py-2 hover:underline"
                to="/info/check-in/674ed566d7ee8c14add2b63c"
              >
                Kiosk check-in
              </Link>
              <Link
                className="py-2 hover:underline"
                to="/info/check-in/67556ce866022363084699ff"
              >
                Airport check-in
              </Link>
            </div>
            <div className="flex flex-col">
              <h2 className="font-bold">Baggage</h2>
              <Link
                className="py-2 hover:underline"
                to="/info/baggage/67556db66602236308469a00"
              >
                Hand luggage
              </Link>
            </div>
            <div className="flex flex-col">
              <Link className="font-bold hover:underline" to="/info/check-in">
                Travel guide
              </Link>
              <Link
                className="py-2 hover:underline"
                to="/info/travel-guide/67603cf629104878ea08a4f4"
              >
                For Vietnam domestic flights
              </Link>
              <Link
                className="py-2 hover:underline"
                to="/info/travel-guide/67603d4e29104878ea08a4f5"
              >
                For flights to Vietnam
              </Link>
              <Link
                className="py-2 hover:underline"
                to="/info/travel-guide/67603daf29104878ea08a4f6"
              >
                For flights from Vietnam to other countries
              </Link>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    );
  else if (props.type === "explore")
    return (
      <AnimatePresence>
        <motion.div
          className="z-50 absolute rounded-lg shadow-md bg-white w-screen "
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.1 }}
        >
          <div className="flex justify-center gap-20">
            <div className="flex flex-col">
              <h2 className="font-bold">Destination</h2>
              <Link className="py-2 hover:underline" to="/explore/0">
                Ha Noi
              </Link>
              <Link className="py-2 hover:underline" to="/explore/1">
                Ho Chi Minh City
              </Link>
              <Link className="py-2 hover:underline" to="/explore/2">
                Ha Long Bay
              </Link>
              <Link className="py-2 hover:underline" to="/explore/3">
                Hoi An
              </Link>
              <Link className="py-2 hover:underline" to="/explore/11">
                Hue
              </Link>
            </div>
            <div className="flex flex-col">
              <h2 className="font-bold">&#847;</h2>
              <Link className="py-2 hover:underline" to="/explore/5">
                Kyoto
              </Link>
              <Link className="py-2 hover:underline" to="/explore/19">
                Bangkok
              </Link>
              <Link className="py-2 hover:underline" to="/explore/6">
                Paris
              </Link>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    );
  else
    return (
      <AnimatePresence>
        <motion.div
          className="z-50 absolute rounded-lg shadow-md bg-white w-screen "
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.1 }}
        >
          <div className="flex justify-center gap-20">
            <div className="flex flex-col">
              <h2 className="font-bold">News</h2>
              <Link className="py-2 hover:underline" to="">
                News
              </Link>
              <Link className="py-2 hover:underline" to="">
                News
              </Link>
              <Link className="py-2 hover:underline" to="">
                News
              </Link>
              <Link className="py-2 hover:underline" to="">
                News
              </Link>
              <Link className="py-2 hover:underline" to="">
                News
              </Link>
            </div>
            <div className="flex flex-col">
              <h2 className="font-bold">Offers</h2>
              <Link className="py-2 hover:underline" to="">
                Offer
              </Link>
              <Link className="py-2 hover:underline" to="">
                Offer
              </Link>
              <Link className="py-2 hover:underline" to="">
                Offer
              </Link>
              <Link className="py-2 hover:underline" to="">
                Offer
              </Link>
              <Link className="py-2 hover:underline" to="">
                Offer
              </Link>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    );
}

export default DropDownMenu;
