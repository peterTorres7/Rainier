const mongoose = require('mongoose');

const EMAIL_VALIDATOR = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

const userSchema = mongoose.Schema({
    fName: {
        type: String,
        required: true
    },
    lName: {
        type: String,
        required: true
    },
    userName: {
        type: String,
        required: true
    },
    dob: Date,
    email: {
        type: String,
        required: true,
        match: [EMAIL_VALIDATOR, 'Must be a valid email'],
    },
    userRole: {
        type: String,
        enum: ['admin', 'user'],
        required: true,
    },
    dateCreated: { 
        type: Date, 
        default: Date.now 
    },
    active: {
        type: Boolean, 
        defualt: true
    },
    auth0Id: { 
        type: String, 
        required: true, 
        unique: true 
    } 
});

const User = mongoose.model('User', userSchema);

module.exports = User;