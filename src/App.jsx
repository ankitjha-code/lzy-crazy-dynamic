import React from "react";
import BlogPage from "./components/BlogPage";
import AppointmentPage from "./components/AppointmentPage";
import About from "./components/About/About";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProductSection from "./components/ProductSection";
import Banner from "./components/Banner";
const App = () => {
  return (
    <>
      <Navbar></Navbar>
      <div className="flex flex-col items-center justify-center min-h-screen">
        <Banner />
        <About />
        <ProductSection />
        <BlogPage />
        <AppointmentPage />
      </div>
      <Footer></Footer>
    </>
  );
};

export default App;
