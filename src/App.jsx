import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Home from "./Pages/Home";
import Cart from "./Pages/cart";
import Shop from "./Pages/Shop";
import Collection from "./Pages/Collection";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
function App() {
  const [cart, setCart] = useState([]);

  return (
    <>
      <Navbar cart={cart} />
      <Routes>
        <Route path="/" element={<Home setCart={setCart} />} />
        <Route path="/shop" element={<Shop setCart={setCart} />} />
        <Route path="/women" element={<Collection category="women" setCart={setCart} />} />
        <Route path="/men" element={<Collection category="men" setCart={setCart} />} />
        <Route path="/accessories" element={<Collection category="accessories" setCart={setCart} />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route
          path="/cart"
          element={<Cart cart={cart} setCart={setCart} />}
        />
      </Routes>

      <Footer />
    </>
  );
}

export default App;