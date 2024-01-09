import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { BsFillCartXFill } from "react-icons/bs";
import { Data } from "../store/Context";
import { BsCurrencyRupee } from "react-icons/bs";
import Button from "react-bootstrap/Button";
import Details from "./Details";

const CartItem = () => {
  const { toggle, item, count, setItem, setCount } = useContext(Data);
  const navigate = useNavigate();
  return (
    <>
      <div
        className={`cartItem d-flex flex-column  align-items-center justify-content-center ${
          toggle ? `bg2` : `bg1`
        }`}
      >
        {item.length == 0 ? (
          <div className="d-flex flex-column align-items-center">
            <BsFillCartXFill fontSize={100} />
            <h1 className="fs-4 pt-5 pb-5">cart is empty</h1>
            <Button
              variant="warning"
              onClick={() => {
                navigate("/");
              }}
            >
              Continue Shopping
            </Button>
          </div>
        ) : (
          <div>
            <h1 className="fs-4 pb-5 pt-5 text-center">
              Items in your cart : {count}
            </h1>
            <div>
              {item.map((data) => {
                return <Details data={data} key={data.id} />;
              })}
            </div>
            <hr />

            <h1 className="fs-4 text-center">
              Total : <BsCurrencyRupee fontSize={25} />
              {item
                .reduce((a, item) => a + item.qty * item.price, 0)
                .toLocaleString()}
            </h1>

            <hr />
            <div className="d-flex align-items-center justify-content-center gap-3 mt-5">
              <Button
                className="btn-sm "
                variant="warning"
                onClick={() => {
                  navigate("/");
                }}
              >
                Continue Shopping
              </Button>
              <Button
                variant="success"
                className="btn-sm"
                onClick={() => navigate("/check")}
              >
                Check out
              </Button>
              <Button
                variant="danger"
                className="btn-sm"
                onClick={() => {
                  setItem("");
                  setCount(0);
                }}
              >
                Clear cart
              </Button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default CartItem;
