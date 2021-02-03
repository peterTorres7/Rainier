const express = require("express");

const app = express();
const port = 4000;
app.use(express.json());


//routes files
const productRouter = require('./routes/productRoutes');


//mount routers
app.use('/api/v1/products', productRouter);

//main route
app.get("/", (req, res) => {
  res.send('<h1>Hello, start Express!</h1>');
});



app.listen(port, () => {
  console.log(`Assignment Week4 - listening at http://localhost:${port}`);
});