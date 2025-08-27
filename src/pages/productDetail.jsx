import { useState, useEffect } from "react";
import "react-photo-view/dist/react-photo-view.css";
import { PhotoProvider, PhotoView } from "react-photo-view";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { useParams } from "react-router";

export default function ProductDetail() {
  const { id } = useParams();
  const [productData, setProductData] = useState(null);
  const [counter, setCounter] = useState(1);
  const [counterCart, setCounterCart] = useState(0);
  const [image, setImage] = useState(null);

  useEffect(() => {
    async function fetchProductById() {
      try {
        const response = await fetch(`https://dummyjson.com/products/${id}`);
        const result = await response.json();
        setProductData(result);
        // Set default image after data is loaded
        if (result.images && result.images.length > 0) {
          setImage({ source: result.images[0], thumbnail: result.images[0] });
        }
      } catch (e) {
        console.log(e);
      }
    }
    fetchProductById();
  }, [id]);

  if (!productData || !image) {
    return (
      <div className="flex items-center justify-center h-[60vh]">
        <p className="text-lg text-gray-500">Loading...</p>
      </div>
    );
  }

  // Prepare images array for thumbnails
  const images =
    productData.images?.map((img) => ({
      source: img,
      thumbnail: img,
    })) || [];

  function increment() {
    setCounter(counter + 1);
  }
  function decrement() {
    if (counter === 0) setCounter(counter);
    else setCounter(counter - 1);
  }

  return (
    <div>
      <Navbar counterCart={counterCart} />
      <div className="flex gap-10 items-center justify-center my-16">
        <div className="flex flex-col gap-6 justify-center">
          <PhotoProvider>
            <PhotoView src={image.source}>
              <img
                src={image.source}
                alt={productData.title}
                className="hover:cursor-pointer w-96 h-96 rounded-xl shadow-lg border-2 border-blue-200 hover:border-cyan-400 transition-all duration-300"
              />
            </PhotoView>
          </PhotoProvider>
          <div className="flex gap-6">
            {images.map((item, index) => (
              <img
                key={index}
                src={item.thumbnail}
                alt="sneakers"
                className={`w-20 h-20 hover:cursor-pointer hover:border-2 hover:border-cyan-400 rounded-xl shadow hover:scale-105 transition-all duration-200`}
                onClick={() => setImage(item)}
              />
            ))}
          </div>
        </div>
        <div className="flex flex-col justify-evenly gap-8 mx-12 bg-white rounded-xl shadow-lg p-8 max-w-[500px]">
          <p className="text-blue-500 text-xl font-semibold uppercase tracking-wide hover:text-amber-400 transition-colors duration-200">
            {productData.brand}
          </p>
          <h2 className="text-gray-900 text-4xl font-bold mb-2 hover:text-amber-400 transition-colors duration-200">
            {productData.title}
          </h2>
          <p className="text-gray-600 text-lg opacity-90 mb-4 hover:text-amber-400 transition-colors duration-200">
            {productData.description}
          </p>
          <div className="flex gap-4 items-center">
            <p className="text-3xl font-bold text-cyan-600 hover:text-amber-400 transition-colors duration-200">
              ${productData.price}
            </p>
            <p className="text-red-500 text-xl bg-blue-100 px-3 py-1 rounded-lg font-semibold hover:text-amber-400 transition-colors duration-200">
              -{productData.discountPercentage}%
            </p>
          </div>
          <div className="flex gap-6 items-center">
            <div className="flex items-center bg-blue-50 rounded-lg px-4 py-2 shadow">
              <button
                className="text-gray-400 text-3xl font-bold px-2 hover:text-amber-400 transition-colors duration-200"
                onClick={decrement}
              >
                -
              </button>
              <p className="text-2xl font-semibold mx-3">{counter}</p>
              <button
                className="text-gray-400 text-3xl font-bold px-2 hover:text-amber-400 transition-colors duration-200"
                onClick={increment}
              >
                +
              </button>
            </div>
            <button
              className="text-white bg-gradient-to-r from-blue-500 via-blue-400 to-cyan-400 px-6 py-2 rounded-xl shadow hover:scale-105 hover:cursor-pointer hover:text-blue-900 transition-all duration-200 font-bold"
              onClick={() => {
                setCounterCart(counterCart + counter);
                setCounter(1);
              }}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
