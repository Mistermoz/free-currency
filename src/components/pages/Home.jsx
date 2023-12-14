import React, { useEffect } from "react";
import CurrencyConverter from "../molecules/CurrencyConverter";
import "./Home.scss";

const Home = () => {
  useEffect(() => {
    document.title = "Home";
  }, []);

  return (
    <section className="home">
      <h1 className="home-title">Currency Converter</h1>
      <CurrencyConverter />
    </section>
  );
};

export default Home;