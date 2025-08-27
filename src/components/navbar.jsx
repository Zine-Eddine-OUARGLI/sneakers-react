import { ShoppingCart } from "lucide-react";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
  useClerk,
} from "@clerk/clerk-react";
import { useCart } from "../context/CartContext";

export default function Navbar() {
  const clerk = useClerk();
  const { cartCounter } = useCart();
  console.log(cartCounter);
  return (
    <div className="flex justify-between items-center bg-gradient-to-r from-blue-500 via-blue-400 to-cyan-400 text-white shadow-lg px-6 py-3">
      <div className="flex items-center gap-8">
        <h2 className="font-extrabold text-2xl tracking-wide drop-shadow-sm">
          Sneakers
        </h2>
        <nav className="flex gap-6">
          <a
            href="/"
            className="hover:text-amber-300 font-medium transition-colors duration-200"
          >
            Home
          </a>
          <a
            href="/shop"
            className="hover:text-amber-300 font-medium transition-colors duration-200"
          >
            Shop
          </a>
          <a
            href="/about"
            className="hover:text-amber-300 font-medium transition-colors duration-200"
          >
            About
          </a>
          <a
            href="/blog"
            className="hover:text-amber-300 font-medium transition-colors duration-200"
          >
            Blog
          </a>
          <a
            href="/contact"
            className="hover:text-amber-300 font-medium transition-colors duration-200"
          >
            Contact
          </a>
        </nav>
      </div>
      <div className="flex items-center self-end gap-6">
        <a
          className="relative hover:text-amber-300 transition-colors duration-200"
          href="/cart"
        >
          {cartCounter > 0 && (
            <div className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full text-xs px-2 py-0.5 shadow">
              {cartCounter}
            </div>
          )}
          <ShoppingCart size={32} />
        </a>
        <SignedOut>
          <SignInButton className="hover:text-amber-300 hover:cursor-pointer font-semibold transition-colors duration-200" />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </div>
  );
}
