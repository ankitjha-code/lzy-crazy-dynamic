import React from "react";

const About = () => {
  return (
    <div className="container mx-16 px-4 py-10 ">
      <div className="flex flex-col-reverse md:flex-row items-center gap-10">
        {/* Left Side text section */}
        <div className="md:w-1/2 w-full text-center md:text-left">
          <p className="text-lg font-normal">We Provide</p>
          <h1 className="text-3xl md:text-5xl font-semibold mt-2 mb-4">
            Welcome to Spa Center
          </h1>
          <p className="text-gray-500 mb-4">
            Spread over two floors, our beautiful spa offers a soothing
            environment in which you can rest, relax and feel completely
            rejuvenated.
          </p>
          <p className="text-gray-500 mb-6">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It was popularised in
            the 1960s with the release of Letraset sheets containing Lorem Ipsum
            passages.
          </p>
          <button className="bg-rose-400 hover:bg-rose-500 text-white font-medium px-6 py-3 rounded-full transition duration-300">
            Learn More
          </button>
        </div>

        {/* Right side image section */}
        <div className="md:w-1/2 w-full flex justify-center">
          <img
            src="https://media.istockphoto.com/id/134052142/photo/hair-salon-situation.jpg?s=2048x2048&w=is&k=20&c=AJ5LS4qPJjTDUwH9CuO2Feagnadu991eNQSoqPnVW5Y="
            alt="Spa"
            className="rounded-2xl w-full max-w-md md:max-w-full object-cover h-100"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
