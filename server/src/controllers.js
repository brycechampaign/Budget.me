const { getUserTxsInMonth, addTransaction } = require('./models.js');

module.exports.getUserTxnsInMonth = user => {
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
