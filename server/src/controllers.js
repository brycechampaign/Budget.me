const { getUserTxsInMonth, addTransaction } = require('./models.js');

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
