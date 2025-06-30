import React from "react";
import { IoCloseOutline } from "react-icons/io5";

const Popup = ({ orderPopup, setOrderPopup }) => {
  return (
    <>
      {orderPopup && (
        <div className="popup">
          <div className="h-screen w-screen fixed top-0 left-0 bg-black/50 z-50 backdrop-blur-sm flex justify-center items-center">
            <div className="fixed bg-white dark:bg-gray-900 rounded-lg shadow-xl duration-200 w-[90%] max-w-[400px] p-6">
              <div className="flex items-center justify-between pb-3 border-b border-gray-200 dark:border-gray-700 mb-4">
                <h1 className="text-xl font-semibold">Order Now</h1>
                <IoCloseOutline
                  className="text-3xl cursor-pointer text-gray-500 hover:text-red-500 transition-colors duration-200"
                  onClick={() => setOrderPopup(false)}
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full rounded-full border border-gray-300 dark:border-gray-600 dark:bg-gray-800 px-4 py-2 mb-4 focus:outline-none focus:border-primary transition-all duration-200"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full rounded-full border border-gray-300 dark:border-gray-600 dark:bg-gray-800 px-4 py-2 mb-4 focus:outline-none focus:border-primary transition-all duration-200"
                />
                <input
                  type="text"
                  placeholder="Address"
                  className="w-full rounded-full border border-gray-300 dark:border-gray-600 dark:bg-gray-800 px-4 py-2 mb-6 focus:outline-none focus:border-primary transition-all duration-200"
                />
                <div className="flex justify-center">
                  <button className="bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-2 px-6 rounded-full shadow-md text-lg">
                    Order Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Popup;