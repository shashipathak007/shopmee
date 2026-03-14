import React from "react";
import Img1 from "../../assets/women/women.png";
import Img2 from "../../assets/women/women2.jpg";
import Img3 from "../../assets/women/women3.jpg";
import Img4 from "../../assets/women/women4.jpg";
import { Star, ShoppingCart } from "lucide-react";
import { motion } from "framer-motion";

const ProductsData = [
  {
    id: 1,
    img: Img1,
    title: "Elegant Women's Ethnic Wear",
    rating: 5.0,
    color: "White",
    price: "$45.00",
  },
  {
    id: 2,
    img: Img2,
    title: "Chic Western Style",
    rating: 4.5,
    color: "Red",
    price: "$32.00",
  },
  {
    id: 3,
    img: Img3,
    title: "Protective Goggles",
    rating: 4.7,
    color: "Brown",
    price: "$15.00",
  },
  {
    id: 4,
    img: Img4,
    title: "Printed T-Shirt",
    rating: 4.4,
    color: "Yellow",
    price: "$20.00",
  },
  {
    id: 5,
    img: Img2,
    title: "Trendy Fashion T-Shirt",
    rating: 4.5,
    color: "Pink",
    price: "$25.00",
  },
];

const Products = () => {
  return (
    <section id="arrivals" className="py-24 bg-white dark:bg-gray-950 transition-colors duration-300">
      <div className="container px-4">
        {/* Header Section */}
        <div className="text-center mb-20 max-w-3xl mx-auto space-y-4">
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-sm text-primary font-black uppercase tracking-[0.3em]"
          >
            Curated For You
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl sm:text-5xl font-black text-gray-900 dark:text-white"
          >
            Explore Our Collection
          </motion.h2>
          <div className="w-20 h-1.5 bg-primary mx-auto rounded-full" />
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-10">
          {ProductsData.map((data, index) => (
            <motion.div
              key={data.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="relative rounded-[2rem] overflow-hidden bg-gray-50 dark:bg-gray-900 aspect-[3/4] shadow-sm group-hover:shadow-2xl transition-all duration-500">
                <img
                  src={data.img}
                  alt={data.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Rating Badge */}
                <div className="absolute top-4 right-4 bg-white/90 dark:bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-lg border border-white/20">
                   <Star size={14} className="fill-yellow-400 text-yellow-400" />
                   <span className="text-sm font-black text-gray-900 dark:text-white">{data.rating}</span>
                </div>

                {/* Overlay Action */}
                <div className="absolute inset-x-0 bottom-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500 bg-gradient-to-t from-black/80 to-transparent">
                  <button className="w-full bg-white text-gray-900 font-black py-3 rounded-2xl flex items-center justify-center gap-2 hover:bg-primary hover:text-white transition-colors uppercase tracking-widest text-xs">
                    <ShoppingCart size={16} /> Add To Cart
                  </button>
                </div>
              </div>

              {/* Info Details */}
              <div className="mt-6 px-2">
                <p className="text-xs font-black text-primary uppercase tracking-widest mb-1">{data.color}</p>
                <h3 className="font-bold text-lg text-gray-900 dark:text-white truncate mb-2">
                  {data.title}
                </h3>
                <p className="text-2xl font-black text-gray-900 dark:text-white">{data.price}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Action Button */}
        <div className="flex justify-center mt-20">
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gray-950 dark:bg-primary text-white py-5 px-12 rounded-full font-black uppercase tracking-[0.2em] text-sm shadow-2xl hover:bg-primary dark:hover:bg-white dark:hover:text-primary transition-all duration-300"
          >
            View All Products
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default Products;