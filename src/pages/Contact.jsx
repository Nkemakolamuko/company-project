import React from "react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-50 pt-[120px]"> {/* Added pt-[120px] for header space */}
      {/* Contact Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">We are here to help</h1>
          <p className="text-gray-600">
            Contact us if you have any questions about our company. Our best team will
            provide your answer within a few hours.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Email Card */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="mb-4 text-blue-600">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Email Us</h3>
            <p className="text-gray-600 mb-4">Ask anything by emailing us and we'll respond within a few days.</p>
            <a href="mailto:info@company.com" className="text-blue-600 hover:underline">Send Email →</a>
          </div>

          {/* Location Card */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="mb-4 text-blue-600">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Drop In US</h3>
            <p className="text-gray-600 mb-4">You can meet us at our office and discuss the details of your question.</p>
            <a href="#map" className="text-blue-600 hover:underline">Get directions →</a>
          </div>

          {/* Phone Card */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="mb-4 text-blue-600">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Call Us Any Time</h3>
            <p className="text-gray-600 mb-4">Call us if your question requires an immediate response.</p>
            <a href="tel:+1700764657" className="text-blue-600 hover:underline">+1 700 764 657 →</a>
          </div>
        </div>

        {/* Contact Form */}
        <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-6">Leave us a message</h2>
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Name"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Company Name"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
              <input
                type="tel"
                placeholder="Contact Number"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>
            <textarea
              placeholder="How can we help?"
              rows="4"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            ></textarea>
            <div className="flex items-center">
              <input type="checkbox" id="terms" className="mr-2" />
              <label htmlFor="terms">I agree to the Terms & Conditions</label>
            </div>
            <button
              type="submit"
              className="w-full bg-[#043A53] text-white py-2 px-4 rounded-lg hover:bg-[#032c3f] transition-colors duration-300"
            >
              Submit
            </button>
          </form>
        </div>

        {/* Google Maps */}
        <div id="map" className="mt-16 h-[400px] rounded-lg overflow-hidden shadow-md mx-4 md:mx-16">
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
    </div>
  );
};

export default Contact;