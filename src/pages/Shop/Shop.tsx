import { useState } from "react";
import ProductCard from "../../components/ProductCard/ShopProductCard";
import ProductFilter from "../../components/ProductFilter";
import useProducts from "../../hooks/useProducts";
import { MultiValue } from "react-select";
import {
  Container,
  ContentWrapper,
  ProductWrapper,
  Title,
} from "./Shop.styles";

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
        <Title>All Products</Title>
        <div>
          <h4>Filters</h4>
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
