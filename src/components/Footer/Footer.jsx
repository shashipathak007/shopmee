import React from "react";
import { 
  Instagram, 
  Facebook, 
  Linkedin, 
  MapPin, 
  Phone, 
  Mail, 
  ShoppingBag,
  ArrowRight
} from "lucide-react";
import { motion } from "framer-motion";

const FooterLinks = [
  { title: "Home", link: "/#" },
  { title: "About", link: "/#about" },
  { title: "Contact", link: "/#contact" },
  { title: "Blog", link: "/#blog" },
];

const SocialLinks = [
  { icon: Instagram, link: "#", label: "Instagram" },
  { icon: Facebook, link: "#", label: "Facebook" },
  { icon: Linkedin, link: "#", label: "Linkedin" },
];

const Footer = () => {
  return (
    <footer className="bg-[#0e1111] text-white pt-24 transition-colors duration-300">
      <div className="container px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 pb-20 border-b border-white/5">
          
          {/* Brand Info */}
          <div className="space-y-8">
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="flex items-center gap-3"
            >
              <div className="bg-primary p-2 rounded-xl">
                <ShoppingBag size={28} className="text-white" />
              </div>
              <span className="text-3xl font-black bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent italic">
                ShopMe
              </span>
            </motion.div>
            <p className="text-gray-400 text-lg font-medium leading-relaxed max-w-sm">
              We bring the world's most premium fashion and accessories directly to your doorstep. Style is not just what you wear, it's how you live.
            </p>
            <div className="flex gap-4">
              {SocialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.a 
                    key={index}
                    whileHover={{ scale: 1.1, backgroundColor: "#fea928" }}
                    href={social.link}
                    className="h-12 w-12 flex items-center justify-center rounded-2xl bg-white/5 text-gray-400 hover:text-white border border-white/10 transition-colors shadow-xl"
                  >
                    <Icon size={20} />
                  </motion.a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-8">
            <h3 className="text-xl font-black uppercase tracking-widest border-l-4 border-primary pl-4">Company</h3>
            <ul className="space-y-4">
              {FooterLinks.map((link) => (
                <li key={link.title}>
                  <a href={link.link} className="text-gray-400 hover:text-primary flex items-center gap-2 group transition-colors font-medium">
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Support */}
          <div className="space-y-8">
            <h3 className="text-xl font-black uppercase tracking-widest border-l-4 border-primary pl-4">Support</h3>
            <ul className="space-y-4">
              {["FAQ", "Shipping Policy", "Returns", "Size Guide"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-400 hover:text-primary flex items-center gap-2 group transition-colors font-medium">
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-8">
            <h3 className="text-xl font-black uppercase tracking-widest border-l-4 border-primary pl-4">Contact</h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4 group">
                <div className="p-3 rounded-xl bg-white/5 border border-white/10 group-hover:bg-primary/20 transition-colors">
                  <MapPin size={20} className="text-primary" />
                </div>
                <div>
                  <p className="text-sm font-black uppercase tracking-tighter text-gray-500 mb-1">Office</p>
                  <p className="text-gray-300 font-medium">Dhangadhi 5, Taranagar, Nepal</p>
                </div>
              </div>
              <div className="flex items-start gap-4 group">
                <div className="p-3 rounded-xl bg-white/5 border border-white/10 group-hover:bg-primary/20 transition-colors">
                  <Phone size={20} className="text-primary" />
                </div>
                <div>
                  <p className="text-sm font-black uppercase tracking-tighter text-gray-500 mb-1">Call Us</p>
                  <p className="text-gray-300 font-medium">+977 9840287647</p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Closing */}
        <div className="py-10 flex flex-col sm:flex-row justify-between items-center gap-6">
          <p className="text-gray-600 font-medium italic">
            © {new Date().getFullYear()} <span className="text-primary font-black">ShopMe</span>. All rights reserved.
          </p>
          <div className="flex gap-8 text-xs font-black uppercase tracking-widest text-gray-600">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;