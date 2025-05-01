import React from "react";
import { MapPin, Mail, Phone, Printer } from "lucide-react";
import { FaFacebook } from "react-icons/fa6";
import { BsInstagram, BsLinkedin, BsTwitterX } from "react-icons/bs";
import { MdMarkEmailRead } from "react-icons/md";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Social Media Banner */}
      <div className="bg-indigo-600 py-3 px-6 flex justify-between items-center">
        <p className="text-xs md:text-sm">Get connected with us on social networks!</p>
        <div className="flex space-x-4">
          <a href="#" className="hover:text-gray-200">
            <FaFacebook />
          </a>
          <a href="#" className="hover:text-gray-200">
            <BsTwitterX />
          </a>
          <a href="#" className="hover:text-gray-200">
            <MdMarkEmailRead />
          </a>
          <a href="#" className="hover:text-gray-200">
            <BsLinkedin />
          </a>
          <a href="#" className="hover:text-gray-200">
            <BsInstagram />
          </a>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto py-10 px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h5 className="text-lg font-bold mb-4">PARENT SOLUTION HARDWARE</h5>
            <p className="text-sm text-gray-400 mb-4">
            Parent Solution Hardware is a trusted supplier of quality hardware materials and paper products in Rwanda. We serve individuals, businesses, and organizations with a wide selection of building supplies, tools, and stationery, ensuring reliable products and excellent customer service for every project and office need.
            </p>
          </div>

          {/* Products */}
          <div>
            <h5 className="text-lg font-bold mb-4">PRODUCTS</h5>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm text-gray-400 hover:text-white">
                  Tyres
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-400 hover:text-white">
                  Papers
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-400 hover:text-white">
                  Electronics
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-400 hover:text-white">
                  Gadgets
                </a>
              </li>
            </ul>
          </div>

          {/* Useful Links */}
          <div>
            <h5 className="text-lg font-bold mb-4">USEFUL LINKS</h5>
            <ul className="space-y-2">
              <li>
                <a
                  href="#about"
                  className="text-sm text-gray-400 hover:text-white"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#sub"
                  className="text-sm text-gray-400 hover:text-white"
                >
                  Sub Companies
                </a>
              </li>
              <li>
                <a
                  href="#team"
                  className="text-sm text-gray-400 hover:text-white"
                >
                  Our Team
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-400 hover:text-white">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h5 className="text-lg font-bold mb-4">CONTACT</h5>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={18} className="mr-2 mt-1 flex-shrink-0" />
                <span className="text-sm text-gray-400">
                  ISANO HOUSE, NEAR GAKINJIRO MARKET/GASABO/KACYITU
                </span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-2 flex-shrink-0" />
                <a href="mailto:parentssolutionhardware@gmail.com" className="text-sm text-gray-400">parentssolutionhardware@gmail.com</a>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-2 flex-shrink-0" />
                <a href="tel:+250788568312" className="text-sm text-gray-400">+250 788568312</a>
              </li>
              <li className="flex items-center">
                <Printer size={18} className="mr-2 flex-shrink-0" />
                <a href="tel:+250788590092" className="text-sm text-gray-400">+250 788590092</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-gray-900 border-t border-gray-800 py-4 text-center">
        <p className="text-sm text-gray-400">
          © {new Date().getFullYear()} Copyright:{" "}
          <a
            href="https://MDBootstrap.com"
            className="text-gray-400 hover:text-white"
          >
            PARENT SOLUTION HARDWARE
          </a>
        </p>
      </div>
    </footer>
  );
}
