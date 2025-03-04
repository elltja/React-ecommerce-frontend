import { NavLink } from "react-router";
import styled from "styled-components";

export const Container = styled.header`
  width: 100vw;
  height: 80px;
  outline: 1px solid var(--border);
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const Nav = styled.nav`
  display: flex;
  gap: 1rem;
`;

export const Logo = styled.img`
  height: 50px;
  cursor: pointer;
`;

export const Link = styled(NavLink)`
  text-decoration: none;
`;

export const IconWrapper = styled.div`
  display: flex;
  gap: 10px;
  cursor: pointer;
`;

export const Icon = styled.img`
  height: 25px;
`;

export const Cart = styled(NavLink)`
  position: relative;
`;

export const CartCounter = styled.span`
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
