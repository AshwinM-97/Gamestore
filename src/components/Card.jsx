import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Data } from "../store/Context";
import { BsCurrencyRupee } from "react-icons/bs";
import Counter from "../components/Counter";

const Card = ({ data }) => {
  const [show, setShow] = useState(false);
  const { toggle, setCount, count, item, setItem } = useContext(Data);
  const [qty, setQty] = useState(1);
  const navigate = useNavigate();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <div className="gamecard col-11 col-lg-3 my-3 mx-auto d-flex align-items-center justify-content-center game">
        <img
          src={data.img}
          alt=""
          width={`100%`}
          className="object-fit-contain gameImg"
          onClick={handleShow}
        />
      </div>
      <Modal show={show} onHide={handleClose} centered backdrop="static">
        <Modal.Body
          className={`d-flex flex-column ${
            toggle ? `bg2` : `bg1 border border-danger `
          }`}
        >
          <div className="img mx-auto">
            <img
              src={data.img}
              alt=""
              className="object-fit-contain gameImg mx-auto"
            />
          </div>
          <div className="content my-3 text-center">
            <h1 className="fs-5">{data.title}</h1>
            <h2 className="fs-5">{data.genre}</h2>
            <h3 className="fs-5">
              <BsCurrencyRupee fontSize={20} />
              {data.price.toLocaleString()}
            </h3>
          </div>
          <Counter qty={qty} setQty={setQty} />
          <div className="extra d-flex align-items-center justify-content-center gap-3 my-3">
            <Button variant="danger" onClick={handleClose}>
              Close
            </Button>
            <Button
              variant="success"
              onClick={() => {
                setCount(count + 1);
                setItem([
                  ...item,
                  {
                    id: `${data.id}`,
                    title: `${data.title}`,
                    price: `${data.price}`,
                    img: `${data.img}`,
                    qty: `${qty}`,
                  },
                ]);
                handleClose();
                navigate("/cart");
                setQty(1);
              }}
            >
              Add to cart
            </Button>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Card;
