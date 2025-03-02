import styled from "styled-components";
import { useCartStore } from "../store/cartStore";
import CartProductCard from "../components/productCard/CartProductCard";
import Button from "../components/ui/Button";

const Container = styled.div`
  display: flex;
  width: 100vw;
  justify-content: center;
`;

const ContentWrapper = styled.div`
  display: flex;
  gap: 50px;
`;

const Table = styled.div``;

const TableRow = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const TableValue = styled.p`
  width: 50px;
`;

const TableTag = styled.p`
  font-weight: 600;
`;

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

          <Button style={{ padding: 20, width: 250 }} $primary>
            Checkout
          </Button>
        </div>
      </ContentWrapper>
    </Container>
  );
}
