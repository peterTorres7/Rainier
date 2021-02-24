const dateFns = require("date-fns");

const Product = require("../models/Product");

exports.createProduct = (req, res, next) => {
  const date = req.body.date;
  const time = req.body.time;
  const timeZone = req.body.timeZone;
  const dateTime = date + " " + time + " " + timeZone;
  const productDate = dateFns.parse(
    dateTime,
    "yyyy-MM-dd hh:mm aa XX",
    new Date()
  );

  if (!dateFns.isFuture(productDate)) {
    res.sendStatus(400);
    res.send({ error: "Product posted date must be in the future" });
  }

  const product = {
    name:  req.body.name,
    qty: req.body.qty,
    price: req.body.price,
    user: req.body.user,
    date: productDate,
  };

  Product.create(product)
    .then((product) => {
      res.send({ productId: product._id });
    })
    .catch((err) => {
      console.log(err);
      next(err);
    });
};
