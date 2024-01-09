import React, { useContext } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { Data } from "../store/Context";
import CartItem from "../components/CartItem";

const Cart = () => {
  const { toggle } = useContext(Data);
  return (
    <>
      <div className={`wrapper ${toggle ? `bg2` : `bg1`}`}>
        <Header />
        <CartItem />
        <Footer />
      </div>
    </>
  );
};

export default Cart;
