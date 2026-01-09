import React from "react";
import Slider from "react-slick";

const TestimonialData = [
  {
    id: 1,
    name: "Victor",
    text: "ShopMe has truly transformed my online shopping experience! The quality of products is superb, and the delivery is always prompt.",
    img: "https://picsum.photos/101/101",
  },
  {
    id: 2,
    name: "Satya Nadella",
    text: "I'm incredibly impressed with ShopMe's customer service. They went above and beyond to ensure I was satisfied with my purchase.",
    img: "https://picsum.photos/102/102",
  },
  {
    id: 3,
    name: "Virat Kohli",
    text: "The variety of products on ShopMe is amazing! I can always find exactly what I'm looking for, and at great prices too.",
    img: "https://picsum.photos/104/104",
  },
  {
    id: 5,
    name: "Sachin Tendulkar",
    text: "ShopMe makes online shopping so easy and enjoyable. The website is user-friendly, and the checkout process is seamless.",
    img: "https://picsum.photos/103/103",
  },
];

const Testimonials = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 600,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "ease-in-out",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="py-16 mb-10 dark:bg-gray-950 dark:text-white transition-colors duration-300">
      <div className="container">
        <div className="text-center mb-12 max-w-[600px] mx-auto space-y-2">
          <p data-aos="fade-up" className="text-sm text-primary font-bold uppercase tracking-widest">
            What our customers are saying
          </p>
          <h1 data-aos="fade-up" data-aos-delay="100" className="text-3xl sm:text-4xl font-bold">
            Testimonials
          </h1>
          <p data-aos="fade-up" data-aos-delay="200" className="text-sm text-gray-400">
            Hear directly from our satisfied customers about their amazing experiences with ShopMe.
          </p>
        </div>

        <div data-aos="zoom-in">
          <Slider {...settings}>
            {TestimonialData.map((data) => (
              <div key={data.id} className="my-6">
                <div className="flex flex-col gap-4 shadow-xl py-8 px-6 mx-4 rounded-2xl dark:bg-gray-800 bg-primary/10 relative group hover:bg-primary/20 dark:hover:bg-gray-700 transition-all duration-300 min-h-[250px]">
                  <div className="mb-4">
                    <img
                      src={data.img}
                      alt={data.name}
                      className="rounded-full w-20 h-20 object-cover border-4 border-white dark:border-gray-600 shadow-md"
                    />
                  </div>
                  <div className="flex flex-col gap-3">
                    <p className="text-sm text-gray-500 dark:text-gray-300 leading-relaxed italic">
                      "{data.text}"
                    </p>
                    <h1 className="text-xl font-bold text-black/80 dark:text-white">
                      {data.name}
                    </h1>
                  </div>
                  <p className="text-primary/10 text-9xl font-serif absolute top-0 right-4 pointer-events-none">
                    ,,
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;