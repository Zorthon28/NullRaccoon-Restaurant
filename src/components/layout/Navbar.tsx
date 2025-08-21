import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

interface NavbarProps {
  logo?: string;
  links?: Array<{ title: string; href: string }>;
}

const Navbar = ({
  logo = "images/logo/full-sized-logo.png",
  links = [
    { title: "Home", href: "/" },
    { title: "Menu", href: "/menu" },
    { title: "Reservations", href: "/reservations" },
    { title: "Contact", href: "/contact" },
  ],
}: NavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-gray-900 shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img
              className="h-10 w-auto object-contain"
              src={logo}
              alt="Restaurant Logo"
            />
            <span
              className={`font-raffishly text-3xl transition-colors duration-300 ${
                scrolled ? "text-white" : "text-white"
              }`}
            >
              NullRaccon
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {links.map((link) => (
              <Link
                key={link.title}
                to={link.href}
                className={`font-Negara relative transition-colors text-sm font-medium group ${
                  scrolled
                    ? "text-gray-300 hover:text-amber-400"
                    : "text-white hover:text-amber-300"
                }`}
              >
                {link.title}
                <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-amber-400 transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}

            {/* Call-to-Actions */}
            <Link
              to="#"
              className="bg-gradient-to-r from-green-500 to-green-700 hover:from-green-600 hover:to-green-800 text-white px-5 py-2 rounded-full text-sm font-medium shadow-lg transition-all"
            >
              Order Online
            </Link>
            <Link
              to="/reservations"
              className="bg-gradient-to-r from-amber-500 to-amber-700 hover:from-amber-600 hover:to-amber-800 text-white px-5 py-2 rounded-full text-sm font-medium shadow-lg transition-all"
            >
              Book a Table
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className={`p-2 rounded-md focus:outline-none transition-colors ${
                scrolled
                  ? "text-amber-300 hover:bg-gray-800"
                  : "text-white hover:bg-white/20"
              }`}
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden bg-gray-900 shadow-lg overflow-hidden transition-all duration-300 ${
          isMenuOpen ? "max-h-screen" : "max-h-0"
        }`}
      >
        <div className="px-4 pt-4 pb-6 space-y-2">
          {links.map((link) => (
            <Link
              key={link.title}
              to={link.href}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-amber-400 hover:bg-gray-800"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.title}
            </Link>
          ))}
          <div className="flex flex-col space-y-3 mt-4">
            <Link
              to="#"
              className="text-center bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-full text-base font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Order Online
            </Link>
            <Link
              to="/reservations"
              className="text-center bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded-full text-base font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Book a Table
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
