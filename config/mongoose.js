const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/rentlo_development', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Error connecting to MongoDB'));

db.once('open', function () {
  console.log('Connected to database:: MongoDB');
});

module.exports = db;
