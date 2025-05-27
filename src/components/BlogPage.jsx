
import React from 'react';
import { FaQuoteLeft, FaStar } from "react-icons/fa";

const images = [
  './src/Images/Mask Group (2).png',
  './src/Images/Mask Group (1).png',
  './src/Images/Mask Group.png',
];

const testimonials = [
  {
    text: "EduPlay has been a game-changer for my 7-year-old! The adaptive games make learning enjoyable, and the personalized practice sheets are a lifesaver.",
    author: "Emily Halter",
    platform: "AppStore",
  },
  {
    text: "The practice sheets help me get better at stuff, and the bedtime stories are super fun. I can even tell my own stories sometimes! EduPlay makes me look forward to learning.",
    author: "Mars Sam",
    platform: "GooglePlay",
  },
  {
    text: "Homeschooling three kids can be challenging, but EduPlay has been a game-changer for us. The games cover a range of subjects, making learning diverse and engaging",
    author: "Lisa Parker",
    platform: "AppStore",
  },
];

export default function BlogPage() {
  return (
    <div className="min-h-screen ">
      <div className="pt-12 pb-8">
        <h1
          className="font-bold text-[2.7rem] md:text-[3.2rem] text-center tracking-wide"
          style={{
            fontFamily: "'Old Standard TT', serif",
            color: '#B58152',
          }}
        >
          Our Latest Blog
        </h1>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="grid md:grid-cols-3 gap-8">
          {images.map((img, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src={img}
                className="h-80 w-full object-cover"
                alt={`Post ${index + 1}`}
              />
            </div>
          ))}
        </div>
      </div>

      <div className='w-full bg-[#F5F0EB] '>

     

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between px-8 py-12">
          <div className="lg:w-1/2 mb-8 lg:mb-0">
            <h2
              className="text-4xl md:text-5xl font-bold mb-4"
              style={{
                fontFamily: "'Old Standard TT', serif",
                color: '#B58152',
              }}
            >
              Our Special Offers
            </h2>
            <p className="text-[#3C3C3C] mb-8 leading-relaxed">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
              when an unknown printer took a galley of type and scrambled it.
            </p>
            <div className="bg-white p-6 rounded-md flex flex-wrap gap-6 shadow-md">
              <div className="flex items-center gap-3">
                <span className="text-3xl">😊</span>
                <div>
                  <h4 className="text-lg font-bold">283+</h4>
                  <p className="text-sm text-gray-600">Happy Clients</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-3xl">🏆</span>
                <div>
                  <h4 className="text-lg font-bold">432+</h4>
                  <p className="text-sm text-gray-600">Win Awards</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-3xl">💇‍♀️</span>
                <div>
                  <h4 className="text-lg font-bold">545+</h4>
                  <p className="text-sm text-gray-600">Our Trainer</p>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 flex justify-center">
              <div className="w-[90%] h-[45%] rounded-full overflow-hidden">
                <img
                  src="./src/Images/1.jpg"
                  alt="Special Offer"
                  className="w-full h-full object-cover"
                />
            </div>
          </div>
        </div>
      </div>

 </div>
      <div className="pt-16 pb-8">
        <h1
          className="font-bold text-[2.7rem] md:text-[3.2rem] text-center tracking-wide"
          style={{
            fontFamily: "'Old Standard TT', serif",
            color: '#B58152',
          }}
        >
          What Clients Say
        </h1>
      </div>

      <section className="py-8 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="mb-10 text-center">
            <p className="text-gray-500 text-lg">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem<br />
              Ipsum has been the industry's standard dummy text ever since the 1500s,
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl shadow-md p-8 flex flex-col items-start h-full"
              >
                <FaQuoteLeft className="text-4xl text-blue-400 mb-4" />
                <p className="text-gray-700 mb-6">{testimonial.text}</p>
                <div className="mt-auto w-full flex flex-col">
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-gray-900">
                      {testimonial.author}{" "}
                      <span className="font-normal text-gray-700">
                        ({testimonial.platform})
                      </span>
                    </span>
                    <span className="flex ml-auto text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <FaStar key={i} />
                      ))}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
