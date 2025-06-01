import { useState, useEffect } from "react";
import axios from "axios";

const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slides, setSlides] = useState([]);

  useEffect(() => {
    // Fetch banner data from backend API using axios
    const fetchBanners = async () => {
      try {
        const res = await axios.post(import.meta.env.VITE_API_URL_BANNER, {
          userId: import.meta.env.VITE_API_USER_ID,
        });

        // Assuming data is an array of banners with { imageUrl, title, description }
        setSlides(res.data.data || res.data.banners || []);
      } catch (error) {
        console.error("Error fetching banners:", error);
      }
    };

    fetchBanners();
  }, []);

  // Auto-slide functionality
  useEffect(() => {
    if (slides.length === 0) return; // No slides, no timer

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [slides.length]);

  if (slides.length === 0) {
    return (
      <div className="h-[350px] md:h-[450px] lg:h-[550px] flex items-center justify-center text-gray-500">
        Loading banners...
      </div>
    );
  }

  return (
    <div className="relative w-full h-[350px] md:h-[450px] lg:h-[550px] overflow-hidden bg-gray-900">
      {/* Background overlay for darker appearance */}
      <div className="absolute inset-0 bg-black/60 z-10"></div>

      {/* Slides */}
      <div className="relative w-full h-full">
        {slides.map((slide, index) => (
          <div
            key={slide._id || index}
            className={`absolute inset-0 w-full h-full transition-opacity duration-1000 flex items-center ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
            style={{
              backgroundImage: `url(${slide.imageUrl})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* Main content - Centered */}
            <div className="z-20 w-full flex flex-col items-center justify-center text-center">
              {/* Title */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold text-white mb-6 sm:mb-8 md:mb-10 lg:mb-12 -mt-12 sm:-mt-16 md:-mt-20 lg:-mt-28 relative z-30">
                {slide.title}
              </h1>

              {/* Description - Styled to match the image */}
              <div className="max-w-xs sm:max-w-sm md:max-w-md lg:max-w-xl mx-auto bg-white/20 backdrop-blur-md py-3 px-4 sm:py-3 sm:px-5 md:py-4 md:px-6 rounded-xl sm:rounded-2xl md:rounded-3xl lg:rounded-4xl relative z-30">
                <p className="text-white text-center text-sm sm:text-base md:text-lg leading-tight sm:leading-normal md:leading-relaxed">
                  {slide.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation dots */}
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full ${
              index === currentSlide ? "bg-white" : "bg-white/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Banner;
