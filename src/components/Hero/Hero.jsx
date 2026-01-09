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
    <section className="relative overflow-hidden min-h-[550px] sm:min-h-[700px] bg-gray-100 dark:bg-gray-950 flex justify-center items-center transition-colors duration-300">
      
      {/* Background Pattern - Improved Opacity & Positioning */}
      <div className="h-[700px] w-[700px] bg-gradient-to-r from-primary/40 to-secondary/40 absolute -top-1/2 right-0 rounded-3xl rotate-45 -z-0 opacity-50 blur-3xl pointer-events-none"></div>

      <div className="container pb-8 sm:pb-0 pt-10 sm:pt-0">
        <Slider {...settings}>
          {ImageList.map((data) => (
            <div key={data.id}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center px-4">
                
                {/* Text content */}
                <div className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10">
                  <h1
                    data-aos="zoom-out"
                    data-aos-duration="500"
                    className="text-4xl sm:text-5xl lg:text-7xl font-extrabold leading-tight text-gray-900 dark:text-white"
                  >
                    {data.title}
                  </h1>
                  <p
                    data-aos="fade-up"
                    data-aos-duration="500"
                    data-aos-delay="100"
                    className="text-sm sm:text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-lg mx-auto sm:mx-0"
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
                      className="bg-gradient-to-r from-primary to-secondary hover:scale-105 transition-all duration-300 text-white py-2 px-6 sm:py-3 sm:px-8 rounded-full shadow-xl font-bold text-lg active:scale-95"
                    >
                      Shop Now
                    </button>
                  </div>
                </div>

                {/* Image content */}
                <div className="order-1 sm:order-2">
                  <div
                    data-aos="zoom-in"
                    className="relative z-10"
                  >
                    <img
                      src={data.img}
                      alt={data.title}
                      className="w-[300px] h-[300px] sm:h-[450px] sm:w-[450px] sm:scale-110 lg:scale-120 object-contain mx-auto drop-shadow-[-10px_10px_12px_rgba(0,0,0,0.5)]"
                    />
                  </div>
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