import React from "react";
import Slider from "react-slick"; 

import Image1 from "../../assets/hero/women.png";
import Image2 from "../../assets/hero/shopping.png";
import Image3 from "../../assets/hero/sale.png";


const ImageList = [
  {
    id: 1,
    img: Image1,
    title: "Unbeatable Savings on Men's Wear!",
    description:
      "Revamp your wardrobe with our incredible discounts! Get up to 50% off on all men's clothing. From casual tees to sharp formal wear, we've got your style covered.",
  },
  {
    id: 2,
    img: Image2,
    title: "Fresh Styles for Women, 30% Off!",
    description:
      "Step out in confidence with our latest collection! Enjoy 30% off on all women's apparel. Discover trendy dresses, comfortable tops, and stylish accessories for every occasion.",
  },
  {
    id: 3,
    img: Image3,
    title: "Massive 70% Off - Shop the Sale!",
    description:
      "Don't miss out on our biggest sale ever! Grab incredible deals with 70% off on a wide range of products. Limited stock, so shop now and save big!",
  },
];

const Hero = ({ handleOrderPopup }) => {
  var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    pauseOnHover: false, 
    pauseOnFocus: false, 
  };

  return (
    <div className="relative overflow-hidden min-h-[550px] sm:min-h-[650px] bg-gray-100 flex justify-center items-center dark:bg-slate-950 dark:text-white duration-200">
      {}
      <div className="h-[700px] w-[700px] bg-gradient-to-r from-purple-500 to-pink-500 absolute -top-1/2 right-0 rounded-3xl rotate-45 -z-10 opacity-70 blur-xl"></div>

      {}
      <div className="container pb-8 sm:pb-0 pt-10 sm:pt-0">
        <Slider {...settings}>
          {ImageList.map((data) => (
            <div key={data.id}> {}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 items-center">
                {}
                <div className="flex flex-col justify-center gap-6 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10">
                  <h1
                    data-aos="zoom-out"
                    data-aos-duration="500"
                    data-aos-once="true"
                    className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-tight mb-4 text-gray-900 dark:text-white drop-shadow-md"
                  >
                    {data.title}
                  </h1>
                  <p
                    data-aos="fade-up"
                    data-aos-duration="500"
                    data-aos-delay="100"
                    className="text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6 font-medium"
                  >
                    {data.description}
                  </p>
                  <div
                    data-aos="fade-up"
                    data-aos-duration="500"
                    data-aos-delay="300"
                  >
                    <button
                      onClick={handleOrderPopup}
                      className="bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-600 hover:to-cyan-700 transition-all duration-300 text-white py-3 px-8 rounded-full shadow-lg tracking-wide uppercase font-semibold text-lg animate-pulse"
                    >
                      Shop Now
                    </button>
                  </div>
                </div>
                {}
                <div className="order-1 sm:order-2 flex justify-center items-center">
                  <div
                    data-aos="zoom-in"
                    data-aos-once="true"
                    className="relative z-10 w-full flex justify-center items-center p-4 sm:p-0"
                  >
                    <img
                      src={data.img}
                      alt={data.title}
                      className="max-w-full h-auto w-[250px] sm:w-[400px] sm:h-[400px] lg:w-[500px] lg:h-[500px] object-contain mx-auto sm:scale-105 lg:scale-120 drop-shadow-2xl"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Hero;