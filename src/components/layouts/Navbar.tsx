import styled from "styled-components";
import { NavLink } from "react-router";
import { useCartStore } from "../../store/cartStore";
import assets from "../../assets/assets";

const Container = styled.header`
  width: 100vw;
  height: 80px;
  outline: 1px solid var(--border);
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const Nav = styled.nav`
  display: flex;
  gap: 1rem;
`;

const Logo = styled.img`
  height: 50px;
  cursor: pointer;
`;

const Link = styled(NavLink)`
  text-decoration: none;
`;

const IconWrapper = styled.div`
  display: flex;
  gap: 10px;
  cursor: pointer;
`;

const Icon = styled.img`
  height: 25px;
`;

const Cart = styled(NavLink)`
  position: relative;
`;

const CartCounter = styled.span`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: #000000;
  height: 20px;
  width: 20px;
  color: #fff;
  top: -7px;
  right: -7px;
`;

export default function Navbar() {
  const quantity = useCartStore((state) => state.quantity);

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
        {/* <Icon src={assets.user} /> */}
      </IconWrapper>
    </Container>
  );
}
