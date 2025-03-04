import { NavLink } from "react-router";
import { useCartStore } from "../../../store/cartStore";
import assets from "../../../assets/assets";
import {
  Container,
  Icon,
  IconWrapper,
  Logo,
  Nav,
  Cart,
  CartCounter,
  Link,
} from "./Navbar.styles";

export default function Navbar() {
  const quantity = useCartStore((state) => state.totalQuantity);

  return (
    <Container>
      <NavLink to="/">
        <Logo src="/logo.png" />
      </NavLink>
      <Nav>
        <Link to="/">Home</Link>
        <Link to="/shop">Shop</Link>
        <Link to="/scontact">Contact us</Link>
      </Nav>
      <IconWrapper>
        <Cart to="/cart">
          {quantity > 0 && <CartCounter>{quantity}</CartCounter>}
          <Icon src={assets.cart} />
        </Cart>
      </IconWrapper>
    </Container>
  );
}
