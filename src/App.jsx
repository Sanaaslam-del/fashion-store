import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Home from "./Pages/Home";
import Cart from "./Pages/cart";
// import Shop from "./Pages/Shop";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
function App() {
    const [cart, setCart] = useState([]);

  return (
    <>
    <Navbar cart={cart}/>
      <Routes>
    <Route path="/" element={<Home setCart={setCart} />} />
        {/* <Route path="/" element={<Home />} /> */}
        {/* <Route path="/shop" element={<Shop />} /> */}
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