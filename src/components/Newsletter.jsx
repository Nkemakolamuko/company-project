import { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");

  const [name, setName] = useState("");

  const [dailyNewsletter, setDailyNewsletter] = useState(false);

  const [isSubmitting, setIsSubmitting] = useState(false);

  const [submitStatus, setSubmitStatus] = useState(null);

  // Replace with your actual Formspree form ID

  const formspreeEndpoint = "https://formspree.io/f/xrbpdndl";

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

          email,

          dailyNewsletter,
        }),
      });

      if (response.ok) {
        setSubmitStatus("success");

        setName("");

        setEmail("");

        setDailyNewsletter(false);

      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => {
        setSubmitStatus("");
      }, 3000);
    }
  };

  return (
    <div className="max-w-full relative mx-auto bg-[url('https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bmV3c2xldHRlcnxlbnwwfHwwfHx8MA%3D%3D')] bg-cover bg-center bg-no-repeat px-8 py-20 min-h-[400px]">
      <div className="absolute top-0 left-0 h-full w-full bg-[#043A53] opacity-70 z-10"></div>
      {/* <div className="text-center mb-8">
        <h2 className="text-4xl font-bold text-white">Minimal Newsletter</h2>
      </div> */}

      <div className="relative z-20 bg-white p-6 rounded shadow-md max-w-3xl mx-auto flex flex-col">
        <div className="flex items-center mb-4">
          <div className="bg-blue-400 rounded-full p-4 mr-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
          </div>

          <h3 className="text-2xl md:text-4xl font-semibold text-blue-500">
            Subscribe to our newsletter
          </h3>
        </div>

        <p className="text-gray-600 mb-6">
          Do You Want To Know What Our Other Customers Don't Know? Then Join Our
          Newsletter To Get Updates On Our Latest Products.
        </p>

        {submitStatus === "success" ? (
          <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
            Thank you for subscribing! Check your email for confirmation.
          </div>
        ) : submitStatus === "error" ? (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
            Something went wrong. Please try again later.
          </div>
        ) : null}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Your Name"
              className="border border-gray-300 p-2 rounded w-full"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />

            <input
              type="email"
              placeholder="Email address"
              className="border border-gray-300 p-2 rounded w-full"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="flex items-center">
            <input
              type="checkbox"
              id="dailyNewsletter"
              className="mr-2"
              checked={dailyNewsletter}
              onChange={(e) => setDailyNewsletter(e.target.checked)}
            />

            <label htmlFor="dailyNewsletter" className="text-gray-600">
              Daily Newsletter To Stay Updated
            </label>
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded flex items-center"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <span className="inline-block mr-2">
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
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                </span>
              ) : null}
              Subscribe
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
