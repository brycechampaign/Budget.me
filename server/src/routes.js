const router = require('express').Router();
const path = require('path');
const {
  getUserTxnsInMonth,
  addTransaction,
  getGoal,
  createBudget,
  getUser
} = require('./controllers.js');

router.get('/transactions/:user/:month', (req, res) => {
  const { user, month } = req.params;
  getUserTxnsInMonth(user, Number(month))
    .then(txns => res.send(txns))
    .catch(() => res.sendStatus(404));
});

router.post('/transactions/:user', (req, res) => {
  const { user } = req.params;
  const { category, amount, recipient, notes, date } = req.body;

  addTransaction(user, category, amount, recipient, notes, new Date(date))
    .then(() => res.sendStatus(201))
    .catch(() => res.sendStatus(500));
});

router.get('/goals/:user/:month', (req, res) => {
  const { user, month } = req.params;
  getGoal(user, Number(month))
    .then(goal => res.send(JSON.stringify(goal)))
    .catch(() => res.send(404));
});

router.post('/budgets', (req, res) => {
  const { user, month, goal } = req.body;
  createBudget(user, month, goal)
    .then(() => res.sendStatus(201))
    .catch(() => res.sendStatus(500));
});

router.get('/users/:user', (req, res) => {
  console.log(req.params.user);
  getUser(req.params.user).then(results => res.send(results));
});

module.exports = router;
