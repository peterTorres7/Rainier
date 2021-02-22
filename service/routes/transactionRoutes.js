const express = require('express');
const transRouter = express.Router();
const TransactionsList = require('../models/Transaction.js');

transRouter.route('/')
  // Get all transactions
  .get((req, res, next) => {
    TransactionsList.find({}, (err, list) => {
      if (err) { 
        next(err) 
      }
      res.send(list);
    })
  });


transRouter.route('/:transTitle')
  // Get a single transaction by transTitle
  .get((req, res, next) => {
    TransactionsList.findById(req.params.transTitle, (err, transaction) => {
        if (err) {
          next(err);
        } else if (transaction) {
          res.send(transaction);
        } else {
          res.status(404);
          res.send(`Sorry, transaction title ${req.params.transTitle} does not exist.`);
        }
      });
    })
  //Creates new transaction
  .post((req, res, next) => {
    TransactionsList.create(req.body, (err, newTransaction) => {
      if (err) { 
        next(err); 
      } else if (newTransaction) {
          res.status(200);
          res.send(newTransaction);
      } else {
          res.status(404);
          res.send(`Sorry, transaction title ${req.params.transTitle} already exists.`);
      }
    });
  })
  //updates transaction
  .put((req, res, next) => {
      TransactionsList.findByIdAndUpdate(req.params.id, req.body, (err, transaction) => {
        if (err) {
          next(err);
        } else if (transaction) {
          TransactionsList.findById(req.params.id, (updateErr, updatedTransaction) => {
            if (err) {
              next(updateErr)
            }
            res.send(updatedTransaction);
            res.json({success: true, msg: 'Success! Updated transaction: '+ req.params.transTitle});
          })
        } else {
          res.status(404);
          res.send(`Sorry, user id ${req.params.id} does not exist.`);
        }
      });  
    })

  //Deletes transaction
  .delete((req, res, next) => {
    TransactionsList.findByIdAndDelete(req.params.id, (err, transaction) => {
      if (err) {
        next(err);
      } else if (transaction) {
        res.sendStatus(200);
        res.json({success: true, msg: 'Success! Deleted transaction: '+ req.params.transTitle});
      } else {
        res.status(404);
        res.send(`Sorry, transaction title ${req.params.transTitle} does not exist.`);
        }
      });
    });
  
  module.exports = transRouter;