import { useCartStore } from "../../store/cartStore";
import CartProductCard from "../../components/productCard/CartProductCard";
import {
  Container,
  ContentWrapper,
  StyledButton,
  Table,
  TableRow,
  TableTag,
  TableValue,
} from "./Cart.styles";

export default function Cart() {
  const { cart, totalPrice } = useCartStore();

  return (
    <Container>
      <ContentWrapper>
        <div style={{ width: 500 }}>
          {cart.length > 0 &&
            cart.map((item, index) => {
              return <CartProductCard cartItem={item} key={index} />;
            })}
        </div>
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

          <StyledButton $primary>Checkout</StyledButton>
        </div>
      </ContentWrapper>
    </Container>
  );
}
