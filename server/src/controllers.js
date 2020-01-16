const { getUserTxsInMonth, addTransaction, getGoal } = require('./models.js');

module.exports.getUserTxnsInMonth = (user, month) => {
  return getUserTxsInMonth(user, month);
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
