import ProductInfo from "./productInfo";
export default function ShopList({ loading, displayedProducts }) {
  return (
    <div className="grid grid-cols-3 gap-5 m-5">
      {loading ? (
        <p className="text-center text-gray-600">Loading...</p>
      ) : (
        displayedProducts.map((product) => (
          <ProductInfo key={product.id} product={product} />
        ))
      )}
    </div>
  );
}
