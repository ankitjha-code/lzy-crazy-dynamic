import React from "react";
import About from "./components/About/About";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProductSection from "./components/ProductSection";
import Banner from "./components/Banner";
const App = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <Banner />
      <ProductSection />
      <About />
      <Navbar></Navbar>
      <Footer></Footer>
    </div>
  );
};

export default App;
