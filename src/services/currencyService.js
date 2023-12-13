import http from "./free-currency";

const getCurrencies = (base="USD", currencies="EUR,CAD") => {
  return http.latest({
    base_currency: base,
    currencies: currencies
});
};

export default {
  getCurrencies
};