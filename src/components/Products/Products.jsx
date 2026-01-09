import React from "react";
import Img1 from "../../assets/women/women.png";
import Img2 from "../../assets/women/women2.jpg";
import Img3 from "../../assets/women/women3.jpg";
import Img4 from "../../assets/women/women4.jpg";
import { FaStar } from "react-icons/fa6";

const ProductsData = [
  {
    id: 1,
    img: Img1,
    title: "Elegant Women's Ethnic Wear",
    rating: 5.0,
    color: "White",
    price: "$45.00",
    aosDelay: "0",
  },
  {
    id: 2,
    img: Img2,
    title: "Chic Western Style",
    rating: 4.5,
    color: "Red",
    price: "$32.00",
    aosDelay: "200",
  },
  {
    id: 3,
    img: Img3,
    title: "Protective Goggles",
    rating: 4.7,
    color: "Brown",
    price: "$15.00",
    aosDelay: "400",
  },
  {
    id: 4,
    img: Img4,
    title: "Printed T-Shirt",
    rating: 4.4,
    color: "Yellow",
    price: "$20.00",
    aosDelay: "600",
  },
  {
    id: 5,
    img: Img2,
    title: "Trendy Fashion T-Shirt",
    rating: 4.5,
    color: "Pink",
    price: "$25.00",
    aosDelay: "800",
  },
];

const Products = () => {
  return (
    <section className="py-16 dark:bg-gray-950 dark:text-white transition-colors duration-300">
      <div className="container px-4">
        {/* Header Section */}
        <div className="text-center mb-12 max-w-[600px] mx-auto space-y-2">
          <p data-aos="fade-up" className="text-sm text-primary font-bold uppercase tracking-widest">
            Top Selling Products
          </p>
          <h1 data-aos="fade-up" data-aos-delay="100" className="text-3xl sm:text-4xl font-bold">
            Explore Our Collection
          </h1>
          <p data-aos="fade-up" data-aos-delay="200" className="text-sm text-gray-500">
            Discover our handpicked selection of premium fashion items, curated for style and comfort.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 place-items-center">
          {ProductsData.map((data) => (
            <div
              data-aos="fade-up"
              data-aos-delay={data.aosDelay}
              key={data.id}
              className="group flex flex-col gap-2 w-full"
            >
              <div className="relative overflow-hidden rounded-xl shadow-md">
                <img
                  src={data.img}
                  alt={data.title}
                  className="h-[280px] w-full object-cover group-hover:scale-110 duration-500 transition-transform"
                />
                <div className="absolute top-2 right-2 bg-white/80 dark:bg-black/50 backdrop-blur-sm px-2 py-1 rounded-lg flex items-center gap-1">
                   <FaStar className="text-yellow-400 text-xs" />
                   <span className="text-xs font-bold">{data.rating}</span>
                </div>
              </div>

              <div className="mt-2 text-center sm:text-left">
                <h3 className="font-bold text-lg truncate" title={data.title}>
                  {data.title}
                </h3>
                <div className="flex justify-center sm:justify-start items-center gap-2 mt-1">
                   <p className="text-sm text-gray-500 dark:text-gray-400">{data.color}</p>
                   <span className="h-1 w-1 bg-gray-300 rounded-full"></span>
                   <p className="text-primary font-bold">{data.price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="flex justify-center mt-12">
          <button className="bg-gradient-to-r from-primary to-secondary text-white py-2 px-10 rounded-full hover:scale-105 duration-300 shadow-lg font-semibold uppercase tracking-wide">
            View All Products
          </button>
        </div>
      </div>
    </section>
  );
};

export default Products;