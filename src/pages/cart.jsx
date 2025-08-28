import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { useState, useEffect } from "react";
import { useCart } from "../context/cartContext";

export default function Cart() {
  const { cartItems, removeFromCart, clearCart } = useCart();
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const total = cartItems.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
    setTotalPrice(total);
  }, [cartItems]);

  return (
    <div>
      <Navbar />
      <div className="min-h-[60vh] p-8">
        <h1 className="text-3xl font-bold mb-6">Shopping Cart</h1>
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <div className="space-y-6 flex flex-col">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between border-b pb-4"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    className="w-20 h-20 object-cover"
                  />
                  <div>
                    <h2 className="text-xl font-semibold">{item.title}</h2>
                    <p>Price: ${item.price}</p>
                    <p>Quantity: {item.quantity}</p>
                    <p>Subtotal: ${item.price * item.quantity}</p>
                  </div>
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 hover:cursor-pointer transition-colors duration-200"
                >
                  Remove
                </button>
              </div>
            ))}
            <h2 className="text-2xl font-bold self-center mt-5">
              Total: ${totalPrice}
            </h2>
            <div className="flex justify-between items-center">
              <div className="text-right">
                <button
                  onClick={clearCart}
                  className="text-white bg-gradient-to-r from-red-500 via-red-400 to-rose-400 px-6 py-2 rounded-xl shadow hover:scale-105 hover:cursor-pointer hover:text-red-900 transition-all duration-200 font-bold"
                >
                  Clear Cart
                </button>
              </div>
              <div>
                <button
                  onClick={() => (window.location.href = "/shop")}
                  className="text-white bg-gradient-to-r from-blue-500 via-blue-400 to-cyan-400 px-6 py-2 rounded-xl shadow hover:scale-105 hover:cursor-pointer hover:text-blue-900 transition-all duration-200 font-bold"
                >
                  Continue Shopping
                </button>
              </div>
              <div>
                <button
                  className="text-white bg-gradient-to-r from-green-500 via-green-400 to-emerald-400 px-6 py-2 rounded-xl shadow hover:scale-105 hover:cursor-pointer hover:text-green-900 transition-all duration-200 font-bold"
                  onClick={() => {
                    alert("Proceeding to checkout...");
                    clearCart();
                  }}
                >
                  Proceed to Checkout
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}
