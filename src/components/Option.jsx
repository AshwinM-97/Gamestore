import React, { useContext } from "react";
import Form from "react-bootstrap/Form";
import { Data } from "../store/Context";

const Option = () => {
  const { toggle, genre, setText } = useContext(Data);
  const light = `border border-danger focus-ring focus-ring-danger`;
  const dark = `border border-info focus-ring focus-ring-info`;
  return (
    <>
      <div className="option col-10 col-lg-4 mx-auto my-5">
        <Form.Select
          data-bs-theme={`${toggle ? `light` : `dark`}`}
          className={`${toggle ? light : dark}`}
          onChange={(e) => setText(e.target.value)}
        >
          {genre.map((data, index) => (
            <option key={index}>{data}</option>
          ))}
        </Form.Select>
      </div>
    </>
  );
};

export default Option;
