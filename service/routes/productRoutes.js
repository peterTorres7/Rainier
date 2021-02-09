const express = require('express');
const productRouter = express.Router();
const { productsList } = require("../data/products");

productRouter.route('/')
  // Get all products
  .get((req, res) => {
    res.json(productsList);
  });

productRouter.route('/:pid')
  // Get a single product by pid
  .get((req, res) => {
    const resultpid = productsList.filter((item) => {
      return item.pid === req.params.pid;
    });
    if (resultpid.length === 1){
      res.send(resultpid);
    } else {
      res.status(404).send('Sorry, this product does not exist');
    } 
  })
  //Ceartes new product
  .post((req, res)=>{
    const resultAdd = productsList.filter((item) => {
      return item.pid === req.params.pid;
    });
    if (resultAdd.length === 1){
      res.status(404).send('Sorry, this product is already exist');
    } else {
      res.status(200).json({success: true, msg: 'Success! Added product: '+ req.params.pid });
    } 
  })
  //update product
  .put((req, res) => {
    const resultUpdate = productsList.filter((item) => {
      return item.pid === req.params.pid;
    });
    if (resultUpdate.length === 1){
      res.status(200).json({success: true, msg: 'Success! Updated product: ' + req.params.pid });
    } else{
      res.status(404).send('Sorry, this product does not exist');
    } 
  })
  //delete product
  .delete((req, res) => {
    const resultDelete = productsList.filter((item) => {
      return item.pid === req.params.pid;
    });
    if (resultDelete.length === 1){
      res.status(200).json({success: true, msg: 'Success! Deleted product: ' + req.params.pid});
    } else {
      res.status(404).send('Sorry, this product does not exist');
    } 
  });

module.exports = productRouter;