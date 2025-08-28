import Navbar from "../components/navbar";
import Footer from "../components/footer";
import HomeHeader from "../components/home/homeHeader";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import ProductInfo from "../components/shop/productInfo";
import HomeDownload from "../components/home/homeDownload";
import HomeInfo from "../components/home/homeInfo";
import HomeBestSeller from "../components/home/homeBestSeller";
import { useRef } from "react";
import { useProducts } from "../hooks/useProducts";

export default function Home() {
  const { products, loading, error } = useProducts();
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

  if (error) return <h1>{error}</h1>;

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
            {loading ? (
              <div>Loading....</div>
            ) : (
              products
                .slice(0, 10)
                .map((product) => (
                  <ProductInfo key={product.id} product={product} />
                ))
            )}
          </div>
        </div>
      </div>
      <HomeInfo />
      <HomeBestSeller />
      <HomeDownload />
      <Footer />
    </div>
  );
}
