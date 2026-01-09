import React from "react";
import BannerImg from "../../assets/4547829.jpg";
import { GrSecure } from "react-icons/gr";
import { IoFastFood } from "react-icons/io5";
import { GiFoodTruck } from "react-icons/gi";

const Banner = () => {
  // 1. Centralized data for easier updates
  const features = [
    { id: 1, text: "Quality Products", icon: <GrSecure />, color: "bg-violet-100 dark:bg-violet-400" },
    { id: 2, text: "Fast Delivery", icon: <IoFastFood />, color: "bg-orange-100 dark:bg-orange-400" },
    { id: 3, text: "Easy Payment method", icon: <GiFoodTruck />, color: "bg-green-100 dark:bg-green-400" },
    { id: 4, text: "Get Offers", icon: <GiFoodTruck />, color: "bg-yellow-100 dark:bg-yellow-400" },
  ];

  return (
    <div className="min-h-[550px] flex justify-center items-center py-12 sm:py-0 bg-white dark:bg-gray-950 dark:text-white transition-colors duration-300">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 items-center">
          
          {/* Image section */}
          <div data-aos="zoom-in">
            <img
              src={BannerImg}
              alt="Winter Sale Banner"
              className="max-w-[400px] h-[350px] w-full mx-auto object-cover drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)] rounded-lg"
            />
          </div>

          {/* Text details section */}
          <div className="flex flex-col justify-center gap-6 sm:pt-0">
            <h1 data-aos="fade-up" className="text-3xl sm:text-4xl font-bold">
              Winter Sale upto 50% Off
            </h1>
            <p
              data-aos="fade-up"
              className="text-sm text-gray-500 tracking-wide leading-6"
            >
              Experience the best deals this season. High-quality products 
              delivered right to your doorstep with secure payment options.
            </p>

            <div className="flex flex-col gap-4">
              {features.map((feature, index) => (
                <div 
                  key={feature.id}
                  data-aos="fade-up" 
                  data-aos-delay={index * 100} // Staggered animation
                  className="flex items-center gap-4"
                >
                  <div className={`text-2xl h-12 w-12 shadow-sm p-3 rounded-full flex items-center justify-center ${feature.color}`}>
                    {feature.icon}
                  </div>
                  <p className="font-medium">{feature.text}</p>
                </div>
              ))}
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Banner;