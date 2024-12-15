import React from 'react';
import { ShoppingCart } from 'lucide-react';
import { Product } from '../../types/shop';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
  return (
    <div className="bg-gray-800 rounded-xl overflow-hidden hover:transform hover:scale-105 transition-transform duration-300">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-64 object-cover"
      />
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-xl font-bold text-white">{product.name}</h3>
            <p className="text-purple-400">${product.price}</p>
          </div>
          {product.inStock ? (
            <span className="text-green-400 text-sm">In Stock</span>
          ) : (
            <span className="text-red-400 text-sm">Out of Stock</span>
          )}
        </div>
        <p className="text-gray-400 mb-4">{product.description}</p>
        <button
          onClick={() => onAddToCart(product)}
          disabled={!product.inStock}
          className="w-full bg-purple-600 hover:bg-purple-700 disabled:bg-gray-600 disabled:cursor-not-allowed text-white py-2 rounded-lg flex items-center justify-center gap-2 transition-colors"
        >
          <ShoppingCart className="h-5 w-5" />
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;