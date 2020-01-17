var mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true });

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
  num: Number,
  goal: Number,
  transactions: [txSchema]
});

const budgetSchema = new mongoose.Schema({
  user: String,
  months: [monthSchema],
  categories: Array
});

module.exports = {
  Tx: mongoose.model('Tx', txSchema),
  Month: mongoose.model('Month', monthSchema),
  Budget: mongoose.model('Budget', budgetSchema)
};
