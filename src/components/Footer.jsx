import React, { useContext } from "react";
import { Data } from "../store/Context";

const Footer = () => {
  const { toggle } = useContext(Data);
  return (
    <>
      <div
        className={`footer d-flex flex-column align-items-center justify-content-around`}
      >
        <h1 className="fs-4">GameStore</h1>
        <p className="fs-5">&copy; 2023 All Rights Reserved.</p>
      </div>
    </>
  );
};

export default Footer;
