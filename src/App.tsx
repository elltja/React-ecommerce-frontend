import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import Navbar from "./components/layouts/Navbar";
import Cart from "./pages/Cart";
import Product from "./pages/Product";

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product/:id" element={<Product />} />
      </Routes>
    </>
  );
}
