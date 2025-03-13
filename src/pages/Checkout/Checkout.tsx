import CheckoutForm from "../../components/CheckoutForm/CheckoutForm";
import ProductCard from "../../components/ProductCard/CheckoutProductCard";
import { useCartStore } from "../../store/cartStore";
import { Container } from "./Checkout.styles";

export default function Checkout() {
  const cart = useCartStore((state) => state.cart);
  return (
    <Container>
      <CheckoutForm />
      <div>
        {cart.map((item, index) => {
          return <ProductCard key={index} cartItem={item} />;
        })}
        <h2>Total</h2>
      </div>
    </Container>
  );
}
