import ProductCard from "../../components/ProductCard/ShopProductCard";
import { Product } from "../../types/products";
import { CategoryTitle, Container, ProductWrapper } from "./Home.styles";
import useProducts from "../../hooks/useProducts";

export default function Home() {
  return (
    <Container>
      <CategoryTitle>Popular products</CategoryTitle>

      <ProductWrapper>
        <Products />
      </ProductWrapper>
    </Container>
  );
}

function Products() {
  const { products, loading, error } = useProducts();

  if (loading) {
    return <p>Loading...</p>; // TODO: add loading design
  }

  if (error) {
    return <p>Error</p>; // TODO: add error design
  }

  return (
    <>
      {products.map((product: Product, index: number) => (
        <ProductCard product={product} key={index} />
      ))}
    </>
  );
}
