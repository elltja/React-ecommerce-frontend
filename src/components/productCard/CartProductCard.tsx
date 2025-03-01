import { useCartStore } from "../../store/cartStore";
import { cartItem } from "../../types/cart";
import {
  ButtonWrapper,
  Container,
  Content,
  Counter,
  Description,
  Image,
  ImageWrapper,
  CounterBtn,
  Price,
  Title,
} from "./ProductCard.styles";

export default function ProductCard({ cartItem }: { cartItem: cartItem }) {
  const { addProduct, removeProduct } = useCartStore();

  return (
    <Container>
      <ImageWrapper>
        <Image
          src={cartItem.product.imageURL}
          alt={`${cartItem.product.title} picture`}
        />
      </ImageWrapper>

      <Content>
        <Title>{cartItem.product.title}</Title>
        <Description>{cartItem.product.description}</Description>
        <Price>{`$${cartItem.product.price}`}</Price>
        <ButtonWrapper>
          <Counter>
            <CounterBtn onClick={() => removeProduct(cartItem.product.id)}>
              -
            </CounterBtn>
            <p>{cartItem.quantity}</p>
            <CounterBtn
              onClick={() =>
                addProduct({
                  title: cartItem.product.title,
                  description: cartItem.product.description,
                  price: cartItem.product.price,
                  imageURL: cartItem.product.imageURL,
                  id: cartItem.product.id,
                })
              }
            >
              +
            </CounterBtn>
          </Counter>
        </ButtonWrapper>
      </Content>
    </Container>
  );
}
