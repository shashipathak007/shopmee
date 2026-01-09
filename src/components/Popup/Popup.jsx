import React, { useRef } from "react";
import { IoCloseOutline } from "react-icons/io5";

const Popup = ({ orderPopup, setOrderPopup }) => {
  const modalRef = useRef();

  // Close popup when clicking on the backdrop
  const closePopup = (e) => {
    if (modalRef.current === e.target) {
      setOrderPopup(false);
    }
  };

  if (!orderPopup) return null;

  return (
    <div 
      ref={modalRef}
      onClick={closePopup}
      className="fixed inset-0 h-screen w-screen bg-black/50 z-50 backdrop-blur-sm flex justify-center items-center p-4"
    >
      <div 
        data-aos="zoom-in"
        className="bg-white dark:bg-gray-900 dark:text-white rounded-xl shadow-2xl duration-300 w-full max-w-[400px] overflow-hidden"
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b dark:border-gray-700">
          <h1 className="text-xl font-bold">Place Your Order</h1>
          <button 
            onClick={() => setOrderPopup(false)}
            aria-label="Close modal"
          >
            <IoCloseOutline className="text-3xl text-gray-400 hover:text-primary transition-colors" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6">
          <form onSubmit={(e) => e.preventDefault()} className="flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium ml-1">Full Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-800 px-4 py-2 focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all"
                required
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium ml-1">Email Address</label>
              <input
                type="email"
                placeholder="example@gmail.com"
                className="w-full rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-800 px-4 py-2 focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all"
                required
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium ml-1">Delivery Address</label>
              <textarea
                placeholder="Your full address"
                rows="3"
                className="w-full rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-800 px-4 py-2 focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all resize-none"
                required
              />
            </div>

            <div className="mt-2">
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-primary to-secondary hover:scale-105 active:scale-95 duration-200 text-white py-3 rounded-lg shadow-lg font-bold text-lg"
              >
                Confirm Order
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Popup;