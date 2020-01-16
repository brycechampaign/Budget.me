const { Tx, Month, Budget } = require('../db/index');

module.exports.createBudget = (user, goal, ...transaction) => {
  categories = [
    { name: 'coffee', limit: 20 },
    { name: 'Fun times', limit: 10 }
  ];

  const month = new Month({
    goal,
    num: new Date().getMonth()
  });

  const budget = new Budget({
    user,
    months: [month],
    categories
  });

  budget.save();
};

module.exports.getUserTxsInMonth = async (user, month) => {
  const budget = await Budget.findOne({ user });

  for (let i = 0; i < budget.months.length; i++) {
    const currMonth = budget.months[i];
    if (currMonth.num === month) return currMonth.transactions;
  }

  throw new Error('No transactions found for given month');
};

module.exports.addTransaction = async (
  user,
  category,
  amount,
  recipient,
  notes,
  date
) => {
  const budget = await Budget.findOne({ user });
  const month = date.getMonth();
  date = date.toLocaleString('en-US');

  for (let i = 0; i < budget.months.length; i++) {
    const currMonth = budget.months[i];
    if (currMonth.num === month) {
      budget.months[i].transactions.push(
        new Tx({ category, amount, recipient, notes, date })
      );

      budget.save(err => {
        if (err !== null) throw new Error(err);
      });

      return;
    }
  }
};

module.exports.getGoal = async (user, month) => {
  const budget = await Budget.findOne({ user });

  for (let i = 0; i < budget.months.length; i++) {
    const currMonth = budget.months[i];
    if (currMonth.num === month) {
      return currMonth.goal;
    }
  }
};
