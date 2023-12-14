import React, { createContext, useReducer } from 'react';
import CurrencyService from '../services/currencyService';

import appReducer from './Reducer';

const initialState = { currencies: {}, loading: false, error: {}};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  function loadCurrencies(base, currenciesToConvert) {
    CurrencyService.getCurrencies(base, currenciesToConvert).then((response) => {
      if (!response.data) {
        throw response;
      }
      
      dispatch({
        type: 'LOAD_CURRENCIES',
        payload: response.data
      });

      setLoading(false);
    })
    .catch((error) => {
      dispatch({
        type: 'UPDATE_CURRENCY_ERROR',
        payload: error
      });

      setLoading(false);
    });
  }

  function setLoading(value) {
    dispatch({
      type: 'UPDATE_CURRENCY_LOADING',
      payload: value
    });
  }

  function setError(value) {
    dispatch({
      type: 'UPDATE_CURRENCY_ERROR',
      payload: value
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        currencies: state.currencies,
        loading: state.loading,
        error: state.error,
        loadCurrencies,
        setLoading,
        setError
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};