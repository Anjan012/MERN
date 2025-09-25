// root file for server

// if you want to work in express you need to get express
const express = require('express'); // i want to use express and the power of express is store in the variable express
const app = express(); // calling express function with empty arguments and storing the result in app variable ( with this app varibale you can do many thing create server, create routes middleware etc)
const router = require('./router/auth-router');

app.use("/api/auth", router); // first argument is the route second is the router variable

// app.get("/", (req, res)=>{
//     res.status(200).send("hello from the server side");
// }); // first argument is route (default home page ) second is callback function

// to get the response from the server we need to make the server listen 
const PORT = 5000; // port number
app.listen(PORT, ()=>{
    console.log(`server is running on port ${PORT}`);
}); // first argument is port number second is callback function


