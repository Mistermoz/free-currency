import React, { useEffect, useContext, useState } from "react";
import { GlobalContext } from '../../context/GlobalState';

const Home = () => {
  const availableCurrencies = ["USD", "CAD", "EUR"];
  const [currentCurrency, setCurrentCurrency] = useState("USD");
  const [currencyToConvert, setCurrencyToConvert] = useState("CAD");

  const {
    currencies,
    loadCurrencies,
    setLoading,
    loading
  } = useContext(GlobalContext);

  const handleCurrencyBase = (e) => {
    setCurrentCurrency(e.target.value);
  };

  const handleCurrencyToConvert = (e) => {
    setCurrencyToConvert(e.target.value);
  };

  const getResult = () => {
    const currencyTotalConvertion = currencies[currencyToConvert];
    return <span>{currencyTotalConvertion}</span>
  };

  const handleConvertion = () => {
    setLoading(true);
    loadCurrencies(currentCurrency, currencyToConvert);
  };

  useEffect(() => {
    document.title = "Home";
  }, []);

  return (
    <section className="home">
      <p> Currency Base: </p>
      <select onChange={(e) => handleCurrencyBase(e)}>
        {availableCurrencies.map((currency, index) => {
          return <option value={currency} key={index}>{currency}</option>
        })}
      </select>
      <p> Curreny to Convert: </p>
      <select onChange={(e) => handleCurrencyToConvert(e)} defaultValue={currencyToConvert}>
        {availableCurrencies.map((currency, index) => {
          return <option value={currency} key={index}>{currency}</option>
        })}
      </select>
      <br/>
      <button onClick={() => handleConvertion()}>Convert</button>
      <p>Result: {!loading && getResult() }</p>
    </section>
  );
};

export default Home;