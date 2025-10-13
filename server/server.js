// root file for server

require('dotenv').config(); // to use the .env file we need to require it and call the config method
// if you want to work in express you need to get express
const express = require('express'); // i want to use express and the power of express is store in the variable express
const app = express(); // calling express function with empty arguments and storing the result in app variable ( with this app varibale you can do many thing create server, create routes middleware etc)
const authRoute = require('./router/auth-router');
const contactRoute = require('./router/contact-router');
const connectdb = require('./utils/db');
const errorMidlleware = require('./middlewares/error-middleware');

app.use(express.json()); // means now you can use json data in your application

app.use("/api/auth", authRoute); // first argument is the route second is the router variable
app.use("/api/form", contactRoute)

// app.get("/", (req, res)=>{
//     res.status(200).send("hello from the server side");
// }); // first argument is route (default home page ) second is callback function

app.use(errorMidlleware); // if error comes no connection at all

// to get the response from the server we need to make the server listen 
const PORT = 5000; // port number


connectdb().then(() => { // if everything is fine then only start the server
    app.listen(PORT, ()=>{
    console.log(`server is running on port ${PORT}`);
}); // first argument is port number second is callback function
}); //since we have use await in the function it returns a promise so we need to use then method





