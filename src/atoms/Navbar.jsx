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
    <header className="bg-white  fixed w-full top-0 z-50">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-24">
        {/* Logo */}
        <div className="flex-shrink-0">
  {/* Mobile View */}
  <Link to="/" className="block sm:hidden">
    <img
      src="https://mma.prnewswire.com/media/1658625/Fusion_Sport_Logo.jpg?p=twitter"
      alt="Logo"
      className="h-20 w-28 object-contain p-1"
    />
  </Link>

  {/* Desktop View */}
  <Link to="/" className="hidden sm:block">
    <img
      src="https://mma.prnewswire.com/media/1658625/Fusion_Sport_Logo.jpg?p=twitter"
      alt="Logo"
      className="h-20 w-32 lg:h-24 lg:w-36 object-contain p-1"
    />
  </Link>
</div>


        {/* Desktop Nav Links */}
       
        <div className="hidden xl:flex items-center space-x-16"> {/* Added space-x-16 here */}
          {/* Desktop Nav Links */}
          <div className="flex items-center space-x-7">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-lg sm:text-lg  font-semibold relative transition-all duration-300 ${
                  location.pathname === link.path
                    ? "text-green-500"
                    : "text-gray-700 hover:text-green-500"
                }`}
              >
                {link.name}
                {location.pathname === link.path && (
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-green-500 rounded-md"></span>
                )}
              </Link>
            ))}
          </div>

          {/* Desktop Reserve Button */}
          <div>
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
          className="xl:hidden text-gray-700  focus:outline-none"
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
          className="xl:hidden bg-white border-t shadow-md absolute w-full left-0 top-full"
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
