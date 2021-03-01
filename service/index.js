const express = require("express");
const app = express();
const port = 4000;

const mongoose = require('mongoose');
require('dotenv').config({ path: '../.env' });

//const morgan = require('morgan');
const cors = require('cors');

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

// Retain an instance of the connection so that we can log errors
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.on('close', () => { console.log("MongoDB connection closed") });

// Middleware
//app.use(morgan('tiny'));
app.use(cors());
app.use(express.json())


//routes files
const productRouter = require('./routes/productRoutes');
const userRouter = require('./routes/userRoutes');
const transRouter = require('./routes/transactionRoutes');

//mount routers
app.use('/api/v1/products', productRouter);
app.use('/api/v1/users', userRouter);
app.use('/api/v1/transactions', transRouter);

//main route
app.get("/", (req, res) => {
  res.send('<h1>Hello, start Express!</h1>');
});

app.listen(port, () => {
  console.log(`Assignment Week6 - listening at http://localhost:${port}`);
});