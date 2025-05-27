import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProductSection from "./components/ProductSection";



const App = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <ProductSection />
    </div>
    <div>
           <Navbar></Navbar>
      <Footer></Footer>
    </div>
  );
};

export default App;
