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
import { useNavigate } from "react-router";

export default function ProductCard({ product }: { product: Product }) {
  const addItem = useCartStore((state) => state.addItem);
  const navigate = useNavigate();

  function redirectToProductPage() {
    navigate(`/product/${product.id}`);
  }

  return (
    <Container>
      <ImageWrapper onClick={redirectToProductPage}>
        <Image src={product.imageURL} alt={`${product.title} picture`} />
      </ImageWrapper>

      <Content>
        <Title onClick={redirectToProductPage}>{product.title}</Title>
        <Description>{product.description}</Description>
        <Price>{`$${product.price}`}</Price>
        <ButtonWrapper>
          <Button
            onClick={() =>
              addItem({
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
