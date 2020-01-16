import axios from 'axios';

export const getTransactionsForMonth = (user, month) => {
  return axios
    .get(`/transactions/${user}/${month}`)
    .then(results => results.data);
};
