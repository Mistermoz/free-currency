import http from "./free-currency";

const lastest = () => {
  return http.latest({
    base_currency: 'USD',
    currencies: 'EUR'
});
};

export default {
  lastest
};