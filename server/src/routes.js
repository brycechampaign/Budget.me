const router = require('express').Router();
const {
  getUserTxnsInMonth,
  addTransaction,
  getGoal
} = require('./controllers.js');

router.get('/transactions/:user/:month', (req, res) => {
  const { user, month } = req.params;
  getUserTxnsInMonth(user, Number(month))
    .then(txns => res.send(txns))
    .catch(() => res.sendStatus(404));
});

router.post('/transactions/:user', (req, res) => {
  const { user } = req.params;
  const { category, amount, recipient, notes } = req.body;

  addTransaction(user, category, amount, recipient, notes, (date = new Date()))
    .then(() => res.sendStatus(201))
    .catch(() => res.sendStatus(500));
});

router.get('/goals/:user/:month', (req, res) => {
  const { user, month } = req.params;
  getGoal(user, Number(month))
    .then(goal => res.send(JSON.stringify(goal)))
    .catch(() => res.send(404));
});

module.exports = router;
