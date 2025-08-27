import Navbar from "../components/navbar";
import Footer from "../components/footer";
import HomeHeader from "../components/home/homeHeader";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import ProductInfo from "../components/shop/productInfo";
import { FaAppStoreIos } from "react-icons/fa";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { useState, useEffect, useRef } from "react";

export default function Home() {
  async function fetchProducts() {
    try {
      setLoading(true);
      const response = await fetch(
        `https://dummyjson.com/products/category/mens-shoes`
      );
      const result = await response.json();

      const response2 = await fetch(
        `https://dummyjson.com/products/category/womens-shoes`
      );
      const result2 = await response2.json();
      setProducts([...result.products, ...result2.products]);
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  }
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetchProducts();
  }, []);

  const scrollRef = useRef(null);

  function scrollLeft() {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  }
  function scrollRight() {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  }

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="bg-[url('/imgs/contact-bg.jpg')] bg-cover bg-center h-100 flex items-center justify-center">
        <h1 className="text-white font-bold text-8xl">Home</h1>
      </div>
      <HomeHeader />
      <div className="flex items-center justify-between mt-12 flex-col">
        <div className="flex space-y-6 w-full my-5 justify-between items-center">
          <button onClick={scrollLeft}>
            <KeyboardArrowLeft className="bg-gray-200 rounded-2xl text-4xl ml-5 text-gray-600 hover:text-amber-400 transition-colors duration-200" />
          </button>
          <h1 className="text-4xl font-bold text-black hover:text-amber-400 transition-colors duration-200">
            Trending Products
          </h1>
          <button onClick={scrollRight}>
            <KeyboardArrowRight className="bg-gray-200 rounded-2xl text-4xl mr-5 text-gray-600 hover:text-amber-400 transition-colors duration-200" />
          </button>
        </div>
        <div
          className="overflow-x-auto w-full [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          ref={scrollRef}
        >
          <div className="grid grid-flow-col auto-cols-[minmax(200px,1fr)] gap-6 mb-12 mt-6 mx-5">
            {products.slice(0, 10).map((product) => (
              <ProductInfo key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between mt-12">
        <img
          src="\imgs\home-image3.jpg"
          alt="Nike"
          className="w-[600px] rounded-xl shadow-lg ml-20 my-12"
        />
        <div>
          <h1 className="text-4xl font-bold ml-20 mt-12 mb-6 text-black hover:text-amber-400 transition-colors duration-200">
            Join Our Sneakers™ Community
          </h1>
          <p className="text-gray-600 text-lg opacity-90 mx-20 mb-12">
            Stay updated with the latest sneaker releases, exclusive offers, and
            insider news. Subscribe to our newsletter and be part of a community
            that shares your passion for sneakers.
          </p>
          <button className="text-white bg-gradient-to-r from-blue-500 via-blue-400 to-cyan-400 px-6 py-2 rounded-xl shadow hover:scale-105 hover:cursor-pointer hover:text-blue-900 transition-all duration-200 font-bold mx-20 mb-12">
            Subscribe Now
          </button>
        </div>
      </div>
      <div className="flex items-center justify-between mt-12 mb-12 bg-gray-100">
        <div>
          <h1 className="text-4xl font-bold ml-20 mt-12 mb-6 text-black hover:text-amber-400 transition-colors duration-200">
            Why Choose Sneakers™?
          </h1>
          <p className="text-gray-600 text-lg opacity-90 mx-20 mb-12">
            At Sneakers™, we are dedicated to providing an unparalleled shopping
            experience. Our curated selection of sneakers combines style,
            comfort, and innovation, ensuring that you find the perfect pair for
            any occasion. With a focus on customer satisfaction and a passion
            for sneaker culture, we strive to be your go-to destination for all
            things sneakers.
          </p>
        </div>
        <img
          src="\imgs\home-image4.jpg"
          alt="Nike"
          className="w-[600px] rounded-xl shadow-lg mr-20 my-12"
        />
      </div>
      <div className="flex flex-col items-center justify-between mt-12 mb-12">
        <div className="flex justify-between w-full px-20 mb-8">
          <h1 className="text-3xl font-bold mr-20 mb-6 text-black hover:text-amber-400 transition-colors duration-200">
            Best Seller
          </h1>
          <div className="flex justify-evenly w-30 items-center">
            <button>
              <KeyboardArrowLeft className="bg-gray-200 rounded-2xl text-4xl ml-5 text-gray-600 hover:text-amber-400 transition-colors duration-200" />
            </button>
            <button>
              <KeyboardArrowRight className="bg-gray-200 rounded-2xl text-4xl mr-5 text-gray-600 hover:text-amber-400 transition-colors duration-200" />
            </button>
          </div>
        </div>
        <div className="flex w-full items-center">
          <div className="grid grid-cols-2 gap-6 mb-6 mx-10 w-5/12">
            {Array.from({ length: 4 }).map((_, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl shadow-lg p-4 flex flex-col items-center"
              >
                <img
                  src="/imgs/sneaker-home.jpg"
                  alt="Static Sneaker"
                  className="w-32 h-32 object-cover rounded-lg mb-3"
                />
                <h2 className="text-lg font-bold text-black mb-2">
                  Sneaker Model
                </h2>
                <p className="text-cyan-600 font-semibold text-xl">$99.99</p>
              </div>
            ))}
          </div>
          <div className="bg-white rounded-xl shadow-lg mr-6 flex flex-col items-center pb-4 w-7/12 h-full">
            <img
              src="/imgs/home-image5.jpg"
              alt="Static Sneaker"
              className="w-full h-105 object-cover rounded-lg mb-3"
            />
            <h2 className="text-lg font-bold text-black mb-2">Sneaker Model</h2>
            <p className="text-cyan-600 font-semibold text-xl">$99.99</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center my-12 bg-gray-100 gap-6">
        <h1 className="text-4xl font-bold mt-12 mb-6 text-black hover:text-amber-400 transition-colors duration-200">
          Download Our App
        </h1>
        <p className="text-gray-600 text-lg opacity-90 mx-20 mb-6 text-center">
          Experience the convenience of shopping on the go with the Sneakers™
          app. Browse our extensive collection, receive personalized
          recommendations, and stay updated on the latest releases and
          promotions, all from the palm of your hand.
        </p>
        <div className="flex gap-6 mb-12">
          <button className="flex items-center bg-black text-white px-4 py-2 rounded-lg shadow hover:scale-105 hover:cursor-pointer hover:bg-gray-800 transition-all duration-200 font-bold">
            <FaAppStoreIos size={24} className="mr-2" />
            App Store
          </button>
          <button className="flex items-center bg-black text-white px-4 py-2 rounded-lg shadow hover:scale-105 hover:cursor-pointer hover:bg-gray-800 transition-all duration-200 font-bold">
            <IoLogoGooglePlaystore size={24} className="mr-2" />
            Google Play
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}
