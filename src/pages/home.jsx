import Navbar from "../components/navbar";
import Footer from "../components/footer";
import HomeHeader from "../components/home/homeHeader";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import ProductInfo from "../components/shop/productInfo";
import { useState, useEffect } from "react";

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

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="bg-[url('/imgs/contact-bg.jpg')] bg-cover bg-center h-100 flex items-center justify-center">
        <h1 className="text-white font-bold text-8xl">Home</h1>
      </div>
      <HomeHeader />
      <div className="flex items-center justify-between mt-12 flex-col">
        <div className="flex space-y-6 w-full my-5 justify-between items-center">
          <button>
            <KeyboardArrowLeft className="bg-gray-200 rounded-2xl text-4xl ml-5 text-gray-600 hover:text-amber-400 transition-colors duration-200" />
          </button>
          <h1 className="text-4xl font-bold text-black hover:text-amber-400 transition-colors duration-200">
            Trending Products
          </h1>
          <button>
            <KeyboardArrowRight className="bg-gray-200 rounded-2xl text-4xl mr-5 text-gray-600 hover:text-amber-400 transition-colors duration-200" />
          </button>
        </div>
        <div className="grid grid-cols-10 gap-6 mb-12 mt-6 mx-5 overflow-scroll w-full">
          {loading ? (
            <p>Loading...</p>
          ) : (
            products.map((product) => (
              <ProductInfo key={product.id} product={product} />
            ))
          )}
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
        <div className="flex justify-between w-full px-20 mb-12">
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
      </div>
      <Footer />
    </div>
  );
}
