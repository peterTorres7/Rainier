const dateFns = require('date-fns');

const User = require("../models/User");

exports.createUser = async (req, res, next) => {
  const date = req.body.date;
  const time = req.body.time;
  const timeZone = req.body.timeZone;
  const dateTime = date + " " + time + " " + timeZone;
  const profiletDate = dateFns.parse(
    dateTime,
    "yyyy-MM-dd hh:mm aa XX",
    new Date()
  );


  const user = {
    fName: req.body.fname,      
    lName: req.body.lname,
    userName: req.body.userName, 
    dob: date,
    email: req.body.email,
    auth0Id: req.body.auth0Id
  };

  User.create(user)
    .then((newUser) => {
      res.send({ userId: newUser._id });
    })
    .catch((err) => {
      console.log('THIS ERROR: ', err);
      next(err);
    });
    };
