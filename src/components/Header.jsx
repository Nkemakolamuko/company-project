import React from "react";
import { Headphones } from "lucide-react";
import Headroom from "react-headroom";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="w-full">
      {/* Top Bar */}
      <motion.div
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        exit={{ y: -80 }}
        transition={{ type: "spring", stiffness: 100 }}
        className="bg-[#043A53] text-sm text-gray-100 px-4 md:px-16 py-1 flex justify-between items-center"
      >
        <div className="flex items-center space-x-4">
          <a
            href="mailto:info@company.com"
            className="text-white hover:underline transition-all duration-300 text-sm"
          >
            info@company.com
          </a>
          <span className="text-base font-semibold">+250 789098183</span>
        </div>
        <NavLink to="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity duration-300">
          <Headphones size={16} />
          <span className="font-semibold">24/7 SUPPORT</span>
        </NavLink>
      </motion.div>

      <Headroom style={{ zIndex: 50 }} wrapperStyle={{ position: "relative" }}>
        <div
          className="bg-white shadow flex justify-between items-center"
        >
          <a href="/" className="text-xl py-3 px-2 md:pl-16 font-bold text-blue-600">Company Logo</a>
          <nav className="space-x-6 text-gray-700 pl-4 md:pr-14">
            <a href="/" className="hover:text-white hover:bg-[#043A53] transition-all duration-300 py-3 px-2 md:px-4">
              Home
            </a>
            <a href="#about" className="hover:text-white hover:bg-[#043A53] transition-all duration-300 py-3 px-2 md:px-4">
              About Us
            </a>
            <a href="#sub" className="hover:text-white hover:bg-[#043A53] transition-all duration-300 py-3 px-2 md:px-4">
              Sub-Companies
            </a>
            <a href="#team" className="hover:text-white hover:bg-[#043A53] transition-all duration-300 py-3 px-2 md:px-4">
              Our Team
            </a>
            <a href="#contact" className="hover:text-white hover:bg-[#043A53] transition-all duration-300 py-3 px-2 md:px-4">
              Contact Us
            </a>
          </nav>
        </div>
      </Headroom>
    </div>
  );
};

export default Header;
