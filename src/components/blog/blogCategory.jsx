export default function BlogCategory() {
  return (
    <div className="w-full flex flex-col items-center shadow-md p-4">
      <h1 className="text-left ml-2 font-semibold text-2xl w-full">Category</h1>
      <div className=" w-full h-0.5 bg-gray-200 mt-4 mb-6 "></div>
      <ul className="w-full">
        <li className="mb-2">
          <p
            href="#"
            className="text-black hover:text-amber-400 transition-colors duration-200 hover:cursor-pointer"
          >
            Running Sneakers
          </p>
        </li>
        <li className="mb-2">
          <p
            href="#"
            className="text-black hover:text-amber-400 transition-colors duration-200 hover:cursor-pointer"
          >
            Casual Sneakers
          </p>
        </li>
        <li className="mb-2">
          <p
            href="#"
            className="text-black hover:text-amber-400 transition-colors duration-200 hover:cursor-pointer"
          >
            Fashion Sneakers
          </p>
        </li>
        <li className="mb-2">
          <p
            href="#"
            className="text-black hover:text-amber-400 transition-colors duration-200 hover:cursor-pointer"
          >
            Outdoor Sneakers
          </p>
        </li>
        <li className="mb-2">
          <p
            href="#"
            className="text-black hover:text-amber-400 transition-colors duration-200 hover:cursor-pointer"
          >
            Basketball Sneakers
          </p>
        </li>
      </ul>
    </div>
  );
}
