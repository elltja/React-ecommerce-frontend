import Button from "../ui/Button";
import { useCartStore } from "../../store/cartStore";
import { Product } from "../../types/products";
import {
  ButtonWrapper,
  Container,
  Content,
  Description,
  Image,
  ImageWrapper,
  Price,
  Title,
} from "./ProductCard.styles";

export default function ProductCard({ product }: { product: Product }) {
  const addProduct = useCartStore((state) => state.addProduct);

  return (
    <Container>
      <ImageWrapper>
        <Image src={product.imageURL} alt={`${product.title} picture`} />
      </ImageWrapper>

      <Content>
        <Title>{product.title}</Title>
        <Description>{product.description}</Description>
        <Price>{`$${product.price}`}</Price>
        <ButtonWrapper>
          <Button
            onClick={() =>
              addProduct({
                title: product.title,
                description: product.description,
                price: product.price,
                imageURL: product.imageURL,
                id: product.id,
              })
            }
          >
            Add to cart
          </Button>
          <Button $primary>Buy now</Button>
        </ButtonWrapper>
      </Content>
    </Container>
  );
}
