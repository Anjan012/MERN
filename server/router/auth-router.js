
const express = require('express');
const router = express.Router();

// router.get("/", (req, res)=>{
//     res.status(200).send("hello from the server side using router");
// });

router.route("/").get((req, res)=>{
    res.status(200).send("hello from the auth router");
});

router.route("/register").get((req, res)=>{
    res.status(200).send("hello from the register route");
})

// note: Whenever you create a new route file you need to export it and import it in the server.js file
module.exports = router;