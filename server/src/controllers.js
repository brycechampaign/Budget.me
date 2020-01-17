const {
  getUserTxsInMonth,
  addTransaction,
  getGoal,
  createBudget
} = require('./models.js');

module.exports.getUserTxnsInMonth = async (user, month) => {
  let transactions = await getUserTxsInMonth(user, month);

  transactions.sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);

    return dateB - dateA;
  });

  return transactions;
};

module.exports.addTransaction = (
  user,
  category,
  amount,
  recipient,
  notes,
  date
) => {
  return addTransaction(user, category, amount, recipient, notes, date);
};

module.exports.getGoal = (user, month) => {
  return getGoal(user, month);
};

module.exports.createBudget = (user, month, goal) => {
  return createBudget(user, month, goal);
};
