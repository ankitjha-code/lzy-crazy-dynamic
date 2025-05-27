import CardRatings from "./CardRatings";
import { Heart, ShoppingCart } from "lucide-react";

const ProductCard = ({ product, showHover = false }) => {
  return (
    <div className="group relative bg-white rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden">
      {/* Hover Overlay with Buttons */}
      <div className="absolute inset-0 bg-gray-800/70 bg-opacity-40 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 z-10">
        <button className="w-12 h-12 bg-white bg-opacity-90 rounded-full flex items-center justify-center hover:bg-opacity-100 transition-all duration-200 shadow-lg">
          <Heart className="w-5 h-5 text-rose-400 fill-rose-400" />
        </button>
        <button className="w-12 h-12 bg-white bg-opacity-90 rounded-full flex items-center justify-center hover:bg-opacity-100 transition-all duration-200 shadow-lg">
          <ShoppingCart className="w-5 h-5 text-rose-400 fill-rose-400" />
        </button>
      </div>

      {/* Product Info */}
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-3">
          {product.name}
        </h3>
        <div className="mb-3">
          <CardRatings rating={product.rating} />
        </div>
        <p className="text-xl font-medium text-rose-400 mb-4">
          ${product.price.toFixed(2)}
        </p>
      </div>

      {/* Product Image Container */}
      <div className="px-6 pb-6">
        <div className="aspect-square bg-gray-50 rounded-xl overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
