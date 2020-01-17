const { getUserTxsInMonth, addTransaction, getGoal } = require('./models.js');

module.exports.getUserTxnsInMonth = async (user, month) => {
  let transactions = await getUserTxsInMonth(user, month);

  transactions.sort((a, b) => {
    const dateA = new Date(a.date).getDate();
    const dateB = new Date(b.date).getDate();

    if (dateA > dateB) {
      return -1;
    }
    if (dateB > dateA) {
      return 1;
    }

    return 0;
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
