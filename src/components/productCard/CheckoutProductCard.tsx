import { cartItem } from "../../types/cart";
import {
  Container,
  Content,
  Description,
  Image,
  ImageWrapper,
  Price,
  Title,
} from "./ProductCard.styles";

export default function ProductCard({ cartItem }: { cartItem: cartItem }) {
  return (
    <Container style={{ cursor: "default" }}>
      <ImageWrapper>
        <Image
          src={cartItem.product.imageURL}
          alt={`${cartItem.product.title} picture`}
        />
      </ImageWrapper>

      <Content>
        <Title>{cartItem.product.title}</Title>
        <Description>{cartItem.product.description}</Description>
        <Price>${cartItem.product.price}</Price>
      </Content>
    </Container>
  );
}
