export default function HomeInfo() {
  return (
    <div>
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
    </div>
  );
}
