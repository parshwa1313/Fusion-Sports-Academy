import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Our Academy", path: "/academy" },
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
      <div className="container mx-auto px-4 flex justify-between items-center py-3">
        {/* Logo */}
        <div className="flex items-center">
          <Link to="/">
            <img 
              src="https://files.oaiusercontent.com/file-2GTaMQXkMVkucqprgWZfbH?se=2025-03-31T11%3A22%3A39Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3Da5314505-ec1a-4ee2-a095-901e311e3d77.webp&sig=3gDiMmN9DzaS%2Bs1cDgRXa1pgn1DF6iEjGYJlECxwz9I%3D" 
              alt="Logo" 
              className="h-16 w-16 rounded-full object-cover mix-blend-multiply" 
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 items-center">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`text-xl font-semibold relative transition-all duration-300 
                ${location.pathname === link.path ? "text-green-500" : "text-black hover:text-green-500"}`}
            >
              {link.name}
              {location.pathname === link.path && (
                <span className="absolute bottom-0 left-0 w-full h-1 bg-green-500 rounded-md mt-1"></span>
              )}
            </Link>
          ))}
        </nav>

        {/* Reserve Button */}
        <Link
          to="/select"
          className="hidden md:block bg-green-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-green-600"
        >
          RESERVE A COURT
        </Link>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden focus:outline-none"
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
          <nav className="flex flex-col p-4 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-lg transition-all duration-300 
                  ${location.pathname === link.path ? "text-green-500 font-bold" : "text-gray-700 hover:text-green-500"}`}
                onClick={() => setMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/select"
              className="bg-green-500 text-white text-center py-2 rounded-lg shadow-md hover:bg-green-600"
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
