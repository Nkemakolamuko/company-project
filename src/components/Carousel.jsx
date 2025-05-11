import { useState, useEffect } from "react";
import {
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  Info,
  CheckCheck,
} from "lucide-react";
import slides from "../db/slidesDb";
import { Link } from "react-router-dom";

const ModernHardwareCarousel = () => {
  const [current, setCurrent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [typedText, setTypedText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  // Welcome in different languages
  const [welcomeIndex, setWelcomeIndex] = useState(0);
  const [welcomeVisible, setWelcomeVisible] = useState(true);
  const welcomeTexts = [
    { text: "Welcome", language: "English" },
    { text: "Murakaza neza", language: "Kinyarwanda" },
    { text: "Bienvenue", language: "French" },
    { text: "欢迎", language: "Chinese" },
    { text: "Karibu", language: "Swahili" },
    { text: "Welkom", language: "Dutch" },
  ];

  // Different texts to display in the typewriter effect
  const typewriterTexts = [
    "premium construction hardware",
    "industrial-grade fasteners",
    "quality building materials",
    "durable metal supplies",
    "professional contractor solutions",
    "commercial hardware products",
    "wholesale hardware materials",
    "construction industry essentials",
  ];

  // Welcome text rotation effect
  useEffect(() => {
    const welcomeTimer = setInterval(() => {
      setWelcomeVisible(false);
      setTimeout(() => {
        setWelcomeIndex((prevIndex) => (prevIndex + 1) % welcomeTexts.length);
        setWelcomeVisible(true);
      }, 800);
    }, 5000);

    return () => clearInterval(welcomeTimer);
  }, []);

  // Typewriter effect logic
  useEffect(() => {
    const currentText = typewriterTexts[textIndex];

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setTypedText(currentText.substring(0, typedText.length + 1));
        if (typedText.length === currentText.length) {
          setTypingSpeed(2000);
          setIsDeleting(true);
        } else {
          setTypingSpeed(150);
        }
      } else {
        setTypedText(currentText.substring(0, typedText.length - 1));
        setTypingSpeed(75);
        if (typedText.length === 0) {
          setIsDeleting(false);
          setTextIndex((textIndex + 1) % typewriterTexts.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [typedText, isDeleting, textIndex, typingSpeed, typewriterTexts]);

  // Handle transition animation
  const handleSlideChange = (direction) => {
    if (isTransitioning) return;

    setIsTransitioning(true);
    setTimeout(() => {
      if (direction === "next") {
        setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
      } else {
        setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
      }

      setTimeout(() => {
        setIsTransitioning(false);
      }, 300);
    }, 300);
  };

  const goToSlide = (index) => {
    if (isTransitioning || current === index) return;

    setIsTransitioning(true);
    setTimeout(() => {
      setCurrent(index);
      setTimeout(() => {
        setIsTransitioning(false);
      }, 300);
    }, 300);
  };

  // To move the carousel automatically
  useEffect(() => {
    const intervalId = setInterval(() => {
      handleSlideChange("next");
    }, 7000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="relative overflow-hidden h-[120vh] md:h-[87vh] md:max-h-screen w-full group bg-zinc-900">
      {/* Language welcome text */}
      <div className="absolute top-6 md:top-10 left-6 md:left-12 z-50">
        <div
          className={`text-amber-400 font-bold text-xl md:text-4xl transition-all duration-700 ${
            welcomeVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-4"
          }`}
        >
          {welcomeTexts[welcomeIndex].text}
        </div>
      </div>

      {/* Company identity banner */}
      <div className="absolute top-14 md:top-24 left-6 md:left-12 right-6 md:right-12 z-50">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-3 md:gap-6 bg-zinc-900/85 backdrop-blur-md px-4 py-3 md:px-8 md:py-6 rounded-lg border-l-4 border-amber-400 shadow-xl">
          <div className="flex items-center">
            <div className="bg-amber-400 p-2 md:p-3 rounded-md mr-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 md:h-8 md:w-8 text-zinc-900"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"
                />
              </svg>
            </div>
            <div>
              <h1 className="text-white font-bold text-lg md:text-3xl leading-tight">
                Premium Hardware Materials
              </h1>
              <p className="text-amber-400 text-xs md:text-sm font-semibold uppercase tracking-wider">
                Wholesale & Retail Hardware Supplier
              </p>
            </div>
          </div>
          <div className="h-0 md:h-16 border-l border-zinc-700 mx-2 hidden md:block"></div>
          <div className="flex-1">
            <p className="text-zinc-200 text-base md:text-xl">
              Your <span className="font-bold">complete</span> source for{" "}
              <span className="text-amber-400 font-bold">{typedText}</span>
              <span className="animate-pulse">|</span>
            </p>
            <div className="mt-2 flex flex-wrap gap-2">
              <span className="bg-zinc-800 text-zinc-200 text-xs px-2 py-1 rounded-full flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-3 w-3 mr-1 text-amber-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                Contractor Supplies
              </span>
              <span className="bg-zinc-800 text-zinc-200 text-xs px-2 py-1 rounded-full flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-3 w-3 mr-1 text-amber-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                Industrial Hardware
              </span>
              <span className="bg-zinc-800 text-zinc-200 text-xs px-2 py-1 rounded-full flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-3 w-3 mr-1 text-amber-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                Commercial Solutions
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Main carousel */}
      <div className="relative h-full w-full">
        {slides.map((slide, index) => {
          const isActive = index === current;

          return (
            <div
              key={slide.id}
              className={`absolute inset-0 w-full h-full transition-all duration-700 ease-in-out ${
                isActive
                  ? "opacity-100 z-10 scale-100"
                  : "opacity-0 z-0 scale-105"
              } ${isTransitioning && isActive ? "opacity-70" : ""}`}
            >
              {/* Image with gradient overlay */}
              <div className="relative h-full w-full">
                <img
                  src={slide.img}
                  alt={slide.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/60 to-transparent"></div>
              </div>

              {/* Slide content */}
              <div
                className={`absolute bottom-36 md:bottom-24 left-1/2 -translate-x-1/2 w-11/12 md:w-4/5 max-w-6xl transition-all duration-700 ${
                  isTransitioning
                    ? "opacity-0 translate-y-8"
                    : "opacity-100 translate-y-0"
                }`}
              >
                <div className="bg-zinc-900/90 backdrop-blur-md rounded-xl border border-zinc-800 shadow-2xl overflow-hidden">
                  {/* Category banner */}
                  <div
                    className={`${slide.badgeColor} py-1 px-6 flex items-center justify-between`}
                  >
                    <span className="text-xs md:text-sm uppercase tracking-wider font-bold text-white">
                      Hardware Materials Category
                    </span>
                    <span className="text-xs text-white/70">
                      Industry Leading Solutions
                    </span>
                  </div>

                  <div className="p-6 md:p-8">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 md:gap-8">
                      <div className="flex-1">
                        <div className="flex items-center mb-3">
                          {/* Icon representation based on category */}
                          <div
                            className={`${
                              slide.badgeColor === "bg-zinc-800"
                                ? "bg-zinc-800"
                                : "bg-amber-400"
                            } p-2 rounded-md mr-3`}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className={`h-5 w-5 ${
                                slide.badgeColor === "bg-zinc-800"
                                  ? "text-amber-400"
                                  : "text-zinc-900"
                              }`}
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                          </div>
                          <h2 className="text-white text-xl md:text-3xl font-bold">
                            {slide.title}
                          </h2>
                        </div>

                        <div className="mb-4 pl-10">
                          <p className="text-zinc-300 md:text-lg border-l-2 border-amber-400/50 pl-4">
                            {slide.desc}
                          </p>
                        </div>

                        {/* Hardware-specific benefits */}
                        <div className="flex flex-wrap gap-2 mb-6 pl-10">
                          <span className="bg-zinc-800 text-zinc-200 text-xs px-3 py-1 rounded-full">
                            Premium Quality
                          </span>
                          <span className="bg-zinc-800 text-zinc-200 text-xs px-3 py-1 rounded-full">
                            Wholesale Available
                          </span>
                          <span className="bg-zinc-800 text-amber-400 text-xs px-3 py-1 rounded-full">
                            Industry Standard
                          </span>
                        </div>

                        <Link to={`/learn-more/${slide.id}`} className="pl-10">
                          <button className="flex cursor-pointer items-center gap-2 bg-amber-400 hover:bg-amber-500 text-zinc-900 font-semibold py-2 px-4 md:py-3 md:px-6 rounded-md transition-all">
                            <span className="text-nowrap text-sm md:text-base">
                              View {slide.title} Details
                            </span>
                            <ArrowRight className="w-4 h-4" />
                          </button>
                        </Link>
                      </div>

                      <div className="hidden md:block border-l border-zinc-700 h-40"></div>

                      <div className="hidden md:flex flex-col items-center justify-center flex-shrink-0 text-center">
                        <div
                          className={`${
                            slide.badgeColor === "bg-zinc-800"
                              ? "bg-zinc-800"
                              : "bg-amber-400"
                          } h-20 w-20 flex items-center justify-center rounded-full mb-3`}
                        >
                          <CheckCheck
                            className={`w-8 h-8 ${
                              slide.badgeColor === "bg-zinc-800"
                                ? "text-amber-400"
                                : "text-zinc-900"
                            }`}
                          />
                        </div>
                        <p className="text-zinc-400 text-sm">
                          Trusted by contractors nationwide
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Navigation arrows */}
      <div className="absolute inset-y-0 left-0 right-0 flex md:items-center top-68 justify-between pointer-events-none z-[99] px-4 md:px-8">
        <button
          onClick={() => handleSlideChange("prev")}
          className="bg-zinc-900/40 hover:bg-zinc-900/80 w-fit h-fit cursor-pointer backdrop-blur-sm border border-white text-white p-4 rounded-full pointer-events-auto transition-all"
          disabled={isTransitioning}
        >
          <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
        </button>
        <button
          onClick={() => handleSlideChange("next")}
          className="bg-zinc-900/40 hover:bg-zinc-900/80 w-fit h-fit cursor-pointer backdrop-blur-sm border border-white text-white p-4 rounded-full pointer-events-auto transition-all"
          disabled={isTransitioning}
        >
          <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
        </button>
      </div>

      {/* Business highlights banner */}
      <div className="absolute bottom-4 left-0 right-0 z-60 px-4 md:px-12">
        <div className="bg-zinc-900/90 backdrop-blur-sm rounded-lg p-2 md:p-0 border border-zinc-800">
          <div className="flex flex-wrap md:flex-nowrap justify-center items-center divide-y md:divide-y-0 md:divide-x divide-zinc-700">
            <div className="flex items-center justify-center p-2 md:p-4 w-1/2 md:w-auto">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 md:h-6 md:w-6 text-amber-400 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
              <span className="text-white text-xs md:text-sm">
                Quality Guaranteed
              </span>
            </div>
            <div className="flex items-center justify-center p-2 md:p-4 w-1/2 md:w-auto">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 md:h-6 md:w-6 text-amber-400 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <span className="text-white text-xs md:text-sm">
                Wholesale Pricing
              </span>
            </div>
            <div className="flex items-center justify-center p-2 md:p-4 w-1/2 md:w-auto">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 md:h-6 md:w-6 text-amber-400 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              <span className="text-white text-xs md:text-sm">
                Fast Delivery
              </span>
            </div>
            <div className="flex items-center justify-center p-2 md:p-4 w-1/2 md:w-auto">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 md:h-6 md:w-6 text-amber-400 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              <span className="text-white text-xs md:text-sm">
                24/7 Support
              </span>
            </div>
          </div>
        </div>

        {/* Slide indicators now above the business highlights */}
        <div className="flex justify-center gap-3 mb-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`transition-all duration-300 ${
                current === index
                  ? "w-6 bg-amber-400 rounded-full"
                  : "w-2 bg-white/40 rounded-full"
              } h-2`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ModernHardwareCarousel;
