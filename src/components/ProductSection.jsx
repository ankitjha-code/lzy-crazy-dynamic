
import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductCard from "./ProductCard";

const ProductSection = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.post(
          import.meta.env.VITE_API_URL_PRODUCT,
          { userId: import.meta.env.VITE_API_USER_ID },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        // console.log("✅ Product section data:", response.data);
        setProducts(response.data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) return <div>Loading products...</div>;

  return (
    <div className="min-h-screen py-12">
      {/* Header */}
      <div className="max-w-screen mx-auto mb-8 w-full px-10 py-8 bg-amber-600/10">
        <div className="flex items-center justify-between gap-4 flex-wrap">
          <h1 className="text-4xl text-center flex-1 md:flex-none whitespace-nowrap font-light tracking-wider text-amber-700 uppercase">
            Our Products
          </h1>
          <button className="bg-rose-400 flex-1 md:flex-none whitespace-nowrap hover:bg-rose-500 text-white px-6 py-3 rounded-full font-medium transition-colors duration-200">
            All Products
          </button>
        </div>
      </div>

      {/* Products Grid */}
      <div className="max-w-screen mx-auto px-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.length > 0 ? (
            products.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))
          ) : (
            <p>No products found for this user.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductSection;
