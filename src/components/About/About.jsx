import React, { useEffect, useState } from "react";
import axios from "axios";

const About = () => {
  const [aboutData, setAboutData] = useState(null);

  useEffect(() => {
    const fetchAboutContent = async () => {
      try {
        const res = await axios.post(
          import.meta.env.VITE_API_URL_ABOUT,
          { userId: import.meta.env.VITE_API_USER_ID }, // userId from env here
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        // console.log("✅ About section data:", res.data);
        const data = res.data;

        if (Array.isArray(data) && data.length > 0) {
          setAboutData(data[0]);
        } else if (data.about) {
          setAboutData(data.about);
        } else {
          setAboutData(data);
        }
      } catch (error) {
        console.error("❌ Error fetching About section:", error);
      }
    };

    fetchAboutContent();
  }, []);

  return (
    <div className="container mx-16 px-4 py-10 ">
      <div className="flex flex-col-reverse md:flex-row items-center gap-10">
        {/* Left Side text section */}
        <div className="md:w-1/2 w-full text-center md:text-left">
          <p className="text-lg font-normal">We Provide</p>
          <h1 className="text-3xl md:text-5xl font-semibold mt-2 mb-4">
            {aboutData?.title || "Welcome to Spa Center"}
          </h1>
          <p className="text-gray-500 mb-6">
            {aboutData?.description ||
              "Our spa offers a soothing environment where you can rest, relax and rejuvenate."}
          </p>
          <button className="bg-rose-400 hover:bg-rose-500 text-white font-medium px-6 py-3 rounded-full transition duration-300">
            Learn More
          </button>
        </div>

        {/* Right side image section */}
        <div className="md:w-1/2 w-full flex justify-center">
          <img
            src={
              aboutData?.image ||
              "https://media.istockphoto.com/id/134052142/photo/hair-salon-situation.jpg?s=2048x2048&w=is&k=20&c=AJ5LS4qPJjTDUwH9CuO2Feagnadu991eNQSoqPnVW5Y="
            }
            alt="Spa"
            className="rounded-2xl w-full max-w-md md:max-w-full object-cover h-100"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
