
const express = require('express');
const router = express.Router();
const authcontrollers = require('../controllers/auth-controller');



router.route("/").get(authcontrollers.home); // whenever we hit this route it will call the home function from the auth-controller.js file

router.route("/register").post(authcontrollers.register);

router.route("/login").post(authcontrollers.login);

// note: Whenever you create a new route file you need to export it and import it in the server.js file
module.exports = router;