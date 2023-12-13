const appReducer = (state, action) => {
  switch (action.type) {
    case "LOAD_CURRENCIES":
      return {
        ...state,
        currencies: action.payload,
      };
    case "UPDATE_CURRENCY_LOADING":
      return {
        ...state,
        loading: action.payload
      };
  
    case "UPDATE_CURRENCY_ERROR":
      return {
        ...state,
        error: action.payload
      };
  default:
      return state;
  }
};

export default appReducer;