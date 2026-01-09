import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import ProductsPage from "./pages/ProductsPage";
import Contact from "./pages/Contact";
import Footer from "./components/Footer/Footer";
import Popup from "./components/Popup/Popup";
import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {
  const [orderPopup, setOrderPopup] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 800, once: false });
  }, []);

  return (
    <div className="bg-slate-50 dark:bg-slate-950 dark:text-white min-h-screen">
      <Navbar onOrder={() => setOrderPopup(true)} />
      <Routes>
        <Route path="/" element={<Home onOrder={() => setOrderPopup(true)} />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
      <Popup orderPopup={orderPopup} setOrderPopup={setOrderPopup} />
    </div>
  );
};

export default App;
