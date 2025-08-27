import { FaAppStoreIos } from "react-icons/fa";
import { IoLogoGooglePlaystore } from "react-icons/io5";

export default function HomeDownload() {
  return (
    <div className="flex flex-col items-center justify-center my-12 bg-gray-100 gap-6">
      <h1 className="text-4xl font-bold mt-12 mb-6 text-black hover:text-amber-400 transition-colors duration-200">
        Download Our App
      </h1>
      <p className="text-gray-600 text-lg opacity-90 mx-20 mb-6 text-center">
        Experience the convenience of shopping on the go with the Sneakers™ app.
        Browse our extensive collection, receive personalized recommendations,
        and stay updated on the latest releases and promotions, all from the
        palm of your hand.
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
  );
}
