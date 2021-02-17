const express = require('express');
const userRouter = express.Router();
const UsersList = require("../models/User");

userRouter.route('/')
  // Get all users
  .get((req, res, next) => {
    UsersList.find({}, (err, list) => {
      if (err) { 
        next(err) 
      }
      res.send(list);
    })
  })
  .post((req, res, next) => {
    User.create(req.body, (err, newUser) => {
      if (err) { next(err) }
      res.status(200);
      res.send(newUser);
    })
  })
  .delete((req, res, next) => {
    const email = req.query.email;
    if (!email) {
      res.status(400);
      res.send({ error: "must provide an email" });
    }
    User.findOneAndDelete({ email: email }, (err, user) => {
      if (err) { next(err) }
      else if (user) {
        res.status(200);
        res.send(user);
      } else {
        res.status(404);
        res.send({ error: `Couldn't find user with email ${email}` });
      }
    })
  })

/* userRouter.route('/:userNamed')
  // Get a single user by id
  .get((req, res) => {
    const resultID = usersList.filter((item) => {
      return item.userName === req.params.userName;
    });
    if (resultID.length === 1){
      res.send(resultID);
    } else {
      res.status(404).send('Sorry, this user does not exist');
    } 
  })
  //Ceartes new user
  .post((req, res)=>{
    const resultAdd = usersList.filter((item) => {
      return item.userName === req.params.userName;
    });
    if (resultAdd.length === 1){
      res.status(404).send('Sorry, this user is already exist');
    } else {
      res.status(200).json({success: true, msg: 'Success! Added user: '+ req.params.userName });
    } 
  })
  //update user
  .put((req, res) => {
    const resultUpdate = usersList.filter((item) => {
      return item.userName === req.params.userName;
    });
    if (resultUpdate.length === 1){
      res.status(200).json({success: true, msg: 'Success! Updated user: ' + req.params.userName});
    } else{
      res.status(404).send('Sorry, this user does not exist');
    } 
  })
  //delete user
  .delete((req, res) => {
    const resultDelete = usersList.filter((item) => {
      return item.userName === req.params.userName;
    });
    if (resultDelete.length === 1){
      res.status(200).json({success: true, msg: 'Success! Deleted user: '+ req.params.userName});
    } else {
      res.status(404).send('Sorry, this user does not exist');
    } 
  });

// Get a single user by name
userRouter.get('/:fname', (req, res) => {
  const resultFName = usersList.filter((itemID) => {
    return itemID.fName === req.params.fName;
  });
  if (resultFName.length === 1){
    res.send(resultFName);
  } else{
    res.status(404).send('Sorry, this user does not exist');
  } 
}) ;*/


module.exports = userRouter;