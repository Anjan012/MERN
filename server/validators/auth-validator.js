const {z} = require("zod");

// creating an object schema
const signupSchema = z.object({
    username: z.
    string({require_error: "Name is required"})
    .trim()
    .min(3, {message: "Name must be at least 3 characters"})
    .max(255, {message: "Name must not be more than 255 characters"}),

    email: z.
    string({require_error: "Email is required"})
    .trim()
    .email({message: "Invalid email address"})
    .min(3, {message: "Email must be at least 3 characters"})
    .max(255, {message: "Email must not be more than 255 characters"}), 
    
    phone: z.
    string({require_error: "Phone is required"})
    .trim()
    .min(10, {message: "Phone must be at least 10 characters"})
    .max(20, {message: "Phone must not be more than 20 characters"}), 

    password: z.
    string({require_error: "Password is required"})
    .trim()
    .min(7, {message: "Password must be at least 7 characters"})
    .max(1024, {message: "Password cann't be greater than 1024 characters"}), 
    
});

const loginSchema = z.object({

    email: z.
    string({require_error: "Email is required"})
    .trim()
    .email({ message: "Please enter a valid email address" })
    .max(255, {message: "Email must not be more than 255 characters"}), 

    password: z.
    string({require_error: "Password is required"})
    .trim()
    .min(7, {message: "Password must be at least 7 characters"})
    .max(1024, {message: "Password cann't be greater than 1024 characters"}), 

});

const contactSchema = z.object({
    username: z.
    string({ require_error: "Username is required" })
    .trim()
    .min(3, {message: "Name must be atleast 3 character"})
    .max(255, {message: "Name shouldn't exceed 255 character"}),

    email: z.
    string({require_error: "Email is required"})
    .trim()
    .email({message: "Invalid email address"})
    .min(3, {message: "Email must be at least 3 characters"})
    .max(255, {message: "Email must not be more than 255 characters"}), 

    message: z.
    string({message: "message is required"})
    .trim()
    .min(20, {message: "message length must be atleast 20 character"})
    .max(1024, {message: "message shouldn't exceed 1024 character"})
});

module.exports = { signupSchema, loginSchema, contactSchema };