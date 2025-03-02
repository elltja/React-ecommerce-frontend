import { useEffect, useState } from "react";
import { Product } from "../types/products";

export default function useProducts() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    async function fetchProducts() {
      setLoading(true);
      try {
        const res = await fetch("/products.json", {
          // TODO: Build a backend and delete mack data
          method: "GET",
        });
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        const data = (await res.json()) as Product[];
        setProducts(data);
      } catch (err: unknown) {
        if (err instanceof Error) {
          setError(err);
        } else {
          setError(new Error(String(err)));
        }
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, []);

  return { products, loading, error };
}
