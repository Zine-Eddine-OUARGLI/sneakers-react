export default function HomeHeader() {
  return (
    <div className="flex items-center justify-between mt-12">
      <div className="flex flex-col space-y-6 max-w-xl ml-12">
        <h1 className="text-4xl font-bold ml-20 mt-12 mb-6 text-black hover:text-amber-400 transition-colors duration-200">
          Start your shopping spree!
        </h1>
        <p className="text-gray-600 text-lg opacity-90 mx-20 mb-12">
          Discover the latest trends and exclusive deals on sneakers. Join us in
          exploring a world of style, comfort, and innovation. Your next
          favorite pair is just a click away!
        </p>
        <button className="text-white bg-gradient-to-r from-blue-500 via-blue-400 to-cyan-400 px-6 py-2 rounded-xl shadow hover:scale-105 hover:cursor-pointer hover:text-blue-900 transition-all duration-200 font-bold mx-20 mb-12">
          Shop Now !
        </button>
      </div>
      <img
        src="\imgs\home-image2.jpg"
        alt="Nike"
        className="w-[600px] rounded-xl shadow-lg mr-20 mt-12"
      />
    </div>
  );
}
