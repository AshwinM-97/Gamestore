import React, { useContext } from "react";
import { BsJoystick } from "react-icons/bs";
import { FaToggleOn } from "react-icons/fa";
import { FaToggleOff } from "react-icons/fa6";
import { HiShoppingBag } from "react-icons/hi2";
import { Data } from "../store/Context";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const { count, toggle, setToggle } = useContext(Data);
  const navigate = useNavigate();

  return (
    <>
      <div
        className={`header d-flex align-items-center justify-content-between`}
      >
        <div className="left mx-3 mx-lg-5 d-flex align-items-center gap-3">
          <BsJoystick fontSize={30} />
          <h1 className="fs-4" onClick={() => navigate("/")}>
            GameStore
          </h1>
        </div>
        <div className="right d-flex align-items-center gap-3 mx-5">
          {toggle ? (
            <FaToggleOn
              fontSize={30}
              className="mx-3"
              onClick={() => {
                if (toggle == false) {
                  setToggle(true);
                } else if (toggle == true) {
                  setToggle(false);
                }
              }}
            />
          ) : (
            <FaToggleOff
              fontSize={30}
              className="mx-3"
              onClick={() => {
                if (toggle == true) {
                  setToggle(false);
                } else if (toggle == false) {
                  setToggle(true);
                }
              }}
            />
          )}
          <div className="cart d-flex align-items-center gap-2">
            <HiShoppingBag fontSize={30} onClick={() => navigate("/cart")} />
            {count != 0 ? <span>{count}</span> : ""}
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
