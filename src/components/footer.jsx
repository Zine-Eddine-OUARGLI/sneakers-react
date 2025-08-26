import {
  FaXTwitter,
  FaThreads,
  FaSquareFacebook,
  FaInstagram,
} from "react-icons/fa6";

export default function Footer() {
  return (
    <div className="w-full bg-gradient-to-r from-blue-500 via-blue-400 to-cyan-400 text-white rounded-t-xl shadow-inner pt-8 pb-4">
      <div className="flex flex-col md:flex-row justify-between items-center max-w-6xl mx-auto px-4">
        <div className="flex flex-col gap-4">
          <h1 className="text-2xl font-bold mb-2">
            Sneakers™, where you will find all the shoes you need.
          </h1>
          <h2 className="text-xl font-semibold mb-2">Find us here!</h2>
          <div className="flex gap-6">
            <FaInstagram
              className="hover:text-amber-300 transition-colors duration-200 cursor-pointer"
              size={30}
            />
            <FaSquareFacebook
              className="hover:text-amber-300 transition-colors duration-200 cursor-pointer"
              size={30}
            />
            <FaThreads
              className="hover:text-amber-300 transition-colors duration-200 cursor-pointer"
              size={30}
            />
            <FaXTwitter
              className="hover:text-amber-300 transition-colors duration-200 cursor-pointer"
              size={30}
            />
          </div>
        </div>
        <div className="flex flex-col gap-2 mt-8 md:mt-0">
          <h2 className="text-xl font-bold mb-2">Links</h2>
          <a
            href="/"
            className="text-lg hover:text-amber-300 transition-colors duration-200"
          >
            Home
          </a>
          <a
            href="/shop"
            className="text-lg hover:text-amber-300 transition-colors duration-200"
          >
            Shop
          </a>
          <a
            href="/about"
            className="text-lg hover:text-amber-300 transition-colors duration-200"
          >
            About
          </a>
          <a
            href="/blog"
            className="text-lg hover:text-amber-300 transition-colors duration-200"
          >
            Blog
          </a>
          <a
            href="/contact"
            className="text-lg hover:text-amber-300 transition-colors duration-200"
          >
            Contact
          </a>
        </div>
      </div>
      <hr className="border-blue-300 my-6" />
      <div className="text-center">
        <p className="text-sm">© Sneakers 2025 — All Rights Reserved.</p>
      </div>
    </div>
  );
}
