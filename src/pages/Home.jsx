import React, { useContext } from "react";
import Header from "../components/Header";
import Option from "../components/Option";
import { Data } from "../store/Context";
import Games from "../components/Games";
import Footer from "../components/Footer";

const Home = () => {
  const { toggle } = useContext(Data);
  return (
    <>
      <div className={`wrapper ${toggle ? `bg2` : `bg1`}`}>
        <Header />
        <Option />
        <Games />
        <Footer />
      </div>
    </>
  );
};

export default Home;
