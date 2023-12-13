import React, { useEffect, useContext } from "react";
import { GlobalContext } from '../../context/GlobalState';

const Home = () => {
  const { 
    currencies,
    loadCurrencies,
    setLoading
  } = useContext(GlobalContext);
  useEffect(() => {
    document.title = "Home";
    setLoading(true);
    loadCurrencies();
  }, []);

  return (
    <section className="home">
      <p> Currencies: </p>
      { Object.keys(currencies).map((currency, index) => {
        return <span key={index}>{`Currency: ${currency} ${currencies[currency]}`}</span>
      })}
    </section>
  );
};

export default Home;