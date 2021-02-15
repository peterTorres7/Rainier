const express = require('express');
const transRouter = express.Router();
const { transactionsList } = require("../data/transactions");
​
transRouter.route('/')
  // Get all transactions
  .get((req, res) => {
    res.json(transactionsList);
  });
​
transRouter.route('/:tid')
  // Get a single transaction by id
  .get((req, res) => {
    const resultID = transactionsList.filter((item) => {
      return item.tid === req.params.tid;
    });
    if (resultID.length === 1){
      res.send(resultID);
    } else {
      res.status(404).send('Sorry, this transaction does not exist');
    } 
  })
  //Ceartes new transaction
  .post((req, res)=>{
    const resultAdd = transactionsList.filter((item) => {
      return item.tid === req.params.tid;
    });
    if (resultAdd.length === 1){
      res.status(404).send('Sorry, this transaction is already exist');
    } else {
      res.status(200).json({success: true, msg: 'Success! Added transaction: '+ req.params.tid });
    } 
  })
  //update transactions
  .put((req, res) => {
    const resultUpdate = transactionsList.filter((item) => {
      return item.tid === req.params.tid;
    });
    if (resultUpdate.length === 1){
      res.status(200).json({success: true, msg: 'Success! Updated transaction: ' + req.params.tid});
    } else{
      res.status(404).send('Sorry, this transaction does not exist');
    } 
  })
  //delete transactions
  .delete((req, res) => {
    const resultDelete = transactionsList.filter((item) => {
      return item.tid === req.params.tid;
    });
    if (resultDelete.length === 1){
      res.status(200).json({success: true, msg: 'Success! Deleted transaction: '+ req.params.tid});
    } else {
      res.status(404).send('Sorry, this transaction does not exist');
    } 
  });
​
module.exports = transRouter;