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

  function handleButtonClick(e: React.MouseEvent) {
    e.stopPropagation();
  }

  return (
    <Container onClick={redirectToProductPage}>
      <ImageWrapper>
        <Image src={product.imageURL} alt={`${product.title} picture`} />
      </ImageWrapper>

      <Content>
        <Title>{product.title}</Title>
        <Description>{product.description}</Description>
        <Price>${product.price}</Price>
        <ButtonWrapper>
          <Button
            onClick={(event) => {
              handleButtonClick(event);
              addItem({
                title: product.title,
                description: product.description,
                price: product.price,
                imageURL: product.imageURL,
                id: product.id,
                category: product.category,
              });
            }}
          >
            Add to cart
          </Button>
          <Button $primary onClick={handleButtonClick}>
            Buy now
          </Button>
        </ButtonWrapper>
      </Content>
    </Container>
  );
}
