const router = require('express').Router();
const { getUserTxnsInMonth } = require('./controllers.js');

router.get('/transactions/:user/:month', (req, res) => {
  const { user, month } = req.params;
  getUserTxnsInMonth(user, Number(month))
    .then(txns => res.send(txns))
    .catch(err => console.error(err));
});

module.exports = router;
