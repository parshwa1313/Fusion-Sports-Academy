import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Our Academy", path: "/academy" },
  { name: "Community", path: "/community" },
  { name: "Events", path: "/events" },
  { name: "Sports we Offer", path: "/sports" },
  { name: "Gallery", path: "/gallery" },
  { name: "News & Tips", path: "/news" },
  { name: "Contact Us", path: "/contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-20">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link to="/">
            <img
              src="https://fusiononline.fusion-lifestyle.com/sportingacademy/images/logos-icons/fusion-sporting-academy-logo.svg"
              alt="Logo"
              className="h-14 w-20 sm:h-16 sm:w-24 md:h-20 md:w-28 lg:h-24 lg:w-32 object-contain"
            />
          </Link>
        </div>

        {/* Desktop Nav Links */}
       
        <div className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`text-md sm:text-xl font-semibold relative transition-all duration-300 ${
                location.pathname === link.path
                  ? "text-green-500"
                  : "text-gray-800 hover:text-green-500"
              }`}
            >
              {link.name}
              {location.pathname === link.path && (
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-green-500 rounded-md"></span>
              )}
            </Link>
          ))}
           <div className="hidden md:block">
          <Link
            to="/details"
            className="bg-green-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-green-600 text-sm sm:text-base"
          >
            RESERVE A COURT
          </Link>
        </div>
        </div>
       
        {/* Desktop Reserve Button */}
       
        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-800 focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-white border-t shadow-md absolute w-full left-0 top-full"
        >
          <nav className="flex flex-col p-6 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-lg transition-all duration-300 ${
                  location.pathname === link.path
                    ? "text-green-500 font-semibold"
                    : "text-gray-700 hover:text-green-500"
                }`}
                onClick={() => setMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/details"
              className="bg-green-500 text-white text-center py-3 rounded-lg shadow-md hover:bg-green-600 text-lg"
              onClick={() => setMenuOpen(false)}
            >
              RESERVE A COURT
            </Link>
          </nav>
        </motion.div>
      )}
    </header>
  );
}
