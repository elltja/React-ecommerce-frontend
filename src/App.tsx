import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import Navbar from "./components/layouts/Navbar";
import Cart from "./pages/Cart";

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </>
  );
}
