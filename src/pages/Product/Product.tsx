import { useParams } from "react-router";
import { type Product } from "../../types/products";
import { useCartStore } from "../../store/cartStore";
import useProducts from "../../hooks/useProducts";
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

export default function Product() {
  const params = useParams();
  const { products } = useProducts(); // TODO: Add loading and error states
  const product = products.find((p) => p.id === params.id); // TODO: Add functionality to fetch a product by id
  const addItem = useCartStore((state) => state.addItem);

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
