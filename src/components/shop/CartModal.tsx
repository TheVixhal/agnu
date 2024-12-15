import React from 'react';
import { X, Trash2 } from 'lucide-react';
import { CartItem } from '../../types/shop';

interface CartModalProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onRemoveFromCart: (productId: string) => void;
  onUpdateQuantity: (productId: string, quantity: number) => void;
}

const CartModal: React.FC<CartModalProps> = ({
  isOpen,
  onClose,
  cartItems,
  onRemoveFromCart,
  onUpdateQuantity,
}) => {
  if (!isOpen) return null;

  const total = cartItems.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="fixed inset-0 bg-black bg-opacity-50" onClick={onClose} />
      <div className="relative min-h-screen md:flex md:items-center md:justify-center">
        <div className="bg-gray-800 rounded-lg w-full max-w-md mx-auto my-8 md:my-0">
          <div className="flex justify-between items-center p-4 border-b border-gray-700">
            <h2 className="text-xl font-bold text-white">Your Cart</h2>
            <button onClick={onClose} className="text-gray-400 hover:text-white">
              <X className="h-6 w-6" />
            </button>
          </div>
          <div className="p-4 max-h-[60vh] overflow-y-auto">
            {cartItems.length === 0 ? (
              <p className="text-gray-400 text-center">Your cart is empty</p>
            ) : (
              <div className="space-y-4">
                {cartItems.map((item) => (
                  <div
                    key={item.product.id}
                    className="flex items-center gap-4 bg-gray-700 p-3 rounded-lg"
                  >
                    <img
                      src={item.product.image}
                      alt={item.product.name}
                      className="w-16 h-16 object-cover rounded"
                    />
                    <div className="flex-1">
                      <h3 className="text-white font-medium">{item.product.name}</h3>
                      <p className="text-purple-400">${item.product.price}</p>
                      <div className="flex items-center gap-2 mt-2">
                        <select
                          value={item.quantity}
                          onChange={(e) =>
                            onUpdateQuantity(item.product.id, Number(e.target.value))
                          }
                          className="bg-gray-600 text-white rounded px-2 py-1"
                        >
                          {[1, 2, 3, 4, 5].map((num) => (
                            <option key={num} value={num}>
                              {num}
                            </option>
                          ))}
                        </select>
                        <button
                          onClick={() => onRemoveFromCart(item.product.id)}
                          className="text-red-400 hover:text-red-300"
                        >
                          <Trash2 className="h-5 w-5" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
          {cartItems.length > 0 && (
            <div className="p-4 border-t border-gray-700">
              <div className="flex justify-between items-center mb-4">
                <span className="text-white font-medium">Total:</span>
                <span className="text-purple-400 font-bold">${total.toFixed(2)}</span>
              </div>
              <button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 rounded-lg">
                Checkout
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartModal;