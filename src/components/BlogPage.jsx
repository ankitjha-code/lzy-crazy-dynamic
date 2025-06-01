
import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaQuoteLeft, FaStar } from "react-icons/fa";

export default function BlogPage() {
  const userId = import.meta.env.VITE_API_USER_ID;

  const [blogs, setBlogs] = useState([]);
  const [testimonials, setTestimonials] = useState([]);
  const [specialOffers, setSpecialOffers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch Blogs
        const blogRes = await axios.post(import.meta.env.VITE_API_URL_BLOG, { userId });
        if (Array.isArray(blogRes.data)) setBlogs(blogRes.data);

        // Fetch Testimonials
        const testimonialsRes = await axios.post(import.meta.env.VITE_API_URL_TESTINOMIALS, { userId });
        if (Array.isArray(testimonialsRes.data)) setTestimonials(testimonialsRes.data);

        // Fetch Special Offers
        const offersRes = await axios.post(import.meta.env.VITE_API_URL_OFFER, { userId });
        if (Array.isArray(offersRes.data)) setSpecialOffers(offersRes.data);
      } catch (error) {
        console.error("Error fetching data:", error);
        console.log("Blog API:", import.meta.env.VITE_API_URL_BLOG);
        console.log("Testimonials API:", import.meta.env.VITE_API_URL_TESTIMONIALS);
        console.log("Special Offers API:", import.meta.env.VITE_API_URL_OFFER);
      }
    };

    fetchData();
  }, [userId]);

  return (
    <div className="min-h-screen">
      {/* BLOG HEADER */}
      <div className="pt-12 pb-8">
        <h1
          className="font-bold text-[2.7rem] md:text-[3.2rem] text-center tracking-wide"
          style={{ fontFamily: "'Old Standard TT', serif", color: "#B58152" }}
        >
          Our Latest Blog
        </h1>
      </div>

      {/* BLOG IMAGES */}
      <div className="max-w-screen mx-4 px-8 sm:px-10 lg:px-8 mb-16">
        <div className="grid md:grid-cols-3 gap-8">
          {blogs.length > 0 ? (
            blogs.map((item, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <img src={item.image || ""} className="h-80 w-full object-cover" alt={`Post ${index + 1}`} />
                
              </div>
            ))
          ) : (
            <p className="col-span-3 text-center text-gray-500">Loading blog images...</p>
          )}
        </div>
      </div>

      {/* SPECIAL OFFERS */}
      <div className="w-full bg-[#F5F0EB]">
        <div className="max-w-screen mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between px-8 py-12">
            <div className="lg:w-1/2 mb-8 lg:mb-0">
              <h2
                className="text-4xl md:text-5xl font-bold mb-4"
                style={{ fontFamily: "'Old Standard TT', serif", color: "#B58152" }}
              >
                Our Special Offers
              </h2>
              <p className="text-[#3C3C3C] mb-8 leading-relaxed">
                {specialOffers.length > 0 ? specialOffers[0].description : "Loading special offers..."}
              </p>
              <div className="bg-white p-6 rounded-md flex flex-wrap gap-6 shadow-md">
                {specialOffers.length > 0 ? (
                  specialOffers.map((offer, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full overflow-hidden">
                        <img src={offer.imageUrl} alt={offer.title} className="w-full h-full object-cover" />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold">{offer.title}</h4>
                        <p className="text-sm text-gray-600">{offer.description}</p>
                      </div>
                    </div>
                  ))
                ) : (
                  <p>Loading offers...</p>
                )}
              </div>
            </div>
            <div className="lg:w-1/2 flex justify-center">
              <div className="w-[90%] h-[45%] rounded-full overflow-hidden">
                <img
                  src={
                    specialOffers.length > 0
                      ? specialOffers[0].imageUrl
                      : "https://i.ibb.co/pjvhDJdh/1.jpg"
                  }
                  alt="Special Offer"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* TESTIMONIALS */}
      <div className="pt-8 pb-8">
        <h1
          className="font-bold text-[2.7rem] md:text-[3.2rem] text-center tracking-wide"
          style={{ fontFamily: "'Old Standard TT', serif", color: "#B58152" }}
        >
          What Clients Say
        </h1>
      </div>

      <section className="py-4 bg-white">
        <div className="max-w-screen mx-8 px-4">
          <div className="mb-10 text-center">
            <p className="text-gray-500 text-lg">Testimonials from our valued clients.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {testimonials.length > 0 ? (
              testimonials.map((testimonial, idx) => (
                <div key={idx} className="bg-white rounded-xl shadow-md p-8 flex flex-col items-start h-full">
                  <FaQuoteLeft className="text-4xl text-blue-400 mb-4" />
                  <p className="text-gray-700 mb-6">{testimonial.description}</p>
                  <div className="mt-auto w-full flex flex-col">
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-gray-900">
                        {testimonial.title} <span className="font-normal text-gray-700">(Client)</span>
                      </span>
                      <span className="flex ml-auto text-yellow-400">
                        {[...Array(5)].map((_, i) => (
                          <FaStar key={i} />
                        ))}
                      </span>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p className="col-span-3 text-center text-gray-500">Loading testimonials...</p>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
