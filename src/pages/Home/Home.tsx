import ProductCard from "../../components/productCard/ShopProductCard";
import { Suspense, use } from "react";
import { Product } from "../../types/products";
import { CategoryTitle, Container, ProductWrapper } from "./Home.styles";

export default function Home() {
  return (
    <Container>
      <CategoryTitle>Popular products</CategoryTitle>

      <ProductWrapper>
        <Suspense fallback={"Loading..."}>
          <Products />
        </Suspense>
      </ProductWrapper>
    </Container>
  );
}

const productsPromise = fetch("/products.json").then((res) => res.json());

function Products() {
  const products = use(productsPromise) as Product[];

  return (
    <>
      {products.map((product: Product, index: number) => (
        <ProductCard product={product} key={index} />
      ))}
    </>
  );
}
