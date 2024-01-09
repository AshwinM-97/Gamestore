import React, { useContext } from "react";
import { Data } from "../store/Context";
import { games } from "../store/GamesData";
import Card from "./Card";

const Games = () => {
  const { text } = useContext(Data);
  const all = games.map((data) => <Card data={data} key={data.id} />);
  const filter = games.filter((data) => data.genre == text);
  const filtered = filter.map((data) => <Card data={data} key={data.id} />);
  return (
    <>
      <div className="games cursor ">
        <h1 className="fs-3 pb-5 text-center">{text}</h1>
        <div className="row mx-auto">{text == "All" ? all : filtered}</div>
      </div>
    </>
  );
};

export default Games;
