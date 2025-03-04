import { useCartStore } from "../../store/cartStore";
import CartProductCard from "../../components/ProductCard/CartProductCard";
import {
  Container,
  ContentWrapper,
  ProductWrapper,
  StyledButton,
  Table,
  TableRow,
  TableTag,
  TableValue,
} from "./Cart.styles";
import { useNavigate } from "react-router";

export default function Cart() {
  const { cart, totalPrice } = useCartStore();
  const navigate = useNavigate();
  return (
    <Container>
      <ContentWrapper>
        <ProductWrapper style={{ width: 500 }}>
          {cart.length > 0 &&
            cart.map((item, index) => {
              return <CartProductCard cartItem={item} key={index} />;
            })}
        </ProductWrapper>
        <div>
          <h2>Order overview</h2>
          <Table>
            <TableRow>
              <TableTag>Price: </TableTag>
              <TableValue>${totalPrice}</TableValue>
            </TableRow>
            <TableRow>
              <TableTag>Delivery: </TableTag>
              <TableValue>$11.95</TableValue>
            </TableRow>

            <TableRow>
              <TableTag>Total: </TableTag>
              <TableValue>${totalPrice + 11.95}</TableValue>
            </TableRow>
          </Table>

          <StyledButton $primary onClick={() => navigate("/checkout")}>
            Checkout
          </StyledButton>
        </div>
      </ContentWrapper>
    </Container>
  );
}
