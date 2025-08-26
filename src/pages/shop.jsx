import Navbar from "../components/navbar";
import Footer from "../components/footer";
import SideBar from "../components/shop/sideBar";
import SearchBar from "../components/shop/searchBar";
import ProductInfo from "../components/shop/productInfo";
import { useState, useEffect } from "react";

export default function Shop() {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState("All");
  const [brands, setBrands] = useState([]);
  const [textSearch, setTextSearch] = useState("");
  const [sortBy, setSortBy] = useState("default");
  const [itemsToShow, setItemsToShow] = useState(3);

  function updateBrands(brand) {
    setBrands((prevBrands) => {
      if (prevBrands.includes(brand)) {
        return prevBrands.filter((b) => b !== brand);
      } else {
        return [...prevBrands, brand];
      }
    });
  }

  async function fetchProducts() {
    try {
      setLoading(true);
      const response = await fetch(
        `https://dummyjson.com/products/category/mens-shoes`
      );
      const result = await response.json();

      const response2 = await fetch(
        `https://dummyjson.com/products/category/womens-shoes`
      );
      const result2 = await response2.json();
      switch (categories) {
        case "mens-shoes":
          setProducts(result.products);
          setBrands([]);
          break;
        case "womens-shoes":
          setProducts(result2.products);
          setBrands([]);
          break;
        case "All":
          setProducts([...result.products, ...result2.products]);
          setBrands([]);
          break;
      }
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, [categories]);

  let filteredProducts = products.filter((product) => {
    const matchesBrand = brands.length === 0 || brands.includes(product.brand);
    const matchesSearch =
      textSearch === "" ||
      product.title.toLowerCase().includes(textSearch.toLowerCase()) ||
      product.description.toLowerCase().includes(textSearch.toLowerCase());
    return matchesBrand && matchesSearch;
  });

  if (sortBy === "priceLowToHigh") {
    filteredProducts = filteredProducts.sort((a, b) => a.price - b.price);
  } else if (sortBy === "priceHighToLow") {
    filteredProducts = filteredProducts.sort((a, b) => b.price - a.price);
  } else if (sortBy === "name-asc") {
    filteredProducts = filteredProducts.sort((a, b) =>
      a.title.localeCompare(b.title)
    );
  } else if (sortBy === "name-desc") {
    filteredProducts = filteredProducts.sort((a, b) =>
      b.title.localeCompare(a.title)
    );
  }

  const displayedProducts = filteredProducts.slice(0, Number(itemsToShow));

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="bg-[url('/imgs/contact-bg.jpg')] bg-cover bg-center h-100 flex items-center justify-center">
        <h1 className="text-white font-bold text-4xl">Home / Shop</h1>
      </div>
      <div className="flex justify-between mt-5">
        <SideBar
          updateCategories={setCategories}
          updateBrands={updateBrands}
          products={products}
          loading={loading}
        />
        <div className="w-12/16 p-5 mr-7 flex flex-col space-y-5">
          <SearchBar
            setTextSearch={setTextSearch}
            setSortBy={setSortBy}
            setItemsToShow={setItemsToShow}
            products={displayedProducts}
            itemsToShow={itemsToShow}
            sortBy={sortBy}
            textSearch={textSearch}
            totalCount={filteredProducts.length}
          />
          <div className="grid grid-cols-3 gap-5 m-5">
            {loading ? (
              <p className="text-center text-gray-600">Loading...</p>
            ) : (
              displayedProducts.map((product) => (
                <ProductInfo key={product.id} product={product} />
              ))
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
