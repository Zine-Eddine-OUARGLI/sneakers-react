export default function ProductInfo({ product }) {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center hover:shadow-xl hover:border-blue-600 hover:border transition-all duration-100">
      <img
        src={product.thumbnail}
        alt="Product 1"
        className="w-full h-48 object-cover rounded-lg mb-4"
      />
      <h2 className="text-xl text-center font-semibold mb-2">
        {product.title}
      </h2>
      <p className="text-gray-600 mb-4">{product.price}</p>
      <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200">
        Add to Cart
      </button>
    </div>
  );
}
