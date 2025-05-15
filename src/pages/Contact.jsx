import { MapPin, Phone } from "lucide-react";
import React, { useEffect, useState } from "react";
import { MdEmail, MdTextFields } from "react-icons/md";
import Footer from "../components/Footer";
import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";

const Contact = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errMsg, setErrMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const formspreeEndpoint = "https://formspree.io/f/xanoarvn";

  useEffect(() => {
    const timer = setTimeout(() => {
      setSuccessMsg("");
      setErrMsg("");
    }, 5000);
    return () => clearTimeout(timer);
  }, [successMsg, errMsg, email, name, phoneNumber, message]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await fetch(formspreeEndpoint, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          // email,
          phoneNumber,
          message,
        }),
      });
      if (response.ok) {
        setSuccessMsg("Message sent successfully!");
      } else {
        setErrMsg("Error sending message.");
      }
    } catch (error) {
      console.error("Error:", error);
      setErrMsg("Network error. Please try again.");
    } finally {
      setIsSubmitting(false);
      setName("");
      setEmail("");
      setPhoneNumber("");
      setMessage("");
    }
  };

  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);
  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Contact Page</title>
        <link
          rel="canonical"
          href={`https://company-project-loug.vercel.app/contact`}
        />
      </Helmet>{" "}
      {/* Added pt-[120px] for header space - I removed it, I don't think it's good visually though */}
      {/* Contact Section */}
      <div className="w-full pb-8 md:py-16 relative">
        <div className="text-center pb-8 pt-8 md:pb-16 bg-white md:bg-gray-50">
          <h1 className="text-4xl text-[#002536] font-semibold mb-4">
            We are here to help
          </h1>
          <p className="text-gray-600 max-w-xl mx-auto px-4">
            Contact us if you have any questions about our company. Our best
            team will provide your answer within a few hours.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-4 md:mt-0 mb-8 md:mb-16 mx-4 md:mx-16">
          {/* Email Card */}
          <div className="bg-white p-4 sm:p-8 rounded-lg shadow flex flex-col justify-between">
            <div className="mb-4 w-fit p-6 text-[#043A53] rounded-full bg-[#043A53]/10">
              <MdEmail className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-[#002536]">
              Email Us
            </h3>
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
          <div className="bg-white p-4 sm:p-8 rounded-lg shadow flex flex-col justify-between">
            <div className="mb-4 w-fit text-yellow-600 rounded-full p-6 bg-yellow-600/10">
              <MapPin />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-[#002536]">
              Locate Us
            </h3>
            <p className="text-gray-600 text-sm mb-4">
              You can meet us at our office and discuss the details of your
              question.
            </p>
            <a
              href="https://maps.app.goo.gl/yRxxiVmU7ui9e92f8"
              className="text-[#043A53] hover:underline font-semibold"
            >
              Get directions →
            </a>
          </div>

          {/* Phone Card */}
          <div className="bg-white p-4 sm:p-8 rounded-lg shadow flex flex-col justify-between">
            <div className="mb-4 w-fit p-6 text-[#043A53] rounded-full bg-[#043A53]/10">
              <Phone />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-[#002536]">
              Call Us Any Time
            </h3>
            <p className="text-gray-600 text-sm mb-4">
              Call us if your question requires an immediate response.
            </p>
            <a
              href="tel:+250788590092"
              className="text-[#043A53] hover:underline font-semibold"
            >
              +250 78 859 0092 →
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
              <h1 className="text-4xl font-bold mb-4 text-[#002536]">
                Leave us a message
              </h1>
              <p className="text-gray-600 max-w-xl mx-auto">
                Contact us if you have any questions about our company. Our best
                team will provide your answer within a few hours.
              </p>
            </div>

            <hr className="mb-10 text-gray-100" />

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-6">
                {/* Name */}
                <div className="flex items-center border border-gray-100 rounded-lg px-4 py-2 bg-white focus-within:ring-2 focus-within:ring-blue-600">
                  <MdEmail className="text-gray-400 mr-3" />
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your Name"
                    className="w-full focus:outline-none bg-transparent"
                  />
                </div>

                {/* Email */}
                <div className="flex items-center border border-gray-100 rounded-lg px-4 py-2 bg-white focus-within:ring-2 focus-within:ring-blue-600">
                  <MdEmail className="text-gray-400 mr-3" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
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
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
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
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
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
                  disabled={isSubmitting}
                  className={`flex items-center justify-center ${
                    isSubmitting ? "bg-gray-300" : "bg-[#043A53]"
                  } text-white py-2 px-4 md:px-8 cursor-pointer rounded hover:bg-[#032c3f] transition-colors duration-300`}
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-between gap-2">
                      <svg
                        className="animate-spin h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 1 1 16 0A8 8 0 0 1 4 12zm2.5-1h9a2.5 2.5 0 1 1-9 0z"
                        ></path>
                      </svg>
                      <span className="ml-2">Sending...</span>
                    </div>
                  ) : (
                    "Send Message"
                  )}
                </button>
              </div>
              {errMsg && (
                <div className="text-red-500 bg-red-100 py-2 px-4 rounded text-center mt-4">
                  {errMsg}
                </div>
              )}
              {successMsg && (
                <div className="text-green-500 bg-green-100 py-2 px-4 rounded text-center mt-4">
                  {successMsg}
                </div>
              )}
            </form>
          </div>
        </div>

        {/* Google Maps */}
        <div
          id="map"
          className="mt-16 h-[500px] rounded overflow-hidden shadow"
        >
          <iframe
            title="Follow the map to find us"
            src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d63800.75518656384!2d30.11565989428948!3d-1.9333114693401698!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sISANO%20HOUSE%20NEAR%20GAKINJIRO%20MARKET%20GASABO%20KACYIRU!5e0!3m2!1sen!2srw!4v1746125842053!5m2!1sen!2srw"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
