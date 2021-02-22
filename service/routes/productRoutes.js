// const express = require('express');
// const productRouter = express.Router();

// const { productController } = require("../controllers/productsController");

// const ProductList = require("../models/Product");


// productRouter.route('/')
//   // Get all products
//   .get((req, res, next) => {
//     ProductsList.find({}, (err, list) => {
//       if (err) { 
//         next(err) 
//       }
//       res.send(list);
//     })
//   })

//   .post((req, res, next) => {
//     ProductList.create(req.body, (err, newProduct) => {
//       if (err) { next(err)}
//       res.status(200);
//       res.send(newProduct);
//     })
//   })
  
//   .delete((req, res, next) => {
//     const productId = req.query.name;
//     if (!productId) {
//       res.status(400);
//       res.send({ error: "Cannot delete product"});
//     }
//     Product.findOneAndDelete({ name: name}, (err, Product) => {
//       if (err) {next(err) }
//       else if (Product) {
//         res.status(200);
//         res.send(Product);
//       } else {
//         res.status(404);
//         res.send({ error: "Could not find Product"});
//       }
//     })
//   })



// productRouter.route('/:name')
//   // Get a single product by pid
//   .get((req, res) => {
//     const resultname = productController.filter((item) => {
//       return item.name === req.params.name;
//     });
//     if (resultname.length === 1){
//       res.send(resultname);
//     } else {
//       res.status(404).send('Sorry, this product does not exist');
//     } 
//   })
//   //Ceartes new product
//   .post((req, res)=>{
//     const resultAdd = productController.filter((item) => {
//       return item.name === req.params.name;
//     });
//     if (resultAdd.length === 1){
//       res.status(404).send('Sorry, this product is already exist');
//     } else {
//       res.status(200).json({success: true, msg: 'Success! Added product: '+ req.params.name });
//     } 
//   })
//   //update product
//   .put((req, res) => {
//     const resultUpdate = productController.filter((item) => {
//       return item.name === req.params.name;
//     });
//     if (resultUpdate.length === 1){
//       res.status(200).json({success: true, msg: 'Success! Updated product: ' + req.params.name });
//     } else{
//       res.status(404).send('Sorry, this product does not exist');
//     } 
//   })
//   //delete product
//   .delete((req, res) => {
//     const resultDelete = productController.filter((item) => {
//       return item.name === req.params.name;
//     });
//     if (resultDelete.length === 1){
//       res.status(200).json({success: true, msg: 'Success! Deleted product: ' + req.params.name});
//     } else {
//       res.status(404).send('Sorry, this product does not exist');
//     } 
//   });

// module.exports = productRouter;

const express = require('express');
const ProductRouter = express.Router();
const ProductList = require('../models/Product');
ProductRouter.route('/')
  // Get all transactions
  .get((req, res, next) => {
    ProductList.find({}, (err, list) => {
      if (err) {
        next(err)
      }
      res.send(list);
    })
  });
