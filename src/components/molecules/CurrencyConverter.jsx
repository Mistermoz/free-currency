import React, { useContext, useState } from "react";
import { GlobalContext } from '../../context/GlobalState';
import { Select } from "../ui";
import "./CurrencyConverter.scss";

const CurrencyConverter = () => {
    const availableCurrencies = ["USD", "CAD", "EUR"];
    const [currentCurrency, setCurrentCurrency] = useState("USD");
    const [currencyToConvert, setCurrencyToConvert] = useState("CAD");
    const [amount, setAmount] = useState(0);

    const {
        currencies,
        loadCurrencies,
        setLoading,
        loading,
        error
      } = useContext(GlobalContext);
    
      const handleCurrencyBase = (e) => {
        setCurrentCurrency(e.target.value);
      };
    
      const handleCurrencyToConvert = (e) => {
        setCurrencyToConvert(e.target.value);
      };
    
      const handleInputChange = (e) => {
        setAmount(e.target.value);
      };
    
      const getResult = () => {
        if (Object.entries(error).length > 0) {
          console.error(error.message);
          return false;
        }

        const currencyTotalConvertion = currencies[currencyToConvert];
        const total = currencyTotalConvertion * amount;
    
        return <span>{total > 0 && <b className="currencyConverter-total">{currencyToConvert} ~ {Math.round(total)}</b> }</span>
      };
    
      const handleConvertion = () => {
        setLoading(true);
        loadCurrencies(currentCurrency, currencyToConvert);
      };

      return (
        <div className="currencyConverter">
            <h2 className="currencyConverter-title"> Currency Base: </h2>
            <div className="currencyConverter-selectors">
              <Select
                  className="currencyConverter-select"
                  onChange={(e) => handleCurrencyBase(e)}
                  options={availableCurrencies}
              />
              <h2 className="currencyConverter-title"> Curreny to Convert: </h2>
              <Select
                  className="currencyConverter-select"
                  onChange={(e) => handleCurrencyToConvert(e)}
                  defaultValue={currencyToConvert}
                  options={availableCurrencies}
              />
            </div>
            <input className="currencyConverter-input" type="number" onChange={(e) => handleInputChange(e)} placeholder="Amount"/>
    
            <button
                className="currencyConverter-button"
                onClick={() => handleConvertion()}
                disabled={amount <= 0 || loading}
            >
                Convert
                </button>
            <p className="currencyConverter-result">Convertion {currentCurrency} to {currencyToConvert} {!loading && getResult() }</p>
        </div>
      );
};

export default CurrencyConverter;