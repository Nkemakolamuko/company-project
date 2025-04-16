import React from "react";
import { MapPin, Mail, Phone, Printer } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Social Media Banner */}
      <div className="bg-indigo-600 py-3 px-6 flex justify-between items-center">
        <p className="text-sm">Get connected with us on social networks!</p>
        <div className="flex space-x-4">
          <a href="#" className="hover:text-gray-200">
            <i className="fab fa-facebook-f"></i>
            <span className="sr-only">Facebook</span>
          </a>
          <a href="#" className="hover:text-gray-200">
            <i className="fab fa-twitter"></i>
            <span className="sr-only">Twitter</span>
          </a>
          <a href="#" className="hover:text-gray-200">
            <i className="fab fa-google-plus-g"></i>
            <span className="sr-only">Google+</span>
          </a>
          <a href="#" className="hover:text-gray-200">
            <i className="fab fa-linkedin-in"></i>
            <span className="sr-only">LinkedIn</span>
          </a>
          <a href="#" className="hover:text-gray-200">
            <i className="fab fa-instagram"></i>
            <span className="sr-only">Instagram</span>
          </a>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto py-10 px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h5 className="text-lg font-bold mb-4">COMPANY NAME</h5>
            <p className="text-sm text-gray-400 mb-4">
              Here you can use rows and columns to organize your footer content.
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
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
                <a href="#about" className="text-sm text-gray-400 hover:text-white">
                  About Us
                </a>
              </li>
              <li>
                <a href="#sub" className="text-sm text-gray-400 hover:text-white">
                  Sub Companies
                </a>
              </li>
              <li>
                <a href="#team" className="text-sm text-gray-400 hover:text-white">
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
                  Gasabo, Kigali City, Rwanda
                </span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-2 flex-shrink-0" />
                <span className="text-sm text-gray-400">info@example.com</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-2 flex-shrink-0" />
                <span className="text-sm text-gray-400">+250 795019913</span>
              </li>
              <li className="flex items-center">
                <Printer size={18} className="mr-2 flex-shrink-0" />
                <span className="text-sm text-gray-400">+250 795019913</span>
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
            Company Name
          </a>
        </p>
      </div>
    </footer>
  );
}
