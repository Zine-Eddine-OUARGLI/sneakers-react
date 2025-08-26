import { CiGrid41 } from "react-icons/ci";
import { IoList } from "react-icons/io5";

export default function SearchBar({
  setTextSearch,
  setSortBy,
  setItemsToShow,
  products,
  itemsToShow,
  sortBy,
  textSearch,
  totalCount,
}) {
  return (
    <div className=" w-full border-2 border-gray-200 rounded-3xl flex items-center justify-between p-3">
      <div className="flex items-center gap-3 ml-5">
        <CiGrid41 className="text-blue-600" size={25} />
        <IoList size={25} />
        <p className="text-gray-500 opacity-90 font-light">
          Showing{" "}
          <span className="text-black opacity-100 font-semibold">
            {products.length}
          </span>{" "}
          out of{" "}
          <span className="text-black opacity-100 font-semibold">
            {totalCount}
          </span>{" "}
          item(s)
        </p>
      </div>
      <div className="flex items-center gap-2 mr-5">
        <input
          type="text"
          name="search"
          id="search"
          value={textSearch}
          onChange={(e) => setTextSearch(e.target.value)}
          placeholder="Search products..."
          className="border-2 border-gray-200 rounded-2xl py-1 px-4 focus:outline-none focus:border-blue-500"
        />
        <p className="text-gray-500 opacity-90 font-light">Sort by:</p>
        <select
          className="border-2 border-gray-200 rounded-lg p-1"
          onChange={(e) => setSortBy(e.target.value)}
          value={sortBy}
        >
          <option value="default">Default</option>
          <option value="priceLowToHigh">Price: Low to High</option>
          <option value="priceHighToLow">Price: High to Low</option>
        </select>
        <p className="text-gray-500 opacity-90 font-light">Show:</p>
        <select
          className="border-2 border-gray-200 rounded-lg p-1"
          onChange={(e) => setItemsToShow(Number(e.target.value))}
          value={itemsToShow}
        >
          <option value={3}>3</option>
          <option value={5}>5</option>
          <option value={10}>10</option>
        </select>
      </div>
    </div>
  );
}
