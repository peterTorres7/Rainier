const mongoose = require('mongoose');
require('dotenv').config({ path: '../.env' });

const products = require('./products');
const transactions = require('./transactions');
const users = require('./users');

const Product = require('../models/Product');
const Transaction = require('../models/Transaction');
const User = require('../models/User');

products.productsList.forEach((product) => {
  Product.create(product).catch(err => console.log(err));
});

transactions.transactionsList.forEach((trans) => {
  Transaction.create(trans).catch(err => console.log(err));
});

users.usersList.forEach((user) => {
  User.create(user).catch(err => console.log(err));
});


const user = process.env.MONGO_USER;
const password = process.env.MONGO_PASS;
const mongoDB = `mongodb+srv://${user}:${password}@rainiergroup.n43av.mongodb.net/dbRainier?retryWrites=true&w=majority`;
mongoose
  .connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(
    () => { console.log("Connected successfully") },
    (err) => { console.log(`Connection failed with ${err}`) }
  );

mongoose.connection.on('open', () => {
    console.log('Mongoose connected.');
});
