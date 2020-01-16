const { Tx, Month, Budget } = require('./db/index');

module.exports.createBudget = (user, goal, ...transaction) => {
  categories = [
    { name: 'coffee', limit: 20 },
    { name: 'Fun times', limit: 10 }
  ];

  const month = new Month({
    goal
  });

  const budget = new Budget({
    user,
    months: [month],
    categories
  });

  budget.save();
};
