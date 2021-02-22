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
    UsersList.create(req.body, (err, newUser) => {
      if (err) {
         next(err) 
      }
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
    UsersList.findOneAndDelete({ email: email }, (err, user) => {
      if (err) 
      { next(err) 
      } else if (user) {
        res.status(200);
        res.send(user);
      } else {
        res.status(404);
        res.send({ error: `Couldn't find user with email ${email}` });
      }
    });
  });

userRouter.route('/:id')
  // Get a single user by id
  .get((req, res, next) => {
    UsersList.findById(req.params.id, (err, user) => {
      if (err) {
        next(err);
      } else if (user) {
        res.send(user);
      } else {
        res.status(404);
        res.send(`Sorry, user id ${req.params.id} does not exist.`);
      }
    });
  })

  //Ceartes new user
  .put((req, res, next) => {
    UsersList.findByIdAndUpdate(req.params.id, req.body, (err, user) => {
      if (err) {
        next(err);
      } else if (user) {
        UsersList.findById(req.params.id, (updateErr, updatedUser) => {
          if (err) {
            next(updateErr)
          }
          res.send(updatedUser)
        })
      } else {
        res.status(404);
        res.send(`Sorry, user id ${req.params.id} does not exist.`);

      }
    });  
  })

  //delete user
  .delete((req, res, next) => {
    UsersList.findByIdAndDelete(req.params.id, (err, user) => {
      if (err) {
        next(err);
      } else if (user) {
        res.sendStatus(200);
        res.json({success: true, msg: 'Success! Deleted user: '+ req.params.userName});
      } else {
        res.status(404);
        res.send(`Sorry, user id ${req.params.id} does not exist.`);
      }
    });
  });

// Get a single user by name
userRouter.get('/:fname', (req, res) => {
  UsersList.findOne(req.params.fName, (err, user) => {
    if (err) {
      next(err);
    } else if (user) {
      res.send(user);
    } else {
      res.status(404);
      res.send(`Sorry, user name ${req.params.fName} does not exist.`);
    }
  }); 
});

module.exports = userRouter;