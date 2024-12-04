import { AnimatePresence, motion } from "motion/react";
import React from "react";

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
              <a className="py-2 hover:underline" href="">
                Info
              </a>
              <a className="py-2 hover:underline" href="">
                Info
              </a>
              <a className="py-2 hover:underline" href="">
                Info
              </a>
              <a className="py-2 hover:underline" href="">
                Info
              </a>
              <a className="py-2 hover:underline" href="">
                Info
              </a>
            </div>
            <div className="flex flex-col">
              <h2 className="font-bold">Procedure Guide</h2>
              <a className="py-2 hover:underline" href="">
                Info
              </a>
              <a className="py-2 hover:underline" href="">
                Info
              </a>
              <a className="py-2 hover:underline" href="">
                Info
              </a>
              <a className="py-2 hover:underline" href="">
                Info
              </a>
              <a className="py-2 hover:underline" href="">
                Info
              </a>
            </div>
            {/* <div className="flex flex-col">
                    <h2 className='font-bold'>Plane</h2>
                    <a className='py-2 hover:underline' href="">Info</a>
                    <a className='py-2 hover:underline' href="">Info</a>
                    <a className='py-2 hover:underline' href="">Info</a>
                    <a className='py-2 hover:underline' href="">Info</a>
                    <a className='py-2 hover:underline' href="">Info</a>
                </div> */}
            {/* <div className="flex flex-col">
                    <h2 className='font-bold'>Travel document</h2>
                    <a className='py-2 hover:underline' href="">Info</a>
                    <a className='py-2 hover:underline' href="">Info</a>
                    <a className='py-2 hover:underline' href="">Info</a>
                    <a className='py-2 hover:underline' href="">Info</a>
                    <a className='py-2 hover:underline' href="">Info</a>
                </div>
                <div className="flex flex-col">
                    <h2 className='font-bold'>Airport & Network</h2>
                    <a className='py-2 hover:underline' href="">Info</a>
                    <a className='py-2 hover:underline' href="">Info</a>
                    <a className='py-2 hover:underline' href="">Info</a>
                    <a className='py-2 hover:underline' href="">Info</a>
                    <a className='py-2 hover:underline' href="">Info</a>
                </div> */}
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
              <a className="py-2 hover:underline" href="/explore/0">
                Ha Noi
              </a>
              <a className="py-2 hover:underline" href="/explore/1">
                Ho Chi Minh City
              </a>
              <a className="py-2 hover:underline" href="/explore/2">
                Ha Long Bay
              </a>
              <a className="py-2 hover:underline" href="/explore/3">
                Hoi An
              </a>
              <a className="py-2 hover:underline" href="/explore/11">
                Hue
              </a>
            </div>
            <div className="flex flex-col">
              <h2 className="font-bold">Flight</h2>
              <a className="py-2 hover:underline" href="">
                Info
              </a>
              <a className="py-2 hover:underline" href="">
                Info
              </a>
              <a className="py-2 hover:underline" href="">
                Info
              </a>
              <a className="py-2 hover:underline" href="">
                Info
              </a>
              <a className="py-2 hover:underline" href="">
                Info
              </a>
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
              <a className="py-2 hover:underline" href="">
                News
              </a>
              <a className="py-2 hover:underline" href="">
                News
              </a>
              <a className="py-2 hover:underline" href="">
                News
              </a>
              <a className="py-2 hover:underline" href="">
                News
              </a>
              <a className="py-2 hover:underline" href="">
                News
              </a>
            </div>
            <div className="flex flex-col">
              <h2 className="font-bold">Offers</h2>
              <a className="py-2 hover:underline" href="">
                Offer
              </a>
              <a className="py-2 hover:underline" href="">
                Offer
              </a>
              <a className="py-2 hover:underline" href="">
                Offer
              </a>
              <a className="py-2 hover:underline" href="">
                Offer
              </a>
              <a className="py-2 hover:underline" href="">
                Offer
              </a>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    );
}

export default DropDownMenu;
