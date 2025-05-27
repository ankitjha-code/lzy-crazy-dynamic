import React from "react";
import ProductCard from "./ProductCard";

// Sample products data
const productsData = [
  {
    id: 1,
    name: "Face Cleaner",
    price: 56.0,
    rating: 4.5,
    image:
      "https://images.unsplash.com/photo-1556228578-dd6e8005da31?w=300&h=300&fit=crop&crop=center",
  },
  {
    id: 2,
    name: "Olive Oil",
    price: 85.0,
    rating: 4.5,
    image:
      "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=300&h=300&fit=crop&crop=center",
  },
  {
    id: 3,
    name: "Skin & Body Cleaner",
    price: 126.0,
    rating: 4.5,
    image:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=300&fit=crop&crop=center",
  },
  {
    id: 4,
    name: "Luxury Perfume",
    price: 200.0,
    rating: 3.5,
    image:
      "https://images.unsplash.com/photo-1541643600914-78b084683601?w=300&h=300&fit=crop&crop=center",
  },
  {
    id: 5,
    name: "Face Cleaner",
    price: 56.0,
    rating: 4.0,
    image:
      "https://images.unsplash.com/photo-1556228578-dd6e8005da31?w=300&h=300&fit=crop&crop=center",
  },
  {
    id: 6,
    name: "Olive Oil",
    price: 85.0,
    rating: 4.2,
    image:
      "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=300&h=300&fit=crop&crop=center",
  },
  {
    id: 7,
    name: "Skin & Body Cleaner",
    price: 126.0,
    rating: 4.7,
    image:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=300&fit=crop&crop=center",
  },
  {
    id: 8,
    name: "Luxury Perfume",
    price: 200.0,
    rating: 4.5,
    image:
      "https://images.unsplash.com/photo-1541643600914-78b084683601?w=300&h=300&fit=crop&crop=center",
  },
];

const ProductSection = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      {/* Header */}
      <div className="max-w-7xl mx-auto mb-8 w-full px-4 py-8 bg-amber-600/10">
        <div className="flex items-center justify-between gap-4 flex-wrap">
          <h1 className="text-4xl text-center flex-1 md:flex-none text-nowrap font-light tracking-wider text-amber-700 uppercase">
            Our Products
          </h1>
          <button className="bg-rose-400 flex-1 md:flex-none text-nowrap hover:bg-rose-500 text-white px-6 py-3 rounded-full font-medium transition-colors duration-200">
            All Products
          </button>
        </div>
      </div>

      {/* Products Grid */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {productsData.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductSection;
