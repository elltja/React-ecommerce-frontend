import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { type Product } from "../../types/products";

import {
  ButtonWrapper,
  Container,
  Description,
  Divider,
  InfoWrapper,
  Price,
  Table,
  TableRow,
  TableTag,
  TableValue,
  Title,
  Image,
  StyledButton,
} from "./Product.styles";
import { useCartStore } from "../../store/cartStore";

async function testFetch(id: string) {
  const products = await fetch("/products.json").then((res) => res.json());
  return products.find((product: Product) => product.id === id);
}

export default function Product() {
  const [product, setProduct] = useState<Product | null>(null);
  const params = useParams();
  const addItem = useCartStore((state) => state.addItem);
  useEffect(() => {
    async function fetchData() {
      if (!params.id) return;
      const p = await testFetch(params.id);
      setProduct(p);
    }
    fetchData();
  }, [params]);
  return (
    <Container>
      <Image src={product?.imageURL} alt={`${product?.title} image`} />
      <InfoWrapper>
        <Title>{product?.title}</Title>
        <Description>{product?.description}</Description>
        <Price>${product?.price}</Price>
        <Divider />
        <Table>
          <TableRow>
            <TableTag>Category: </TableTag>
            <TableValue>Laptop</TableValue>
          </TableRow>
          <TableRow>
            <TableTag>Brand: </TableTag>
            <TableValue>Apple</TableValue>
          </TableRow>
        </Table>
        <ButtonWrapper>
          <StyledButton
            onClick={() => {
              if (!product) return;
              addItem(product);
            }}
            style={{ padding: 15, width: 250 }}
          >
            Add to cart
          </StyledButton>
          <StyledButton $primary>Buy now</StyledButton>
        </ButtonWrapper>
      </InfoWrapper>
    </Container>
  );
}
