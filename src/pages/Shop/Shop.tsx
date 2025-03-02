import ProductCard from "../../components/productCard/ShopProductCard";
import useProducts from "../../hooks/useProducts";

export default function Shop() {
  const { products } = useProducts();
  return (
    <div>
      {products.map((product, index) => {
        return <ProductCard product={product} key={index} />;
      })}
    </div>
  );
}
