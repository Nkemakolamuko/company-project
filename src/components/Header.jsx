import React, { useState, useEffect } from "react";
import { Headphones, Menu, X, Phone, Mail, Clock } from "lucide-react";
import { NavLink } from "react-router-dom";
import { BsTools } from "react-icons/bs";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll behavior for sticky header
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    // Prevent scrolling when menu is open
    if (!isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  };

  // Navigation items for reuse
  const navItems = [
    { name: "Home", path: "/", exact: true },
    { name: "Products", path: "/learn-more/0" },
    // { name: "Services", path: "#services" },
    { name: "Sub-Companies", path: "#sub" },
    { name: "About Us", path: "#about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      {/* Contact Bar - Hidden on smaller screens */}
      <div className="hidden md:flex bg-zinc-100 text-zinc-700 px-6 lg:px-16 py-2 justify-between items-center text-sm">
        <div className="flex items-center space-x-6">
          <div className="flex items-center">
            <Mail size={14} className="mr-2 text-amber-500" />
            <a
              href="mailto:parentssolutionhardware@gmail.com"
              className="hover:text-amber-500 transition-colors"
            >
              parentssolutionhardware@gmail.com
            </a>
          </div>
          <div className="flex items-center">
            <Phone size={14} className="mr-2 text-amber-500" />
            <a
              href="tel:+250788568312"
              className="hover:text-amber-500 transition-colors"
            >
              +250 788 568 312
            </a>
          </div>
        </div>
        <div className="flex items-center">
          <Clock size={14} className="mr-2 text-amber-500" />
          <span>Mon-Sun: 8AM - 6PM</span>
        </div>
      </div>

      {/* Main Header - Becomes sticky on scroll */}
      <header
        className={`w-full z-50 sticky top-0 transition-all duration-300 ${
          scrolled ? "bg-white shadow-lg py-2" : "bg-white py-4"
        }`}
      >
        <div className="container mx-auto px-4 flex justify-between items-center">
          {/* Logo */}
          <NavLink to="/" className="flex items-center">
            <BsTools
              size={30}
              className="text-amber-500 mr-3"
              strokeWidth={2.5}
            />
            <div className="flex flex-col">
              <span className="font-bold text-lg md:text-xl text-zinc-800 leading-tight">
                PARENT SOLUTION
              </span>
              <span className="text-xs text-zinc-500 font-medium tracking-wider">
                HARDWARE SPECIALISTS
              </span>
            </div>
          </NavLink>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                exact={item.exact}
                className={({ isActive }) =>
                  `px-4 py-2 font-medium text-sm transition-all duration-200 rounded ${
                    isActive
                      ? "text-amber-500 bg-amber-50"
                      : "text-zinc-700 hover:text-amber-500 hover:bg-zinc-50"
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
            <a
              href="tel:+250788568312"
              className="ml-4 bg-amber-500 hover:bg-amber-600 text-white px-5 py-2 rounded font-medium text-sm flex items-center transition-all duration-200"
            >
              <Headphones size={16} className="mr-2" />
              <span>Call Our 24/7 Support</span>
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 rounded-md text-zinc-700 hover:bg-zinc-100 transition-colors"
            aria-label="Toggle menu"
          >
            <Menu size={24} />
          </button>
        </div>
      </header>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-[100] lg:hidden">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-zinc-900 opacity-50"
            onClick={toggleMenu}
          />

          {/* Menu Panel */}
          <div className="absolute right-0 top-0 h-full w-[280px] bg-white shadow-xl flex flex-col">
            <div className="flex justify-between items-center p-4 border-b border-zinc-100">
              <div className="flex items-center">
                <BsTools size={24} className="text-amber-500 mr-2" />
                <span className="font-bold text-zinc-800">PARENT SOLUTION</span>
              </div>
              <button
                onClick={toggleMenu}
                className="p-2 rounded-full hover:bg-zinc-100 text-zinc-500 transition-colors"
                aria-label="Close menu"
              >
                <X size={20} />
              </button>
            </div>

            {/* Mobile Nav Links */}
            <div className="flex flex-col py-2 overflow-y-auto">
              {navItems.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.path}
                  exact={item.exact}
                  className={({ isActive }) =>
                    `py-3 px-6 transition-colors ${
                      isActive
                        ? "text-amber-500 bg-amber-50 font-medium"
                        : "text-zinc-700 hover:bg-zinc-50"
                    }`
                  }
                  onClick={toggleMenu}
                >
                  {item.name}
                </NavLink>
              ))}
            </div>

            {/* Contact Info */}
            <div className="mt-auto border-t border-zinc-100 p-6 space-y-4">
              <div>
                <div className="text-xs uppercase font-semibold text-zinc-400 mb-2">
                  Contact Us
                </div>
                <div className="flex items-center text-sm text-zinc-700">
                  <Phone size={14} className="mr-2 text-amber-500" />
                  <a href="tel:+250788568312">+250 788 568 312</a>
                </div>
                <div className="flex items-center text-sm text-zinc-700 mt-2">
                  <Mail size={14} className="mr-2 text-amber-500" />
                  <a
                    href="mailto:parentssolutionhardware@gmail.com"
                    className="text-xs"
                  >
                    parentssolutionhardware@gmail.com
                  </a>
                </div>
              </div>

              <a
                href="tel:+250788568312"
                className="bg-amber-500 hover:bg-amber-600 text-white px-4 py-3 rounded font-medium text-sm flex items-center justify-center transition-all duration-200"
              >
                <Headphones size={16} className="mr-2" />
                <span>Call Our 24/7 Support</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
