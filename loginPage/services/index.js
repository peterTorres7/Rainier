const express = require("express");

const app = express();
const port = 4000;
app.use(express.json());


//routes files
const productRouter = require('./routes/productRoutes');
<<<<<<< HEAD
const userRouter = require('./routes/userRoutes');
const transRouter = require('./routes/transRoutes');
=======
>>>>>>> origin/week4


//mount routers
app.use('/api/v1/products', productRouter);
<<<<<<< HEAD
app.use('/api/v1/users', userRouter);
app.use('/api/v1/transactions', transRouter);
=======
>>>>>>> origin/week4

//main route
app.get("/", (req, res) => {
  res.send('<h1>Hello, start Express!</h1>');
});



<<<<<<< HEAD


=======
>>>>>>> origin/week4
app.listen(port, () => {
  console.log(`Assignment Week4 - listening at http://localhost:${port}`);
});