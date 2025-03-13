import { useState } from "react";
import ProductCard from "../../components/ProductCard/ShopProductCard";
import ProductFilter from "../../components/ProductFilter";
import useProducts from "../../hooks/useProducts";
import { MultiValue } from "react-select";
import {
  Container,
  ContentWrapper,
  FilterBox,
  FilterLabel,
  FiltersWrapper,
  ProductWrapper,
  Title,
} from "./Shop.styles";
import Input from "../../components/ui/Input";

export default function Shop() {
  const [filter, setFilter] = useState<MultiValue<{
    label: string;
    value: string;
  }> | null>(null);
  const [search, setSearch] = useState("");

  const { products } = useProducts();

  const filteredProducts = products.filter((product) => {
    const searchMatches = search
      ? product.title.toLowerCase().trim().includes(search.trim().toLowerCase())
      : true;
    const filterMatches =
      filter && filter.length > 0
        ? filter.some((f) => product.category === f.value)
        : true;

    return searchMatches && filterMatches;
  });

  return (
    <Container>
      <ContentWrapper>
        <Title>All Products</Title>

        <FiltersWrapper>
          <FilterBox style={{ display: "flex", flexDirection: "column" }}>
            <FilterLabel htmlFor="search-input">Search</FilterLabel>
            <Input
              id="search-input"
              placeholder="Search any product"
              onChange={(e) => setSearch(e.target.value)}
              value={search}
            />
          </FilterBox>
          <FilterBox style={{ display: "flex", flexDirection: "column" }}>
            <FilterLabel>Filters</FilterLabel>
            <ProductFilter handleChange={(newValue) => setFilter(newValue)} />
          </FilterBox>
        </FiltersWrapper>
        <ProductWrapper>
          {filteredProducts.map((product, index) => {
            return <ProductCard product={product} key={index} />;
          })}
        </ProductWrapper>
      </ContentWrapper>
    </Container>
  );
}
