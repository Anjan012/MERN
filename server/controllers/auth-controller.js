const User = require("../models/user-model");
const bcrypt = require("bcryptjs");

// creating Home page logic
const home = async (req, res) => {
  // Whenever we use async function we have to find the errors so it is best to use try catch block (note: There is also package in express to handle the error)

  try {
    res.status(200).send("Welcome to the Home page");
  } catch (error) {
    res.status(500).send("Internal Server Error");
  }
};

const register = async (req, res) => {
  try {
    console.log(req.body); // to see the data coming from the client side

    // 1. get the data from the req.body
    const { username, email, phone, password } = req.body; // destructuring the data coming from the client side

    // 2. check if the user already exists or not (by email)
    const userExist = await User.findOne({ email: email }); // first arg is the field name second is the value (if the key and value are same we can write it once) you need to wait for the response from the database so we use await

    if (userExist) {
      return res.status(400).json("User already exists with this email");
    }

    // 3. if user does not exist then create a new user
    const userCreated = await User.create({
      username,
      email,
      phone,
      password,
    }); // creating a new user in the database

    res
      .status(201)
      .json({
        msg: "Reistration successful",
        token: await userCreated.generateToken(),
        userId: userCreated.id.toString(),
      }); // sending the data back to the client side in json format
  } catch (error) {
    console.log(error);
    res.status(500).json("Internal Server Error");
  }
};

// * ------------------
// User login logic
// * ------------------

const login = async (req, res) =>{

  try {

    const {email, password} = req.body;

    const userExist = await User.findOne({email});

    if(!userExist){
      return res.status(400).json({message: "Invalid Credentials"});
    }

    // compare the password

    // const isPasswordValid = await bcrypt.compare(password, userExist.password);

    const isPasswordValid = await userExist.comparePassword(password);

    if(isPasswordValid){
      res
      .status(200)
      .json({
        msg: "Login successful",
        token: await userExist.generateToken(),
        userId: userExist.id.toString(),
      }); 
    }
    else{
      res.status(401).json({message: "Invalid email or password"});
    }
    
  } catch (error) {
    res.status(500).json("Internal Server Error");

  }
}


module.exports = { home, register, login };
