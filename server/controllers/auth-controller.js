
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
        res.status(200).send("Welcome to the Register page");
    }
    catch(error){
        res.status(500).send("Internal Server Error");
    }
}

module.exports = { home, register };