import React, { useContext } from "react";
import { BsCurrencyRupee } from "react-icons/bs";
import { MdDelete } from "react-icons/md";
import { Data } from "../store/Context";

const Details = ({ data }) => {
  const { item, setItem, count, setCount } = useContext(Data);
  return (
    <div className=" d-lg-flex flex-wrap flex-lg-nowrap  align-items-center gap-5 my-3">
      <img
        src={data.img}
        alt=""
        className="col-10 col-lg-3 mx-auto mx-lg-0 d-block"
      />
      <h1 className="fs-5 col-10 col-lg-2 mx-auto text-center pt-2">
        {data.title}
      </h1>
      <div className="d-flex col-10 col-lg-3 mx-auto align-items-center justify-content-center  gap-2">
        <h2 className="fs-5 ">{data.qty}</h2>
        <span className="fs-5">*</span>
        <h3 className="fs-5 ">
          <BsCurrencyRupee fontSize={20} />
          {data.price.toLocaleString()}
        </h3>
      </div>
      <h4 className="fs-5 col-10 col-lg-2 mx-auto text-center ">
        <BsCurrencyRupee fontSize={20} />
        {(data.price * data.qty).toLocaleString()}
      </h4>
      <MdDelete
        fontSize={25}
        className="delete col-10 col-lg-2 mx-auto d-block"
        onClick={() => {
          const filter = item.filter((item) => item.id != data.id);
          setItem(filter);
          setCount(count - 1);
        }}
      />
    </div>
  );
};

export default Details;
