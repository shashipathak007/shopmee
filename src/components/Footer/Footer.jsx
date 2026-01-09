import { Facebook, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-gray-300 py-12">
      <div className="container mx-auto px-4 grid md:grid-cols-3 gap-10">
        <div>
          <h2 className="text-2xl font-bold text-white">ShopMe</h2>
          <p className="mt-3 text-sm">
            Your trusted fashion and electronics marketplace.
          </p>
        </div>

        <div className="space-y-2">
          <p className="font-semibold text-white">Quick Links</p>
          <p>Home</p>
          <p>Products</p>
          <p>Contact</p>
        </div>

        <div className="flex gap-4">
          <Instagram />
          <Facebook />
          <Linkedin />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
