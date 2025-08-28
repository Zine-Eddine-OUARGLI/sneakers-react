import { FaAngleRight } from "react-icons/fa6";

export default function SideBar({
  updateCategories,
  updateBrands,
  products,
  loading,
}) {
  const brandList = products.reduce((acc, product) => {
    if (!acc.includes(product.brand)) {
      acc.push(product.brand);
    }
    return acc;
  }, []);
  return (
    <div className="w-4/16 p-5 ml-7">
      <h1 className="text-2xl font-medium my-5 border-b-2 border-gray-300 text-black">
        Product Categories
      </h1>
      <ul className="space-y-2.5 text-gray-700">
        <li
          className="flex items-center justify-between hover:text-blue-600 transition-colors duration-200 hover:cursor-pointer"
          onClick={() => {
            updateCategories("mens-shoes");
          }}
        >
          <p>Men's shoes</p>
          <button>
            <FaAngleRight />
          </button>
        </li>
        <li
          className="flex items-center justify-between hover:text-blue-600 transition-colors duration-200 hover:cursor-pointer"
          onClick={() => {
            updateCategories("womens-shoes");
          }}
        >
          <p>Women's shoes</p>
          <button>
            <FaAngleRight />
          </button>
        </li>
        <li
          className="flex items-center justify-between hover:text-blue-600 transition-colors duration-200 hover:cursor-pointer"
          onClick={() => {
            updateCategories("All");
          }}
        >
          <p>All</p>
          <button>
            <FaAngleRight />
          </button>
        </li>
      </ul>
      <h1 className="text-2xl font-medium my-5 border-b-2 border-gray-300 text-black">
        Brands
      </h1>
      <ul className="space-y-2.5 text-gray-700">
        {loading ? (
          <p className="text-center text-gray-600">Loading...</p>
        ) : (
          brandList.map((brand) => (
            <li className="flex items-center gap-3" key={brand}>
              <input type="checkbox" onChange={() => updateBrands(brand)} />
              <p>{brand}</p>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}
