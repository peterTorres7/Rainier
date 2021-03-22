const dateFns = require('date-fns');

const Message = require("../models/Conversation");

exports.sendMessage = async (req, res, next) => {
  const date = req.body.date;
  const time = req.body.time;
  const timeZone = req.body.timeZone;
  const dateTime = date + " " + time + " " + timeZone;
  const messageDate = dateFns.parse(
    dateTime,
    "yyyy-MM-dd hh:mm aa XX",
    new Date()
  );

  const message = {
    sender:  req.body.sender,
    text: req.body.text,
    isRead: req.body.isRead,
  };

  Message.create(message)
    .then((newMessage) => {
      res.send({ messageId: newMessage._id });
    })
    .catch((err) => {
      console.log('Error in MessageController', err);
      next(err);
    });
};
