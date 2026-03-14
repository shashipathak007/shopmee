import React from "react";
import Slider from "react-slick";
import { Quote, Star } from "lucide-react";
import { motion } from "framer-motion";

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
    id: 4,
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
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "cubic-bezier(0.4, 0, 0.2, 1)",
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section className="py-24 bg-white dark:bg-gray-950 transition-colors duration-300 relative overflow-hidden">
      {/* Decorative Gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] -z-0" />

      <div className="container relative z-10">
        <div className="text-center mb-20 space-y-4">
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-primary font-black uppercase tracking-[0.3em] text-sm"
          >
            Our Community
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl sm:text-6xl font-black text-gray-900 dark:text-white"
          >
            Voice of Our Customers
          </motion.h2>
          <div className="w-20 h-1.5 bg-primary mx-auto rounded-full" />
        </div>

        <div className="mx-[-20px]">
          <Slider {...settings}>
            {TestimonialData.map((data) => (
              <div key={data.id} className="p-5">
                <motion.div 
                  whileHover={{ y: -10 }}
                  className="h-full bg-white dark:bg-gray-900 p-10 rounded-[3rem] shadow-[0_20px_50px_rgba(0,0,0,0.03)] border border-gray-100 dark:border-gray-800 relative group transition-all duration-500"
                >
                  <Quote size={60} className="absolute top-8 right-10 text-primary/10 group-hover:text-primary/20 transition-colors" />
                  
                  <div className="flex flex-col gap-6 h-full">
                    <div className="flex items-center gap-4">
                      <img
                        src={data.img}
                        alt={data.name}
                        className="w-16 h-16 rounded-full border-4 border-primary/20 object-cover"
                      />
                      <div>
                        <h4 className="font-black text-gray-900 dark:text-white text-xl">{data.name}</h4>
                        <div className="flex gap-1 text-yellow-400">
                          {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-gray-500 dark:text-gray-400 text-lg italic leading-relaxed font-medium">
                      "{data.text}"
                    </p>
                  </div>
                </motion.div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;