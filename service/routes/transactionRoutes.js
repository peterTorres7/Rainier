const express = require('express');
const transRouter = express.Router();
const { transactionsList } = require('../models/Transaction.js');

transRouter.route('/')
  // Get all transactions
  .get((req, res) => {
    res.json(transactionsList);
  });

transRouter.route('/:transTitle')
  // Get a single transaction by id
  .get((req, res) => {
    const resultTiltle = transactionsList.filter((item) => {
      return item.transTitle === req.params.transTitle;
    });
    if (resultTiltle.length === 1){
      res.send(resultTiltle);
    } else {
      res.status(404).send('Sorry, this transaction does not exist');
    } 
  })
  //Ceartes new transaction
  .post((req, res)=>{
    const resultAdd = transactionsList.filter((item) => {
      return item.transTitle === req.params.transTitle;
    });
    if (resultAdd.length === 1){
      res.status(404).send('Sorry, this transaction is already exist');
    } else {
      res.status(200).json({success: true, msg: 'Success! Added transaction: '+ req.params.transTitle });
    } 
  })
  //update transactions
  .put((req, res) => {
    const resultUpdate = transactionsList.filter((item) => {
      return item.transTitle === req.params.transTitle;
    });
    if (resultUpdate.length === 1){
      res.status(200).json({success: true, msg: 'Success! Updated transaction: ' + req.params.transTitle});
    } else{
      res.status(404).send('Sorry, this transaction does not exist');
    } 
  })
  //delete transactions
  .delete((req, res) => {
    const resultDelete = transactionsList.filter((item) => {
      return item.transTitle === req.params.transTitle;
    });
    if (resultDelete.length === 1){
      res.status(200).json({success: true, msg: 'Success! Deleted transaction: '+ req.params.transTitle});
    } else {
      res.status(404).send('Sorry, this transaction does not exist');
    } 
  });
  
  module.exports = transRouter;