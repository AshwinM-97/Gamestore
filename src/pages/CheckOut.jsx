import React, { useContext } from "react";
import { FaCircleCheck } from "react-icons/fa6";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import { Data } from "../store/Context";

const CheckOut = () => {
  const { setCount, setItem, setText } = useContext(Data);
  const navigate = useNavigate();
  return (
    <>
      <div className="check d-flex flex-column wrapper align-items-center justify-content-center ">
        <FaCircleCheck fontSize={100} color="green" />
        <h1 className="fs-3 pt-5">Order Placed Successfully.</h1>
        <Button
          variant="dark"
          className="mt-5"
          onClick={() => {
            setCount(0);
            setItem("");
            setText("All");
            navigate("/");
          }}
        >
          Return
        </Button>
      </div>
    </>
  );
};

export default CheckOut;
