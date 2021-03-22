const express = require('express');
const userRouter = express.Router();

const jwt = require('express-jwt');
const jwks = require('jwks-rsa');

const UsersList = require("../models/User");
const ConvoList = require('../models/Conversation');
const messageController = require('../controllers/messageController');


userRouter.route('/')
  // Get all users
  .get((req, res, next) => {
    UsersList.find({}, (err, list) => {
      if (err) { 
        next(err) 
      }
      res.send(list);
    })
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
userRouter.get('/:name', (req, res) => {
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

userRouter.route('/conversation')
  // Get a single user by id
  .get((req, res, next) => {
    ConvoList.find({}, (err, convo) => {
      if (err) { 
        console.log("Can't get convos");
        next(err) 
      }
      res.send(ConvolverNode);
    })
  });

const jwtCheck = jwt({
  secret: jwks.expressJwtSecret({
      cache: true,
      rateLimit: true,
      jwksRequestsPerMinute: 5,
      jwksUri: 'https://dev-chq8gp3f.us.auth0.com/.well-known/jwks.json'
  }),
  audience: 'http://rainier-api',
  issuer: 'https://dev-chq8gp3f.us.auth0.com/',
  algorithms: ['RS256']
});
userRouter.use(jwtCheck);
  
userRouter.route('/')
  .post((req, res, next) => {
    const { permissions } = req.user;
    console.log('Convo permissions: ', permissions);
    if (permissions.includes('createProducts')) {
      next();
    } else {
      res.sendStatus(403);
    }
  }, messageController.sendMessage);

module.exports = userRouter;