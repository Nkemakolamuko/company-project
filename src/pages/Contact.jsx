import { MapPin, Phone } from "lucide-react";
import React from "react";
import { MdEmail, MdTextFields } from "react-icons/md";
import Footer from "../components/Footer";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {" "}
      {/* Added pt-[120px] for header space - I removed it, I don't think it's good visually though */}
      {/* Contact Section */}
      <div className="w-full pb-8 md:py-16 relative">
        <div className="text-center pb-8 pt-8 md:pb-16 bg-white md:bg-gray-50">
          <h1 className="text-4xl font-bold mb-4">We are here to help</h1>
          <p className="text-gray-600 max-w-xl mx-auto">
            Contact us if you have any questions about our company. Our best
            team will provide your answer within a few hours.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-4 md:mt-0 mb-8 md:mb-16 mx-4 md:mx-16">
          {/* Email Card */}
          <div className="bg-white p-8 rounded-lg shadow flex flex-col justify-between">
            <div className="mb-4 w-fit p-6 text-[#043A53] rounded-full bg-[#043A53]/10">
              <MdEmail className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Email Us</h3>
            <p className="text-gray-600 text-sm mb-4">
              Ask anything by emailing us and we'll respond within a few days.
            </p>
            <a
              href="mailto:info@company.com"
              className="text-[#043A53] hover:underline font-semibold"
            >
              Send Email →
            </a>
          </div>

          {/* Location Card */}
          <div className="bg-white p-8 rounded-lg shadow flex flex-col justify-between">
            <div className="mb-4 w-fit text-yellow-600 rounded-full p-6 bg-yellow-600/10">
              <MapPin />
            </div>
            <h3 className="text-xl font-semibold mb-2">Locate Us</h3>
            <p className="text-gray-600 text-sm mb-4">
              You can meet us at our office and discuss the details of your
              question.
            </p>
            <a
              href="#map"
              className="text-[#043A53] hover:underline font-semibold"
            >
              Get directions →
            </a>
          </div>

          {/* Phone Card */}
          <div className="bg-white p-8 rounded-lg shadow flex flex-col justify-between">
            <div className="mb-4 w-fit p-6 text-[#043A53] rounded-full bg-[#043A53]/10">
              <Phone />
            </div>
            <h3 className="text-xl font-semibold mb-2">Call Us Any Time</h3>
            <p className="text-gray-600 text-sm mb-4">
              Call us if your question requires an immediate response.
            </p>
            <a
              href="tel:+250795019913"
              className="text-[#043A53] hover:underline font-semibold"
            >
              +250 79 501 9913 →
            </a>
          </div>
        </div>

        <div className="text-center text-red-500 animate-bounce">
          Scroll Down
        </div>

        {/* Contact Form */}
        <div className="w-full bg-white py-16 px-4 md:px-16">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <h1 className="text-4xl font-bold mb-4">Leave us a message</h1>
              <p className="text-gray-600 max-w-xl mx-auto">
                Contact us if you have any questions about our company. Our best
                team will provide your answer within a few hours.
              </p>
            </div>

            <hr className="mb-10 text-gray-100" />

            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                {/* Name */}
                <div className="flex items-center border border-gray-100 rounded-lg px-4 py-2 bg-white focus-within:ring-2 focus-within:ring-blue-600">
                  <MdEmail className="text-gray-400 mr-3" />
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full focus:outline-none bg-transparent"
                  />
                </div>

                {/* Email */}
                <div className="flex items-center border border-gray-100 rounded-lg px-4 py-2 bg-white focus-within:ring-2 focus-within:ring-blue-600">
                  <MdEmail className="text-gray-400 mr-3" />
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full focus:outline-none bg-transparent"
                  />
                </div>
              </div>

              <div className="w-full">
                {/* Company */}
                {/* <div className="flex items-center border border-gray-100 rounded-lg px-4 py-2 bg-white focus-within:ring-2 focus-within:ring-blue-600">
                  <MdEmail className="text-gray-400 mr-3" />
                  <input
                    type="text"
                    placeholder="Company Name"
                    className="w-full focus:outline-none bg-transparent"
                  />
                </div> */}

                {/* Phone */}
                <div className="flex items-center border border-gray-100 rounded-lg px-4 py-2 bg-white focus-within:ring-2 focus-within:ring-blue-600">
                  <Phone className="text-gray-400 mr-3" />
                  <input
                    type="tel"
                    placeholder="Contact Number"
                    className="w-full focus:outline-none bg-transparent"
                  />
                </div>
              </div>

              {/* Message */}
              <div className="flex items-start border border-gray-100 rounded-lg px-4 py-2 bg-white focus-within:ring-2 focus-within:ring-blue-600">
                <MdTextFields className="text-gray-400 mt-1.5 mr-3" />
                <textarea
                  placeholder="How can we help?"
                  rows="4"
                  cols="4"
                  className="w-full focus:outline-none bg-transparent resize-none"
                ></textarea>
              </div>

              <div className="flex items-center justify-between w-full">
                <div className="flex items-center">
                  <input type="checkbox" id="terms" className="mr-2" />
                  <label htmlFor="terms">
                    I agree to the Terms & Conditions
                  </label>
                </div>

                <button
                  type="submit"
                  className="bg-[#043A53] text-white py-2 px-4 md:px-8 cursor-pointer rounded hover:bg-[#032c3f] transition-colors duration-300"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Google Maps */}
        <div
          id="map"
          className="mt-16 h-[500px] rounded overflow-hidden shadow"
        >
          <iframe
            title="Company Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31900.11898869484!2d30.088447115993866!3d-1.9470228829192051!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dca774626f129f%3A0x6226e99fffd9a3ed!2sRemera%2C%20Kigali!5e0!3m2!1sen!2srw!4v1744934176015!5m2!1sen!2srw"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
