import { useEffect, useState } from "react";

export const useProducts = () => {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [error, setError] = useState("");
  useEffect(() => {
    async function fetchData() {
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
        setProducts([...result.products, ...result2.products]);
      } catch (e) {
        setError(e);
        console.log(e);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);
  return { products, loading, error };
};
