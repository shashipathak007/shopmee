import React, { useEffect } from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import Image1 from "../../assets/hero/women.png";
import Image2 from "../../assets/hero/shopping.png";
import Image3 from "../../assets/hero/sale.png";

const ImageList = [
  {
    id: 1,
    img: Image1,
    title: "Unbeatable Savings on Men's Wear!",
    description: "Revamp your wardrobe with our incredible discounts! Get up to 50% off on all men's clothing.",
  },
  {
    id: 2,
    img: Image2,
    title: "Fresh Styles for Women, 30% Off!",
    description: "Step out in confidence with our latest collection! Enjoy 30% off on all women's apparel.",
  },
  {
    id: 3,
    img: Image3,
    title: "Massive 70% Off - Shop the Sale!",
    description: "Don't miss out on our biggest sale ever! Grab incredible deals with 70% off today.",
  },
];

const Hero = ({ handleOrderPopup }) => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: false,
  };

  return (
    <section id="home" className="relative overflow-hidden min-h-[600px] sm:min-h-[800px] bg-gray-50 dark:bg-gray-950 flex justify-center items-center transition-all duration-500">
      
      {/* Dynamic Background Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-secondary/10 blur-[100px] rounded-full translate-y-1/2 -translate-x-1/2" />

      <div className="container relative z-10 py-20">
        <Slider {...settings}>
          {ImageList.map((data) => (
            <div key={data.id}>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center lg:px-10">
                
                {/* Text Content */}
                <div className="flex flex-col justify-center gap-6 text-center lg:text-left order-2 lg:order-1 px-4 lg:px-0">
                  <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-5xl sm:text-6xl lg:text-8xl font-black leading-[1.1] text-gray-900 dark:text-white"
                  >
                    {data.title}
                  </motion.h1>
                  <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="text-lg sm:text-xl text-gray-500 dark:text-gray-400 leading-relaxed max-w-xl mx-auto lg:mx-0 font-medium"
                  >
                    {data.description}
                  </motion.p>
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    <button
                      onClick={handleOrderPopup}
                      className="group relative bg-primary text-white py-5 px-12 rounded-full shadow-2xl shadow-primary/30 font-black text-xl active:scale-95 transition-all overflow-hidden"
                    >
                      <span className="relative z-10 flex items-center gap-2">Shop Now</span>
                      <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 pointer-events-none" />
                    </button>
                  </motion.div>
                </div>

                {/* Animated Image Content */}
                <div className="order-1 lg:order-2 flex justify-center items-center">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                    whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                    transition={{ type: "spring", stiffness: 100, delay: 0.1 }}
                    className="relative"
                  >
                    {/* Glow effect behind image */}
                    <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full scale-75 animate-pulse" />
                    <img
                      src={data.img}
                      alt={data.title}
                      className="w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] lg:scale-110 object-contain mx-auto drop-shadow-[30px_35px_35px_rgba(0,0,0,0.25)] hover:scale-105 transition-transform duration-700 pointer-events-none"
                    />
                  </motion.div>
                </div>

              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Hero;