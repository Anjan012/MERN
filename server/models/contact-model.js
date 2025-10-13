const {Schema, model} = require("mongoose"); // Destructuring

const contactSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type:String,
        required:true,
    },
    message: {
        type: String,
        required: true
    }
});

// Creating model
const Contact = new model('Contact', contactSchema);

module.exports = Contact;
