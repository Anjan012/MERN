const mongoose = require('mongoose');

// create a schema
const userSchema = new mongoose.Schema({

    username: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true,
        unique: true // no two user can have the same email
    },

    phone: {
        type: String,
        required: true,
        unique: true // no two user can have the same phone number
    },

    password: {
        type: String,
        required: true
    }, 

    isAdmin: {
        type: Boolean,
        default: false // by default every user is not an admin
    }

});


// define the model or the collection name 
const User = new mongoose.model("User", userSchema); // first argument is the collection name second is the schema name

module.exports = User;