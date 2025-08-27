import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";

export default function HomeBestSeller() {
  return (
    <div>
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
    </div>
  );
}
