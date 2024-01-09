import React, { createContext, useState } from "react";

export const Data = createContext();

const Context = ({ children }) => {
  const [count, setCount] = useState(0);
  const [toggle, setToggle] = useState(false);
  const [text, setText] = useState("All");
  const [item, setItem] = useState([]);
  const [genre, setGenre] = useState([
    "All",
    "Action",
    "Adventure",
    "Racing",
    "RPG",
    "Strategy",
    "Simulation",
    "Sports",
    "Open World",
  ]);
  return (
    <Data.Provider
      value={{
        count,
        setCount,
        toggle,
        setToggle,
        genre,
        text,
        setText,
        item,
        setItem,
      }}
    >
      {children}
    </Data.Provider>
  );
};

export default Context;
