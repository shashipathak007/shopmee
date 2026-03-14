import React, { useEffect } from "react";
import { X, User, Mail, MapPin, CheckCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Popup = ({ orderPopup, setOrderPopup }) => {
  useEffect(() => {
    if (orderPopup) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [orderPopup]);

  return (
    <AnimatePresence>
      {orderPopup && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOrderPopup(false)}
            className="absolute inset-0 bg-black/60 backdrop-blur-md"
          />

          {/* Modal */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="relative w-full max-w-lg bg-white dark:bg-gray-900 rounded-[2.5rem] shadow-2xl overflow-hidden border border-white/20"
          >
            {/* Header */}
            <div className="p-8 sm:p-10 border-b border-gray-100 dark:border-gray-800">
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-3xl font-black tracking-tight text-gray-900 dark:text-white">Checkout</h2>
                  <p className="text-gray-500 dark:text-gray-400 mt-1 font-medium">Please provide your details</p>
                </div>
                <button
                  onClick={() => setOrderPopup(false)}
                  className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                >
                  <X size={24} />
                </button>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={(e) => e.preventDefault()} className="p-8 sm:p-10 space-y-6 text-gray-900 dark:text-white">
              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-widest flex items-center gap-2">
                  <User size={14} className="text-primary" /> Full Name
                </label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full bg-gray-50 dark:bg-gray-950 border-2 border-gray-100 dark:border-gray-800 rounded-2xl px-6 py-4 outline-none focus:border-primary transition-colors font-medium"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-widest flex items-center gap-2">
                  <Mail size={14} className="text-primary" /> Email
                </label>
                <input
                  type="email"
                  placeholder="john@example.com"
                  className="w-full bg-gray-50 dark:bg-gray-950 border-2 border-gray-100 dark:border-gray-800 rounded-2xl px-6 py-4 outline-none focus:border-primary transition-colors font-medium"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-widest flex items-center gap-2">
                  <MapPin size={14} className="text-primary" /> Address
                </label>
                <textarea
                  placeholder="123 Luxury Ave, Fashion City"
                  rows="3"
                  className="w-full bg-gray-50 dark:bg-gray-950 border-2 border-gray-100 dark:border-gray-800 rounded-2xl px-6 py-4 outline-none focus:border-primary transition-colors font-medium resize-none"
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-primary text-white py-5 rounded-2xl shadow-xl shadow-primary/20 flex items-center justify-center gap-2 text-lg font-black uppercase tracking-widest"
              >
                Place Order <CheckCircle size={20} />
              </motion.button>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default Popup;