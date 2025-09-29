
// creating Home page logic
const home = async (req, res) =>{ // Whenever we use async function we have to find the errors so it is best to use try catch block (note: There is also package in express to handle the error)

    try{
        res.status(200).send("Welcome to the Home page");
    }catch(error){
        res.status(500).send("Internal Server Error");
    }

};

const register = async(req, res) => {
    try{
        console.log(req.body); // to see the data coming from the client side
        res.status(200).json( {message: req.body} ); // sending the data back to the client side in json format
    }
    catch(error){
        res.status(500).json("Internal Server Error");
    }
}

module.exports = { home, register };