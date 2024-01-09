import React, { useContext, useState } from "react";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";

const Counter = ({ qty, setQty }) => {
  return (
    <>
      <div className="d-flex gap-3 align-items-center justify-content-center cursor ">
        <FaMinus
          fontSize={25}
          onClick={() => {
            if (qty <= 1) {
              setQty(1);
            } else {
              setQty(qty - 1);
            }
          }}
        />
        <p className="fs-4">{qty}</p>
        <FaPlus
          fontSize={25}
          onClick={() => {
            setQty(qty + 1);
          }}
        />
      </div>
    </>
  );
};

export default Counter;
