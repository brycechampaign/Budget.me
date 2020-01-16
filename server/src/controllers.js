const { getUserTxsInMonth } = require('../models.js');

module.exports.getUserTxnsInMonth = (user, month) => {
  return getUserTxsInMonth(user, month);
};
