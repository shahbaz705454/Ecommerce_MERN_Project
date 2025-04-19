const express = require('express');

const router =  express.Router();

const {userSignUpController} = require("../controller/userSignUp");
const { userLoginController } = require('../controller/userSignIn');

router.post("/signup",userSignUpController);
router.post("/login",userLoginController);

module.exports = router;