import React from "react";
import Img1 from "../../assets/shirt/shirt.png";
import Img2 from "../../assets/shirt/shirt2.png";
import Img3 from "../../assets/shirt/shirt3.png";
import { FaStar } from "react-icons/fa";

const ProductsData = [
  {
    id: 1,
    img: Img1,
    title: "Comfy Casual Wear",
    description: "Perfect for everyday comfort, our casual wear combines soft fabrics with a relaxed fit.",
  },
  {
    id: 2,
    img: Img2,
    title: "Stylish Printed Shirt",
    description: "Make a statement with our vibrant printed shirts, featuring unique designs and a tailored fit.",
  },
  {
    id: 3,
    img: Img3,
    title: "Elegant Women's Shirt",
    description: "Discover our collection of women's shirts, crafted with attention to detail and sophistication.",
  },
];

const TopProducts = ({ handleOrderPopup }) => {
  return (
    <section className="py-24 dark:bg-gray-950 dark:text-white">
      <div className="container">
        <div className="text-left mb-28">
          <p data-aos="fade-up" className="text-sm text-primary font-bold uppercase tracking-widest">
            Top Rated Products for you
          </p>
          <h1 data-aos="fade-up" data-aos-delay="100" className="text-4xl font-bold">
            Best Products
          </h1>
          <p data-aos="fade-up" data-aos-delay="200" className="text-sm text-gray-400 max-w-[400px]">
            Explore our curated selection of top-rated products, loved by our customers for their quality and style.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-24 md:gap-5 place-items-center">
          {ProductsData.map((data) => (
            <div
              key={data.id}
              data-aos="zoom-in"
              className="rounded-2xl bg-white dark:bg-gray-800 hover:bg-gray-900 dark:hover:bg-primary hover:text-white relative shadow-2xl duration-300 group max-w-[300px] mt-10"
            >
              <div className="h-[100px]">
                <img
                  src={data.img}
                  alt={data.title}
                  className="max-w-[140px] block mx-auto transform -translate-y-20 group-hover:scale-110 duration-500 drop-shadow-2xl"
                />
              </div>

              <div className="p-6 text-center">
                <div className="w-full flex items-center justify-center gap-1 mb-2">
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                </div>
                <h2 className="text-xl font-bold mb-2">{data.title}</h2>
                <p className="text-gray-500 group-hover:text-white/90 duration-300 text-sm line-clamp-2 mb-4">
                  {data.description}
                </p>
                <button
                  className="bg-primary hover:scale-105 duration-300 text-white py-2 px-6 rounded-full group-hover:bg-white group-hover:text-primary font-bold shadow-md"
                  onClick={handleOrderPopup}
                >
                  Order Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopProducts;