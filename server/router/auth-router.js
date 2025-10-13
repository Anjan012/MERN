
const express = require('express');
const router = express.Router();
const authcontrollers = require('../controllers/auth-controller');

const {signupSchema, loginSchema} = require('../validators/auth-validator');

// getting the validate middleware 
const validate = require('../middlewares/validate-middleware');



router.route("/").get(authcontrollers.home); // whenever we hit this route it will call the home function from the auth-controller.js file

router.route("/register").post(validate(signupSchema), authcontrollers.register);

router.route("/login").post(validate(loginSchema), authcontrollers.login);

// note: Whenever you create a new route file you need to export it and import it in the server.js file
module.exports = router;