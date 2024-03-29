const dateFns = require('date-fns');

const Product = require("../models/Product");

exports.createProduct = async (req, res, next) => {
  const date = req.body.date;
  const time = req.body.time;
  const timeZone = req.body.timeZone;
  const dateTime = date + " " + time + " " + timeZone;
  const productDate = dateFns.parse(
    dateTime,
    "yyyy-MM-dd hh:mm aa XX",
    new Date()
  );

  const product = {
    name:  req.body.name,
    qty: req.body.qty,
    price: req.body.price,
    user: req.body.user,
    date: date,
  };

  Product.create(product)
    .then((newProd) => {
      res.send({ productId: newProd._id });
    })
    .catch((err) => {
      console.log('THIS ERROR: ', err);
      next(err);
    });
};
