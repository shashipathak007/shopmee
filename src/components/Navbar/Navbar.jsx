import { NavLink } from "react-router-dom";
import { ShoppingBag, ShoppingCart } from "lucide-react";
import DarkMode from "./DarkMode";

const Navbar = ({ onOrder }) => {
  return (
    <nav className="sticky top-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur border-b">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <NavLink to="/" className="flex items-center gap-2 text-2xl font-bold text-indigo-600">
          <ShoppingBag />
          ShopMe
        </NavLink>

        <div className="hidden md:flex gap-6 font-medium">
          <NavLink to="/" className="hover:text-indigo-600">Home</NavLink>
          <NavLink to="/products" className="hover:text-indigo-600">Products</NavLink>
          <NavLink to="/contact" className="hover:text-indigo-600">Contact</NavLink>
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={onOrder}
            className="flex items-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-full hover:bg-indigo-700"
          >
            <ShoppingCart size={18} />
            Order
          </button>
          <DarkMode />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
