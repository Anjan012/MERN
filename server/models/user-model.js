const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

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


//? secure the password using bcryptjs
userSchema.pre("save", async function(next){ // pre means before saving the data to the database this function will be called (like middleware)
    const user = this; // this refers to the current document
    if(!user.isModified("password")){ // if the password is not modified means not a new user and not updating the password
        next(); // if the password is not modified then move to the next middleware
    }

    try {

        const saltRound = await bcrypt.genSalt(10); // generate a salt (the higher the number the more secure the password but it will take more time to hash)
        const hash_password = await bcrypt.hash(user.password, saltRound); // first argument is the password second is the salt round
        user.password = hash_password; // replace the plain text password with the hashed password
    }catch(error){
        console.log("Error while hashing the password", error);
        next(error); // if there is an error then move to the next middleware with the error
    }

});


// json web token
userSchema.methods.generateToken = async function() {
    try{
        return jwt.sign({
           // payload
           userId: this._id.toString(),
           email: this.email,
           isAdmin: this.isAdmin
        },
        // pass the signature
        process.env.JWT_SECRET_KEY,

        {
            // this is optional
            expiresIn: "30d"
        }
        );

    }catch(error){
        console.log("Error while generating the token", error);
    }
}


// define the model or the collection name 
const User = new mongoose.model("User", userSchema); // first argument is the collection name second is the schema name

module.exports = User;