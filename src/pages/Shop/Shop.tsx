import { useState } from "react";
import ProductCard from "../../components/ProductCard/ShopProductCard";
import ProductFilter from "../../components/ProductFilter";
import useProducts from "../../hooks/useProducts";
import { MultiValue } from "react-select";
import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: var(--background);
  display: flex;
  flex-direction: column;
  padding: 50px;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
`;

const ProductWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: fit-content;
  gap: 20px;
`;

export default function Shop() {
  const [filter, setFilter] = useState<MultiValue<{
    label: string;
    value: string;
  }> | null>(null);

  const { products } = useProducts();

  const filteredProducts = products.filter((product) => {
    if (!filter || filter.length === 0) {
      return true;
    }
    return filter.some((f) => product.category === f.value);
  });

  return (
    <Container>
      <ContentWrapper>
        <div>
          <h3>Filters</h3>
          <ProductFilter handleChange={(newValue) => setFilter(newValue)} />
        </div>
        <ProductWrapper>
          {filteredProducts.map((product, index) => {
            return <ProductCard product={product} key={index} />;
          })}
        </ProductWrapper>
      </ContentWrapper>
    </Container>
  );
}
