import React from "react";
import { Send } from "lucide-react";
import { motion } from "framer-motion";

const Subscribe = () => {
  return (
    <section className="py-24 px-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="container max-w-6xl bg-primary rounded-[3rem] p-12 lg:p-24 relative overflow-hidden shadow-[0_40px_80px_-20px_rgba(254,169,40,0.4)]"
      >
        {/* Dynamic Abstract Shapes */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-black/5 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-center lg:text-left">
            <h2 className="text-4xl sm:text-6xl font-black text-white leading-tight">
              Get 20% Off Your First Purchase
            </h2>
            <p className="text-white/80 text-lg sm:text-xl font-medium max-w-md mx-auto lg:mx-0">
              Join our premium community and be the first to know about new arrivals and secret sales.
            </p>
          </div>

          <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
            <div className="flex flex-col sm:flex-row gap-4 p-2.5 bg-white rounded-[2rem] shadow-2xl">
              <input
                type="email"
                placeholder="luxury@style.com"
                className="flex-1 bg-transparent px-8 py-4 outline-none text-gray-900 font-bold placeholder:text-gray-400"
                required
              />
              <button 
                className="bg-gray-900 text-white px-10 py-4 rounded-[1.5rem] font-black uppercase tracking-widest text-sm hover:bg-primary transition-colors flex items-center justify-center gap-2 group"
              >
                Join Now <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </div>
            <p className="text-white/60 text-xs font-bold text-center uppercase tracking-widest">
              No spam. Just style. Unsubscribe anytime.
            </p>
          </form>
        </div>
      </motion.div>
    </section>
  );
};

export default Subscribe;