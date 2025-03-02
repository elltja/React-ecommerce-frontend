import assets from "../../assets/assets";
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
  TrashIcon,
} from "./ProductCard.styles";

export default function ProductCard({ cartItem }: { cartItem: cartItem }) {
  const { addItem, removeItem, clearItem } = useCartStore();

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
            <CounterBtn onClick={() => removeItem(cartItem.product.id)}>
              -
            </CounterBtn>
            <p>{cartItem.quantity}</p>
            <CounterBtn
              onClick={() =>
                addItem({
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
          <TrashIcon
            src={assets.trash}
            alt="Delete icon"
            onClick={() => clearItem(cartItem.product.id)}
          />
        </ButtonWrapper>
      </Content>
    </Container>
  );
}
