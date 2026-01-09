import React from "react";

const Subscribe = () => {
  return (
    <div
      data-aos="zoom-in"
      className="mb-20 bg-gradient-to-r from-primary to-secondary/80 dark:bg-gray-800 text-white"
    >
      <div className="container backdrop-blur-sm py-12">
        <div className="space-y-6 max-w-xl mx-auto">
          <h1 className="text-2xl !text-center sm:text-4xl font-semibold px-4">
            Get Notified About New Products
          </h1>
          <div data-aos="fade-up" className="flex flex-col sm:flex-row gap-0 px-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-4 text-gray-900 rounded-t-lg sm:rounded-l-lg sm:rounded-t-none outline-none focus:ring-2 focus:ring-primary"
              required
            />
            <button className="bg-gray-900 dark:bg-primary text-white px-8 py-4 rounded-b-lg sm:rounded-r-lg sm:rounded-b-none font-bold hover:bg-gray-800 transition-colors uppercase tracking-wide">
              Subscribe
            </button>
          </div>
          <p className="text-center text-xs text-white/70">
            We'll never share your email with third parties.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;