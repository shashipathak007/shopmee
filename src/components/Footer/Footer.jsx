import React from "react";
import { FiShoppingBag } from "react-icons/fi";
import { FaMapLocationDot } from "react-icons/fa6";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import { IoCall } from "react-icons/io5";

const FooterLinks = [
  {
    title: "Home",
    link: "/#",
  },
  {
    title: "About",
    link: "/#about",
  },
  {
    title: "Contact",
    link: "/#contact",
  },
  {
    title: "Blog",
    link: "/#blog",
  },
];

const Footer = () => {
  return (
    <div className="text-white bg-[#212529] py-10">
      <div className="container">
        <div data-aos="zoom-in" className="grid md:grid-cols-3 gap-8 pb-10 pt-5">
          {}
          <div className="px-4">
            <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-4 flex items-center gap-2">
              <FiShoppingBag size="30" />
              ShopMe
            </h1>
            <p className="text-gray-300 leading-relaxed">
              ShopMe is your one-stop destination for all your shopping needs, offering a wide range of products with convenience and style.
            </p>
          </div>

          {}
          <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10 gap-8">
            <div>
              <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                Important Links
              </h1>
              <ul className="flex flex-col gap-3">
                {FooterLinks.map((link) => (
                  <li
                    className="cursor-pointer hover:text-primary hover:translate-x-1 duration-300 text-gray-200"
                    key={link.title}
                  >
                    <span>{link.title}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                Links
              </h1>
              <ul className="flex flex-col gap-3">
                {FooterLinks.map((link) => (
                  <li
                    className="cursor-pointer hover:text-primary hover:translate-x-1 duration-300 text-gray-200"
                    key={link.title}
                  >
                    <span>{link.title}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="px-4 mt-6 md:mt-0">
              <div className="flex items-center gap-4 mb-6">
                <a href="#" className="hover:text-primary transition-colors duration-300">
                  <FaInstagram className="text-3xl" />
                </a>
                <a href="#" className="hover:text-primary transition-colors duration-300">
                  <FaFacebook className="text-3xl" />
                </a>
                <a href="#" className="hover:text-primary transition-colors duration-300">
                  <FaLinkedin className="text-3xl" />
                </a>
              </div>
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <FaMapLocationDot className="text-xl" />
                  <p>Dhangadhi 5, Taranagar</p>
                </div>
                <div className="flex items-center gap-3">
                  <IoCall className="text-xl" />
                  <p>+977 9840287647</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;