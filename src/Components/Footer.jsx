import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7x1 mx-auto px-6 md:px-10 py-14">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div>
            <h2 className="text-3xl font-bold tracking-wide mb-4">
              STYLE<span className="text-gray-400">HUB</span>
            </h2>

            <p className="text-gray-400 text-sm leading-7 max-w-sm">
              Discover the latest fashion trends for women and men.
              Shop stylish clothing, shoes, bags and accessories
              all in one place.
            </p>

            {/* Social Icons */}
            <div className="flex gap-3 mt-6">

              <a
                href="#"
                className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center hover:bg-white hover:text-black transition"
              >
                <FaFacebookF size={16} />
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center hover:bg-white hover:text-black transition"
              >
                <FaInstagram size={16} />
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center hover:bg-white hover:text-black transition"
              >
                <FaTwitter size={16} />
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center hover:bg-white hover:text-black transition"
              >
                <FaYoutube size={16} />
              </a>

            </div>
          </div>


          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-5">
              Quick Links
            </h3>

            <ul className="space-y-3 text-sm text-gray-400">

              <li>
                <Link
                  to="/"
                  className="hover:text-white transition"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  to="/shop"
                  className="hover:text-white transition"
                >
                  Shop
                </Link>
              </li>

              <li>
                <Link
                  to="/about"
                  className="hover:text-white transition"
                >
                  About Us
                </Link>
              </li>

              <li>
                <Link
                  to="/contact"
                  className="hover:text-white transition"
                >
                  Contact Us
                </Link>
              </li>

            </ul>
          </div>


          {/* Categories */}
          <div>
            <h3 className="text-lg font-semibold mb-5">
              Categories
            </h3>

            <ul className="space-y-3 text-sm text-gray-400">

              <li>
                <Link
                  to="/shop?category=Women"
                  className="hover:text-white transition"
                >
                  Women
                </Link>
              </li>

              <li>
                <Link
                  to="/shop?category=Men"
                  className="hover:text-white transition"
                >
                  Men
                </Link>
              </li>

              <li>
                <Link
                  to="/shop?category=Dresses"
                  className="hover:text-white transition"
                >
                  Dresses
                </Link>
              </li>

              <li>
                <Link
                  to="/shop?category=Shoes"
                  className="hover:text-white transition"
                >
                  Shoes
                </Link>
              </li>

              <li>
                <Link
                  to="/shop?category=Bags"
                  className="hover:text-white transition"
                >
                  Bags
                </Link>
              </li>

            </ul>
          </div>


          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-5">
              Contact Us
            </h3>

            <div className="space-y-4 text-sm text-gray-400">

              <div className="flex items-center gap-3">
                <MapPin size={18} className="text-white" />
                <span>Pakistan</span>
              </div>

              <div className="flex items-center gap-3">
                <Phone size={18} className="text-white" />
                <span>+92 300 1234567</span>
              </div>

              <div className="flex items-center gap-3">
                <Mail size={18} className="text-white" />
                <span>support@stylehub.com</span>
              </div>

            </div>
          </div>

        </div>


        {/* Bottom Footer */}
        <div className="border-t border-gray-800 mt-12 pt-6">

          <div className="flex flex-col md:flex-row justify-between items-center gap-4">

            <p className="text-sm text-gray-500">
              © {new Date().getFullYear()} StyleHub. All rights reserved.
            </p>

            <div className="flex gap-6 text-sm text-gray-500">

              <Link
                to="/privacy"
                className="hover:text-white transition"
              >
                Privacy Policy
              </Link>

              <Link
                to="/terms"
                className="hover:text-white transition"
              >
                Terms & Conditions
              </Link>

            </div>

          </div>

        </div>

      </div>
    </footer>
  );
}

export default Footer;