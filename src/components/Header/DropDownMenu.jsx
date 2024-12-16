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
              <h2 className="font-bold">Special Services</h2>
              <Link className="py-2 hover:underline" to="">
                Info
              </Link>
              <Link className="py-2 hover:underline" to="">
                Info
              </Link>
              <Link className="py-2 hover:underline" to="">
                Info
              </Link>
              <Link className="py-2 hover:underline" to="">
                Info
              </Link>
              <Link className="py-2 hover:underline" to="">
                Info
              </Link>
            </div>
            <div className="flex flex-col">
              <h2 className="font-bold">Procedure Guide</h2>
              <Link className="py-2 hover:underline" to="">
                Info
              </Link>
              <Link className="py-2 hover:underline" to="">
                Info
              </Link>
              <Link className="py-2 hover:underline" to="">
                Info
              </Link>
              <Link className="py-2 hover:underline" to="">
                Info
              </Link>
              <Link className="py-2 hover:underline" to="">
                Info
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
