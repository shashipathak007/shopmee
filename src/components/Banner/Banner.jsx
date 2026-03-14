import React from "react";
import BannerImg from "../../assets/4547829.jpg";
import { ShieldCheck, Zap, CreditCard, Gift, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  { id: 1, text: "Premium Quality", icon: ShieldCheck, color: "bg-blue-100/50 text-blue-600 dark:bg-blue-400/10" },
  { id: 2, text: "Express Delivery", icon: Zap, color: "bg-orange-100/50 text-orange-600 dark:bg-orange-400/10" },
  { id: 3, text: "Secure Payment", icon: CreditCard, color: "bg-green-100/50 text-green-600 dark:bg-green-400/10" },
  { id: 4, text: "Exclusive Offers", icon: Gift, color: "bg-purple-100/50 text-purple-600 dark:bg-purple-400/10" },
];

const Banner = () => {
  return (
    <section id="categories" className="py-24 bg-gray-50/50 dark:bg-gray-950/20">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          {/* Decorative Image Container */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute -inset-10 bg-primary/20 blur-[100px] rounded-full -z-10 animate-pulse" />
            <div className="relative rounded-[3rem] overflow-hidden border-[12px] border-white dark:border-gray-800 shadow-2xl">
              <img
                src={BannerImg}
                alt="Banner"
                className="w-full h-[500px] object-cover hover:scale-105 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-10">
                <div className="text-white">
                  <p className="font-black text-6xl">50%</p>
                  <p className="font-bold tracking-widest uppercase text-sm">Off This Season</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Content Details */}
          <div className="space-y-12">
            <div className="space-y-4">
              <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="text-primary font-black uppercase tracking-[0.3em] text-sm"
              >
                Winter Lifestyle
              </motion.p>
              <motion.h2 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-5xl lg:text-7xl font-black text-gray-900 dark:text-white leading-[1.1]"
              >
                Elegance in <br /><span className="text-primary">Every Thread</span>
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-xl text-gray-500 dark:text-gray-400 font-medium leading-relaxed max-w-xl"
              >
                Experience the perfect blend of comfort and style. Our premium winter collection is designed to keep you warm without compromising on your fashion standards.
              </motion.p>
            </div>

            {/* Features List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.div 
                    key={feature.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-4 bg-white dark:bg-gray-900 p-5 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 hover:shadow-xl transition-all duration-300"
                  >
                    <div className={`p-3 rounded-xl ${feature.color}`}>
                      <Icon size={24} />
                    </div>
                    <span className="font-bold text-gray-800 dark:text-gray-100">{feature.text}</span>
                  </motion.div>
                );
              })}
            </div>

            <motion.button 
              whileHover={{ x: 10 }}
              className="group flex items-center gap-3 bg-primary text-white py-5 px-10 rounded-full font-black uppercase tracking-widest text-sm shadow-xl shadow-primary/30"
            >
              Learn More <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Banner;