import React, { useState } from "react";
import { Headphones, Menu, X } from "lucide-react";
import Headroom from "react-headroom";
import { motion, AnimatePresence } from "framer-motion";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="w-full">
      {/* Top Bar */}
      <motion.div
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        exit={{ y: -80 }}
        transition={{ type: "spring", stiffness: 100 }}
        className="bg-[#043A53] text-sm text-gray-100 px-4 md:px-16 py-1 flex sm:flex-row flex-col justify-between sm:items-center"
      >
        <div className="flex items-center space-x-4">
          <a
            href="mailto:parentssolutionhardware@gmail.com"
            className="text-white hover:underline transition-all duration-300 text-sm"
          >
            parentssolutionhardware@gmail.com
          </a>
          <span className="hidden sm:inline text-base font-semibold">+250 788568312</span>
        </div>
        <NavLink to="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity duration-300">
          <Headphones size={16} />
          <span className="font-semibold hidden sm:inline">24/7 SUPPORT</span>
          <a href="tel:+250788568312" className="sm:hidden inline text-base font-semibold">+250 788568312</a>
        </NavLink>
      </motion.div>

      <Headroom style={{ zIndex: 50 }} wrapperStyle={{ position: "relative" }}>
        <div className="bg-white shadow flex justify-between items-center">
          <a href="/" className="text-base sm:text-xl py-3 px-4 md:pl-16 font-bold text-[#043A53]">
            PARENT SOLUTION HARDWARE
          </a>
          
          {/* Desktop Nav Links */}
          <nav className="hidden md:flex space-x-6 text-gray-700 pl-4 md:pr-14">
            <NavLink to="/" className="text-white bg-[#043A53] hover:rounded transition-all duration-300 py-3 px-2 md:px-4">
              Home
            </NavLink>
            <a href="#about" className="hover:text-white hover:bg-[#043A53] transition-all duration-300 py-3 px-2 md:px-4">
              About Us
            </a>
            <a href="#sub" className="hover:text-white hover:bg-[#043A53] transition-all duration-300 py-3 px-2 md:px-4">
              Sub-Companies
            </a>
            <a href="#team" className="hover:text-white hover:bg-[#043A53] transition-all duration-300 py-3 px-2 md:px-4">
              Our Team
            </a>
            <NavLink
              to="/contact"
              className="text-white bg-[#043A53] hover:rounded transition-all duration-300 py-3 px-2 md:px-4"
            >
              Contact Us
            </NavLink>
          </nav>
          
          {/* Mobile Menu Button */}
          <button 
            onClick={toggleMenu} 
            className="md:hidden p-4 focus:outline-none"
            aria-label="Toggle menu"
          >
            <Menu size={24} />
          </button>
        </div>
      </Headroom>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.8 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black z-[999]"
              onClick={toggleMenu}
            />
            
            {/* Slide-in Menu */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="fixed top-0 right-0 h-full w-4/5 max-w-sm bg-white z-[9999] shadow-xl flex flex-col"
            >
              <div className="flex justify-between items-center p-4 border-b border-slate-200">
                <span className="text-base sm:text-xl font-bold text-[#043A53]">PARENT SOLUTION HARDWARE</span>
                <button 
                  onClick={toggleMenu}
                  className="p-2 rounded-full bg-gray-100 focus:outline-none"
                  aria-label="Close menu"
                >
                  <X size={24} />
                </button>
              </div>
              
              <div className="flex flex-col mt-4">
                <NavLink 
                  to="/" 
                  className="py-3 px-6 text-white bg-[#043A53] border-b border-gray-100 transition-colors"
                  onClick={toggleMenu}
                >
                  Home
                </NavLink>
                <a 
                  href="#about" 
                  className="py-3 px-6 hover:bg-gray-100 border-b border-gray-100 transition-colors"
                  onClick={toggleMenu}
                >
                  About Us
                </a>
                <a 
                  href="#sub" 
                  className="py-3 px-6 hover:bg-gray-100 border-b border-gray-100 transition-colors"
                  onClick={toggleMenu}
                >
                  Sub-Companies
                </a>
                <a 
                  href="#team" 
                  className="py-3 px-6 hover:bg-gray-100 border-b border-gray-100 transition-colors"
                  onClick={toggleMenu}
                >
                  Our Team
                </a>
                <NavLink
                  to="/contact"
                  className="py-3 px-6 bg-[#043A53] text-white border-b border-gray-100 transition-colors"
                  onClick={toggleMenu}
                >
                  Contact Us
                </NavLink>
              </div>
              
              <div className="mt-auto p-4 bg-[#043A53] text-white">
                <div className="flex items-center space-x-2 mb-2">
                  <Headphones size={16} />
                  <span className="font-semibold">24/7 SUPPORT</span>
                </div>
                <a href="mailto:parentssolutionhardware@gmail.com" className="text-sm block mb-1 hover:underline">
                  parentssolutionhardware@gmail.com
                </a>
                <a href="tel:+250788568312" className="text-sm font-semibold">+250788568312</a>
                <p className="text-base sm:text-xl font-bold text-white">PARENT SOLUTION HARDWARE</p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Header;