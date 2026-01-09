import React from "react";
import { FiShoppingBag } from "react-icons/fi";
import { FaMapLocationDot } from "react-icons/fa6";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { IoCall } from "react-icons/io5";

const FooterLinks = [
  { title: "Home", link: "/#" },
  { title: "About", link: "/#about" },
  { title: "Contact", link: "/#contact" },
  { title: "Blog", link: "/#blog" },
];

const SocialLinks = [
  { icon: <FaInstagram />, link: "#", label: "Instagram" },
  { icon: <FaFacebook />, link: "#", label: "Facebook" },
  { icon: <FaLinkedin />, link: "#", label: "Linkedin" },
];

const Footer = () => {
  return (
    <footer className="text-white bg-[#212529] dark:bg-gray-950 transition-colors duration-300">
      <div className="container mx-auto">
        <div data-aos="zoom-in" className="grid md:grid-cols-3 gap-10 py-12 px-4">
          
          {/* Company Details */}
          <div className="flex flex-col gap-4">
            <h1 className="text-2xl sm:text-3xl font-bold flex items-center gap-3">
              <FiShoppingBag className="text-primary" />
              ShopMe
            </h1>
            <p className="text-gray-400 text-sm leading-7 max-w-[300px]">
              ShopMe is your one-stop destination for all your shopping needs, 
              offering a wide range of products with convenience and style.
            </p>
          </div>

          {/* Links Section */}
          <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 gap-8">
            
            {/* Column 1: Important Links */}
            <div>
              <h2 className="text-xl font-bold mb-4">Important Links</h2>
              <ul className="flex flex-col gap-3">
                {FooterLinks.map((link) => (
                  <li key={link.title}>
                    <a 
                      href={link.link} 
                      className="text-gray-400 hover:text-white hover:translate-x-1 duration-300 inline-block"
                    >
                      {link.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 2: Secondary Links */}
            <div>
              <h2 className="text-xl font-bold mb-4">Quick Links</h2>
              <ul className="flex flex-col gap-3">
                {FooterLinks.map((link) => (
                  <li key={`sec-${link.title}`}>
                    <a 
                      href={link.link} 
                      className="text-gray-400 hover:text-white hover:translate-x-1 duration-300 inline-block"
                    >
                      {link.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Contact & Socials */}
            <div className="col-span-2 sm:col-span-1">
              <h2 className="text-xl font-bold mb-4">Contact Us</h2>
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3 text-gray-400">
                  <FaMapLocationDot className="text-xl shrink-0" />
                  <p className="text-sm">Dhangadhi 5, Taranagar</p>
                </div>
                <div className="flex items-center gap-3 text-gray-400">
                  <IoCall className="text-xl shrink-0" />
                  <p className="text-sm">+977 9840287647</p>
                </div>
                
                {/* Social Icons */}
                <div className="flex items-center gap-4 mt-4">
                  {SocialLinks.map((social, index) => (
                    <a 
                      key={index}
                      href={social.link} 
                      aria-label={social.label}
                      className="text-3xl text-gray-400 hover:text-white transition-all duration-300 hover:scale-110"
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Bottom Footer Credits */}
        <div className="border-t border-gray-700 py-6 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} ShopMe. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;