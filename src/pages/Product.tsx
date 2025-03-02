import { useParams } from "react-router";

import { useEffect, useState } from "react";
import { type Product } from "../types/products";
import Button from "../components/ui/Button";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: start;
  justify-content: center;
  width: 100vw;
  gap: 75px;
  padding: 5vw 2vw;
`;

const Image = styled.img`
  background-color: #ebebeb;
`;

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  max-width: 40vw;
`;

const Title = styled.h1`
  margin: 0;
  width: fit-content;
`;

const Description = styled.p`
  margin: 0;
  line-height: 160%;
  font-weight: 500;
  color: #555555;
`;

const Price = styled.h2`
  margin: 0;
`;

const Divider = styled.hr`
  background-color: #ebebeb;
  width: 100%;
  border: none;
  height: 1px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  gap: 15px;
  width: fit-content;
  margin: 25px 0;
`;

const Table = styled.div`
  width: 200px;
`;

const TableRow = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const TableValue = styled.p`
  width: 50px;
  color: #555555;
  margin: 7.5px;
`;

const TableTag = styled.p`
  font-weight: 600;
  margin: 7.5px;
`;

async function testFetch(id: string) {
  const products = await fetch("/products.json").then((res) => res.json());
  return products.find((product: Product) => product.id === id);
}

export default function Product() {
  const [product, setProduct] = useState<Product | null>(null);
  const params = useParams();
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
      <Image src={product?.imageURL} alt="" />
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
          <Button style={{ padding: 15, width: 250 }}>Add to cart</Button>
          <Button style={{ padding: 15, width: 250 }} $primary>
            Buy now
          </Button>
        </ButtonWrapper>
      </InfoWrapper>
    </Container>
  );
}
