var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/budgets', { useNewUrlParser: true });

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('database connected');
});

const txSchema = new mongoose.Schema({
  date: Date,
  category: String,
  amount: Number,
  recipient: String,
  notes: String
});

const monthSchema = new mongoose.Schema({
  goal: Number,
  transactions: [txSchema]
});

const budgetSchema = new mongoose.Schema({
  user: String,
  months: [monthSchema]
});

module.exports = {
  Tx: mongoose.model('Tx', txSchema),
  Month: mongoose.model('Month', monthSchema),
  Budget: mongoose.model('Budget', budgetSchema)
};
