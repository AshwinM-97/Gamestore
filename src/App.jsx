import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Context from "./store/Context";
import Cart from "./pages/Cart";
import CheckOut from "./pages/CheckOut";

function App() {
  return (
    <>
      <Context>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/cart" element={<Cart />}></Route>
            <Route path="/check" element={<CheckOut />}></Route>
          </Routes>
        </BrowserRouter>
      </Context>
    </>
  );
}

export default App;
