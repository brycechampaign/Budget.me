import axios from 'axios';

export const getTransactionsForMonth = (user, month) => {
  return axios
    .get(`/transactions/${user}/${month}`)
    .then(results => results.data);
};

export const addTransaction = (user, tx) => {
  const { amount, category, recipient, date, notes } = tx;

  return axios.post(`/transactions/${user}`, {
    amount,
    category,
    recipient,
    date,
    notes
  });
};

export const getMonthlyBudget = (user, month) => {
  return axios.get(`/goals/${user}/${month}`).then(results => results.data);
};

export const createBudget = (user, month, goal) => {
  return axios.post('/budgets', {
    user,
    month,
    goal
  });
};
