import styled from "styled-components";
import ProductCard from "../components/productCard/ShopProductCard";
import { Suspense, use } from "react";
import { Product } from "../types/products";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: var(--background);
  display: flex;
  flex-direction: column;
  padding: 50px;
`;

const ProductWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: fit-content;
`;

const CategoryTitle = styled.h2`
  font-size: 1.2rem;
`;

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
