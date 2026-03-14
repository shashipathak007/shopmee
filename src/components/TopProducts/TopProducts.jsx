import React from "react";
import Img1 from "../../assets/shirt/shirt.png";
import Img2 from "../../assets/shirt/shirt2.png";
import Img3 from "../../assets/shirt/shirt3.png";
import { Star, ArrowRight, ShoppingCart } from "lucide-react";
import { motion } from "framer-motion";

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
    <section id="trending" className="py-24 bg-gray-50 dark:bg-gray-950/50 transition-colors duration-300">
      <div className="container">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-20">
          <div className="space-y-4">
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-sm text-primary font-black uppercase tracking-[0.3em]"
            >
              Customer Favorites
            </motion.p>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl sm:text-6xl font-black text-gray-900 dark:text-white"
            >
              Our Best Rated <span className="text-primary">Products</span>
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
          >
            <p className="text-gray-500 dark:text-gray-400 font-medium max-w-md lg:text-right">
              Join thousands of satisfied customers who have experienced the premium quality of our top-rated collections.
            </p>
          </motion.div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-32 gap-x-12 mt-32">
          {ProductsData.map((data, index) => (
            <motion.div
              key={data.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="relative group bg-white dark:bg-gray-900 p-8 rounded-[3rem] shadow-xl hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.1)] transition-all duration-500 border border-gray-100 dark:border-gray-800"
            >
              {/* Floating Image */}
              <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-full flex justify-center pointer-events-none">
                <motion.img
                  whileHover={{ rotate: 10, scale: 1.1 }}
                  src={data.img}
                  alt={data.title}
                  className="w-48 sm:w-56 drop-shadow-[0_35px_35px_rgba(0,0,0,0.4)] group-hover:drop-shadow-[0_45px_45px_rgba(0,0,0,0.5)] transition-all duration-500"
                />
              </div>

              {/* Card Content */}
              <div className="pt-24 text-center space-y-4">
                <div className="flex justify-center gap-1.5 text-yellow-500">
                  {[...Array(5)].map((_, i) => <Star key={i} size={18} fill="currentColor" />)}
                </div>
                
                <h3 className="text-2xl font-black text-gray-900 dark:text-white uppercase tracking-tight">
                  {data.title}
                </h3>
                
                <p className="text-gray-500 dark:text-gray-400 font-medium leading-relaxed line-clamp-3">
                  {data.description}
                </p>

                <div className="pt-4">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleOrderPopup}
                    className="inline-flex items-center gap-2 bg-primary text-white py-4 px-10 rounded-2xl font-black uppercase tracking-widest text-xs shadow-lg shadow-primary/20 hover:bg-gray-900 dark:hover:bg-white dark:hover:text-gray-900 transition-colors"
                  >
                    Quick Order <ShoppingCart size={14} />
                  </motion.button>
                </div>
              </div>

              {/* Decorative Corner */}
              <div className="absolute top-6 right-6 text-primary/10">
                <ArrowRight size={40} className="-rotate-45" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopProducts;