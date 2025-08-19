import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

interface NavbarProps {
  logo?: string;
  links?: Array<{ title: string; href: string }>;
}

const Navbar = ({
  logo = "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=120&q=80",
  links = [
    { title: "Home", href: "/" },
    { title: "Menu", href: "/menu" },
    { title: "Reservations", href: "/reservations" },
    { title: "Contact", href: "/contact" },
    { title: "Gallery", href: "/gallery" },
  ],
}: NavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-md w-full sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center">
              <img
                className="h-10 w-auto object-contain"
                src={logo}
                alt="Restaurant Logo"
              />
              <span className="ml-3 text-xl font-medium text-gray-900">
                Fine Dining
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {links.map((link) => (
              <Link
                key={link.title}
                to={link.href}
                className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                {link.title}
              </Link>
            ))}
            <Link
              to="#"
              className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors mr-3"
            >
              Order Online
            </Link>
            <Link
              to="/reservations"
              className="bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors"
            >
              Book a Table
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-amber-500"
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">
                {isMenuOpen ? "Close main menu" : "Open main menu"}
              </span>
              {isMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`${
          isMenuOpen ? "block" : "hidden"
        } md:hidden bg-white shadow-lg`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {links.map((link) => (
            <Link
              key={link.title}
              to={link.href}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.title}
            </Link>
          ))}
          <Link
            to="#"
            className="block w-full text-center bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md text-base font-medium mt-4"
            onClick={() => setIsMenuOpen(false)}
          >
            Order Online
          </Link>
          <Link
            to="/reservations"
            className="block w-full text-center bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded-md text-base font-medium mt-2"
            onClick={() => setIsMenuOpen(false)}
          >
            Book a Table
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
