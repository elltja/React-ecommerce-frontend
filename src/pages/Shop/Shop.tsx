import ProductCard from "../../components/ProductCard/ShopProductCard";
import ProductFilter from "../../components/ProductFilter";
import useProducts from "../../hooks/useProducts";

export default function Shop() {
  const { products } = useProducts();
  return (
    <div>
      <h3>Filters</h3>
      <ProductFilter />
      {products.map((product, index) => {
        return <ProductCard product={product} key={index} />;
      })}
    </div>
  );
}
