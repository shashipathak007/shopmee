import React, { useState } from "react";
import { Search, ShoppingCart, ChevronDown, Menu, X } from "lucide-react";
import DarkMode from "./DarkMode";
import { motion, AnimatePresence } from "framer-motion";

const NavLinks = [
  { id: 1, name: "Home", link: "/#home" },
  { id: 2, name: "Trending", link: "/#trending" },
  { id: 3, name: "New Arrivals", link: "/#arrivals" },
  { id: 4, name: "Categories", link: "/#categories" },
];

const DropdownLinks = [
  { id: 1, name: "Best Selling", link: "/#trending" },
  { id: 2, name: "Top Rated", link: "/#trending" },
  { id: 3, name: "Limited Edition", link: "/#trending" },
];

const Navbar = ({ handleOrderPopup }) => {
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/80 dark:bg-gray-950/80 backdrop-blur-lg border-b border-gray-100 dark:border-gray-800 transition-colors duration-300">
      <div className="container mx-auto">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <motion.a 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            href="/" 
            className="text-2xl font-black flex items-center gap-2 group"
          >
            <div className="bg-primary p-1.5 rounded-lg">
              <ShoppingCart className="text-white" size={24} />
            </div>
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              ShopMe
            </span>
          </motion.a>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex items-center gap-8">
            {NavLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={link.link}
                  className="text-sm font-bold text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors uppercase tracking-widest relative group"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
                </a>
              </li>
            ))}
            {/* Simple Dropdown */}
            <li className="group relative cursor-pointer">
              <span className="flex items-center gap-1 text-sm font-bold text-gray-600 dark:text-gray-300 hover:text-primary uppercase tracking-widest transition-colors">
                Quick Links
                <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-300" />
              </span>
              <div className="absolute top-full left-0 mt-2 py-2 w-48 bg-white dark:bg-gray-900 rounded-xl shadow-2xl border border-gray-100 dark:border-gray-800 opacity-0 invisible group-hover:opacity-100 group-hover:visible translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                {DropdownLinks.map((item) => (
                  <a
                    key={item.id}
                    href={item.link}
                    className="block px-4 py-2.5 text-sm font-medium hover:bg-primary/10 hover:text-primary transition-colors"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </li>
          </ul>

          {/* Right Actions */}
          <div className="flex items-center gap-4">
            {/* Search */}
            <div className="hidden sm:flex relative group">
              <input
                type="text"
                placeholder="Search..."
                className="w-40 focus:w-64 transition-all duration-500 rounded-full border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 py-2 px-4 text-sm outline-none focus:ring-2 focus:ring-primary/50"
              />
              <Search className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-primary transition-colors" size={18} />
            </div>

            {/* Cart */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleOrderPopup}
              className="bg-primary text-white p-2.5 rounded-full shadow-lg hover:shadow-primary/30 transition-shadow relative"
            >
              <ShoppingCart size={20} />
              <span className="absolute -top-1 -right-1 bg-white text-primary text-[10px] h-4 w-4 rounded-full flex items-center justify-center font-bold border border-primary">
                0
              </span>
            </motion.button>

            <DarkMode />

            {/* Mobile Menu Toggle */}
            <button 
              className="lg:hidden p-2"
              onClick={() => setMobileMenu(!mobileMenu)}
            >
              {mobileMenu ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenu && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white dark:bg-gray-950 border-t border-gray-100 dark:border-gray-800 overflow-hidden"
          >
            <div className="container py-8 flex flex-col gap-6">
              {NavLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.link}
                  onClick={() => setMobileMenu(false)}
                  className="text-xl font-black uppercase tracking-widest text-gray-800 dark:text-white"
                >
                  {link.name}
                </a>
              ))}
              <div className="h-px bg-gray-100 dark:bg-gray-800" />
              <div className="flex gap-4">
                <input
                  type="text"
                  placeholder="Search..."
                  className="flex-1 rounded-full border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 py-3 px-6 text-base"
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;